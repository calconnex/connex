import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { useOneApplicant } from "../../util/db";


const Pdf = ({id}) => {
    const applicant = useOneApplicant(parseInt(id));
    const appData = applicant.data[0]
    const resume = appData.resume[0]
    const url = resume.downloadURL

    return ( 
        url && (<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer fileUrl={url}></Viewer>
        </Worker>)
    );
}
 
export default Pdf;