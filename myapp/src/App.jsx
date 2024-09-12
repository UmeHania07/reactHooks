import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import Uswithobj from './component/USwithobj'
import USwithArray from './component/USwithArray';
import FunctionEffect from './component/FunctionEffect';
import ComA from './component/useContex/ComA';
import RefCompo from './component/RefCompo';
import UseReducer from './component/UseReducer';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       //mai array ko empty b rakh skti hu 
//       todos:["hani" , "aiman baji" , "abuzar bhai" ,"saifee"],
//       value: ''
//     }
//   }

//   add_todo=()=>{
  //  console.log(this.state.value)
  // this.state.todos.push(this.state.value)Or
//   this.setState({
//     todos: [...this.state.todos,this.state.value],
//     value:""
//   })
// }

// delete_todo=(index)=>{
// splice hamesha do value leta h k kaha se dlt kna h or kitne dlt krne h 
// this.state.todos.splice(index,1)
// this.setState({
//   todos:this.state.todos
// })
// }
//  render(){
//     let{todos, value}= this.state
//     return(
//       <div >

//         <input value={value} onChange={(e)=>this.setState({value: e.target.value})} type="text" placeholder='Enter your name' />
//         <button onClick={this.add_todo}>Add Item</button>


//        <ul> 

//           {todos.map((v,i)=>{
//          return<li key={i}>{v}
//         <button onClick={()=>this.delete_todo(i)}>Delete</button>

//             </li>

//           })}
//        </ul>
//       </div>

//     )

//   }
// }

export const NameContext = createContext();
export const LastContext = createContext();


//  data hmra usestate he h..
function App() {
  // const [data,setData]=useState("hania") 
return (
    <div>
      
      <NameContext.Provider value={'Hania'}>
      <LastContext.Provider value={'Khan'}>
      <ComA/>
      </LastContext.Provider>
      </NameContext.Provider>


      {/* <FunctionEffect/> */}
      {/* <USwithArray/> */}
   
      {/* <RefCompo/> */}

      <UseReducer/>
       
      {/* <h1>{data}</h1> */}

      {/* <button onClick={()=>setData("aiman")}>update name</button> 
      <button onClick={()=>setData("hania")}>Re-update name</button> */}
      {/* <button onClick={()=>setData(data + 1)}>Re-update name</button>  */}
     {/* <Uswithobj/> */}
 

    </div>
  )



}





export default App;
