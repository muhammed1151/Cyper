import { Categories } from "./ts/Categories";
import CategoryItem from "./UI/CategoryItem";
const Category = () => {
  const result = Categories.map((item) => {
    return <CategoryItem icon={item.icon} name={item.name} />;
  });
  return (
    <div className="px-4">
      <div className="pt-16 flex justify-between">
        <p className="text-2xl font-medium">Browse By Category</p>
        <div>
        <button>
          <img className="w-9" src="public\images\Arrow.png" alt="" />
        </button>
        <button>
          <img className="w-9" src="public\images\Arrow.png" alt="" />
        </button>
        </div>
        
      </div>

      <div className=" grid grid-cols-2  gap-4   py-12 pt-12 pb-16">
        {...result}
      </div>
    </div>
  );
};

export default Category;
