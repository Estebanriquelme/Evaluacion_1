import { Component, OnInit } from '@angular/core';
//importando alert
import { alertController } from '@ionic/core';
import { ToastController } from '@ionic/angular';
//enlaces
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  pass: string;
  constructor( private toastController: ToastController,
               private router: Router) { }

  ngOnInit() {
  }
  async recuperar(){
    const alerta = await this.toastController.create({
      message: 'tu nueva contraseña a sido enviada a tu email',
      duration: 3000,
      color: 'warning'
    });
    await alerta.present();
    
  }
  async iniciar(user: HTMLInputElement,
    pass:HTMLInputElement){
    let nombre = "juan";
    let password = "cuenta123"
    let usuario = user.value;
    let contraseña =pass.value;
    if(usuario == nombre && contraseña==password){
      this.user= usuario;
      this.router.navigateByUrl("/bienvenida")
    }else if(usuario == "" && contraseña==""){
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
