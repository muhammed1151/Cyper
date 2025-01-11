import { ReactNode, ButtonHTMLAttributes } from "react";

interface IButtons extends ButtonHTMLAttributes<HTMLButtonElement> {
 
  className: string;
  children?: ReactNode;
}

export const Button = ({ className, children, ...rest }: IButtons) => {
  return (
    <button
      className={`${className} text-base font-medium px-14 py-4 border-2  rounded`}
      {...rest}
    >
      
      {children}
    </button>
  );
};
