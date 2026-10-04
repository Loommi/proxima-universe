import {canonRecords,type CanonRecord} from "@/content/canon";
export const isPublic=(r:CanonRecord)=>r.status==="public"&&r.canonStatus==="confirmed";
export const publicRecords=canonRecords.filter(isPublic);
export const getPublicRecord=(slug:string)=>publicRecords.find(r=>r.slug===slug);
export const relatedPublicRecords=(record:CanonRecord)=>record.relationships?.map(rel=>({relation:rel.type,record:publicRecords.find(r=>r.id===rel.targetId)})).filter((v):v is {relation:string;record:CanonRecord}=>Boolean(v.record))??[];
export const recordTypeLabel=(type:string)=>type.replaceAll("_"," ").replace(/\b\w/g,c=>c.toUpperCase());
