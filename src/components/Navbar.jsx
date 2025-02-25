"use client";
import Wrapper from "@/providers/Wrapper";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Wrapper className="">
      <div className="md:px-16 px-0">
        <nav
          className={`border-b-1 border-bg-primary md:p-2 bg-background py-6 z-40 fixed
          transition-transform duration-300 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
          left-1/2 transform -translate-x-1/2 max-w-7xl w-full flex items-center justify-between px-10`}
        >
          <div className="logo">
            <Link
              href={"/"}
              className="text-3xl font-bold cursor-pointer text-primary font-poiret leading-[.99]"
            >
              EVE <br /> RADAR.
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Dashboard", "Team", "Projects", "Calendar"].map(
                (item, index) => (
                  <Link
                    href={""}
                    key={index}
                    className={`text-primary hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <MenuIcon className="text-primary" />
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
