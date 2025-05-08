import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var Swiper: any;
@Component({
  selector: 'app-landing',
  imports: [RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})

export class LandingComponent implements OnInit {

  ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7.5,
          spaceBetween: 30,
        },
      },
    });

  
  }
}
