import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar, } from '@angular/material/snack-bar';
import { SampleserviceService } from '../sampleservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
userdetail:any
  deti: any;
  d: any;
constructor(private router: Router, private _snackBar: MatSnackBar, private service:SampleserviceService){}
  ngOnInit(){

  this.userdetail= new FormGroup({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required )
    
  })
  
 
}
home(){
    this.router.navigate(['/dashboard'])
  }
  openSnackBar() {
    this._snackBar.open('Successful')
  }
  submit(data:any){
    //console.log('..', data)
    this.service.login(data).subscribe((d:any)=>{
      localStorage.setItem('loginSuccessfully','true')
      localStorage.setItem('email',data.email)
      // localStorage.getItem(data.email)
     
      
      
      this.router.navigate(['/dashboard'])})
      
  }
}