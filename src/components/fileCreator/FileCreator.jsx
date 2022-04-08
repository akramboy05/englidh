import React, { useState } from "react";
import "./FileCreator.css";
import axios from "axios";
import Loader from '../loader/Loader';

function FileCreator() {
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("docx");
  const [actualFile, setActualFile] = useState("");
  const [direction, setDirection] = useState("oqituvchi");
  const [fileSize, setFileSize] = useState("");
  const [sizeType, setSizeType] = useState("Kb");
  const [view, setView] = useState("")
  const [postStatus, setPostStatus] = useState(false)
  const uploadFile = async (e) => {
    setPostStatus(true)
    e.preventDefault();
    await axios
      .post(`http://localhost:8000/create/books`, {
        fileName: fileName,
        fileType: fileType,
        actualFile: actualFile,
        type: direction,
        fileSize: fileSize,
        sizeType: sizeType,
        view: view
      })
      .then((createdFile) => setPostStatus(false))
      .catch((err) => console.error(err));
      setFileName("")
      setFileType("")
      setActualFile("")
      setFileSize("")
      setSizeType("kb")
      setView("")
  };

  return (
    <div className="file__creator">
      <form onSubmit={uploadFile}>
        <div className="create__file">
          <div className="left">
            <p className="input_p">
              File Name *:
            </p>
            <input
              className="file_name_input"
              type="text"
              placeholder="File Name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />

            <p className="input_p">
              File Link * :
            </p>
            <input
              className="file_name_input"
              type="text"
              placeholder="File Link"
              value={actualFile}
              onChange={(e) => setActualFile(e.target.value)}
            />

            <p className="input_p">
              File view link * :
            </p>
            <input
              className="file_name_input"
              type="text"
              placeholder="File View Link"
              value={view}
              onChange={(e) => setView(e.target.value)}
            />
          </div>
          <div className="right">
          <p className="input_p">
              File Type *:
            </p>
            <label htmlFor="type"></label>
            <select id="type"
                className="file_name_input"
                value={fileType}
                onChange={(e) => setFileType(e.target.value)}>
              <option value="docx">docx</option>
              <option value="pdf">pdf</option>
              <option value="xlsx">xlsx</option>
              <option value="ppt">ppt</option>
              <option value="zip">zip</option>
            </select>
            <p className="input_p">
              File Size *:
            </p>
            <div className="fileSize">
              <input
                className="file_size_input"
                type="number"
                placeholder="File Size"
                value={fileSize}
                onChange={(e) => setFileSize(e.target.value)}
              />
              <label htmlFor="sizes"></label>
              <select
                className="file_size_type"
                id="sizes"
                value={sizeType}
                onChange={(e) => setSizeType(e.target.value)}
              >
                <option value="kb">KB</option>
                <option value="mb">MB</option>
                <option value="gb">GB</option>
                <option value="tb">TB</option>
              </select>
            </div>
            <p className="input_p">
              Yo`nalish *:
            </p>
            <label htmlFor="direction"></label>
            <select
              className="yonalish"
              id="direction"
              value={direction}
              onChange={(e) => {console.log(e.target.value)
              setDirection(e.target.value)}}
            >
              <option value="oqituvchi">O'qituvchi</option>
              <option value="kundalik">Kundalik.com</option>
              <option value="fanlar">Darsliklar</option>
              <option value="ishreja">Ish reja</option>
              <option value="maktabgacha">Maktabgacha ta'lim</option>
              <option value="nazorat">Nazorat ishi</option>
              <option value="olimpiada">Olimpiada</option>
              <option value="taqdimot">Taqdimot</option>
              <option value="tarqatma">Tarqatma</option>
              <option value="togarak">To'garak va Konspekt</option>
              <option value="testlar">Testlar</option>

              <option value="ieltsgeneral">IELTS General</option>
              <option value="ieltslistening">IELTS Listening</option>
              <option value="ieltsreading">IELTS Reading</option>
              <option value="ieltswriting">IELTS Writing</option>
              <option value="ieltsspeaking">IELTS Speaking</option>
              <option value="ieltspractice">IELTS Practice</option>
            </select>
          </div>
        </div>
        <button className="send_file" type="submit">
           {!postStatus ? <></> : <Loader/>}   Create File
        </button>
      </form>
    </div>
  );
}

export default FileCreator;
