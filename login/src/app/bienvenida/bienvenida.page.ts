import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginSService } from '../login-s.service';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  usuarios=[];
  posts : any;
  datos :any;
  info: any;
  constructor( private alertController: AlertController, private router:Router, private loginservice:LoginSService,private api:ApirestService) { }

  ngOnInit() {
    this.usuarios = this.loginservice.getUsuarios();
    this.datos = this.api.datos;
    let id = this.datos.id;
    this.api.getPost();
    this.posts = this.api.posts;
    this.info =this.posts.filter(item => item.userId ==id);
    
    
    
    

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
