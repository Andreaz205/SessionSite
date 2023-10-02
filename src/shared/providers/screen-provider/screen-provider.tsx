import {useEffect, useState} from "react";
import {Screen} from "@/src/shared/api/types";
import {ScreenContext} from "@/src/shared/contexts";
import {defineScreen} from "@/src/shared/lib/define-screen";

type ScreenProvider = { children?: React.ReactNode };

export const ScreenProvider = (props: ScreenProvider) => {
  const screen = useScreenProvider();

  return (
    <ScreenContext.Provider value={screen.screen}>
      {props.children}
    </ScreenContext.Provider>
  );
};

const useScreenProvider = () => {
  const [screen, setScreen] = useState<Screen | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      setScreen(defineScreen(window.innerWidth));
      window.addEventListener("resize", (e) =>
        setScreen(defineScreen(window.innerWidth))
      );
    } else {
      setScreen(defineScreen(1920));
    }
  }, []);

  return { screen };
};
