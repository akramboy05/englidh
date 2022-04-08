import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import axios from 'axios';
import zipImage from '../../assets/zip.png';
import docImage from '../../assets/doc.png';
import pdfImage from '../../assets/pdf.png';
import pptImage from '../../assets/ppt.png';
import xlsxImage from '../../assets/xlsx.png';
import jpgImage from '../../assets/jpg.png';
import { FiDownload, FiEye } from "react-icons/fi";


function SearchedItem() {
    const params = useParams();
    const [searchedFile, setSearchedFile] = useState(null);
    useEffect(() => {
        if(params?.itemId){
            axios.get(`https://desolate-dawn-81730.herokuapp.com/create/schools/${params?.itemId}`)
            .then(response => setSearchedFile(response?.data))
            .catch(err => console.log(err))
        }
    }, [params?.itemId])
    function getFileType(fileType) {
        if (fileType?.includes("pdf")) {
            return <img src={pdfImage} alt="" />
        }
        else if (fileType?.includes("doc")) {
            return <img src={docImage} alt="" />
        }
        else if (fileType?.includes("ppt")) {
            return <img src={pptImage} alt="" />
        }
        else if (fileType?.includes("xls")) {
            return <img src={xlsxImage} alt="" />
        }
        else if (fileType?.includes("jpg")) {
            return <img src={jpgImage} alt="" />
        }
        else {
            return <img src={zipImage} alt="" />
        }
    }

    document.title = searchedFile?.fileName;
    console.log(searchedFile);
    return (
        <div className="searchedItem">
            {
                searchedFile && <li className="collection_item">
                    {getFileType(searchedFile?.fileType)}
                <div className="item_detail">
                    <h2 className="item_name">{searchedFile?.fileName.length > 80 ? `${[...searchedFile?.fileName].slice(0, 80).join("")}...` : searchedFile?.fileName}</h2>
                    <p className="item_date">
                        {[...searchedFile?.date].splice(0, [...searchedFile?.date].indexOf("T")).join("")}
                    </p>
                    <p className="item_size">{`${searchedFile?.fileSize} ${searchedFile?.sizeType
                        } ${searchedFile?.fileType.toUpperCase()}`}</p>
                </div>

                <a
                    rel="noreferrer"
                    href={searchedFile?.view}
                    target="_blank"
                    className="preview_btn"
                >
                    {" "}
                    <FiEye /> Ko'rish
                </a>
                <a rel="noreferrer" href={searchedFile?.actualFile} className="download_btn">
                    {" "}
                    <FiDownload /> Yuklash
                </a>
            </li>
            }
        </div>
    )
}

export default SearchedItem
