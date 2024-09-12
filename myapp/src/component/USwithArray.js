import React, { useState } from 'react'

function USwithArray() {
    const num = [11,22,44,66]
    const [numbers, setnumbers] = useState(num)
//   const changeList = () => {
//     setnumbers([55,77,99,33])
//   }   

const changeList = () => {
    setnumbers(previousState => {
    return[
        ...previousState,
       Math.floor( Math.random() * 50 )
        // 10,90,76,84,53

    ]
})
}
  return (
    <div>
      <ul>
        {numbers.map((n , i) => <li key={i}>{n}</li>)}
      </ul>
      <button onClick={changeList}>Change Array</button>
    </div>
  )
}

export default USwithArray
