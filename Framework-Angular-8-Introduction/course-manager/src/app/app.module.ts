import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseListComponent} from "./components/courses/course-list.component";
import {StarComponent} from './components/star/star.component';
import {ReplacePipe} from './components/pipe/replace.pipe';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CourseListComponent, pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
