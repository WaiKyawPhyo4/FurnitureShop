import React from "react";
import { Link } from "react-router";
import type { MainNavItem } from "@/types";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MainNavigationProps {
  items?: MainNavItem[];
}


export default function MobileNavigation({items}: MainNavigationProps) {
  return (
    <div className="">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-4 size-5" >
          <Icons.menu aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" >
        
      </SheetContent>
    </Sheet>
    </div>
  )
}


