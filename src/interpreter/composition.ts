import { startPointSelector } from "../geometry/location/composition";
import { shapeBuilder } from "../geometry/shape/composition";
import { settings } from "../settings";
import { SystemToGeometryMapper } from "./implementation";
import { stack } from "./stack/composition";

export const interpreter = new SystemToGeometryMapper(shapeBuilder, startPointSelector, stack, settings);