import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedValue: number;
  storedValue: number;
  secondStoredValue: number;
  operator: null | 'addition' | 'subtraction' | 'multiplication' | 'division';

  additionQueued: boolean = false;
  subtractionQueued: boolean = false;
  multiplicationQueued: boolean = false;
  divisionQueued: boolean = false;
  higherOperation: boolean = false;

  constructor() {
    this.displayedValue = 0;
    this.storedValue = 0;
    this.secondStoredValue = 0;
    this.operator = null;
  }

  calcValue(value: number) {
    if (this.additionQueued || this.subtractionQueued || this.multiplicationQueued || this.divisionQueued) {
      this.storedValue = this.displayedValue;
      this.displayedValue = Number(value);
      this.clearQueuedOperator();
    } else {
      const updateNumber = '' + this.displayedValue + value;
      this.displayedValue = Number(updateNumber);
    }
  }

  useOperator(operator: null | 'addition' | 'subtraction' | 'multiplication' | 'division') {
    this.operator = operator;
    switch(this.operator) {
      case 'addition': {
        this.additionQueued = true;
        break;
      }
      case 'subtraction': {
        this.subtractionQueued = true;
        break;
      }
      case 'multiplication': {
        this.multiplicationQueued = true;
        break;
      }
      case 'division': {
        this.divisionQueued = true;
        break;
      }
    }
  }

  clearAll() {
    this.displayedValue = 0;
    this.storedValue = 0;
    this.operator = null;
    this.clearQueuedOperator();
  }

  clearQueuedOperator() {
    this.additionQueued = false;
    this.subtractionQueued = false;
    this.multiplicationQueued = false;
    this.divisionQueued = false;
  }

  opposite() {
    if (this.additionQueued || this.subtractionQueued || this.multiplicationQueued || this.divisionQueued) {
      this.storedValue = this.displayedValue;
      this.displayedValue = 0;
      this.displayedValue = -this.displayedValue;
    } else {
      this.displayedValue = -this.displayedValue;
    }
  }

  hundredth() {
    this.displayedValue = this.displayedValue * .01;
  }

  equals() {
    switch(this.operator) {
      case 'addition': {
        this.displayedValue = this.storedValue + this.displayedValue;
        break;
      }
      case 'subtraction': {
        this.displayedValue = this.storedValue - this.displayedValue;
        break;
      }
      case 'multiplication': {
        this.displayedValue = this.storedValue * this.displayedValue;
        break;
      }
      case 'division': {
        this.displayedValue = this.storedValue / this.displayedValue;
        break;
      }
    }
  }
}
