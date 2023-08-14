import React, { useContext } from "react";

const SoundContext = React.createContext();

function SoundContextProvider({ children }) {
  const [isMuted, setIsMuted] = React.useState(false);
  const [dummyValue, setDummyValue] = React.useState(0);
  return (
    <SoundContext.Provider
      value={{ isMuted, setIsMuted, dummyValue, setDummyValue }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be within SoundContextProvider!");
  }
  return context;
}

export default SoundContextProvider;
