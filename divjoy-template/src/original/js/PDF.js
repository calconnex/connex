import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { getPDF } from "../../util/db";


const Pdf = () => {
    const person = getPDF()

    return ( 
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer fileUrl={person}></Viewer>
        </Worker>
    );
}
 
export default Pdf;