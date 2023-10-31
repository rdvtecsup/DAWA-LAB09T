import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent {
  images: any[]; // Declaración de la variable 'images'

  constructor() {
    // Aquí puedes asignar valores a 'images', por ejemplo:
    this.images = [
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptYvp77tT0z2i2MCKPWMqKtwd00rVq45dXA&usqp=CAU', titulo: 'Verano', descripcion: ' Es la época de mayor calor del año, en la que el Sol impacta de manera directa e intensa, elevando las temperaturas. Es la época de la cosecha, en que las plantas producen frutos y la mayoría de los animales aprovechan para reproducirse.'},
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOjSbszTyDGvndXuS5XyOOYlYxCmH8yJ8SA&usqp=CAU', titulo: 'Primavera', descripcion: 'Es la época del renacimiento, en que el Sol vuelve a calentar más y los hielos comienzan a derretirse, momento que las plantas aprovechan para reverdecer y florecer. Las especies animales que hibernan salen de sus madrigueras y los días comienzan a alargarse.'},
	  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAubBP0BwBDFBwzHkI0RzgzEg-p9SmMLsRMg&usqp=CAU', titulo: 'Invierno', descripcion: 'Es la época más fría del año, en la que el Sol impacta de manera menos directa y menos intensa, de modo que el crecimiento de las plantas se enlentece o detiene y en algunos lugares se producen heladas, nevadas y otros fenómenos meteorológicos más extremos.' },
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLOV7gqgc6lZYXElH7pS5tqAatCzm0wwHKA&usqp=CAU', titulo: 'Otoño', descripcion: 'Es la época en que se marchitan las hojas de los árboles, en que el clima comienza a enfriarse y la vida se prepara para la llegada del invierno. Es una época culturalmente asociada a la melancolía y la tristeza, dado que las noches comienzan a hacerse más largas que los días.' },
      
    ];
  }
}
