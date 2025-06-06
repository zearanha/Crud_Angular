import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClientService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nome: string): Cliente[] {
    return this.obterStorage();
  }

  private obterStorage() : Cliente[]{
    const repositorioClientes = localStorage.getItem(ClientService.REPO_CLIENTES);

    if(repositorioClientes){
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClientService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
