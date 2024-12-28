import { ICategory } from "../ts/interfaces";

const CategoryItem = ({ icon, name }: ICategory) => {
  return (
    <div className="bg-[#ededed] px-14 py-6 flex-col flex items-center justify-center rounded-2xl ">
      <img className="w-12 h-12 " src={icon} />
      <p className="text-nowrap">{name}</p>
    </div>
  );
};

export default CategoryItem;
