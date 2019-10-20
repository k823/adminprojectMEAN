import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {

  @ViewChild ('txtPercent') txtPercent: ElementRef;

  @Input('nombre') leyenda: string;
  @Input() percent: number = 50;

  @Output('setValue') changedValue: EventEmitter<number> = new EventEmitter();

  constructor() {
   // console.log('Leyenda', this.leyenda);

   // console.log('Progreso', this.percent);
  }

  ngOnInit() {
    // console.log('Progreso', this.percent);
  }

  onChanges( newValue: number ) {

    // let elementHTML: any = document.getElementsByName('percent')[0];

    // console.log( this.txtPercent);

    if (newValue >= 100) {
      this.percent = 100;
    } else if (newValue <= 0) {
      this.percent = 0;
    } else {
    this.percent = newValue;
    }

   // elementHTML.value = this.percent;

    this.txtPercent.nativeElement.value = this.percent;

    this.changedValue.emit(this.percent);

  }

  changeValue(value: number) {

    if (this.percent >= 100 && value > 0) {
      this.percent = 100;
      return;
    }

    if (this.percent <= 0 && value < 0) {
      this.percent = 0;
      return;
    }

    this.percent = this.percent + value;

    this.changedValue.emit( this.percent );

    this.txtPercent.nativeElement.focus();
  }


}
