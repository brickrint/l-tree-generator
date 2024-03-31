import { CanvasContextProvider } from './implementation';
import { pixelRatioSource, source } from '../../dom/composition';
import { settings } from '../../settings';

export const contextProvider = new CanvasContextProvider(source, pixelRatioSource, settings);


