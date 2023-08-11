"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../store/reducer";

function HeaderRedux() {
  const id = React.useId();
  const isMuted = useSelector((state) => state.slice.value);

  const dispatch = useDispatch();

  console.log(isMuted);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Redux💩 Website</a>

        <button
          onClick={() => {
            dispatch(changeValue());
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

export default HeaderRedux;
