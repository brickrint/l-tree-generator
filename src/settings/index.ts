import { SystemSettings } from "../l-system/types";

export type AppSettings = {
  canvasSize: Size;

  iterations: SystemSettings['iterations'];
  initiator: SystemSettings['initiator'];
  rules: SystemSettings['rules'];
  
  jointAngle: Angle
  stemLength: PixelsAmount
}

export const settings: AppSettings = {
  canvasSize: {
    width: 800,
    height: 600
  },

  iterations: 5,
  initiator: '0',
  rules: {
    '1': '11',
    '0': '1[0]0'
  },
  jointAngle: 45,
  stemLength: 10
}
