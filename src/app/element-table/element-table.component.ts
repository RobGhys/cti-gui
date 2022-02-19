import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {Element} from '../../element';
import { ElementService } from '../element.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-data-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.css']
})
export class ElementTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  dataSource : any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private elementService: ElementService,
    private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.getElements();
  }

  getElements(): void {
    this.elementService.getElements()
      .subscribe(elements => {
        this.dataSource = new MatTableDataSource<Element>(elements);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  delete(element : Element): void {
    this.elementService.deleteElement(element.id).subscribe(el => this.getElements());
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
