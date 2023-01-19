import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import { useDispatch } from "react-redux";
import { AddText } from "../shared/draw";

const DrawPanelComponent = (props) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  
  const canvasRef = useRef(null)

  useEffect(() => {

    var canvas = new fabric.Canvas("canvas");    
    // canvas = new fabric.Canvas(canvasRef.current, {
    //   width: 1080,
    //   height: 1080,
    // });

    canvas.setBackgroundColor("#aacc11");
    
    canvas.setWidth(1080);
    canvas.setHeight(1080);

    fabric.Object.prototype.transparentCorners = true;
    fabric.Object.prototype.cornerColor = "blue";
    fabric.Object.prototype.cornerStyle = "circle";
    dispatch({ type: "INIT", canvas: canvas });
    return () => {
      canvas.dispose();
    };
  }, []);


  const handleReplaceImage = (e) => {
    e.preventDefault();
    
    console.log('The link was clicked.');
    var canvas = new fabric.Canvas("canvas");
    
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'image') {
      activeObject.setSrc('new-image.jpg', () => {
        canvas.renderAll();
      });
    }
    console.log('The link was clicked.');
  }



  return (
    <>
      <div className="w-100 h-100" ref={containerRef}>
      <span className="border border-primary">
        <div >
          
          <canvas  ref={canvasRef} onClick={handleReplaceImage}  id="canvas" />

        </div>
        </span>
      </div>
    </>
  );
};

export default DrawPanelComponent;
