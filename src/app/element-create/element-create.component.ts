import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { DialogElement, ElementCrudComponent } from '../shared/shared.component';
import { Element } from '../../element';
import { ElementService } from '../element.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-element-create',
  templateUrl: './element-create.component.html',
  styleUrls: ['./element-create.component.css']
})
export class ElementCreateComponent implements ElementCrudComponent {
@ViewChild(MatDialog) matDialog!: MatDialog;
@ViewChild(MatTable) matTable!: MatTable<Element>;

  // Form elements
  name!: string;
  position!: number;
  weight!: number;
  symbol!: string;

  constructor(
    public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogElementCreate, {

      data: {name:this.name, position:this.position, weight:this.weight, symbol:this.symbol},
    });

/*    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result.name;
      this.weight = result.weight;
      this.symbol = result.symbol});*/

    dialogRef.afterClosed().subscribe(result => {
      console.log('coucou');
      this.matTable.renderRows()
    });
  }

  ngOnInit(): void {
    /*this.matDialog.afterAllClosed.subscribe(() =>
      this.matTable.renderRows()
    );*/
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
    //this.goBack();
  }
}

