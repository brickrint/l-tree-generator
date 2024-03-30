// Importing the DI-container:
import { container } from '../composition';

// ...the interface:
import { SystemBuilder } from './types';

// ...and the implementation:
import { Builder } from './implementation';

container.registerSingleton<SystemBuilder, Builder>();