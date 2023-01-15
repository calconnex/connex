// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

// const url =
// "https://cors-anywhere.herokuapp.com/https://1.cdn.edl.io/t8bAB5OFQenQG73jlgvfN4Uffuh3doJgEXupJ1ZOqd1CxXZj.pdf"

// export default function Test() {
	
// 	pdfjs.GlobalWorkerOptions.workerSrc =
// 	`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// 	const [pageNumber] = useState(1);
	
// 	return (
// 		<div className="PDFmain">
// 			<Document file={url} >
// 				<Page pageNumber={pageNumber} />
// 			</Document>
// 	    </div>
// 	);
// }