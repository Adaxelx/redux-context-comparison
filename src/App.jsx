import "./App.css";
import Header from "./components/Header";

import SoundContextProvider from "./components/SoundContext/SoundContext";
import { Home } from "./page";
function App() {
  return (
    <>
      <SoundContextProvider>
        <Header />
        <Home />
      </SoundContextProvider>
    </>
  );
}

export default App;
