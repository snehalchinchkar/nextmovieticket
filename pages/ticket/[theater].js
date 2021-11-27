import react,{useState,useEffect} from 'react'
import {Box,Paper,Button,Typography,makeStyles} from "@material-ui/core";
import {useRouter } from 'next/router'
import { useSelector,useDispatch } from 'react-redux';
import { modifySum,addPosition} from '../redux/slice';
import axios from 'axios'
import Link from 'next/link';


//material ui styling property
const useStyle=makeStyles({
   pprprop:{margin:"2%",height:"40%"},
   textprop:{margin:"2%0%2%35%",padding:"10px"},
   clr:{color:'red'},
   pay:{width:"50%",height:"80px" ,background:'green' ,fontSize:'40px'},
   }) 


const theater = () => {
      const router=useRouter()
      const dispatch=useDispatch()
      const classes=useStyle()
      const[info,setInfo]=useState('')                   //store a data based on id for particular movie
      const state=useSelector(state=>state.todoSlice)
      const id=router.query.theater;
   
   
//fetch a data based on id for particular movie
useEffect(()=>{
       const getupdateData =async (id) => {
       let res= await axios.get(`https://movietickite.snehal30.repl.co/api/hello`,{headers:{"id":id-1}})
      .then(res=>{setInfo(res.data)})
    } 
      getupdateData(id)
    },[])
    
    
//count down Timer for 5 min
      const count=5;
      let time=count*60;
useEffect(()=>{
      const updatetime=document.getElementById('time')
      setInterval(timer,1000)                          //after every 1 sec call timer function
      function timer(){
      const min=Math.floor(time/60);
      let sec=time%60
      sec=sec<10?'0'+sec:sec
      updatetime.innerHTML=`${min}:${sec}`
      time--;
       }
  },[])
    
    
//aftre 5 min backed to bookin page    
useEffect(()=>{
        setTimeout(() => {
        router.push(`/seats/${id}`)
           }, 300000);
  },[])


return (
    <div>
       
    <Paper elevation={6} className={classes.pprprop}>
    
    <Box p={1}>
          
    <Typography variant="h3">
    
    <span> Movie name:{info.title} </span>
          
    <diV> Screen No:{info.Screen} </diV>
    
    <diV> Show_time:{info.Show_time} </diV>
         
    <div id='time'> </div>
    
    </Typography>
         
    </Box>
      
    </Paper>
      
    <Paper elevation={6} className={classes.pprprop}>
    
    <Box p={1}>
          
    <Typography variant="h3" className={classes.textprop} >

    <div className={classes.clr}> YOUR TICKET DETAILS....... </div>
          
    <div> ticket total price:{state.sum} </div>
          
    <diV> No of seat:{state.location.length} </diV>
         
    <diV> seat No:{state.seats.join()} </diV>

    <Link href='/pay'>
    
    <Button color='primary' variant="contained"  className={classes.pay}> Proceed to pay </Button>
    
    </Link>
    </Typography>
    </Box>
    </Paper>
    </div>
    )
}

export default theater
