import { Button } from "./UI/Buttons";
import { ITags } from "./ts/interfaces";

const Ipad = ({ srcImg, name, details, backgroundColor }: ITags) => {
  return (
    <div
      className={`flex flex-col max-w-[371px]  `}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div>
        <img className="block ml-auto w-[371px]" src={srcImg} />
      </div>
      <div className="">
        <p>{name}</p>
        <p>{details}</p>
        <Button name="Shop Now " className=""   />
      </div>
    </div>
  );
};

export default Ipad;
