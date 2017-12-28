import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {dataService} from '../service/dataService.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[dataService]
})
export class HomeComponent implements OnInit {
  show:boolean=false;
  @Input('fullNames') fullName:string;
  fname:string;
  lname:string;
  users;
  @Output('Employeename') employee=new EventEmitter<string>()
  constructor(private userService:dataService) { 
    // this.users=this.userService.getUsers();
    // console.log( this.userService.getUsers())
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(p=>this.users = p);
  }
  saveData()
  {
    this.employee.emit(this.fname+' '+this.lname);
    console.log(this.fname);
    console.log(this.lname);
  }

}