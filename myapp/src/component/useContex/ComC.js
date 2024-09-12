import React, { useContext } from 'react'
import { LastContext, NameContext } from '../../App'

function ComC() {
  const myName = useContext(NameContext);
  const myLastName = useContext(LastContext);

  return (
    <div>
      <h1>I am Component C</h1>
      <h1>{myName}</h1>
      <h1>{myLastName}</h1>



    </div>
  )
}

export default ComC
