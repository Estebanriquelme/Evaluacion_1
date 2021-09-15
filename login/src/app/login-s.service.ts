import { Injectable } from '@angular/core';
import { Login } from './login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginSService {
  private usuario: Login[] = [
    {
      usuario: "juan",
      contraseña: "cuenta123"
    }
  ]
  constructor() { }

  getUsuarios(){return this.usuario}
  getusuario(nombre:string){return this.usuario.find(x =>{return x.usuario == nombre})}
}
