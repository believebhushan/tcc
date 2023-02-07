import React,{useState,useContext, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
import QRCode from 'react-qr-code';
// components
import {  ProductList, ProductCartWidget } from '../sections/@dashboard/products';
import { Context } from '../Context';
import getQr from './hooks/getQr';
import LogOut from './hooks/logout';
// mock

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openApp, setOpenApp] = useState(false);
  const [qr,setQr]=useState({text:'Bharat',authenticated:false,init:false,reload:0})
  const {session}=useContext(Context)
  useEffect( ()=>{
    if(!qr.authenticated){
      getQr({id:session.user.id,qr,setQr})
    }
  },[qr.reload,qr.text])
  
  const buttonClick=()=>{
    if(qr.authenticated){
      LogOut({id:session.user.id})
      setQr({...qr,authenticated:false,text:'',init:false})
    }
    else{
      setQr({...qr,reload:qr.reload+1})
    }
  }
  console.log(qr,"authenticated")


  return (
    <>
      <Helmet>
        <title> TCC: Products  </title>
      </Helmet>

       <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products for {session.user.email}
        </Typography>
      
    {
      qr?.text  && !qr.authenticated ? <QRCode value={qr?.text}/>:null
    }
    <button onClick={buttonClick}>{qr.authenticated? 'Logout':'Reload Qr'}</button>
  
  {
    qr.authenticated?(<ProductList  />):null
  }
        
        <ProductCartWidget />
      </Container>
    </>
  );
}
