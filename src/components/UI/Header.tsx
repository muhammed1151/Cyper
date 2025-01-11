import { Button } from "./Buttons";
import NavBar from "./NavBar";
import { ChangeEvent, FormEvent, useState } from "react";
import PopUp from "./PopUp";
import { inputsInfo } from "../ts/PopUp";
import Input from "./Input";
import { IProducts } from "../ts/interfaces";
import Error from "./Error";

import { productValidation } from "../../validation";
//* -------- states ------- *//
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<IProducts>({
    title: "",
    details: "",
    img: "",
    price: "",
    id: "",
    name: "",
  });
  const [errors, setError] = useState({
    title: "",
    details: "",
    img: "",
    price: "",
  });

  //* -------- Handler ------- *//
  const HandlerSetText = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setText({
      ...text,
      [name]: value,
    });

    setError({
      ...errors,
      [name]: "",
    });
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = productValidation({
      title: text.title,
      details: text.details,
      img: text.img,
      price: text.price,
    });
    const hasError = Object.values(errors).every(
      (value: string) => value === ""
    );

    if (!hasError) {
      setError(errors);

      return;
    }
  };

  //* -------- inputList ------- *//
  const inputList = inputsInfo.map((inputInfo) => (
    <div className="flex flex-col">
      <label htmlFor="">{inputInfo.label}</label>
      <Input
        id={inputInfo.id}
        className="shadow-md focus:ring-1 ring-indigo-700 outline-0 rounded-md mb-3"
        name={inputInfo.name}
        onChange={HandlerSetText}
        value={text[inputInfo.name]}
      />
      <Error msg={errors[inputInfo.name]} />
    </div>
  ));

  return (
    <div className=" container mx-auto  z-20 h-[88px] flex px-[16px] w-full  items-center justify-between  ">
      <img className="w-24 h-[32px]" src="images/Logo.png" />
      <div className="flex gap-5">
        <NavBar />
        <Button
          onClick={() => setIsOpen(true)}
          className=" border-none bg-slate-200"
        >
          Login
        </Button>
        <PopUp close={() => setIsOpen(false)} isOpen={isOpen} title={"Login"}>
          {inputList}
          <form onSubmit={submitHandler} className="flex justify-around ">
            <Button className=" ">Add</Button>
            <Button
              onClick={() => {
                setIsOpen(false);
                setText({
                  details: "",
                  id: "",
                  img: "",
                  name: "",
                  price: "",
                  title: "",
                });
                setError({
                  title: "",
                  details: "",
                  img: "",
                  price: "",
                });
              }}
              className=" "
              type="button"
            >
              Cancel
            </Button>
          </form>
        </PopUp>
      </div>
    </div>
  );
};

export default Header;
