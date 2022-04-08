import React, { useState, useEffect, useRef } from "react";
import { FiDownload, FiEye } from "react-icons/fi";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {TweenMax, Power3} from 'gsap'
gsap.registerPlugin(ScrollTrigger)


function FileItem({ files, getFileType }) {
  const [previewData, setPreviewData] = useState(null);
  console.log(previewData);
  let collection_item = useRef(null)
  useEffect(() => {
    console.log(collection_item);
    // TweenMax.to(
    //   collection_item,
    //   .8,
    //   {
    //     opacity: 1,
    //     y: -20,
    //     ease: Power3.easeOut
    //   }
    // )
    const el = collection_item.current;
    gsap.fromTo(el, {opacity: 0}, {opacity: 1, duration: 1, scrollTrigger: {
      trigger: el
    }})
  }, [])
  return (
    <>
      <li className="collection_item" ref={collection_item}>
        {getFileType(files?.fileType)}
        <div className="item_detail">
          <h2 className="item_name">
            {files?.fileName.length > 80
              ?  `${[...files?.fileName].slice(0, 80).join("")}...`
              : files?.fileName}
          </h2>
          <p className="item_date">
            {[...files?.date].splice(0, [...files?.date].indexOf("T")).join("")}
          </p>
          <p className="item_size">{ `${files?.fileSize}
                                      ${files?.sizeType}
                                      ${files?.fileType.toUpperCase()}`}</p>
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
        <a rel="noreferrer" href={files?.actualFile} className="download_btn">
          {" "}
          <FiDownload /> Yuklash
        </a>
      </li>
    </>
  );
}

export default FileItem;

// onmouseover={handleExpand}
//   const handleExpand = () => {
//   TweenMax.to(
//     collection_item,
//     .8, 
//     {
//       scaleX:2,
//       scaleY:2, 
//       ease: Power3.easeOut
//     }
//   )
// }