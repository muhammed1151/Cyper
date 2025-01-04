import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Category from "../Category";

const RecentComponent = () => (
  <div>
    <h2 className="text-white font-bold">Recent Posts</h2>
    <p className="text-white/80">Content for Recent posts goes here.</p>
  </div>
);

const PopularComponent = () => <Category />;

const TrendingComponent = () => (
  <div>
    <h2 className="text-white font-bold">Trending Posts</h2>
    <p className="text-white/80">Content for Trending posts goes here.</p>
  </div>
);

const categories = [
  {
    name: "Recent",
    component: RecentComponent,
  },
  {
    name: "Popular",
    component: PopularComponent,
  },
  {
    name: "Trending",
    component: TrendingComponent,
  },
];

export default function Taps() {
  return (
    <div className="flex  bg-black w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, component: Component }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <Component />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
