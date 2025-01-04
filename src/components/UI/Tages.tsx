import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { products } from "../ts/products";
import ProductsItem from "./ProductsItem";

export default function Tags() {
  const newArrivalproduct = products.map((product) => (
    <ProductsItem
      img={product.img}
      details={product.details}
      price={product.price}
    />
  ));

  return (
    <div className="flex w-full mb-7 pt-5 items-center">
      <TabGroup>
        <TabList className="flex gap-4 mx-3 mb-8">
          <Tab className="py-1 flex gap-3 text-lg font-medium  text-[#808080] focus:outline-none data-[selected]:border-b-2 data-[selected]:border-black data-[selected]:text-black data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
            New Arrival
          </Tab>
          <Tab className="py-1 flex gap-3 text-lg font-medium  text-[#808080] focus:outline-none data-[selected]:border-b-2 data-[selected]:border-black data-[selected]:text-black data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
            Bestseller
          </Tab>
          <Tab className="py-1 flex gap-3 text-lg font-medium  text-[#808080] focus:outline-none data-[selected]:border-b-2 data-[selected]:border-black data-[selected]:text-black data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
            Featured Products
          </Tab>
        </TabList>
        <TabPanels className=" mx-3">
          <TabPanel className="grid gap-3 grid-cols-2 lg:grid-cols-4 ">
            {newArrivalproduct}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
