import react,{useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useSelector,useDispatch } from 'react-redux';
import { clr,addPosition} from './redux/slice';


const Pay=()=>{
    const dispatch=useDispatch()
    const router=useRouter()
    const state=useSelector(state=>state.todoSlice)

    
    alert('paid sucessfully!.....')
    
    //change clr property of seats to black after confirmation
useEffect(()=>{

    //after entire html document loding run the content
    setTimeout(()=>{
        state.position.forEach((item)=>{
        dispatch(clr('black'))
         })
       },500)
    
 },[])
 

return(
  <div>
        
  </div>
    )
  }

  export default Pay