import { useSoundContext } from "../SoundContext/SoundContext";

const DummyComp = () => {
  const { dummyValue } = useSoundContext();
  return (
    <div>
      <h3>{`Some weird value:  ${dummyValue}`}</h3>
    </div>
  );
};

export default DummyComp;
