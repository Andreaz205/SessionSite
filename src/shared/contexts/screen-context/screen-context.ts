import { createContext } from "react";
import { Screen } from "@/src/shared/api/types";

export const ScreenContext = createContext<Screen | null>(null);
