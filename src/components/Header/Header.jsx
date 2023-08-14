import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { useSoundContext } from "../SoundContext/SoundContext";

function Header() {
  const { isMuted, setIsMuted } = useSoundContext();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setIsMuted((prev) => !prev);
          }}
        >
          {!isMuted ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {!isMuted ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
