import React from 'react';

type PropTypes = {
  name: string,
  icon?: React.ReactNode,
  click?: () => void,
  buttonStyle: "booLight" | 'boolue',
  type?: 'submit' | 'reset' | 'button'
}

const setButtonStyle = ( style: string ) => {
  switch ( style ){
    case 'booLight':
      return 'bg-blue-900 hover:bg-blue-300 text-blue-400 font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline'
    case 'boolue':
      return 'bg-blue-500 hover:bg-blue-700 text-blue-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
  }
}

const Button = ( { name, icon, click, buttonStyle, type } : PropTypes ) => {

  return (
    <button type={ type || 'button' } onClick={ click } className={setButtonStyle( buttonStyle )}>
      { icon ?? icon }
      {name}
    </button>
  );
};

export default Button;