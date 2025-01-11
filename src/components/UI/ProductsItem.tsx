import { Button } from "./Buttons.tsx";
import { IProducts } from "../ts/interfaces.ts";
import { useState } from "react";

const ProductsItem = ({ img, details, price, id }: IProducts) => {
  const [user, setNew] = useState<string>(
    window.localStorage.getItem(`like${id}`) || "/Cyper/public/images/Like.png "
  );

  const handler = () => {
    const newImg =
      user === "/Cyper/public/images/like-red.png"
        ? "/Cyper/public/images/like.png"
        : "/Cyper/public/images/like-red.png";
    setNew(newImg);
    window.localStorage.setItem(`like${id}`, newImg);
  };
  return (
    <div className="flex flex-col bg-[#ededed] rounded-2xl pt-4 pb-4">
      <img className="w-6 block mr-4 ml-auto" src={user} onClick={handler} />
      <div className="flex items-center justify-center flex-col text-center ">
        <img className="w-[104px]  h-[104px]" src={img} alt="" />

        <p className="font-medium text-base text-ellipsis text-left text-wrap  px-4 mb-4 mt-4  line-clamp-2   ">
          {details}
        </p>

        <p className="font-semibold text-2xl ">{price}</p>
        <Button name="Buy Now " className="" />
      </div>
    </div>
  );
};

export default ProductsItem;
