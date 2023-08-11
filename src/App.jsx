import "./App.css";
import Header from "./components/Header";
import HeaderRedux from "./components/Header/HeaderRedux";

import SoundContextProvider from "./components/SoundContext/SoundContext";
import { Home } from "./page";
import { HomeRedux } from "./pageRedux";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <HeaderRedux />
        <HomeRedux />
      </Provider>
      <SoundContextProvider>
        <Header />
        <Home />
      </SoundContextProvider>
    </>
  );
}

export default App;
