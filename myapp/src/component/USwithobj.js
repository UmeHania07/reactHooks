import React, { useState } from 'react'

function USwithobj() {
  const obj = {

    name: "hania",
    age: 18,
    height: 5.5,
    isyoung: true

  }
  const [person, setperson] = useState(obj);
  const changeState = ()=> {
    setperson(previousState => {
     return{
      ...previousState,
      name: "Aiman"
    }
    });
    // setperson({
    //   name: "aiman",
    //   age: 22,
    //   height: 5.8,
    //   isyoung: false
    // })
  } 
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isyoung.toString()}</h1>

      <button onClick={changeState}>Change</button>
      
    </div>
  )
}

export default USwithobj;
