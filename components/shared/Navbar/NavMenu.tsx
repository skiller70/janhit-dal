/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" ">About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[400px] px-2.5 py-5">
              <NavigationMenuLink className="flex gap-2">
                <Link
                  href="/about"
                  className=" hover:bg-accent flex-1 rounded-md p-2"
                >
                  <p className=" font-medium"> History</p>
                  <p>Paving the Way for a Better India</p>
                </Link>
                <Link
                  href="/about"
                  className=" hover:bg-accent flex-1 rounded-md p-2"
                >
                  <p className=" font-medium"> History</p>
                  <p> For a Cohesive Future</p>
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>For Voter</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[400px] px-2.5 py-5">
              <NavigationMenuLink className=" flex flex-col gap-2">
                <div className=" flex">
                  <Link
                    href="/about"
                    className=" hover:bg-accent flex-1 rounded-md p-2"
                  >
                    <p className=" font-medium"> History</p>
                    <p>Paving the Way for a Better India</p>
                  </Link>

                  <Link
                    href="/about"
                    className=" hover:bg-accent flex-1 rounded-md p-2"
                  >
                    <p className=" font-medium"> History</p>
                    <p>Paving the Way for a Better India</p>
                  </Link>
                </div>

                <div className=" flex">
                  <Link
                    href="/about"
                    className=" hover:bg-accent flex-1 rounded-md p-2"
                  >
                    <p className=" font-medium"> History</p>
                    <p>Paving the Way for a Better India</p>
                  </Link>

                  <Link
                    href="/about"
                    className=" hover:bg-accent flex-1 rounded-md p-2"
                  >
                    <p className=" font-medium"> History</p>
                    <p>Paving the Way for a Better India</p>
                  </Link>
                </div>

                {/*                 
                <Link href="/about">Vision</Link>
                <Link href="/about">Project</Link>
                <Link href="/about">Schemes</Link>
                <Link href="/about">Mission</Link> */}
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[500px] px-2.5 py-8">
              <NavigationMenuLink className=" flex gap-3">
                <Link
                  href="/about"
                  className="flex-1 rounded-md bg-slate-100 p-4"
                >
                  <p className=" font-medium"> Press Release</p>
                  <p className="pt-1">
                    {" "}
                    Exciting News Alert! We&apos;re proud to introduce Janhit
                    Dal
                  </p>
                </Link>

                <div className=" flex flex-col">
                  <Link
                    href="/about"
                    className=" hover:bg-accent flex-1 rounded-md p-2"
                  >
                    <p className="  font-medium"> Photo Gallery</p>
                    <p className="">Press Conference Highlights</p>
                  </Link>

                  <Link
                    href="/about"
                    className=" hover:bg-accent flex-1 rounded-md p-2"
                  >
                    <p className=" font-medium"> Video Gallery</p>
                    <p>Launch Event Highlights</p>
                  </Link>
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
