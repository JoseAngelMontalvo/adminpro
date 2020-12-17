import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [],
})
export class IncreasingComponent implements OnInit {
  @ViewChild('txtProgress') txtProgres: ElementRef;
  @Input('name') leyenda: string = 'Leyenda';
  @Input() progress: number = 50;
  @Output() valueMod: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onChange(value: number) {
    //let elemHTML: any = document.getElementsByName('progres');
    if (value > 100) {
      this.progress = 100;
    } else if (value < 0 || value === null) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    //elemHTML.value = Number(this.progress);
    this.txtProgres.nativeElement.value = this.progress;
    this.valueMod.emit(this.progress);
  }

  changeValue(valor: number) {
    if (this.progress >= 100 && valor > 0) {
      return;
    }
    if (this.progress <= 0 && valor < 0) {
      return;
    }
    this.progress = this.progress + valor;
    this.valueMod.emit(this.progress);
  }
}
