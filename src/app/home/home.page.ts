import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  name:string = "";

  limpio:boolean = false;

  nombre:string = "";
  apellido:string = "";
  educacion:any = "";
  fecha:string = "";

  // Usamos @ViewChild para obtener una referencia al elemento con la clase titulo
  @ViewChild('titulo') titulo: any;

  constructor(private rutaActiva:ActivatedRoute) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['usuario']){
        this.name = params['usuario'];
      }

    })
  }

  limpiar(){

    this.nombre = "";
    this.apellido = "";
    this.educacion = "";
    this.fecha = "";

    this.limpio = true;

    setTimeout(() => { // Esto crea una función anónima que se ejecuta después de 2000 milisegundos (2 segundos)
      this.limpio = false; // Esto cambia el valor de this.limpio a false
    }, 2000); // Esto indica el tiempo en milisegundos

  }

  mostrar(){

    alert("Su nombre es: "+ this.nombre + "\n Y su apellido es: "+this.apellido)

  }

}
