(this["webpackJsonpreact-canvas-paint"]=this["webpackJsonpreact-canvas-paint"]||[]).push([[0],{48:function(e,n,c){},49:function(e,n,c){},56:function(e,n){},57:function(e,n){},58:function(e,n){},68:function(e,n,c){"use strict";c.r(n);var a=c(0),t=c(23),r=c.n(t),i=(c(48),c.p,c(49),c(50),c(51),c(12)),s=c(14);function o(e,n){e.add(new i.fabric.IText("Type Here",{left:50,top:100,fontFamily:"arial black",fill:n,fontSize:50}))}var l=c(1),d=function(e){var n=Object(a.useRef)(null),c=Object(s.b)(),t=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=new i.fabric.Canvas("canvas");return e.setBackgroundColor("#aacc11"),e.setWidth(1080),e.setHeight(1080),i.fabric.Object.prototype.transparentCorners=!0,i.fabric.Object.prototype.cornerColor="blue",i.fabric.Object.prototype.cornerStyle="circle",c({type:"INIT",canvas:e}),function(){e.dispose()}}),[]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"w-100 h-100",ref:n,children:Object(l.jsx)("span",{className:"border border-primary",children:Object(l.jsx)("div",{children:Object(l.jsx)("canvas",{ref:t,onClick:function(e){e.preventDefault(),console.log("The link was clicked.");var n=new i.fabric.Canvas("canvas"),c=n.getActiveObject();c&&"image"===c.type&&c.setSrc("new-image.jpg",(function(){n.renderAll()})),console.log("The link was clicked.")},id:"canvas"})})})})})},u=c(3),b=c(39),j=c.p+"static/media/Cursor.43f02867.svg",v=c.p+"static/media/T.efb08d89.svg",O=c.p+"static/media/Image.80ed2f40.svg",p=c.p+"static/media/Clear.cba48e59.svg",f=c.p+"static/media/jpg.62a03104.svg",m=c.p+"static/media/png.829f6097.svg",g=c.p+"static/media/pdf.18d66a21.svg",h=c.p+"static/media/replace.b9c0023a.svg",x=c(77);var D=function(){var e=Object(b.a)("hex","#ff0000"),n=Object(u.a)(e,2),c=(n[0],n[1],Object(a.useState)(!1)),t=Object(u.a)(c,2),r=(t[0],t[1],Object(a.useState)("CURSOR")),i=Object(u.a)(r,2),o=i[0],d=i[1],D=Object(s.b)(),y=function(e){e.preventDefault();var n=e.target.files[0];if(n){var c=URL.createObjectURL(n);D({type:"IMAGE",url:c})}},C=[{name:"CURSOR",icon:j,type:"button",onClick:function(){D({type:"CURSOR"}),d("CURSOR")}},{name:"TEXT",icon:v,type:"button",onClick:function(){D({type:"TEXT",color:"#001122"}),d("TEXT")}},{name:"IMAGE",icon:O,type:"button",onClick:function(){d("IMAGE")}},{name:"REMOVEIMAGE",icon:h,type:"button",onClick:function(){d("IMAGE"),D({type:"CLEAR"})}},{name:"CLEAR",icon:p,type:"button",onClick:function(){D({type:"CLEAR"}),d("CLEAR")}},{name:"DOWNLOAD",icon:m,type:"button",onClick:function(){D({type:"DOWNLOAD"})}},{name:"DOWNLOADJPG",icon:f,type:"button",onClick:function(){D({type:"DOWNLOADJPG"})}},{name:"DOWNLOADPDF",icon:g,type:"button",onClick:function(){D({type:"DOWNLOADPDF"})}}];return Object(l.jsxs)("div",{className:"toolbar shadow px-2 py-4 rounded",children:[C.map((function(e){return Object(l.jsx)("div",{className:"text-center py-2",children:"dropdown"===e.type?Object(l.jsxs)(x.a,{children:[Object(l.jsx)(x.a.Toggle,{variant:"success",id:"dropdown-basic",style:{backgroundColor:"transparent",border:"none",boxShadow:o===e.name?"inset 0px 3px 6px #00000029":""},children:Object(l.jsx)("img",{src:e.icon,className:"icon"})}),Object(l.jsx)(x.a.Menu,{children:e.items.map((function(n){return Object(l.jsx)(x.a.Item,{onClick:function(){e.onClick(n.value)},children:n.label},n.label)}))})]}):Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{className:"toolbar-button cursor-pointer p-2",onClick:e.onClick,style:{boxShadow:o===e.name?"inset 0px 3px 6px #00000029":""},children:Object(l.jsx)("img",{src:e.icon,className:"icon"})}),"IMAGE"===e.name&&Object(l.jsx)("input",{type:"file",className:"d-none",onChange:y}),"REMOVEIMAGE"===e.name&&Object(l.jsx)("input",{type:"file",className:"d-none",onChange:y})]})},e.name)})),Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("a",{href:"#",onClick:function(e){D({type:"DOWNLOADPDF"})},children:"PDF"})})]})};var y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"font-weight-bold text-red font-size-xl pt-5",children:"#NFT DOGE"}),Object(l.jsxs)("div",{className:"py-2 panel-height row",children:[Object(l.jsx)("div",{className:"col-xl-1 col-lg-2 col-md-2 col-sm-3 mb-5",children:Object(l.jsx)(D,{})}),Object(l.jsx)("div",{className:"border col-xl-11 col-xl-10 col-md-10 col-sm-9 rounded",children:Object(l.jsx)(d,{})})]})]})},C=c(41),w=c(6);var E=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(C.a,{children:Object(l.jsx)(w.c,{children:Object(l.jsx)(w.a,{path:"/",children:Object(l.jsx)(y,{})})})})})},A=function(e){e&&e instanceof Function&&c.e(6).then(c.bind(null,256)).then((function(n){var c=n.getCLS,a=n.getFID,t=n.getFCP,r=n.getLCP,i=n.getTTFB;c(e),a(e),t(e),r(e),i(e)}))},R=c(30),N=c(2),k=c(42);var L=Object(R.a)({setReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{canvas:null,color:"#ff0000"},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT":return Object(N.a)(Object(N.a)({},e),{},{canvas:n.canvas});case"CURSOR":return e.canvas?(e.canvas.isDrawingMode=!1,Object(N.a)({},e)):e;case"TEXT":return e.canvas?(e.canvas.isDrawingMode=!1,o(e.canvas,n.color),Object(N.a)({},e)):e;case"BRUSH":return e.canvas?(e.canvas.freeDrawingBrush=new i.fabric.PencilBrush(e.canvas),e.canvas.freeDrawingBrush.width=35,e.canvas.freeDrawingBrush.color=n.color,e.canvas.isDrawingMode=!0,Object(N.a)({},e)):e;case"IMAGE":return e.canvas?(e.canvas.isDrawingMode=!1,console.log(n.url),i.fabric.Image.fromURL(n.url,(function(n){n.scaleToWidth(480),e.canvas.add(n)}),{crossOrigin:"anonymous"}),Object(N.a)({},e)):e;case"REMOVEIMAGE":var c;return e.canvas?(e.canvas.isDrawingMode=!1,"activeSelection"===(null===(c=t=e.canvas.getActiveObject())||void 0===c?void 0:c.type)?t.forEachObject((function(n){e.canvas.remove(n)})):e.canvas.remove(t),e.canvas.discardActiveObject(),e.canvas.requestRenderAll(),Object(N.a)({},e)):e;case"CLEAR":var a,t;return e.canvas?(e.canvas.isDrawingMode=!1,"activeSelection"===(null===(a=t=e.canvas.getActiveObject())||void 0===a?void 0:a.type)?t.forEachObject((function(n){e.canvas.remove(n)})):e.canvas.remove(t),e.canvas.discardActiveObject(),e.canvas.requestRenderAll(),Object(N.a)({},e)):e;case"DOWNLOAD":if(!e.canvas)return e;var r=document.createElement("a"),s=e.canvas.toDataURL({format:"png",multiplier:1,quality:1});return console.log(s),r.href=s,r.download="Online_Drawer.png",r.click(),Object(N.a)({},e);case"DOWNLOADJPG":if(!e.canvas)return e;var l=document.createElement("a"),d=e.canvas.toDataURL({format:"jpg",multiplier:1.066,quality:1});return console.log(d),l.href=d,l.download="Online_Drawer.jpg",l.click(),Object(N.a)({},e);case"DOWNLOADPDF":if(!e.canvas)return e;document.createElement("a");var u=e.canvas.toDataURL({format:"png",multiplier:1,quality:1}),b=new k.a;return b.addImage(u,"PNG",0,0,210,210,"MEDIUM"),b.save("download.pdf"),Object(N.a)({},e);default:return e}}}),I=Object(R.b)(L);r.a.render(Object(l.jsx)(s.a,{store:I,children:Object(l.jsx)(E,{})}),document.getElementById("root")),A()}},[[68,1,3]]]);
//# sourceMappingURL=main.7cfcf57b.chunk.js.map