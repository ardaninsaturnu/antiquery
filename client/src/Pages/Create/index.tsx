import React from 'react';
import bookcase from "../../Assets/Images/bookcase.jpg";
import {Input} from "../../Components/Input";
import Button from "../../Components/Button";
<<<<<<< HEAD
import bookcase from "../../Assets/Images/bookcase.jpg";
import {useForm} from "../../hooks/useForm";

const Create = () => {
  const { handleSubmit, handleChange, data, errors } = useForm({
      validations: {
        name: {
          pattern: {
            value: '^[A-Za-z]*$',
            message: "You're not allowed to..."
          },
        },
        author: {
          required: {
            value: true,
            message: 'you must fill this field'
          }
        }
      }
  })
=======

const Create = () => {
>>>>>>> b810d3ad (rearranged all components.)

  return (
    <div className="py-5" style={{background: `url(${bookcase})`, backgroundSize:'contain'}}>
     <div className="w-full max-w-xl mx-auto">
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
         <h1 className="text-3xl text-blue-500 font-medium my-2">Create new book</h1>

       </form>
     </div>
  </div>
  );
};

export default Create;


/*
<Input label="name" name="name" type="text" />
<Input label="author name" name="author" type="text" />
<Input label="description" name="description" type="text" />
<Input label="price" name="price" type="number" />
<Input label="available" name="available" type="checkbox" />
<Input label="image" name="image" type="file" />
<Button name="Ekle" buttonStyle='boolue' type="submit"/>
*/