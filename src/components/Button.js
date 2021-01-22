import React from 'react';

const Button = ({older}) => {
  return (
    // attention à ne pas oublier de passer l'event dans le component ic onCLick.
    <button onClick={older}>
      Veillir
    </button>
  )
}


export default Button;
