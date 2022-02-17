import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


import {PeriodicElement} from '../../periodicElement';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent {

  // Form elements
  name!: string;
  position!: number;
  weight!: number;
  symbol!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {

      data: {name:this.name, position:this.position, weight:this.weight, symbol:this.symbol},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      this.weight = result});
  }
}

/** @title Form field with error messages */
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  name = new FormControl('', [Validators.required]);

  elementsForm = this.fb.group({
    name: ['', Validators.required],
    weight: ['', Validators.required],
    symbol: ['', Validators.required],
    });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.elementsForm.value);
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }
}

