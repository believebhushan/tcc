import {  useState } from 'react';
// import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import {  Stack,  TextField } from '@mui/material';

import { LoadingButton } from '@mui/lab';
// components
// import Iconify from '../../../components/iconify';

import { supabase } from '../../../dbclient/supabseClient';
// import  ValidUserContext from '../../../tccConext/authCheck';

export default function LoginForm() {
  const [email, setEmail] = useState('');


  const handleClick =  async () => {
    try {
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } 
   
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" type={"email"}  value={email} onChange={(e)=>setEmail(e.target.value)}/>

        {/* <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me" /> */}
        {/* <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link> */}
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
