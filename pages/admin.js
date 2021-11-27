import react,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { theatercol,theaterrow } from './redux/slice'
import { Typography,Box,Paper,Button,makeStyles} from '@material-ui/core'


//material ui styling property
const useStyle=makeStyles({
   paperprop:{margin:"5%",height:"70%"},
   headprop:{margin:"2%0%2%38%"},
   texts:{margin:"2%0%2%30%",padding:"10px"},
   divprop:{margin:'3%2%'},
  }) 


const Admin = () => {
    const[row,setRow]=useState('')
    const[col,setCol]=useState('')
    const dispatch=useDispatch()
    const classes=useStyle()
    
return (
        <div >
        
        <Paper elevation={6} className={classes.paperprop}>
        
        <Box p={1}>
        
        <h1 className={classes.headprop}>Select No Of Seats</h1>
         
        <Typography variant="h4" className={classes.texts} >

        <div className={classes.divprop}>
          No of Rows :
        
         <input type='number' className={classes.divprop} onChange={(e)=>{setRow(e.target.value)}}/>

         <Button onClick={()=>{dispatch(theaterrow(row))}} color='primary' variant="contained" > add </Button>
         
         </div>
         
         <div className={classes.divprop}>
         No of Columns :
        
         <input type='number' className={classes.divprop} onChange={(e)=>{setCol(e.target.value)}}/>  
         
         <Button onClick={()=>{dispatch(theatercol(col))}} color='primary' variant="contained" > add </Button>
        
         </div> 
         </Typography>
         </Box>
         </Paper>
        </div>
        
    )
}

export default Admin