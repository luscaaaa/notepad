import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less'],
})
export class NoteComponent {
  editNote(){
    alert("edit")
  }

  deleteNote(){
    alert("delete")
  }
}
