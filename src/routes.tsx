import {
  createBrowserRouter
} from "react-router";
import Home from "@/pages/Home";
import RootLayout from "@/pages/RootLayout";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/Error";




export const router = createBrowserRouter([
    {path: "/", Component: RootLayout,
        ErrorBoundary: ErrorPage,
        children: [
        {index: true, Component: Home },
        {path: "/contact", Component: Contact },
    ],

    },
]);