import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
 
  @Input()
  showSideBar : boolean 

  @Output()
  showSideBarChange : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }
  
  ngOnInit(): void {
  }
  afficherSideBar(){
    this.showSideBar = !this.showSideBar
    this.showSideBarChange.emit(this.showSideBar)
   }

}
