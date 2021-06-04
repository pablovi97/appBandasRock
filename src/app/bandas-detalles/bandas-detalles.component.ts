import { Component, OnInit } from '@angular/core';
import { Banda } from '../shared/models/banda.models';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bandas-detalles',
  templateUrl: './bandas-detalles.component.html',
  styleUrls: ['./bandas-detalles.component.scss'],
})
export class BandasDetallesComponent implements OnInit {
  bandaSelect: any;
  controllerSrc: any;
  constructor(
    private _location: Location,
    private _router: Router,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getBanda();
  }

  getSafeUrl(url:string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getBanda() {
    if (localStorage.getItem('banda')) {
      this.bandaSelect = JSON.parse(localStorage.getItem('banda'));
      this.controllerSrc = this.getSafeUrl(this.bandaSelect.video);
      localStorage.removeItem('banda');
    } else {
    }
  }

  volver() {
    this._router.navigate(['listado']);
  }
}
