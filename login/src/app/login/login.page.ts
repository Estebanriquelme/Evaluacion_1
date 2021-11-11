import { Component, OnInit } from '@angular/core';
//importando alert
import { alertController } from '@ionic/core';
import { ToastController } from '@ionic/angular';
//enlaces
import { Router, RouterLink } from '@angular/router';
import { LoginSService } from '../login-s.service';
///importando apiRest
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user: string;
  pass: string;
  listado: any ;
  usuarios:any;
  constructor( private toastController: ToastController,
               private router: Router,private routerLink: RouterLink,
               private loginservice:LoginSService, private api:ApirestService) { }

  ngOnInit() {
    
  }
  async recuperar(user: HTMLInputElement){
    let usuario = user.value;
    this.api.getUsers();
    this.listado = this.api.listado;
    if(this.listado.find(item => item.username == usuario)){
      const alerta = await this.toastController.create({
        message: 'tu nueva contraseña a sido enviada a tu email',
        duration: 3000,
        color: 'warning'
      });
      await alerta.present();
    }else if(usuario == ""){
      const alert = await this.toastController.create({
        message: 'debes ingresar tu usuario antes de clickearme',
        duration: 3000,
        color: 'danger'
      });
      await alert.present();
    }else{
      const a = await this.toastController.create({
        message: 'usted no cuenta con una cuenta Duoc',
        duration: 3000,
        color: 'danger'
      });
      await a.present();
    }
  }
  async iniciar(user: HTMLInputElement,
    pass:HTMLInputElement){
    this.api.getUsers();
    this.listado = this.api.listado;
    let usuario = user.value;
    let contraseña =pass.value;
    if(this.listado.find(item => item.username == usuario)&& this.loginservice.getcontraseña(contraseña) ){
      this.usuarios=this.listado.find(item => item.username == usuario);
      let id = this.usuarios.id
      
    }else if(usuario == "" || contraseña==""){
      const error1 = await this.toastController.create({
      message: 'debe llenar ambos campos',
      duration: 3000,
      color: 'warning'
      });
      await error1.present();
    }
    
    else{
      const error2 = await this.toastController.create({
      message: 'contraseña y usuario incorrecto intente denuevo si la olvido precione recuperar contraseña',
      duration: 3000,
      color: 'danger'
    });
      await error2.present();
    }
  }
}
