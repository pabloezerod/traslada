import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private noticiasService: NoticiasService) { }

  //inicializo el emitter
  @Output() actualizarLikes = new EventEmitter();
  
  noticias = null;

  ngOnInit(): void {
    //Si se quisiera obtener las noticias sin necesidad de presionar la opción de "Obtener noticias", se debería descomentar esta línea.
    //this.getNoticias();
  }

  getNoticias(){
    this.noticiasService.getNoticias().subscribe( result =>  this.noticias = result);

    //Al pasarle 0 se reinicia el contador total de likes.
    this.actualizarLikes.emit(0);
  }

  incrementar(index){
    this.noticias[index].likes++;

    //Al pasarle 1 se suma 1 al contador total de likes.
    this.actualizarLikes.emit(1);
  }

}
