import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }
  
  
   private getFileName(response: HttpResponse<Blob>) {
    let filename: string;
    try {
      const contentDisposition: string = response.headers.get('content-disposition')!;
      const r = /(?:filename=")(.+)(?:;")/
      filename = r.exec(contentDisposition)![1];
    }
    catch (e) {
      filename = 'myfile.pdf'
    }
    return filename;
  }

  downloadFile(response : HttpResponse<Blob>) {
  
          let filename: string = this.getFileName(response);
          let binaryData = [];
          binaryData.push(response.body!);
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
          downloadLink.setAttribute('download', filename);
          document.body.appendChild(downloadLink);
          downloadLink.click();
        }
  
}
