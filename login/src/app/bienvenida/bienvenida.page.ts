import { Component, OnInit } from '@angular/core';
import { LoginPageModule } from '../login/login.module';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor( private alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }
  async cerrar_sesion(){
    const alerta = await this.alertController.create({
      header: "hola!",
      message:"¿quieres cerrar sesión?",
      buttons:[
      {
        text: "si",
        handler: () =>{

        }
      }
      ]
    })
  }
}
