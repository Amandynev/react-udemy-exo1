import React from 'react';

const Membre = ({ name, age }) => {
  return (
    <fragment>
      <h3 style={{ color: age <= 35 ? 'blue' :"black" }}>{
        name } : { age }
       </h3>
    </fragment>
  )
}


export default Membre;
