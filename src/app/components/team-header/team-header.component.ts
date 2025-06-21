import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-team-header',
  imports: [NgOptimizedImage],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.scss'
})
export class TeamHeaderComponent {
  public imagenTeam = input("");
  public nombreTeam = input("");
  public componentId = input("");
  public jugadores = input<any[]>([]);
}
