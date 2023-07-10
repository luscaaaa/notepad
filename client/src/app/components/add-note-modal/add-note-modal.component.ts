import { Component } from '@angular/core';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.less']
})
export class AddNoteModalComponent {
  noteColors = [
    {name: "yellow-note", color: "yellow", value: false},
    {name: "blue-note", color: "blue", value: false},
    {name: "green-note", color: "green", value: false}
  ]

  // come from interface
  colorNotepad: string = ""

}
