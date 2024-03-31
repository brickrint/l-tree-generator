import { Drawer, BrushSettings } from './types';
import { DrawingContext, DrawingContextProvider } from '../context/types';

export class CanvasDrawer implements Drawer {
  private context: DrawingContext = null;

  constructor(private contextProvider: DrawingContextProvider) {
    this.context = this.contextProvider.getInstance();
    if (!this.context) throw new Error('Failed to access the drawing context.');
  }

  public drawLine({ start, end }: Line, { color, width }: BrushSettings = {}): void {
    if (!this.context) return;

    this.context.strokeStyle = color ?? 'black';
    this.context.lineWidth = width ?? 2;

    // The beginPath, moveTo, lineTo, and stroke methods are
    // a direct dependency on `CanvasRenderingContext2D`:

    this.context.beginPath();
    this.context.moveTo(start.x, start.y);
    this.context.lineTo(end.x, end.y);
    this.context.stroke();
  }
}