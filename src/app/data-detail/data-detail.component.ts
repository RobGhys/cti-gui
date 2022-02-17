import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Element } from '../../element';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

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

  goBack(): void {
    this.location.back();
  }
}
