import * as React from 'react';
import { useState } from "react";

type Props = {
  label: string,
  name: string,
  placeholder?: string,
  type?: string
};

export const Input = ({ label, name, placeholder, type } : Props ) => {
  const [ enabled, setEnabled ] = useState<boolean>( false );
  const [ value, setValue ] = useState<any>('');

  return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={ name }>
          { label }:
        </label>
        {  type === 'checkbox' ? (
          <input type="checkbox" checked={enabled} name={name} onChange={() => setEnabled(!enabled) } />
        ) : <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          type={ type || 'text' }
          placeholder={ placeholder || name }
          value={value}
          onChange={ (e : React.ChangeEvent <HTMLInputElement>) => setValue( e.target.value )}
        />}
      </div>
  );
};