//Draw Rect
import { fabric } from "fabric";

export function AddText(canvas, color) { 
  canvas.add(new fabric.IText('Type Here', { 
      left: 50,
      top: 100,
      fontFamily: 'arial black',
      fill: color,
      fontSize: 50
  }));
}