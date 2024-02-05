import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrl: './lista-cliente.component.css'
})

export class ListaClienteComponent implements OnInit{

  //propiedades un arrreglo con loista de 2 clientes
  clientes:Cliente[]=[];

  //contructor
  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
