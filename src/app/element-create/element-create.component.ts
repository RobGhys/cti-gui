import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DialogElement, ElementCrudComponent } from '../shared/shared.component';
import { Element } from '../../element';

@Component({
  selector: 'app-element-create',
  templateUrl: './element-create.component.html',
  styleUrls: ['./element-create.component.css']
})
export class ElementCreateComponent implements ElementCrudComponent {

  // Form elements
  name!: string;
  position!: number;
  weight!: number;
  symbol!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogElementCreate, {

      data: {name:this.name, position:this.position, weight:this.weight, symbol:this.symbol},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      this.weight = result});
  }

  ngOnInit(): void {
  }
}

/** @title Form field with error messages */
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-create-element.html',
})
export class DialogElementCreate extends DialogElement {

  override save(): void {
    // Form must be valid
    if (this.elementsForm.valid) {
      const p = {...this.element, ...this.elementsForm.value};

      this.elementService.addElement(p as Element)
        .subscribe({
          next: newElement => {
            console.log(newElement);
            return this.onSaveComplete();
          },
          //error: err => this.err
        });
    }
  }

  private onSaveComplete(): void {
    this.elementsForm.reset();
    this.goBack();
  }
}

