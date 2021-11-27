import { createSlice } from '@reduxjs/toolkit'


const initialState={
           sum:0,
           position:[],
           seats:[],
           value:'green',
           location:[],
           rows:10,
           cols:10,
           }


const todoSlice=createSlice({name:'todo' ,initialState,reducers:{
   
    modifySum:(state,action)=>{
        state.sum=action.payload
    },
    addPosition:(state,action)=>{
        state.position.push(action.payload[0]+""+action.payload[1])
        state.location.push(action.payload[0]+""+action.payload[1])
    },
    
    seatno:(state,action)=>{
        state.seats=action.payload
    },
    clr:(state,action)=>{
       state.value=action.payload
   },
    theaterrow:(state,action)=>{
      state.rows=action.payload
},
    theatercol:(state,action)=>{
      state.cols=action.payload
},

}})

export const {modifySum,addPosition,seatno,clr,theatercol,theaterrow}=todoSlice.actions;
export default todoSlice.reducer;