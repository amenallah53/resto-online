// layouts/default-layout/default-layout.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';


@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet,Header, Footer],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css'
})
export class DefaultLayout {

}
