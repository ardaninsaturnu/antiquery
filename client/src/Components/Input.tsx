import * as React from 'react';
import {Switch} from "@headlessui/react";
import {useState} from "react";

type Props = {
  label: string,
  name: string,
  placeholder?: string,
  type?: string
};

export const Input = ({ label, name, placeholder, type } : Props) => {
  const [ enabled, setEnabled ] = useState<boolean>(false );

  return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={ name }>
          { label }:
        </label>
        {  type === 'checkbox' ? (
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        ) : <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name} type={ type || 'text' } placeholder={ placeholder || name }/>}
      </div>
  );
};