import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  //valor proporcionado por el componente home.
  @Input() valor: number;

  ngOnInit(): void {
  }

}
