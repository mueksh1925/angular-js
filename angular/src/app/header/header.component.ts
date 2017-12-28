import {Component} from '@angular/core';
import {dataService} from '../service/dataService.service'
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css'],
  providers:[dataService]
})
export class HeaderComponent{
    isIn:boolean=false;
    MyArrayTypes:Object=''
  constructor(private dataServices:dataService)
  {
    this.MyArrayTypes=this.dataServices.getListOfItem();
    console.log(this.MyArrayTypes)
  }
  onInit()
  {
  console.log(this.dataServices.getListOfItem())
  }
  menuToggle()
  {
    this.isIn=!this.isIn
  }
   
}
