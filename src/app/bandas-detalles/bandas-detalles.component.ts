import { Component, OnInit } from '@angular/core';
import { Banda } from '../shared/models/banda.models';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandas-detalles',
  templateUrl: './bandas-detalles.component.html',
  styleUrls: ['./bandas-detalles.component.scss']
})
export class BandasDetallesComponent implements OnInit {

  bandaSelect: any;

  constructor(private _location: Location , private _router :Router) { }

  ngOnInit(): void  {
    this.getBanda()
  }
  getBanda() {
    if(localStorage.getItem('banda')){
      this.bandaSelect = JSON.parse(localStorage.getItem('banda'));
      localStorage.removeItem('banda');
    }else {
     
    } 
  }

  volver(){
    this._router.navigate(['listado']);
  }
}
