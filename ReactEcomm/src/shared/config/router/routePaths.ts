export const AppRoutes = {
    HOME: 'home',
    LOGIN: 'login',
} as const;


// creating a type instead of using Enum to avoid errors
type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

 export const routePaths:Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.LOGIN]:'/login'
};
