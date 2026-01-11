
import Header from "@/components/layouts/Header";
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
