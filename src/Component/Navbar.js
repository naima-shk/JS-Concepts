import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography';
//import classes from '*.module.css';
const Navbar =() =>{
    return(
 <AppBar position="static" style={{height:"100px",  backgroundColor:'#003865', marginBottom: "10px" }}>
     <Toolbar>
         <Typography variant='title' color="inherit" fontfamily='Abeezee' >
             <h4>Boeing Co</h4>
             {/*<div className="new" style={{textAlign:'center', marginLeft:'350px', width:'50px', marginBottom:'5px'} }>
                 <h5>Economical Sector: Industrials</h5><br></br>
                 <h6>Business Sector: AeroSpace and Defence</h6><br></br>
    </div> */}
         </Typography>
     </Toolbar>
 </AppBar>
    )
}
export default Navbar;

