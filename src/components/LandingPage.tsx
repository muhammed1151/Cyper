import { Button } from "./UI/Buttons";

const LandingPage = () => {
  return (
    <div className="bg-[#211C24] pt-10 lg:pt-0">
      <div className="container flex flex-col justify-center mx-auto items-center overflow-hidden gap-12 lg:h-[632px] lg:gap-0 lg:flex-row   lg:max-h-[632px]">
        <div className="w-96  text-center  lg:text-left lg:w-[50%]">
          <p className="text-textColor text-2xl font-semibold "> Pro.Beyond.</p>
          <p className="text-white text-[72px] font-thin ">
            IPhone 14 <span className="font-bold">Pro</span>
          </p>
          <p className="text-textColor text-[19px] font-medium mb-8  ">
            Created to change everything for the better. For everyone
          </p>
          <Button name="Shop Now" textColor="white" border="white" />
        </div>
        <div className=" h-[289px] lg:h-[500px]  ">
          <img
            className="w-[321px]  lg:h-[998px]  lg:w-[406px]"
            src="public\images\Iphone Image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
