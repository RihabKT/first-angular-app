import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email=""
  constructor(private fb:FormBuilder) { }
  loginForm= this.fb.group(
    {
      email:['',[Validators.required, Validators.email]],
      password:['']
    }
  )
  

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.loginForm.get("email")?.value)
    }
    
}
