import { createClient } from '@supabase/supabase-js'
import axios from 'axios'

const supabaseUrl = 'https://hufsoatizqyomnqibtaq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1ZnNvYXRpenF5b21ucWlidGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MTQ1MzUsImV4cCI6MTk5MTE5MDUzNX0.K9_b9pFXyRh3-rOeYaLkHXY5W7IvoTQDbPxF8FmeZic'
const supabase = createClient(supabaseUrl, supabaseAnonKey)
const all={prod:'https://whatnew-29aw.onrender.com/app/create_new',local:'http://localhost:9000/app/create_new'}
const url=all.prod
const getQr=async ({id,qr={},setQr=()=>{}})=>{
    console.log(qr,"authenticated")
    if(qr.init){
        const {data}=await supabase.from("qrs").select("*").eq("user_id",id).order("created_at",{ascending:false})
        console.log(data,"data")
        setQr({...qr,authenticated:data[0]?.status==='granted',text:data[0].qr})
    }
    else{
        axios.post(url,{
            id
        }).then((res)=>{
            const data={...qr,init:res.data.state!=='CONNECTED',authenticated:(res.data.client && res.data.state==='CONNECTED')}
            setQr({...data})
        }).catch(()=>{
            setQr({...qr})
        })
    }
    
}
export default getQr