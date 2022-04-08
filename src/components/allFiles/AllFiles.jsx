import React, { useState, useEffect } from 'react'
import './AllFiles.css';
import { FiEye, FiTrash } from 'react-icons/fi'
import axios from 'axios';
import  zipImage  from '../../assets/zip.png';
import  docImage  from '../../assets/doc.png';
import  pdfImage  from '../../assets/pdf.png';
import  pptImage  from '../../assets/ppt.png';
import  xlsxImage  from '../../assets/xlsx.png';
import  jpgImage  from '../../assets/jpg.png';

function AllFiles() {
    const [allFiles, setAllFiles] = useState();
    const [response, setResponse] = useState(null);
    const [alert, setAlert] = useState(false)
    const [previewData, setPreviewData] = useState(null);
    const [id, setId] = useState("")
    console.log(previewData)

    useEffect(() => {
        axios.get(`http://localhost:8000/create/books/all`)
        .then(filesData => setAllFiles(filesData.data))
        .catch(error => console.log(error))
    }, [response])

    const addedAlert = (id) => {
        if(id){
            axios.delete(`https://desolate-dawn-81730.herokuapp.com/create/schools/${id}`)
            .then(deletedFile => setResponse(deletedFile))
            .catch(error => console.log(error))
           setAlert(!alert)
        }
    }

    const alertFunction = (id) => {
        setId(id)
      setAlert(!alert)
    }

    function getFileType(fileType){
        if(fileType.includes("pdf")){
          return <img src={pdfImage} alt="" />
        }
        else if(fileType.includes("doc")){
          return  <img src={docImage} alt=""/>
        }
        else if(fileType.includes("ppt")){
          return  <img src={pptImage} alt=""/>
        }
        else if(fileType.includes("xls")){
          return  <img src={xlsxImage} alt=""/>
        }
        else if(fileType.includes("jpg")){
          return  <img src={jpgImage} alt=""/>
        }
        else{
          return  <img src={zipImage} alt=""/>
        }
      }

    return (
        <div className="all__files">
            <ul className="collection">
                {allFiles?.map((files) => (
                        <li className="collection_item">
                            {getFileType(files?.fileType)}
                            <div className="item_detail">
                                <h2>{files?.fileName}</h2>
                                <p className="item_date">{[...files?.date].splice(0,[...files?.date].indexOf("T")).join("")}</p>
                                <p className="item_size">{`${files?.fileSize} ${files?.sizeType} ${files?.fileType.toUpperCase()}`}</p>
                            </div>
                            <a
                                rel="noreferrer"
                                href={files?.view}
                                target="_blank"
                                className="preview_btn"
                                onClick={() => setPreviewData(files?.view)}
                                >
                                {" "}
                                <FiEye /> Ko'rish
                            </a>
                            {/* <button className="preview_btn"> <FiEye/> Ko'rish</button> */}
                            <button
                                onClick={() => alertFunction(files?._id)} 
                                className="download_btn2"> 
                                <FiTrash/> O'chirish
                            </button>
                        </li>                    
                ))}
            </ul>
            {alert
                    ? 
                        <div className="alert">
                            <h2>Shu faylni o'chirmoqchimisiz?</h2>
                            <button onClick={() => addedAlert(id)} className='alert_yes'>Ha</button>
                            <button onClick={() => setAlert(!alert)} className='alert_no'>Yo'q</button>
                        </div>
                    :
                        <> </>
            }
        </div>
    )
}

export default AllFiles;
