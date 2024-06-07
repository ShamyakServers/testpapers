import { useState ,useEffect } from 'react';
import { Document, Page , pdfjs} from 'react-pdf';

function MyApp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
 useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
 }, [])
 
  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div className='w-full h-full'>
      <Document file="./1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default MyApp