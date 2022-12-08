import { Component, OnInit } from '@angular/core';
import { Observable, of, windowWhen } from 'rxjs';

import { SampleserviceService } from '../sampleservice.service';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { MatDialog } from '@angular/material/dialog';
import { StepperComponent } from '../stepper/stepper.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  itemname: string;
  position: number;
  cost: number;
  shippingAddress: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
a:any
name:any
f:any
l:any
localhost: any;
  constructor(private dialog: MatDialog, private router: Router, private serv:SampleserviceService){}
  ngOnInit(){
    this.a =localStorage.getItem('email')
    this.name=this.a.split('.').join(' ').split('@',1).join(' ')
    this.f=((this.name.split(' ',1))[0])[0]  
    this.l=((this.name.split(' ',2))[1])[0]
  }
  addCustomer(){
    const dialogRef = this.dialog.open(StepperComponent);
    dialogRef.afterClosed().subscribe(details=>{
      window.location.reload();
      })
  }
  out(){
    // this.router.navigate(['/login'])
    localStorage.clear()
    
  }
  onSearch(value:any){
  this.serv.searchItem(value)
}



}