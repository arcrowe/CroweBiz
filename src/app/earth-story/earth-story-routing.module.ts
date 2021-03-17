import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BaseComponent} from './components/base/base.component';
import {ReferencesComponent} from './components/references/references.component';
import {TimeLineComponent} from './components/time-line/time-line.component';
import {ModelsComponent} from './components/models/models.component';


const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'references', component: ReferencesComponent},
      {path: 'timeline', component: TimeLineComponent},
      {path: 'models', component: ModelsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarthStoryRoutingModule { }
