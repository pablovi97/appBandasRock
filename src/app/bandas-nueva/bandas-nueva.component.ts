import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Banda } from '../shared/models/banda.models';

@Component({
  selector: 'app-bandas-nueva',
  templateUrl: './bandas-nueva.component.html',
  styleUrls: ['./bandas-nueva.component.scss'],
})
export class BandasNuevaComponent implements OnInit {
  banda: Banda;
  nombre = new FormControl('' ,[Validators.required]);
  anio = new FormControl('' ,[Validators.required]);
  imagenURL = new FormControl('' ,[Validators.required]);
  video = new FormControl('' ,[Validators.required]);
  historia = new FormControl('' ,[Validators.required]);
  integrantes = new FormControl('' ,[Validators.required]);

  constructor(private _router: Router) {}

  
  ngOnInit(): void {}

  addBanda() {
    this.banda = {
      id : null ,
      nombre : this.nombre.value,
      imagen : this.imagenURL.value,
      video : this.video.value,
      anio : this.anio.value,
      historia: this.historia.value,
      integrantes: this.integrantes.value.split(",")
    }
    let bandaJSON = JSON.stringify(this.banda);
    localStorage.setItem('nuevaBanda', bandaJSON);
    this._router.navigate(['listado']);
  }

  volver(){
    this._router.navigate(['listado']);
  }
}
