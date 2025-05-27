import { ReactNode } from "react";
import { Outlet } from "react-router";

import Menu from "@/features/menu";
import AppContainer from "./app-container";
import Providers from "./providers";

interface MainPageProps {
  children: ReactNode | ReactNode[];
}
function MainPage({ children }: MainPageProps) {
  return (
    <div className="flex w-full h-full bg-smokyblack text-french-grey">
      <Menu />
      {children}
    </div>
  );
}

function App() {
  return (
    <Providers>
      <AppContainer>
        <MainPage>
          <Outlet />
        </MainPage>
      </AppContainer>
    </Providers>
  );
}

export default App;
