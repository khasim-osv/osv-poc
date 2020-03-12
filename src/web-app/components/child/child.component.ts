import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../services/home/home.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  txt: string;
  constructor(private homeService: HomeService) { }
  
  @Input() parentToChild: string;
  @Output() childToParent = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.homeService.getMessage()
    .subscribe(mymessage => this.txt = mymessage);
  }

}
