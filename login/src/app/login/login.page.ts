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
  iniciar(){
    this.router.navigateByUrl("/bienvenida")
  }
}
