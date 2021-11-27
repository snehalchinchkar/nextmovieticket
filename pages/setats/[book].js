import  {useState,useEffect} from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell,Button,makeStyles} from '@material-ui/core';
import Link from 'next/link';
import {useRouter } from 'next/router'
import {useDispatch,useSelector } from "react-redux"
import { modifySum,addPosition,seatno,clr,theatercol,theaterrow} from '../redux/slice';


//material ui styling property
const useStyle=makeStyles({
   table:{width:'90%',margin:'50px 0 0 50px'},
   tableh:{background:'black',color:'white',fontSize:'20px'},
   size:{fontSize:'40px'},
   btprop1:{width:"50px",height:"40px",backgroundColor:"red",margin:'3%2%0%10%'},
   btprop2:{width:"50px",height:"40px",backgroundColor:"green",margin:'3%2%0%10%'},
   btprop3:{width:"50px",height:"40px",backgroundColor:"black",margin:'3%2%0%10%'},
   rmline:{textDecoration:'none'},
   btsubmit:{margin:'2%2%0%67%'},
   seatprop:{width:"50px",height:"40px",backgroundColor:"red"},
})


const book = () => {
      const router=useRouter()
      const dispatch = useDispatch()
      const classes =useStyle()
      const [price,setPrice]=useState([])    //hold index of rows
      const [seat,setSeat]=useState([])      //hold elements of arrow and arcol array in terms of string eg ['11','12','13']
      const arrrow=[]
      const arrcol=[""]
      const id=router.query.book;
      const state=useSelector(state=>state.todoSlice)


//hold button clr to grren after selected even going in to back page
useEffect(()=>{
      setTimeout(()=>{
        state.position.forEach((item)=>{
        document.getElementById(item).style.backgroundColor=state.value
         })
      },500)

    },[])


//create array for row and col based on number put in admin window
for(var i=1 ;i<=state.rows;i++)
{
  arrrow.push(i)
}

for(var i=1 ;i<=state.cols;i++)
{
  arrcol.push(i)
}


return (
        <div>
        
        <button className={classes.btprop1}> </button>
        
        <span className={classes.size}>  available seats  </span>
        
        <button className={classes.btprop2}> </button>
        
        <span className={classes.size}>  selected seats  </span>
        
        <button className={classes.btprop3}> </button>
        
        <span className={classes.size}>  booked seats  </span>

        <Link href={`/ticket/${id}`} className={classes.rmline}>
        
        {/** find price of seats per row**/}
        <Button color="primary"  className={classes.btsubmit} variant="contained" onClick={()=>{
            const z=price.reduce((total,num)=>{ total=total+(num+1)*100                          
            return total },0)
            dispatch(modifySum(z))}}>  confirm seat  </Button>    
        
        </Link>
   
        <hr/>

        <Table className={classes.table}>
        
        <TableHead >
        
        {arrcol.map((ele)=> { return <TableCell>         {/** col head **/}
          
        <TableRow className={classes.tableh}> {ele} </TableRow> </TableCell>})}
        
        {arrcol.shift()}                                 {/** remove first element('') from array to adjust rows and col head in table**/}
        
        </TableHead>
        
        <TableBody>

        {arrrow.map((ele,ind)=> { return <TableRow>      {/** row head**/}
         
        <TableCell className={classes.tableh}>{ele}</TableCell>
            
        {arrcol.map((ele2,ind2)=>{return <TableCell>     {/** seats arrange based on above array arrrow in row order with repect to col**/}
          
        {ele+''+ele2}                                     {/** seats no**/}
        
        <button id={ind+""+ind2} className={classes.seatprop} onClick={(e)=>{
               e.target.style.backgroundColor=state.value
               {/**dispatch and store value in position array to change clr prop of seats based on unique id**/}
               dispatch(addPosition([ind,ind2]))       
               const ele3=ele+''+ele2
               setSeat([...seat,ele3])
               {/**used in ticket page to show seatnos u have booked**/}
               dispatch(seatno(seat))                     
               setPrice([...price,ind])
              }}>
      
        </button>
        </TableCell>
             
         })}
           
        </TableRow>})}
        </TableBody>
        </Table>
        </div>
    )
}
 export default book

 