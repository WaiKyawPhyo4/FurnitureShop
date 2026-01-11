import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";

function Header() {
  return (
    <div className="w-full border-b">
      <div className="container flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
      </div>
    </div>
  );
}

export default Header;
