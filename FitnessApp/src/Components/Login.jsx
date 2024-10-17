import React, { useState } from 'react'
import {  Box, Button, TextField, Typography } from '@mui/material';


const Login = () => {

   const[isSignup,setIsSignup]= useState(false)
  console.log(isSignup)
   return (
    <div>
        <form>
            <Box display={'flex'} flexDirection={'column'} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin={'auto'} marginTop={5} padding={3}
            borderRadius={5} boxShadow={"5px 5px 10px #ccc"}
            sx={{":hover":{boxShadow:"10px 10px 20px #ccc",},}}>
       <Typography variant='h2' padding={3} textAlign={'center'}>{isSignup ?"Singup" :"Login"} 
       </Typography>
       <TextField
          requiredmargin="normal"
         id="outlined-required"
          label="Name"
          color='success' focused
          defaultValue=""
           helperText="Please enter your name"
          
        />
      {isSignup &&  <TextField
        margin="normal"
        id="outlined-required"
        label="Email"
        color='success' focused
        defaultValue=""
        helperText="Please enter your email"
 />}
      <TextField
      margin="normal"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color='success' focused
          helperText="Please enter your password"
        />
<Button variant="contained" color="success">
{isSignup ?"Sign up":"Login"}
</Button><br/><br/>
<Button onClick={()=>setIsSignup(!isSignup)}>  Go to {isSignup ?"Login" :"sign up"}</Button>
</Box></form>
</div>
  )
}

export default Login