import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  cards: any
  constructor(private serv: SampleserviceService, private router: Router) { }
  ngOnInit(): void {
    this.serv.getProductDetails().subscribe(d => {
      this.cards = d
    })
  }
}
