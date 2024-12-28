export const FooterM = () => {
  return (
    <footer className="bg-[#181313] relative  w-full flex flex-col items-center pt-12 px-[30px]">
      <a href="">
        <img src="public\images\LogoW.png" className=" w-24 h-8 " />
      </a>
      <p className="text-secondary text-center mt-4 ">
        We are a residential interior design firm located in Portland. Our
        boutique-studio offers more than
      </p>
      <h1 className="text-white font-semibold mt-8 mb-5">Services </h1>
      <div className="text-secondary flex flex-col text-center">
        <a className="mb-5" href="#">
          Bonus program
        </a>
        <a className="mb-5" href="#">
          Gift cards
        </a>
        <a className="mb-5" href="#">
          Credit and payment
        </a>
        <a className="mb-5" href="#">
          Service contracts
        </a>
        <a className="mb-5" href="#">
          Non-cash account
        </a>
        <a className="mb-5" href="#">
          Payment
        </a>
      </div>
      <h1 className="text-white font-semibold mt-8 mb-5">
        Assistance to the buyer{" "}
      </h1>
      <div className="text-secondary flex flex-col text-center">
        <a className="mb-5" href="#">
          Find an order
        </a>
        <a className="mb-5" href="#">
          Terms of delivery
        </a>
        <a className="mb-5" href="#">
          Exchange and return of goods
        </a>
        <a className="mb-5" href="#">
          Guarantee
        </a>
        <a className="mb-5" href="#">
          Frequently asked questions
        </a>
        <a className="mb-5" href="#">
          Terms of use of the site
        </a>
      </div>
      <div></div>
    </footer>
  );
};

export default FooterM;
