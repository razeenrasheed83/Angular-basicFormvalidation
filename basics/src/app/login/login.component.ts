import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName =''
  password =''
  errorMessage=''


  data ={
    firstname:'',
    lastname:'',
    phonenumber:'',
    email:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if (this.userName.trim().length === 0){
      this.errorMessage ='username rquired'
    }else if(this.password.trim().length === 0){
      this.errorMessage = 'password required'
    }else{
      this.errorMessage =''
    }
  }

  onsubmit(){
    alert(JSON.stringify(this.data))
  }

}
