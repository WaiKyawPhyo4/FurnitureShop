import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";

function Header() {
  return (
    <div className="w-full border-b">
      <div className="container flex h-16 items-center mx-auto">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav}/>
      </div>
    </div>
  );
}

export default Header;
