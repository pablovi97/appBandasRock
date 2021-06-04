import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BANDAS } from '../shared/mocks/banda.mocks';
import { Banda } from '../shared/models/banda.models';

@Component({
  selector: 'app-bandas-listado',
  templateUrl: './bandas-listado.component.html',
  styleUrls: ['./bandas-listado.component.scss'],
})
export class BandasListadoComponent implements OnInit {
  filtrarBanda: string = '';
  bandas: Array<Banda> = BANDAS;
  selecBanda: Banda | null = null;
  editBanda: Banda | null = null;
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.verificarNuevaBanda();
    this.verificarEditBanda();
  }

  verificarNuevaBanda() {
    if (localStorage.getItem('nuevaBanda')) {
      const nuevaBanda = JSON.parse(localStorage.getItem('nuevaBanda'));
      nuevaBanda.id = this.bandas.length + 2;
      this.bandas.push(nuevaBanda);
    }
    localStorage.removeItem('nuevaBanda');
  }

  verificarEditBanda() {
    if (localStorage.getItem('nuevaBandaEdit')) {
      const BandaEditada = JSON.parse(localStorage.getItem('nuevaBandaEdit'));
      console.log(BandaEditada);
      this.bandas.find((obj) => {
        if (obj.id === BandaEditada.id) {
        obj.nombre =  BandaEditada.nombre;
        obj.anio =  BandaEditada.anio;
        obj.imagen =  BandaEditada.imagen;
        obj.video =  BandaEditada.video;
        obj.historia =  BandaEditada.historia;
        obj.integrantes =  BandaEditada.integrantes;
        }
      });
    }
    localStorage.removeItem('nuevaBanda');
  }

  verDetalleBanda(banda: Banda) {
    this.selecBanda = banda;
    let bandaJSON = JSON.stringify(banda);
    localStorage.setItem('banda', bandaJSON);
    this._router.navigate(['detalles']);
  }

  editarBanda(banda: Banda) {
    this.selecBanda = banda;
    let bandaJSON = JSON.stringify(banda);
    localStorage.setItem('editBanda', bandaJSON);
    this._router.navigate(['edit']);
  }

  borrarBanda(banda: Banda) {
    var i = this.bandas.indexOf(banda);
    this.bandas.splice(i, 1);
  }

  addBanda() {
    this._router.navigate(['nueva']);
  }
}
