import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css'],
})
export class HeroSection {
  images = [
    { itemImageSrc: 'assets/hero_slide1.jpg', alt: 'Image 1' },
    { itemImageSrc: 'assets/hero_slide2.jpg', alt: 'Image 2' },
    { itemImageSrc: 'assets/hero_slide3.png', alt: 'Image 3' }
  ];

  imgUrl: string = 'assets/hero_slide1.jpg';
}
