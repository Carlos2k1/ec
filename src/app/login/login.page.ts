import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public router : Router,
    public fire : AngularFireAuth) { }

    ngOnInit(){
    }

    logar(){
 
      this.fire.auth.signInWithEmailAndPassword(this.email.value,this.senha.value)
        .then(()=>{
          console.log('Logado com sucesso');
          this.router.navigate(['/lista-de-clientes']);
        })
        .catch(()=>{
          console.log('Login Inválido');
        })
    }

    cadastrar(){
      this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=> {
        console.log("Cadastrado com sucesso!");
      }).catch(()=>{
        console.log("Usuário inválido");
      })
    
    }

}
