import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from '../../shared/components/home/hero-section/hero-section';
import { StatsSection } from '../../shared/components/home/stats-section/stats-section';
import { FindYourFoodsSection } from '../../shared/components/home/find-your-foods-section/find-your-foods-section';
import { ReservationSection } from '../../shared/components/home/reservation-section/reservation-section';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterOutlet,
    HeroSection,
    StatsSection,
    FindYourFoodsSection,
    ReservationSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
