import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Menu, menuList as staticMenuList } from '../../data/menus';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  topFixed: boolean = true;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled!: boolean;
  menuList : Menu[] = [];
  isLessThenLargeDevice: any;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.menuList = staticMenuList;
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }
}
