
import axios from 'axios'

const LogOut=({id})=>{
    const url='http://localhost:9000/app/create_log_out'

     axios.post(url,{
        id
    }).then((resposne)=>resposne).catch((error)=>({hasError:error}))
}
export default LogOut