
import axios from 'axios'

const LogOut=({id})=>{
    const url='https://whatnew-29aw.onrender.com/app/create_log_out'

     axios.post(url,{
        id
    }).then((resposne)=>resposne).catch((error)=>({hasError:error}))
}
export default LogOut