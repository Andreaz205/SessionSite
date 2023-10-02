import { useContext } from "react";
import { ScreenContext } from "@/src/shared/contexts";

export const useScreen = () => {
    const context = useContext(ScreenContext);

    if (context !== undefined) {
        return context;
    }
    throw new Error("You can't use context outside of context provider");
};