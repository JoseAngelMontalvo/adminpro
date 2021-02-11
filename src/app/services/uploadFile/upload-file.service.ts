import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor() {}

  uploadFile(image: File, type: String, id: String) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append('image', image, image.name);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Archivo subida con exito');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Falló la subida del archivo');
            reject(xhr.response);
          }
        }
      };
      const url = `${URL_SERVICE}/upload/${type}/${id}`;
      xhr.open('PUT', url, true);
      xhr.send(formData);
    });
  }
}
