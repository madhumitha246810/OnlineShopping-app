import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-secpage',
  templateUrl: './secpage.component.html',
  styleUrls: ['./secpage.component.css']
})
export class SecpageComponent {
  value: any;
  
  
  constructor(private serv:SampleserviceService,private router:Router, private route:ActivatedRoute, private dialog: MatDialog,){}
  ngOnInit(){
    
    this.serv.getRowDetails(this.route.snapshot.params['id']).subscribe((d: any) => {
      
      this.value=d
    })
}
edit(value:any) {
  const dialogRef = this.dialog.open(AddcustomerComponent,
    {
      data:{
        ...value,
        showeditbutton:true
      }
    });
  dialogRef.afterClosed().subscribe((details: any) => {  })
}
deleteRow(id: any) {
  this.serv.deleteCustomer(id).subscribe(details => {
    this.router.navigate(['/dashboard'])
    window.location.reload(); 
  })
}  

  
}
