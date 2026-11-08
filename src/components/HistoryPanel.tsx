import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { getMonitoringHistory, type HistoryResponse } from "../services/monitoring.service";
import styles from "../styles/monitor.styles";

type Period = "today" | "7d" | "30d" | "custom";
const metrics = [["TEMPERATURE", "Temperature (°C)", "#E78100"], ["HUMIDITY", "Humidity (%)", "#2868FF"], ["AMMONIA", "Ammonia (ppm)", "#64748B"], ["FEED_WEIGHT", "Feed weight", "#16833F"], ["WATER_FLOW", "Water flow", "#16833F"]];
function Trend({ points, color }: { points: { value: number; recorded_at: string }[]; color: string }) {
  const [width, setWidth] = useState(0);
  const sorted = points.filter(p => Number.isFinite(p.value) && Number.isFinite(Date.parse(p.recorded_at))).sort((a,b)=>Date.parse(a.recorded_at)-Date.parse(b.recorded_at));
  const start = sorted.length ? Date.parse(sorted[0].recorded_at) : 0;
  const span = sorted.length ? Math.max(1, Date.parse(sorted[sorted.length-1].recorded_at)-start) : 1;
  const buckets = new Map<number, {total:number; count:number}>();
  sorted.forEach(p=>{const key=Math.min(59,Math.floor((Date.parse(p.recorded_at)-start)/span*59));const b=buckets.get(key)||{total:0,count:0};b.total+=p.value;b.count++;buckets.set(key,b);});
  const values=[...buckets].map(([x,b])=>({x:x/59,y:b.total/b.count}));
  const min=Math.min(...values.map(p=>p.y)),max=Math.max(...values.map(p=>p.y));
  const coords=values.map(p=>({x:5+p.x*Math.max(0,width-14),y:8+(max===min?0.5:(max-p.y)/(max-min))*44}));
  return <View onLayout={e=>setWidth(e.nativeEvent.layout.width)} accessibilityLabel={sorted.length ? `Trend: ${sorted.length} readings, minimum ${min.toFixed(2)}, maximum ${max.toFixed(2)}` : "No readings"} style={{height:72,marginTop:12,overflow:"hidden"}}>
    {!sorted.length && <Text style={styles.messageText}>No readings in this period</Text>}
    {coords.map((p,i)=>{const next=coords[i+1];const length=next?Math.hypot(next.x-p.x,next.y-p.y):0;return <View key={i}>
      {next && <View style={{position:"absolute",left:(p.x+next.x)/2-length/2,top:(p.y+next.y)/2,width:length,height:2,backgroundColor:color,transform:[{rotate:Math.atan2(next.y-p.y,next.x-p.x)+"rad"}]}} />}
      <View style={{position:"absolute",left:p.x-2,top:p.y-1,width:4,height:4,borderRadius:2,backgroundColor:color}} />
    </View>;})}
  </View>;
}
export default function HistoryPanel({houseId,refreshing}:{houseId:string|null;refreshing:boolean}) {
 const [period,setPeriod]=useState<Period>("7d");
 const [data,setData]=useState<HistoryResponse|null>(null);
 const [loading,setLoading]=useState(false),[error,setError]=useState("");
 const [editing,setEditing]=useState(false),[start,setStart]=useState(""),[end,setEnd]=useState("");
 const [range,setRange]=useState({start:"",end:""}),[dateError,setDateError]=useState("");
 const [retry,setRetry]=useState(0);
 useEffect(()=>{if(!houseId)return;let active=true;setLoading(true);setData(null);setError("");getMonitoringHistory(houseId,period,range.start,range.end).then(d=>{if(active)setData(d);}).catch(e=>{if(active)setError(e instanceof Error?e.message:"Unable to load history");}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[houseId,period,range,refreshing,retry]);
 const apply=()=>{const valid=(d:string)=>/^\d{4}-\d{2}-\d{2}$/.test(d)&&Number.isFinite(Date.parse(d))&&new Date(d).toISOString().slice(0,10)===d;if(!valid(start)||!valid(end)||start>end){setDateError("Enter valid dates, with start on or before end.");return;}setDateError("");setRange({start,end});setPeriod("custom");setEditing(false);};
 return <>
  <View style={styles.tabs}>{(["today","7d","30d","custom"] as Period[]).map((p,i)=><TouchableOpacity key={p} accessibilityRole="button" accessibilityState={{selected:period===p}} onPress={()=>p==="custom"?setEditing(true):setPeriod(p)} style={[styles.tab,period===p&&{backgroundColor:"#172F20"}]}><Text style={{fontSize:12,color:period===p?"white":"#475569"}}>{["Today","7 days","30 days","Custom"][i]}</Text></TouchableOpacity>)}</View>
  <View style={[styles.sensorCard,{flexDirection:"row",justifyContent:"space-between",gap:8}]}><Text style={{flex:1,color:"#263A30",fontSize:12}}>{data?new Date(data.start_at).toLocaleDateString()+" – "+new Date(Date.parse(data.end_at)-(period==="custom"?1:0)).toLocaleDateString():"Select a date range"}</Text><TouchableOpacity onPress={()=>setEditing(!editing)}><Text style={styles.normalText}>Change ⌄</Text></TouchableOpacity></View>
  {editing&&<View style={styles.sensorCard}><Text style={styles.sensorTitle}>Custom range (YYYY-MM-DD)</Text><TextInput accessibilityLabel="Start date" placeholder="Start: YYYY-MM-DD" value={start} onChangeText={setStart} style={{padding:12,borderBottomWidth:1,borderColor:"#E3E8DD"}}/><TextInput accessibilityLabel="End date" placeholder="End: YYYY-MM-DD" value={end} onChangeText={setEnd} style={{padding:12,marginBottom:12}}/>{!!dateError&&<Text style={styles.errorText}>{dateError}</Text>}<TouchableOpacity onPress={apply}><Text style={styles.normalText}>Apply dates</Text></TouchableOpacity></View>}
  {loading?<ActivityIndicator color="#176B4D" style={{margin:24}}/>:error?<View style={styles.errorBox}><Text style={styles.errorText}>{error}</Text><TouchableOpacity onPress={()=>setRetry(n=>n+1)}><Text style={styles.normalText}>Try again</Text></TouchableOpacity></View>:!houseId?<Text style={styles.messageText}>Select a poultry house to view history.</Text>:data&&metrics.map(([type,label,color])=>{const summary=data.summary[type];return <View key={type} style={styles.sensorCard}><View style={{flexDirection:"row",justifyContent:"space-between",gap:8}}><Text style={[styles.sensorTitle,{flex:1,fontSize:13}]}>{label}</Text><Text style={{color,fontSize:12}}>{summary?(type==="AMMONIA"?"peak "+summary.maximum:"avg "+summary.average)+" "+summary.unit:"No data"}</Text></View><Trend points={data.readings.filter(r=>r.sensor_type===type)} color={color}/></View>;})}
  <Text style={styles.footerText}>Charts use individual scales and averaged time buckets.</Text>
 </>;
}
