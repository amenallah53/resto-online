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
  responsiveOptions: any[] = [
    { breakpoint: '991px', numVisible: 4 },
    { breakpoint: '767px', numVisible: 3 },
    { breakpoint: '575px', numVisible: 1 }
  ];

  images = [
    { itemImageSrc: 'assets/hero_slide1.jpg', alt: 'Image 1' },
    { itemImageSrc: 'assets/hero_slide2.jpg', alt: 'Image 2' },
    { itemImageSrc: 'assets/hero_slide3.jpg', alt: 'Image 3' }
  ];
}
