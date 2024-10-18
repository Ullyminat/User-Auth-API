import Auth from "../components/auth";
import Home from "../components/home";
import Register from "../components/register";
import Profile from "../components/profle";

export const publicRoutes=[
    {
        name:'Главная',
        path:'/',
        component:Home
    },
    {
        name:'Регистрация',
        path:'/register',
        component:Register
    },
    {
        name:'Авторизация',
        path:'/auth',
        component:Auth
    }
];

export const authRoutes =[
    {
        name:'Главная',
        path:'/',
        component:Home
    },
    {
        name:'Профиль',
        path:'/profile',
        component:Profile
    }
];

export const adminRoutes =[
    
];