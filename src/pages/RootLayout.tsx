import { Outlet } from 'react-router'
import Header from "@/components/layouts/header"


function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <div>Footer</div>
    </div>
  )
}

export default RootLayout