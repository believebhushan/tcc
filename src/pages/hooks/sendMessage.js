import axios from 'axios'

const url='http://localhost:9000/app/create_send_message'
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