import { fabric } from "fabric";
import { combineReducers } from "redux";
import {  AddText } from "../shared/draw";
import jsPDF from "jspdf";


function setReducer(state = { canvas: null, color:"#ff0000" }, action) {
    switch (action.type) {
        case "INIT": {
            return { ...state, canvas: action.canvas };
        }
        case "CURSOR": {
            if(!state.canvas){
                return state;
            }
            state.canvas.isDrawingMode = false;
            return { ...state };
        }
        
        case "TEXT": {
            if(!state.canvas){
                return state;
            }
            state.canvas.isDrawingMode = false; 
            AddText(state.canvas, action.color);
            return { ...state };
        }
        case "BRUSH": {
            if(!state.canvas){
                return state;
            }
            state.canvas.freeDrawingBrush = new fabric.PencilBrush(state.canvas);
            state.canvas.freeDrawingBrush.width = 35;
            state.canvas.freeDrawingBrush.color = action.color;
            state.canvas.isDrawingMode = true;
            return { ...state };
        }
        case "IMAGE": {
            if(!state.canvas){
                return state;
            }
            state.canvas.isDrawingMode = false;
            console.log(action.url);
            fabric.Image.fromURL(action.url, function(image) {
                image.scaleToWidth(480);
                state.canvas.add(image);
            }, { crossOrigin: 'anonymous' });
            return { ...state };
        }
        case "REMOVEIMAGE": {
            if(!state.canvas){
                return state;
            }
            state.canvas.isDrawingMode = false;
            var selection = state.canvas.getActiveObject();
            if (selection?.type === 'activeSelection') {
                selection.forEachObject(function(element) {
                    state.canvas.remove(element);
                });
            }
            else{
                state.canvas.remove(selection);
            }
            state.canvas.discardActiveObject();
            state.canvas.requestRenderAll();
            return { ...state };
        }
        case "CLEAR": {
            if(!state.canvas){
                return state;
            }
            state.canvas.isDrawingMode = false;
            var selection = state.canvas.getActiveObject();
            if (selection?.type === 'activeSelection') {
                selection.forEachObject(function(element) {
                    state.canvas.remove(element);
                });
            }
            else{
                state.canvas.remove(selection);
            }
            state.canvas.discardActiveObject();
            state.canvas.requestRenderAll();
            return { ...state };
        }
        case "DOWNLOAD": {
            if(!state.canvas){
                return state;
            }
            const a = document.createElement("a");
            const uri = state.canvas.toDataURL({format: 'png', multiplier: 1, quality: 1});
            console.log(uri);
            a.href = uri
            a.download = "Online_Drawer.png";
            a.click();
            return { ...state };
        }
        
        case "DOWNLOADJPG": {
            if(!state.canvas){
                return state;
            }
            const a = document.createElement("a");
            const uri = state.canvas.toDataURL({format: 'jpg', multiplier: 1.066, quality: 1});
            console.log(uri);
            a.href = uri
            a.download = "Online_Drawer.jpg";
            a.click();
            return { ...state };
        }
        
        case "DOWNLOADPDF": {
            if(!state.canvas){
                return state;
            }
            
            const a = document.createElement("a");
            const divImage = state.canvas.toDataURL({format: 'png', multiplier: 1, quality: 1});
            // const divImage = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(divImage, 'PNG', 0, 0,210,210, 'MEDIUM');
            
            pdf.save("download.pdf");          
            return { ...state };
        }
        default:
            return state;
    }
}

export const reducers = combineReducers({
    setReducer
})