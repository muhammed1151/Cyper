import { Button } from "./UI/Buttons";

const LandingPage = () => {
  return (
    <div className="bg-[#211C24] flex flex-col text-center items-center pt-[88px]">
      <p className="text-textColor text-2xl font-semibold "> Pro.Beyond.</p>
      <p className="text-white text-[72px] font-thin">
        IPhone 14
        <span className="font-bold">
          <br /> Pro
        </span>
      </p>
      <p className="text-textColor text-[19px] font-medium mb-8">
        Created to change everything for the better. For everyone
      </p>
      <Button name="Shop Now" textColor="white" border="white" />
      <div className="mt-12 h-[289px] overflow-hidden">
        <img
          className="w-[321px]"
          src="public\images\Iphone Image.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default LandingPage;
