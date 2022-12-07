import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
constructor(){}
  @Input()value:any
  @Output() updatedetails= new EventEmitter<any>()
  @Output() deletedetails= new EventEmitter<any>()
  
 
ngOnInit(){}
edit(){
  this.updatedetails.emit(this.value)
}
deleteRow(){
  this.deletedetails.emit(this.value.id)
}

}
