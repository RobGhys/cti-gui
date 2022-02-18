import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Element } from '../../element';
import { ElementService } from '../element.service';
import { DialogElement, ElementCrudComponent } from '../shared/shared.component';
import { DialogElementCreate } from '../element-create/element-create.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.css']
})
export class ElementEditComponent implements ElementCrudComponent {

  element: Element | undefined;

  // Form elements
  name!: string;
  position!: number;
  weight!: number;
  symbol!: string;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private elementService: ElementService,
  ) { }

  ngOnInit(): void {
    this.getElement();
    console.log('ngOnInit finished')
  }

  getElement(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.elementService.getElementById(id)
      .subscribe(element => this.element = element);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogElementUpdate, {

      data: {name: this.element?.name, position:this.position, weight:this.weight, symbol:this.symbol},
    });

    console.log(dialogRef)
    console.log('openDialog launched data')

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      this.weight = result});
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
}
