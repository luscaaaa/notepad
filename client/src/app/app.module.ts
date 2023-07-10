import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { FormsModule } from '@angular/forms';
import { AddNoteModalComponent } from './components/add-note-modal/add-note-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddNoteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
