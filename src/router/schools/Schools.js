import React, { useEffect, useState } from "react";
import "./Schools.css";
import axios from "axios";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import Header from "../../components/header/Header";
import zipImage from "../../assets/zip.png";
import docImage from "../../assets/doc.png";
import pdfImage from "../../assets/pdf.png";
import pptImage from "../../assets/ppt.png";
import xlsxImage from "../../assets/xlsx.png";
import jpgImage from "../../assets/jpg.png";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import FileItem from "../../components/file-item/FileItem";

// import FileViewer from 'react-file-viewer';

function Schools() {
  const { url } = useRouteMatch();
  const path = useLocation();
  const [allFiles, setAllFiles] = useState(null);
  useEffect(() => {
    setAllFiles(null);

    axios
      .get(`http://localhost:8000/create/books/all`)
      .then((schoolFiles) => setAllFiles(schoolFiles.data))
      .catch((err) => console.error(err));
  }, [path.pathname]);

  function getFileType(fileType) {
    if (fileType.includes("pdf")) {
      return <img src={pdfImage} alt="" />;
    } else if (fileType.includes("doc")) {
      return <img src={docImage} alt="" />;
    } else if (fileType.includes("ppt")) {
      return <img src={pptImage} alt="" />;
    } else if (fileType.includes("xls")) {
      return <img src={xlsxImage} alt="" />;
    } else if (fileType.includes("jpg")) {
      return <img src={jpgImage} alt="" />;
    } else {
      return <img src={zipImage} alt="" />;
    }
  }
  console.log(allFiles);
  return (
    <div className="schools">
      {/* <Header />
      <ul className="sub_collection">
        <li className="col_links">
          <Link to={`${url}/oqituvchi`}>O'qituvchi</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/kundalik`}>Kundalik.com</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/fanlar`}>Darsliklar</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/ishreja`}>Ish rejalar</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/nazorat`}>Nazorat ishi</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/testlar`}>Testlar</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/olimpiada`}>Olimpiada</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/taqdimot`}>Taqdimot & Prezentatsiya</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/tarqatma`}>Tarqatma materiallar</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/togarak`}>Fan to'garak va konspektlar</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/biznes`}>Biznesga oid</Link>
        </li>
        <li className="col_links">
          <Link to={`${url}/maktabgacha`}>Maktabgacha ta'lim</Link>
        </li>
      </ul> */}
      {/* <ul className="collection">
        {allFiles ? (
          allFiles.map((files, index) => (
            <FileItem key={index} files={files} getFileType={getFileType} />
          ))
        ) : (
          <Loader />
        )}
      </ul> */}
    </div>
  );
}

export default Schools;
