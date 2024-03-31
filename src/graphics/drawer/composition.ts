import { contextProvider } from "../context/composition";
import { CanvasDrawer } from "./implementation";

export const drawer = new CanvasDrawer(contextProvider);
