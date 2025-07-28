import { Outlet } from "react-router";

import AppContainer from "./app-container";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <AppContainer>
        <Outlet />
      </AppContainer>
    </Providers>
  );
}

export default App;
