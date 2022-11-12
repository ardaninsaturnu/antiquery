import React from 'react';
import bookcase from "../../Assets/Images/bookcase.jpg";
import {Input} from "../../Components/Input";
import Button from "../../Components/Button";

const Create = () => {
  return (
    <div className="py-5" style={{background: `url(${bookcase})`, backgroundSize:'contain'}}>
     <div className="w-full max-w-xl mx-auto">
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
         <h1 className="text-3xl text-blue-500 font-medium my-2">Create new book</h1>
         <Input label="name" name="name" type="text" />
         <Input label="author name" name="author" type="text" />
         <Input label="description" name="description" type="text" />
         <Input label="price" name="price" type="number" />
         <Input label="available" name="available" type="checkbox" />
         <Input label="image" name="image" type="file" />
         <Button name="Ekle" buttonStyle='boolue' type="submit"/>
       </form>
     </div>
  </div>
  );
};

export default Create;