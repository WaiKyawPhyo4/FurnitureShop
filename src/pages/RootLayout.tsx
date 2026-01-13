
import Header from "@/components/layouts/header";
import { Outlet } from "react-router";


function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default RootLayout;
