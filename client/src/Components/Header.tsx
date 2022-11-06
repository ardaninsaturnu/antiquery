import React from 'react';
import Button from "./Button";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-500 py-5 px-16 flex justify-between">
      <div className="text-xl text-blue-100">booQuery</div>
      <Button name="Add Product" buttonStyle={'booLight'} click={ () => navigate('/create-product') } />
    </header>
  );
};

export default Header;