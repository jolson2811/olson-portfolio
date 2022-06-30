// import React, { useState } from "react";
// import resume from "../../assets/images/JuliaResumeTemplate.pdf";
// import { Document, Page } from "react.pdf";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }

// export default Resume;
