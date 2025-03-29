import MainLayout from "../../layouts/mainLayout";
import HomeUserMantainer from "../../pages/Home/Home";

const routesPages = [
  {
    path: '/',
    title: 'Home',
    component: HomeUserMantainer, 
    layout: MainLayout,
  },
];

export default routesPages;
