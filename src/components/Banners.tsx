import { Button} from "./UI/Buttons";

const Banners = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:h-[600px] ">
      <div className="lg:flex lg:flex-wrap lg:gap-0">
        {/* first */}
        <div className="flex flex-col items-center justify-center pb-10 pt-10 lg:p-0 lg:order-2 lg:w-1/2 lg:flex-row">
          <div className="overflow-hidden lg:h-full lg:w-1/2">
            <img
              className="w-[300px] pb-6   lg:w-full lg:h-[300px]   lg:-translate-x-16 "
              src="public\images\hero.png"
            />
          </div>
          <div className="lg:-translate-x-6">
            <p className="mb-2 font-light text-[34px] ">
              Apple AirPods
              <span className="font-semibold "> Max </span>
            </p>
            <p className="font-medium text-textColor">
              Computational audio. Listen, it's powerful
            </p>
          </div>
        </div>

        {/* second */}
        <div className="bg-[#353535] flex flex-col items-center justify-center pb-10 pt-10  lg:p-0  lg:order-3 lg:w-1/2 lg:flex-row overflow-hidden">
          <div className="flex items-center     lg:relative">
            <img
              className="w-[450px] pb-6 lg:h-[200px] lg:-translate-x-[30%]  "
              src="public\images\glasses.png"
            />
          </div>
          <div className="lg:-translate-x-7 text-center lg:text-left">
            <p className="mb-2 font-light text-white text-[34px] ">
              Apple Vision
              <span className="font-semibold "> Pro </span>
            </p>
            <p className="font-medium text-textColor">
              An immersive way to experience entertainment
            </p>
          </div>
        </div>
        {/* third */}
        <div className="flex flex-col items-center justify-center pb-10 pt-10   overflow-hidden  lg:mr-14  lg:p-0 lg:order-1 lg:h-1/2 lg:w-full   lg:flex-row ">
          <div className="overflow-hidden   lg:translate-y-5 lg:-translate-x-16">
            <img
              className="w-[192px] pb-6 lg:pb-0 lg:w-5/6 lg:h-full   "
              src="public\images\PlayStation.png"
            />
          </div>
          <div className="text-center lg:flex lg:flex-col  lg:text-left lg:w-1/2 lg:-translate-x-16 lg:translate-y-10">
            <p className="mb-2 font-semibold text-[34px]">Playstation 5</p>
            <p className="font-medium text-textColor  px-4  lg:px-0 ">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
      </div>
      {/* 4th */}
      <div className=" bg-[#d2d2d2] flex flex-col items-center justify-center pb-10 pt-10 lg:flex-row-reverse lg:relative  lg:p-0 lg:overflow-hidden">
        <img
          className="w-[192px] pb-6 lg:w-[829px] lg:absolute lg:-right-1/2"
          src="public\images\MacBook Pro 14.png"
        />
        <div className="text-center lg:text-left lg:w-1/2 lg:-translate-x-1/4">
          <p className="mb-2  text-[34px] font-semibold lg:text-6xl ">
            Macbook
            <span className="font-light"> Air </span>
          </p>
          <p className="mb-3 font-medium text-textColor  px-4 lg:px-0">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Button name="Shop Now " className="" />
        </div>
      </div>
    </div>
  );
};

export default Banners;
