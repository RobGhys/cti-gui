import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { LayoutComponent } from './layout/layout.component';
import { InMemoryDataService } from '../in-memory-data.service';
import { ElementTableComponent } from './element-table/element-table.component';
import { MatTableModule } from '@angular/material/table';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterComponent } from './footer/footer.component';
import { DialogElementCreate, ElementCreateComponent } from './element-create/element-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { ElementDetailComponent } from './element-detail/element-detail.component';
import { MessageComponent } from './message/message.component';
import { DialogElement, SharedComponent } from './shared/shared.component';
import { FiltersComponent } from './filters/filters.component';
import { DialogElementUpdate, ElementEditComponent } from './element-edit/element-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ElementTableComponent,
    HeaderBarComponent,
    SideBarComponent,
    FooterComponent,
    ElementCreateComponent,
    DialogElementCreate,
    PagenotfoundComponent,
    HomeComponent,
    ElementDetailComponent,
    MessageComponent,
    SharedComponent,
    FiltersComponent,
    ElementEditComponent,
    DialogElement,
    DialogElementUpdate
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSliderModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
