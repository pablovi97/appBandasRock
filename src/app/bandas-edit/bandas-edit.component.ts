import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Banda } from '../shared/models/banda.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandas-edit',
  templateUrl: './bandas-edit.component.html',
  styleUrls: ['./bandas-edit.component.scss']
})
export class BandasEditComponent implements OnInit {
  banda :Banda;
  nombre = new FormControl('');
  imagenURL = new FormControl('');
  anio = new FormControl('');
  video = new FormControl('');
  historia = new FormControl('');
  integrantes = new FormControl('');
  constructor(private _location: Location ,private _router: Router) { }

  ngOnInit(): void {
    this.cargarBanda();
  }
  cargarBanda(){
    if(localStorage.getItem('editBanda')){
      this.banda = JSON.parse(localStorage.getItem('editBanda'));
      console.log(this.banda)
      this.nombre.setValue(this.banda.nombre);
      this.imagenURL.setValue(this.banda.imagen);
      this.video.setValue(this.banda.video);
      this.anio.setValue(this.banda.anio);
      this.historia.setValue(this.banda.historia);
      this.integrantes.setValue(this.banda.integrantes);
      localStorage.removeItem('editBanda');
    }else {
      this._location.back();
    }
    
  }

  editBanda(){
   let inte = this.integrantes.value.toString();
    this.banda = {
      id : this.banda.id,
      video: this.video.value,
      imagen : this.imagenURL.value,
      nombre : this.nombre.value,
      anio : this.anio.value,
      historia: this.historia.value,
      integrantes: inte.split(",")
    }
    let bandaJSON = JSON.stringify(this.banda);
    localStorage.setItem('nuevaBandaEdit', bandaJSON);
    this._router.navigate(['listado']);
  }

  volver(){
    this._router.navigate(['listado']);
  }
}
