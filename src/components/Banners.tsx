import { ButtonLg } from "./UI/Buttons";

const Banners = () => {
  return (
    <div className="">
      {/* first */}
      <div className="flex flex-col items-center justify-center pb-10 pt-10 ">
        <img className="w-[192px] pb-6" src="public\images\hero.png" />
        <p className="mb-2 font-light text-[34px]">
          Apple AirPods
          <span className="font-semibold "> Max </span>
        </p>
        <p className="font-medium text-textColor">
          Computational audio. Listen, it's powerful 
        </p>
      </div>

      {/* second */}
      <div className="bg-[#353535] flex flex-col items-center justify-center pb-10 pt-10 ">
        <img
          className="w-[325.87px] pb-6"
          src="public\images\glasses.png"
        />
        <p className="mb-2 font-light text-white text-[34px]">
          Apple Vision
          <span className="font-semibold "> Pro </span>
        </p>
        <p className="font-medium text-textColor">
          An immersive way to experience entertainment
        </p>
      </div>
      {/* third */}
      <div className="flex flex-col items-center justify-center pb-10 pt-10 ">
        <img
          className="w-[192px] pb-6"
          src="public\images\PlayStation.png"
        />
        <p className="mb-2 font-light text-[34px]">
          Playstation
          <span className="font-semibold "> 5</span>
        </p>
        <p className="font-medium text-textColor text-center px-4">
          Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
          redefine your PlayStation experience.
        </p>
      </div>
      {/* 4th */}
      <div className="bg-[#d2d2d2] flex flex-col items-center justify-center pb-10 pt-10 ">
        <img
          className="w-[192px] pb-6"
          src="public\images\MacBook Pro 14.png"
        />
        <p className="mb-2  text-[34px] font-semibold ">
          Macbook
          <span className="font-light"> Air </span>
        </p>
        <p className="mb-3 font-medium text-textColor text-center px-4">
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </p>
        <ButtonLg name="Shop Now " border="black" textColor="black" />
      </div>
    </div>
  );
};

export default Banners;
