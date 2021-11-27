import {useDispatch ,useSelector} from 'react-redux'
import todoSlice from './redux/slice'
import {useEffect,useState} from 'react'
import Link from 'next/link';
import IconButton from "@material-ui/core/IconButton";
import { TextField } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import {Button,makeStyles} from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Head from 'next/head'
import Image from 'next/image'


//material ui styling property
const useStyle=makeStyles({
  container: {display: "flex"},
  item: {border: "1px solid blue", Width: "40%", margin:"5%", height:"95%"},           
   }) 
      

 //nextjs fetching data from json at built time 
export const  getStaticProps = async()=>{
  const res=await fetch('https://movietickite.snehal30.repl.co/api/hello');
  const data=await res.json()
 
  return{
    props:{
      data,
    },
  }
}   
    

const urldata=({data})=>{

      const dispatch=useDispatch()
      const classes =useStyle()
      const state=useSelector(state=>state.todoSlice)

return(
    <div style={{background:'black'}}>

    <Head><title>movie ticket booking</title></Head>
    
    <span><Image width='300px' height='300px' style={{margin:'3%0%0%10%'}} src='/images/Movie-Mania-Logo.png'/></span>
     
    <span style={{margin:'0%0%1%5%',padding:"2%",color:"white",fontSize:"100px"}}>Movie Mania</span>
    
    <h1 style={{margin:'0%0%1%47%',padding:"1%",color:"white",fontStyle:"italic"}}>Its Show Time...</h1>
    
    <span style={{margin:'2%0%5%30%'}}>
    
    <div style={{  display: "flex"}} >
      
    <Grid container spacing={1}>
  
    {data.map((ele)=>{return <Grid md={4}>    
      
    <Card style={{border: "1px solid blue", Width: "40%", margin:"5%", height:"95%"}}>
 
    <div><img  style={{width:"100%", height:"50%"}} src={ele.img}/></div> 
      
    <CardContent>
    
    <Typography gutterBottom variant="h5" component="h1">{ele.title} </Typography>
          
    <Typography variant="body2" color="textSecondary" component="p">
          <h1>Ticket price : {ele.price}</h1>
          <h3>Release date:{ele.releasedate}</h3>
          <h3>Due date:{ele.duedate}</h3>
    </Typography>

    <Button color="primary" variant="contained" style={{margin:"20%10%0%10%"}}>view Details..</Button>
         
    <Link href={`/seats/${ele.id}`} style={{textDecoration:'none'}}>
    <Button color="secondary" variant="contained" style={{margin:"20%10%0%10%"}} >Book Now</Button>
    </Link>
      
    </CardContent>
    </Card>
    </Grid> 
      
    })}
    </Grid>
    </div>
    </span>
    </div>
  
  )

}

export default urldata





 






