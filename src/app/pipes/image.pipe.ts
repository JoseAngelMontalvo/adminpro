import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from '../config/config';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(img: string, tipo: string = 'users'): any {
    if (img.indexOf('https') >= 0) {
      return img;
    }
    let url = URL_SERVICE + '/images';
    if (!img) {
      return url + '/users/xxx';
    }
    switch (tipo) {
      case 'users':
        url += '/users/' + img;
        break;

      case 'doctor':
        url += '/doctors/' + img;
        break;

      case 'hospital':
        url += '/hospitals/' + img;
        break;
      default:
        console.log('El tipo de imagen no existe: users, doctors, hospitals');
        url += '/users/xxx';
    }
    return url;
  }
}
