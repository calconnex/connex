import { useOneApplicant } from "../../util/db";


const Pdf = ({id}) => {
    const applicant = useOneApplicant(parseInt(id));
    console.log(applicant);
    const appData = applicant.data[0]
    const resume = appData.resume[0]
    const url = resume.downloadURL

    return ( 
        url && (<object data={url} type="application/pdf" width="100%" height="1000px">
            <a href={url}></a>
        </object>)
    );
}
 
export default Pdf;