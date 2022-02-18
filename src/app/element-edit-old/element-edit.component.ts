import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Element } from '../../element';
import { ElementService } from '../element.service';
@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.css']
})
export class ElementEditComponent implements OnInit {

  element: Element | undefined;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getElement();
  }

  getElement(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.elementService.getElementById(id)
      .subscribe(element => this.element = element);
  }

  save(): void {
    if (this.element) {
      this.elementService.updateElement(this.element)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
