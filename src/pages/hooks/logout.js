
import axios from 'axios'

const LogOut=({id})=>{
    const all={prod:'https://whatnew-29aw.onrender.com/app/create_log_out',local:'http://localhost:9000/app/create_log_out'}
    const url=all.prod
    axios.post(url,{
        id
    }).then((resposne)=>resposne).catch((error)=>({hasError:error}))
}
export default LogOut