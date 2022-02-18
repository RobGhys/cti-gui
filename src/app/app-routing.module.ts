import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ElementTableComponent } from './element-table/element-table.component';
import { HomeComponent } from './home/home.component';
import { ElementDetailComponent } from './element-detail/element-detail.component';

// "path": matches the URL in the browser's address bar
// "component": the component that the router should create when navigating to this route
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: ElementTableComponent },
  { path: 'details/:id', component: ElementDetailComponent },
  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
