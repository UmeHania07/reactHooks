import React, { useEffect, useState } from 'react'

function FunctionEffect() {
    const [count , setCount] = useState(0);
    const [name , setName] = useState('hania');

    // useEffect( () => {
    //     console.log("Hello i am useEffect = " + count)
    // } , [] ); 
    
    // useEffect( () => {
        // ye function ab count pe depend hogaya isko depended kehty hn
        // console.log("Hello i am useEffect = " + count)
        // name pe b useeffect ka function call horaha h
    // } , [count , name] );
    // useEffect( () => {
    //     console.log("Hello i am useEffect = " + count)
    // } , [count] );
    // useEffect( () => {
    //     console.log("Hello:" + name)
    // } , [name] );

  return (
    <div>
      <h1> {count} </h1>
      {/* <h1> {name} </h1> */}

      {/* is function ko paranthesis kehty hn */}
      <button onClick={() => setCount(count + 1)}>Update State</button>
      <button onClick={() => setCount(count - 1)}>Update2 State</button>
      <button onClick={() => setCount(0)}>Reset State</button>


      {/* <button onClick={() => setName('aiman')}>Update State</button> */}

    </div>
  )
}

export default FunctionEffect
  