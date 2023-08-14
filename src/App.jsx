import "./App.css";
import Header from "./components/Header";
import HeaderRedux from "./components/Header/HeaderRedux";
import DummyComp from "./components/DummyComp/DummyComp";
import DummyCompRedux from "./components/DummyComp/DummyCompRedux";

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
        <DummyCompRedux />
        <HomeRedux />
      </Provider>
      <SoundContextProvider>
        <Header />
        <DummyComp />
        <Home />
      </SoundContextProvider>
    </>
  );
}

export default App;
