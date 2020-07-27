import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  likes=0;

  ngOnInit(): void {
  }

  //Segun el valor proporcionado por parámetro suma uno el contador o lo reinicia.
  actualizar(like) {
    if(like==0){
      this.likes =0;
    }else{
      this.likes++;
    }
    
  }

}
