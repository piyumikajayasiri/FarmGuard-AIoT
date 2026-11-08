import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Modal, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useFocusEffect } from "expo-router";
import BottomNav from "../components/BottomNav";
import { alertRequest, type FarmAlert } from "../services/alerts.service";
import s from "../styles/alerts.styles";
export default function AlertsScreen(){
 const [items,setItems]=useState<FarmAlert[]>([]),[status,setStatus]=useState("ACTIVE"),[loading,setLoading]=useState(true),[error,setError]=useState("");
 const [preview,setPreview]=useState<FarmAlert|null>(null);
 const load=useCallback(async()=>{setLoading(true);setError("");try{setItems((await alertRequest<{alerts:FarmAlert[]}>()).alerts);}catch(e){setError(e instanceof Error?e.message:"Unable to load alerts");}finally{setLoading(false);}},[]);
 useFocusEffect(useCallback(()=>{void load();},[load]));
 const open=(a:FarmAlert)=>{setPreview(null);router.push({pathname:"/alert-detail",params:{id:a.id}});};
 return <SafeAreaView style={s.screen}><ScrollView contentContainerStyle={s.content} refreshControl={<RefreshControl refreshing={loading} onRefresh={load}/>}>
 <View style={s.header}><TouchableOpacity accessibilityLabel="Back to dashboard" onPress={()=>router.replace("/dashboard")}><Text style={s.link}>‹ Back</Text></TouchableOpacity><Text style={s.title}>Alerts</Text><View style={[s.badge,{backgroundColor:"#C62828"}]}><Text style={{color:"white",fontWeight:"700"}}>{items.filter(a=>a.status==="ACTIVE").length} active</Text></View></View>
 <View style={s.tabs}>{["ACTIVE","ACKNOWLEDGED","RESOLVED"].map(t=><TouchableOpacity key={t} accessibilityRole="tab" accessibilityState={{selected:status===t}} onPress={()=>setStatus(t)} style={[s.tab,status===t&&s.activeTab]}><Text style={{fontSize:11,color:status===t?"white":"#445569"}}>{t==="ACKNOWLEDGED"?"Acknowledged":t==="ACTIVE"?"Active":"Resolved"} ({items.filter(a=>a.status===t).length})</Text></TouchableOpacity>)}</View>
 {!!error&&<View style={s.card}><Text style={s.error}>{error}</Text><TouchableOpacity onPress={load}><Text style={s.link}>Try again</Text></TouchableOpacity></View>}
 {loading&&!items.length&&<ActivityIndicator color="#187B42"/>}
 {!loading&&!error&&!items.some(a=>a.status===status)&&<View style={s.card}><Text style={s.body}>No {status.toLowerCase()} alerts.</Text></View>}
 {items.filter(a=>a.status===status).map(a=><TouchableOpacity key={a.id} onPress={()=>setPreview(a)} style={[s.card,{borderLeftWidth:5,borderLeftColor:a.severity==="CRITICAL"?"#D12030":"#DF8500"}]}><View style={[s.row,{justifyContent:"space-between",marginBottom:10}]}><Text style={s.badgeText}>● {a.severity} · {a.status}</Text><Text>›</Text></View><Text style={[s.body,{fontWeight:"700",fontSize:16}]}>{a.message_en||a.alert_type}</Text><Text style={[s.subtitle,{marginBottom:0,marginTop:6}]}>{a.house_name||"Unassigned house"} • {a.flock_name||"No flock"} • {new Date(a.created_at).toLocaleString()}</Text></TouchableOpacity>)}
 </ScrollView><BottomNav activeTab="alerts" onTabPress={t=>{if(t==="home")router.replace("/dashboard");if(t==="events")router.push("/events");}}/>
 <Modal transparent visible={!!preview} animationType="fade" onRequestClose={()=>setPreview(null)}><View style={s.overlay}>{preview&&<View style={s.modal}><Text style={s.badgeText}>⚠ {preview.severity} • ANOMALY DETECTED</Text><Text style={[s.title,{flex:0,fontSize:22,marginVertical:18}]}>{preview.message_en||preview.alert_type}</Text><Text style={s.subtitle}>{preview.house_name} • {preview.flock_name}</Text><TouchableOpacity style={s.button} onPress={()=>open(preview)}><Text style={s.buttonText}>View Alert</Text></TouchableOpacity><TouchableOpacity style={[s.button,s.secondary]} onPress={()=>setPreview(null)}><Text style={s.buttonText}>Close preview</Text></TouchableOpacity></View>}</View></Modal>
 </SafeAreaView>;
}

