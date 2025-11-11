import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import type { RouteProps } from "react-router";
import { routePaths, AppRoutes } from "@/shared/config";


export const routeConfig:RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage/>
    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage/>
    }
]