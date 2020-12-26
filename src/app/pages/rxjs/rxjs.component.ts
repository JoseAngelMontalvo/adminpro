import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable().subscribe(
      (number) => {
        console.log('Numero', number);
      },
      (error) => {
        console.error('Tenemos un error', error);
      },
      () => {
        console.log('El observable termino!!!');
      }
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('La pagina se va a cerrar');
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;

        const salida = {
          valor: counter,
        };

        observer.next(salida);

        if (counter === 3) {
          clearInterval(interval);
          observer.complete();
        }

        // if (counter === 2) {
        //   clearInterval(interval);
        //   observer.error('Cagon sos');
        // }
      }, 1000);
    }).pipe(
      map((resp) => resp.valor),
      filter((valor, index) => {
        if (valor % 2 === 1) {
          //impar
          return true;
        } else {
          //par
          return false;
        }
      })
    );
  }
}
