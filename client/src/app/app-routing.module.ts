import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteModalComponent } from './components/add-note-modal/add-note-modal.component';

const routes: Routes = [
  {path: 'add-note', component: AddNoteModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
