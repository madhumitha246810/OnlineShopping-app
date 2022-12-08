import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  cards: any
  items:any
  constructor(private serv: SampleserviceService, private router: Router) { }
  ngOnInit(): void {
    console.log(';;;;;;;;;;;;',this.router.url)
    if(this.router.url.includes("shopping")){
      this.serv.getProductDetails().pipe(map(((details:any)=>{
        return details.filter(((key:any)=>key.id<7))
      }))).subscribe(clothes => {
        this.cards = clothes
      })
      
    }else {
      this.serv.getProductDetails().pipe(map(((details:any)=>{
        return details.filter(((key:any)=>key.id>=7))
      }))).subscribe(groceryItem => {
        this.items = groceryItem
      })
    }
  }
}

// this.dataSource = this.serv.dataEvent$.pipe(map((n: any) => {
//   return n.filter((x: any) => x.Wish)

// }))