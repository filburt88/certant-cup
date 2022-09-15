import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images = [
    {
      image: `../../../assets/carouselImages/select-top-player.png`,
      caption: 'Selecciona al Goleador',
      text: 'No olvides elegir al goleador del mundial para sumar mas puntos',
    },
    {
      image: `../../../assets/carouselImages/grupo_1.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_2.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_3.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_4.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_5.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_6.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_7.png`,
    },
    {
      image: `../../../assets/carouselImages/grupo_8.png`,
    },
  ];

  ngOnInit(): void {}
}
