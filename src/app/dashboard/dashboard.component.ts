import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of ,Subject} from 'rxjs';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { SampleserviceService } from '../sampleservice.service';

export interface PeriodicElement {
  itemname: string;
  position: number;
  cost: number;
  shippingAddress: string;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, itemname: 'Bag', cost: 1300, shippingAddress: 'HSR Layout'},
//   {position: 2, itemname: 'Watch', cost: 460, shippingAddress: 'HSR Layout'},
//   {position: 3, itemname: 'Shoes', cost: 1800, shippingAddress: 'HSR Layout'},
//   {position: 4, itemname: 'Laptop', cost: 99000, shippingAddress: 'HSR Layout'},
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'itemname', 'cost', 'shippingAddress', 'menu','wish'];
  dataSource: Observable<any> = of([{}]);
  
  constructor(private serv: SampleserviceService, private router: Router, private dialog: MatDialog){}
  ngOnInit() {
    this.serv.getCustomer()
    this.dataSource = this.serv.dataEvent$
  }
  
  edit(element:any) {
    const dialogRef = this.dialog.open(AddcustomerComponent,
      {
        data:{
          ...element,
          showeditbutton:true
        }
      });
    dialogRef.afterClosed().subscribe((details: any) => ( `output, ${details}`) )
  }

  deleteRow(id: any) {
    this.serv.deleteCustomer(id).subscribe(details => {
      
      window.location.reload(); 
    })
  }
  




  nextpage(id:any){
    this.router.navigate(['/secpage',id])
  }
 

add_wish(d:any){
  this.serv.update_wishlist(d).subscribe(x=>{
    
    
    //window.location.reload()
    
  })
}




}
