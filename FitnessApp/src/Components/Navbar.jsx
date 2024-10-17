import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'  sx={{ flexGrow:1}}>APEXLIFTS</Typography> 
                  <Link to='/log'>
                  <Button variant="contained" color="error">Login</Button>     
                  </Link>&nbsp;&nbsp;
                  <Link to='/bmi'>
                  <Button variant="contained" color="error">Bmi</Button>
                  </Link>&nbsp;&nbsp;
                  
        </Toolbar>
        
          </AppBar>
          <br /><br />
    </div>
  )
}

export default Navbar