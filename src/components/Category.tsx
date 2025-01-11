import { Button } from "@headlessui/react";
import { Categories } from "./ts/Categories";
import CategoryItem from "./UI/CategoryItem";
const Category = () => {
  const result = Categories.map((item) => {
    return <CategoryItem icon={item.icon} name={item.name} />;
  });
  return (
    <div className=" container mx-auto ">
      <div className="container">
        <div className="pt-16 flex justify-between">
          <p className="text-2xl font-medium">Browse By Category</p>
          <div>
            <Button className="">
              <img className="w-9" src="public\images\Arrow.png" alt="" />
            </Button>
            <Button className="">
              <img className="w-9" src="public\images\Arrow.png" alt="" />
            </Button>
          </div>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-9 py-12 pt-12 pb-16 ">
          {...result}
        </div>
      </div>
    </div>
  );
};

export default Category;
