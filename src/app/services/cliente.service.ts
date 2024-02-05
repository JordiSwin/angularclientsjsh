import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { TipoCliente } from '../models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes:Cliente[] = [];//Arreglo vacio inicializado para darlos de alta

  private tipos:TipoCliente[] = []

  constructor() { 
    this.clientes = [];
    this.tipos = [
      {
        id:0,
        descripcion:'sin definir'
      },
      {
        id:1,
        descripcion:'Clientes Activos'
      },
      {
        id:2,
        descripcion:'Clientes Inactivos'
      },
      {
        id:3,
        descripcion:'Clientes Deudores'
      }
    ];
  }
  //metodo que retorne el arrreglo de clie¿ntes
  getClientes(){
    return this.clientes;
  }
  //metodo que retorne los tipos de clientes
  getTipos(){
    return this.tipos;
  }
  //metodo que agregue un cliete al arreglo
  AgregarCliente(cliente : Cliente){
    this.clientes.push(cliente);
  }


  //metodo que inicializa un cliente nuevo al arreglo
  nuevoCliente():Cliente{
    return{
      
        id:this.clientes.length + 1,
        nombre:'',
        rfc:'',
        domicilio:'',
        tipoCliente:0
      
    };
  }
}
