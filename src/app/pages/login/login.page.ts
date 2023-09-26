import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:string = "";
  pass:string = "";
  
  showErrorUser:boolean = false;
  showErrorPass:boolean = false;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  validacion(){
    let userOk:boolean = false;
    let passOk:boolean = false;

    if( this.user.length > 2){
      userOk = true;
      this.showErrorUser = false;
    }else{
      userOk = false;
      this.showErrorUser = true;
    }

    if( this.pass.length > 0 ){
      passOk = true;
      this.showErrorPass = false;
    }else{
      passOk = false;
      this.showErrorPass = true;
    }

    if( userOk && passOk ){

      let datosEnviar:NavigationExtras = {
        queryParams:{
          usuario: this.user,
          contraseña: this.pass
        }
      }

      this.route.navigate(['/home'], datosEnviar)
    }
  }

}