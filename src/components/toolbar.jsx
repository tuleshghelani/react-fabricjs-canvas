import React, { useEffect, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import CursorIcon from '../assets/imgs/icons/Cursor.svg';
import TextIcon from '../assets/imgs/icons/T.svg';
import ImageIcon from '../assets/imgs/icons/Image.svg';
import ClearIcon from '../assets/imgs/icons/Clear.svg';
import JpgIcon from '../assets/imgs/icons/jpg.svg'
import PngIcon from '../assets/imgs/icons/png.svg'
import PdfIcon from '../assets/imgs/icons/pdf.svg'
import ReplaceIcon from '../assets/imgs/icons/replace.svg'
import { Dropdown, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function ToolbarComponent() {
    
    const [color, setColor] = useColor("hex", "#ff0000");
    const [show, setShow] = useState(false);
    const [selectedTool, setSelectedTool] = useState("CURSOR");
    const dispatch = useDispatch();

    // const handleClose = () => { setShow(false); color?dispatch({type: 'COLOR', color: color?.hex}): "";}
    const handleShow = () => setShow(true);

    const photoUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
          const objectUrl = URL.createObjectURL(file);
          dispatch({type:"IMAGE", url: objectUrl})
        }
    };

    const buttons = [
        {
            name: "CURSOR",
            icon: CursorIcon,
            type: "button",
            onClick: () => { dispatch({type: 'CURSOR'}); setSelectedTool('CURSOR') }
        },
        {
            name: "TEXT",
            icon: TextIcon,
            type: "button",
            onClick: () => { dispatch({type: 'TEXT', color: '#001122'}); setSelectedTool('TEXT') }
        },
        {
            name: "IMAGE",
            icon: ImageIcon,
            type: "button",
            onClick: () => { setSelectedTool('IMAGE') }
        },  
        {
            name: "REMOVEIMAGE",
            icon: ReplaceIcon,
            type: "button",
            onClick: () => { setSelectedTool('IMAGE'); dispatch({type: 'CLEAR'}) }
        },  
        {
            name: "CLEAR",
            icon: ClearIcon,
            type: "button",
            onClick: () => { dispatch({type: 'CLEAR'}); setSelectedTool('CLEAR') }
        },
        {
            name: "DOWNLOAD",
            icon: PngIcon,
            type: "button",
            onClick: () => { dispatch({type: 'DOWNLOAD'}); }
        },
        {
            name: "DOWNLOADJPG",
            icon: JpgIcon,
            type: "button",
            onClick: () => { dispatch({type: 'DOWNLOADJPG'}); }
        }, 
        {
            name: "DOWNLOADPDF",
            icon: PdfIcon,
            type: "button",
            onClick: () => { dispatch({type: 'DOWNLOADPDF'}); }
        },  
    ]
    

    const downloadPDF = (e) => {
        { dispatch({type: 'DOWNLOADPDF'}); }
    }

    return (
        <div className="toolbar shadow px-2 py-4 rounded">
            {
                buttons.map( button => (
                    <div className="text-center py-2" key={button.name}>
                        {
                            (button.type === "dropdown") ? <Dropdown>
                                <Dropdown.Toggle 
                                    variant="success" 
                                    id="dropdown-basic" 
                                    style={{backgroundColor:'transparent', border: "none", boxShadow: (selectedTool===button.name)?"inset 0px 3px 6px #00000029": ""}}
                                >
                                    <img src={button.icon} className="icon"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        button.items.map(item => (
                                            <Dropdown.Item key={item.label} onClick={() => {button.onClick(item.value)}}>{item.label}</Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>: <label>    
                                <div className="toolbar-button cursor-pointer p-2" onClick={button.onClick} style={{boxShadow: (selectedTool===button.name)?"inset 0px 3px 6px #00000029": ""}}>
                                    <img src={button.icon} className="icon"/>
                                </div>
                                {button.name === "IMAGE" && <input type="file" className="d-none" onChange={photoUpload}/>}
                                {button.name === "REMOVEIMAGE" && <input type="file" className="d-none" onChange={photoUpload}/>}
                            </label>

                        }
                    </div>
                ) )
            }

            <div className="d-flex justify-content-center">
                <a href="#" onClick={downloadPDF}  >
                    PDF
                </a>

            </div>

            
        </div>
    )
}

export default ToolbarComponent;
