import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-reservation-hero-section',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './reservation-hero-section.html',
  styleUrls: ['./reservation-hero-section.css'],
})
export class ReservationHeroSection {
  images = [
    { itemImageSrc: 'assets/hero_slide1.jpg', alt: 'Image 1' },
    { itemImageSrc: 'assets/hero_slide2.jpg', alt: 'Image 2' },
    { itemImageSrc: 'assets/hero_slide3.png', alt: 'Image 3' }
  ];

  imgUrl: string = 'assets/banner.webp';
}
