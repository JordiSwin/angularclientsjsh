import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListaClienteComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
