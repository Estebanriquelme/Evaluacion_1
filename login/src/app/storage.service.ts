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
  async agregarPosts(id:string,valor: any){
    await this.storage.set(id, valor)
  }
  //obtener los datos dentro del local storage
  async recuperar(user:string){
    return await this.storage.get(user);
  }
  listar(){
    let listado = [];
    this.storage.forEach((v,k)=> {listado.push(v);})
    return listado;
  }
  //eliminar un elemento del local storage por su id
  eliminar(key: string){
    this.storage.remove(key);
  }
}
