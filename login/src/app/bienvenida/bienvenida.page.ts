import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginSService } from '../login-s.service';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  usuarios=[]
  constructor( private alertController: AlertController, private router:Router, private loginservice:LoginSService) { }

  ngOnInit() {
    this.usuarios = this.loginservice.getUsuarios();
  }
  async cerrar_sesion(){
    const alerta = await this.alertController.create({
      header: "hola!",
      message:"¿quieres cerrar sesión?",
      buttons:[
      {
        text: "si",
        handler: () =>{
          this.router.navigateByUrl("/login")
        }
      },
      {
        text: "no",
        role: "cancel"
      }
      ]
    })
    await alerta.present();
  }
}
