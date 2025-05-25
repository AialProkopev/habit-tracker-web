import { ReactNode } from "react";
import { Outlet } from "react-router";

import Menu from "@/features/menu/menu.page";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <div className="wrapper">
        <Menu />
        <MainPage>
          <Outlet />
        </MainPage>
      </div>
    </Providers>
  );
}

interface MainPageProps {
  children: ReactNode | ReactNode[];
}

function MainPage({ children }: MainPageProps) {
  return <div className="main-page">{children}</div>;
}

export default App;
