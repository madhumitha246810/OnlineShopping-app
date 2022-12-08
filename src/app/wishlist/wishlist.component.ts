import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';
import { SampleserviceService } from '../sampleservice.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'itemname', 'cost', 'shippingAddress'];
  dataSource: Observable<any> = of([{}]);
  dialog: any;


  constructor(private serv: SampleserviceService, private router: Router) { }

  ngOnInit() {
    this.serv.getCustomer()
    this.dataSource = this.serv.dataEvent$.pipe(map((n: any) => {
      return n.filter((x: any) => x.Wish)

    }))
  }
  edit(element: any) {
    const dialogRef = this.dialog.open(AddcustomerComponent,
      {
        data: {
          ...element,
          showeditbutton: true
        }
      });
    dialogRef.afterClosed().subscribe((details: any) => { })
  }
  deleteRow(id: any) {
    this.serv.deleteCustomer(id).subscribe(details => {
      window.location.reload();
    })
  }




}



















