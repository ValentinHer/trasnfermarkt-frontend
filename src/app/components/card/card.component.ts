import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public nombreJugador = input("");
  public imagenJugador = input("");
  public numeroJugador = input("");
  public fechaNacimiento = input("");
  public posicion = input("");
  public nacionalidades = input([].join(", "));
  public valorEnMercado = input("");
  public componentId = input("");
}
