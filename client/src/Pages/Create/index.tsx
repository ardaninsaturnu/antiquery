import React from 'react';
import {Input} from "../../Components/Input";
import Button from "../../Components/Button";

const Create = () => {
  return (
   <>
     <div className="w-full max-w-xl mx-auto">
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-5">
         <h1 className="text-3xl text-blue-500 font-medium my-2">Create new book</h1>
         <Input label="name" name="name" type="text" />
         <Input label="name" name="name" type="text" />
         <Input label="name" name="name" type="text" />
         <Input label="name" name="name" type="text" />
         <Input label="name" name="name" type="text" />
         <Input label="name" name="name" type="text" />
         <Button name="Ekle" buttonStyle='boolue' type="submit"/>
       </form>
     </div>
   </>
  );
};

export default Create;