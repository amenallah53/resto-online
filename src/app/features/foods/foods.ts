import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { FoodsTopSection } from '../../shared/components/foods/foods-top-section/foods-top-section';
import { FoodsGrid } from '../../shared/components/foods/foods-grid/foods-grid';
import { FoodsNavBar } from '../../shared/components/foods/foods-nav-bar/foods-nav-bar';

@Component({
  selector: 'app-foods',
  imports: [Header,FoodsTopSection,FoodsGrid,FoodsNavBar],
  templateUrl: './foods.html',
  styleUrl: './foods.css',
})
export class Foods {

}
