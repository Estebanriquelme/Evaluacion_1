import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( public storage: Storage) { 
    this.init();
  }

  async init(){
    await this.storage.create();
  }
  async agregarUsuarios(valor: any){
    let id = await this.storage.length() + 1;
    await this.storage.set(id.toString(), valor)
  }
  async recuperar(user:string){
    return await this.storage.get(user);
  }
  listar(){
    let listado = [];
    this.storage.forEach((v,k)=> {listado.push(v);})
    return listado;
  }
}
