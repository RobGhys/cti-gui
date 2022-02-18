import { Component, Inject, OnInit } from '@angular/core';
import { Element } from '../../element';
import { FormBuilder, Validators } from '@angular/forms';
import { ElementService } from '../element.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogElementCreate } from '../element-create/element-create.component';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}

export interface DialogElementI {
  onNoClick(): void;
  save(): void;
  goBack(): void;
}

@Component({
  selector: 'dialog-element',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class DialogElement implements DialogElementI {
  //name = new FormControl('', [Validators.required]);

  element!: Element;

  elementsForm = this.fb.group({
    name: ['', Validators.required],
    weight: ['', Validators.required],
    symbol: ['', Validators.required],
  });

  constructor(
    protected elementService: ElementService,
    protected location: Location,
    protected router: Router,
    protected fb: FormBuilder,
    protected dialogRef: MatDialogRef<DialogElement>,
    @Inject(MAT_DIALOG_DATA) public data: Element,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void { }

/*  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.elementsForm.value);
  }*/

  goBack(): void {
    this.location.back();
  }

  /*getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }*/
}

export interface ElementCrudComponent extends OnInit {

  openDialog(): void;
}
