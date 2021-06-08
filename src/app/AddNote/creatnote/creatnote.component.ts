import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatnote',
  templateUrl: './creatnote.component.html',
  styleUrls: ['./creatnote.component.scss']
})
export class CreatnoteComponent implements OnInit {
  pin: boolean = false;
  fullEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  togglePin() {
    this.pin = !this.pin;
  }
  displayFull() {
    this.fullEdit = true;
  }
  createNote() {
    // let data = new FormData();
   
    let data =  {
      title: (<HTMLInputElement>document.getElementById("title")) ?
        (<HTMLInputElement>document.getElementById("title")).value : '',
      description: (<HTMLInputElement>document.getElementById("note")).innerText.trim(),
      isPined: this.pin
    }
}
}
}}
