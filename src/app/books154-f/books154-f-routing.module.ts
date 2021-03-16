import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BooklistComponent} from './components/booklist/booklist.component';
import {BaseComponent} from './components/base/base.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'booklist/:id/:type', component: BooklistComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Books154FRoutingModule {
}
