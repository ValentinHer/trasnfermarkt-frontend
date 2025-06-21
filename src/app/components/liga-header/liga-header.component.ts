import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-liga-header',
  imports: [NgOptimizedImage],
  templateUrl: './liga-header.component.html',
  styleUrl: './liga-header.component.scss'
})
export class LigaHeaderComponent {
  public nombreLiga = input("");
  public imagenLiga = input("");
  public equipos = input<any[]>([]);
}
