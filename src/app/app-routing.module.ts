import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => {
      const dynamicImport = await import('./landingpage/landingpage.module');
      return dynamicImport.LandingpageModule;
    }
  },
  {
    path: 'books154f',
    loadChildren: async () => {
      const dynamicImport = await import('./books154-f/books154-f.module');
      return dynamicImport.Books154FModule;
    }
  },
  {
    path: 'memory',
    loadChildren: async () => {
      const dynamicImport = await import('./memory-match/memory-match.module');
      return dynamicImport.MemoryMatchModule;
    }
  },
  {
    path: 'tictactoe',
    loadChildren: async () => {
      const dynamicImport = await import('./tictactoe/tictactoe.module');
      return dynamicImport.TictactoeModule;
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
