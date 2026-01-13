import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toggle";

function header() {
  return (
    <div className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />

        <div className="mr-8 flex flex-1 items-center justify-end space-x-4 ">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default header;
