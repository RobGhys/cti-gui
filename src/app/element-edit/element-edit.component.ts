import { Component, Input } from '@angular/core';
import { DialogElement, ElementCrudComponent } from '../shared/shared.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.css']
})
export class ElementEditComponent implements ElementCrudComponent {
  @Input()
  elementId: number = 1

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogElementUpdate, { data: { id: this.elementId } });
  }
}

/** @title Form field with error messages */
@Component({
  selector: 'dialog-element-update',
  templateUrl: 'dialog-edit-element.html',
})
export class DialogElementUpdate extends DialogElement {

  override save(): void {
    if (this.element) {
      this.elementService.updateElement(this.element)
        .subscribe(() => this.goBack());
    }
  }

  getElement(): void {
    // Get id from the data table
    const id = Number(this.data.id);

    // Get the element
    this.elementService.getElementById(id)
      .subscribe(element => {
        this.element = element;

        this.elementsForm.patchValue({
          name: this.element.name,
          weight: this.element.weight,
          symbol: this.element.symbol
        })
      });
  }

  override ngOnInit(): void {
    this.getElement();
  }
}
