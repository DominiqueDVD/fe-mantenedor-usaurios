import HeaderComponent from "../components/heder/headerComponent";
import FooterComponent from "../components/footer/footerComponent";
import { ReactNode } from "react";
import "./mainLayout.css"

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <HeaderComponent />
      <main className="content">{children}</main>
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
