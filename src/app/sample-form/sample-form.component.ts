import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

/** @title Form field with error messages */
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
}

