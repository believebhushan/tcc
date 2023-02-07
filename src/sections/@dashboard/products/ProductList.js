// import PropTypes from 'prop-types';
// @mui
// import { Grid } from '@mui/material';
// import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

// ProductList.propTypes = {
//   products: PropTypes.array.isRequired,
// };
import React,{useContext, useState} from 'react'
import sendMessage from '../../../pages/hooks/sendMessage'
import { Context } from '../../../Context';

export default function ProductList() {
  
  const [numbers,setNumbers]=useState('')
  const [message,setMessage]=useState('')
  const {session}=useContext(Context)
  const send=()=>{
    sendMessage({number:numbers,message,id:session.user.id})
  }

  return (
<div style={{display:'flex',flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'space-evenly'}}>
   <div>
      <textarea name="numbers"  placeholder="Numbers Comma Seperated" rows={20} cols={60} value={numbers} 
      onChange={(e)=>setNumbers(e.target.value)}/>
      
    </div>
    <div> <textarea name="messages"  placeholder="Message" rows={20} cols={60} value={message} 
    onChange={(e)=>setMessage(e.target.value)}/></div>
   
</div>
<div style={{alignItems:'center'}}>
<button onClick={()=>send()}>Send Message </button>
</div>

</div>
  );
}
