import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public personaje:any;
  constructor() { }

  ngOnInit() {
    const _personaje = localStorage.getItem('character');
    if (_personaje == null){

    }
    else{
      this.personaje = JSON.parse(_personaje);
    }
  }

}
