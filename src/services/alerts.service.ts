import { apiRequest } from "./api";
import { getAccessToken } from "./auth.storage";
export type FarmAlert = {
 id:string; status:"ACTIVE"|"ACKNOWLEDGED"|"RESOLVED"|"DISMISSED"; severity:string;
 message_en:string|null; alert_type:string; house_name:string|null; flock_name:string|null;
 expected_value:number|null; actual_value:number|null; deviation_percentage:number|null;
 confidence:number|null; sensor_reliability:number|null; duration_minutes:number|null;
 detection_method:string|null; explanation:string|null; likely_cause:string|null;
 recommended_action:string|null; created_at:string; acknowledged_name:string|null;
 acknowledged_at:string|null; resolution_notes:string|null; resolved_at:string|null;
 affected_features:unknown; feedback?:{feedback_type:string;comments:string}[];
};
export async function alertRequest<T>(path="", body?:unknown):Promise<T> {
 const token=await getAccessToken();
 if(!token) throw new Error("Please log in to view alerts.");
 return apiRequest<T>("/alerts"+path,{method:body===undefined?"GET":"POST",headers:{Authorization:`Bearer ${token}`},...(body===undefined?{}:{body:JSON.stringify(body)})});
}
