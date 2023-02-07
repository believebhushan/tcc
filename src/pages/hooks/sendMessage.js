import axios from 'axios'

const all={prod:'https://whatnew-29aw.onrender.com/app/create_send_message',local:'http://localhost:9000/app/create_send_message'}
const url=all.prod
const sendMessage=async ({number,message,id})=>{
   
        axios.post(url,{
            to:number,
            message,
            id
        }).then(()=>{
            alert("sent succesfully")
     
        }).catch(()=>{
            alert("error")
        })
    
}
export default sendMessage