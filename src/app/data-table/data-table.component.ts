import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {Element} from '../../element';
import {ELEMENTS} from '../../mock-elements';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  elements: Element[] = [];

  dataSource = new MatTableDataSource(this.elements);

  constructor(
    private elementService: ElementService,
    private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.getElements();
    console.log(this.elements.length)
  }

  getElements(): void {
    this.elementService.getElements()
      .subscribe(elements => this.elements = elements);
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${ sortState.direction }ending`).then(r  => console.log('new sort'));
    } else {
      this._liveAnnouncer.announce('Sorting cleared').then(r => console.log('cleared sorting'));
    }
  }
}
