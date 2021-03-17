import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BooklistComponent} from './components/booklist/booklist.component';
import {BaseComponent} from './components/base/base.component';
import {SinglebookComponent} from './components/singlebook/singlebook.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'booklist/special/:id/:type', component: BooklistComponent},
      {path: 'booklist/search/:keywords', component: BooklistComponent},
      {path: 'book/:id', component: SinglebookComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Books154FRoutingModule {
}
