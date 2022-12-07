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
    //console.log("---details---",this.route.snapshot.params['id'])
    this.serv.getRowDetails(this.route.snapshot.params['id']).subscribe((d: any) => {
      console.log('!!!!!!!!!',d)
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
  dialogRef.afterClosed().subscribe((t: any) => { console.log('output', `${t}`) })
}

deleteRow(id: any) {
  this.serv.deleteCustomer(id).subscribe(f => {
    this.router.navigate(['/dashboard'])
    window.location.reload(); console.log('...', f)
  })
}  

out(){
  this.router.navigate(['/login'])
  localStorage.clear()
}
home(){
  this.router.navigate(['/dashboard'])
}
shop(){
this.router.navigate(['/shopping'])
}

wish(){
this.router.navigate(['/wishlist'])
}
  
}
