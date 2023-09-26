import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string = "";

  nombre:string = "";
  apellido:string = "";
  educacion:any = "";
  fecha:string = "";

  constructor(private rutaActiva:ActivatedRoute) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['usuario']){
        this.name = params['usuario'];
      }
    })
  
  }

  limpiar(){

    this.nombre = " ";
    this.apellido = " ";
    this.educacion = " ";
    this.fecha = " ";

  }

  mostrar(){

    alert("Su nombre es: "+ this.nombre + "\n Y su apellido es: "+this.apellido)

  }

}
