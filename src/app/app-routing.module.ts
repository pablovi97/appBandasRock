import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandasDetallesComponent } from './bandas-detalles/bandas-detalles.component';
import { BandasEditComponent } from './bandas-edit/bandas-edit.component';
import { BandasListadoComponent } from './bandas-listado/bandas-listado.component';
import { BandasNuevaComponent } from './bandas-nueva/bandas-nueva.component';

const routes: Routes = [
  {
    path: 'listado',
    component: BandasListadoComponent,
  },{
    path: 'detalles',
    component: BandasDetallesComponent,
  },{
    path: 'edit',
    component: BandasEditComponent,
  },
  {
    path: 'nueva',
    component: BandasNuevaComponent,
  },
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
