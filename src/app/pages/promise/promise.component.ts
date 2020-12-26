import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styles: [],
})
export class PromiseComponent implements OnInit {
  constructor() {
    // let promise = new Promise<string>((resolve, rejet) => {
    //   let contador = 0;
    //   let interval = setInterval(() => {
    //     contador += 1;
    //     console.log(contador);
    //     if (contador === 3) {
    //       resolve('OK!');
    //       clearInterval(interval);
    //     }
    //   }, 1000);
    // });
    // promise
    //   .then((msj) => {
    //     console.log('termino!!!', msj);
    //   })
    //   .catch((error) => {
    //     console.error('Error en lapromesa', error);
    //   });
    this.setCount3()
      .then((msj) => console.log(msj))
      .catch((error) => console.log(error));
  }

  ngOnInit(): void {}

  setCount3(): Promise<string> {
    return new Promise<string>((resolve, rejet) => {
      let contador = 0;
      let interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve('OK!');
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
