import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  param1: number;
  param2: number;
  result: number;
  jsonn: any;
  childSentData: string;
  txtName: string = "Test 1";

  constructor(private homeService: HomeService) { }

  add() {
    this.result = this.param1 + this.param2;
  }

  updateMsg(msg: string){
    console.log(this.txtName);
    this.homeService.updateMessage(msg);
  }

  showDataFromChild(message: any){
    this.childSentData = message;
  }

  ngOnInit() {
    this.homeService.getMockData().subscribe((res)=>{this.jsonn = res});
  }
}
