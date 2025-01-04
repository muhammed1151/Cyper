import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function NavBar() {
  return (
    <div className="flex      justify-center  ">
      <div className="flex gap-8">
        <Popover>
          <PopoverButton className="   block  h-full text-sm/6 font-medium text-[#656565] focus:outline-none  data-[active]:text-black transition-all duration-500  data-[focus]:outline-1 data-[focus]:outline-white">
            Home
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y mt-10  divide-white/5 rounded-xl backdrop-blur-sm  bg-white/50 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-9)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">
                  Start integrating products and tools
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton className="block h-full text-sm/6 font-semibold text-black focus:outline-none     data-[focus]:outline-1 data-[focus]:outline-white">
            Home
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y mt-10  divide-white/5 rounded-xl backdrop-blur-sm  bg-white/50 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-9)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">
                  Start integrating products and tools
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton className="block h-full text-sm/6 font-semibold text-black focus:outline-none     data-[focus]:outline-1 data-[focus]:outline-white">
            Home
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y mt-10  divide-white/5 rounded-xl backdrop-blur-sm  bg-white/50 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-9)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">
                  Start integrating products and tools
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
