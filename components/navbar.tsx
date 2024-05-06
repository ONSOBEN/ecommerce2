"use client";
import { useState,useEffect } from "react";
import { useSession ,  signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { CartIcon } from "./icon/carticon/CartIcon";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { Badge } from "@nextui-org/react";
import { useAppSelector } from "@/redux/hooks";

export const Navbar = () => {
  const count = useAppSelector((state) => state.cart.products);
  const[loggedIn,setLoggedIn] = useState(false)
  const{data:session} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
        setLoggedIn(true);
    }
}, [session]);
  


  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Ecommerce</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <button onClick={()=>router.push('/cart')}>
            <Badge
              color="danger"
              content={count.length}
              isInvisible={false}
              shape="circle"
            >
              <CartIcon size={24} />
            </Badge>
          </button>
        </NavbarItem>
        {!loggedIn ? (
          <NavbarItem className="hidden md:flex">
  
              <Button
                className="text-sm font-normal text-default-600 bg-default-100"
                variant="flat"
                onClick={()=>router.push(`/login`)}
                
              >
                Login
              </Button>
        </NavbarItem>
          ) :(<div className="flex items-center gap-4">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src={session?.user?.image as string}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session?.user?.email }</p>
              </DropdownItem>
              
              <DropdownItem key="logout" color="danger" onClick={()=>signOut()}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </div>)
        }
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
