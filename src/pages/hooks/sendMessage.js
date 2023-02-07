import axios from 'axios'

const url='https://whatnew-29aw.onrender.com/app/create_send_message'
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