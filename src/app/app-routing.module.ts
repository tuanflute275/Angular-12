import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'templateForm', component: TemplatedrivenformComponent },
{ path: '', component: HomeComponent },
{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
