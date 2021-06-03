import { FilterPipe } from './bandas-listado/pipe/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandasListadoComponent } from './bandas-listado/bandas-listado.component';
import { BandasEditComponent } from './bandas-edit/bandas-edit.component';
import { BandasNuevaComponent } from './bandas-nueva/bandas-nueva.component';
import { BandasDetallesComponent } from './bandas-detalles/bandas-detalles.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BandasListadoComponent,
    BandasEditComponent,
    BandasNuevaComponent,
    BandasDetallesComponent,
    FilterPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
