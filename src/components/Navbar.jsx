import Wrapper from "@/providers/Wrapper";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Wrapper className="">
      <div className="md:px-16 px-0 ">
        <nav className=" md:p-2 bg-background py-6  fixed md:top-6  top-0 left-1/2 transform -translate-x-1/2 max-w-7xl w-full z-10 flex items-center justify-between px-10">
          <div className="logo">
            <h1 className="text-3xl font-bold  text-secondary font-poiret leading-[.99]">
              EVE <br /> RADAR.
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Dashboard", "Team", "Projects", "Calendar"].map(
                (item, index) => (
                  <Link
                    href={""}
                    key={index}
                    className={`text-secondary hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <MenuIcon className="text-secondary" />
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
