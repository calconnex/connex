import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { useOneApplicant } from "../../util/db";


const Pdf = ({id}) => {
    const applicant = useOneApplicant(parseInt(id));
    const appData = applicant.data[0]
    const resume = appData.resume[0]
    const url = resume.downloadURL

    return ( 
        // url && (<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
        //     <Viewer fileUrl={url}></Viewer>
        // </Worker>)
        url && (<object data={url} type="application/pdf" width="100%" height="1000px">
            <a href={url}></a>
        </object>)
    );
}
 
export default Pdf;