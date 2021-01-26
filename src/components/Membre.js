import React from 'react';

const Membre = ({ name, age, children, hideName }) => {
  return (
    <div>
      <h3 style={{ color: age <= 35 ? 'blue' :"black" }}>{
        name } : { age }
       </h3>
        { children }
        <button onClick={hideName}>X</button>
    </div>
  )
}


export default Membre;
