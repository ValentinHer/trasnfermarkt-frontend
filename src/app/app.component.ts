import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataReaderService } from './utils/data-reader.service';
import { LigaHeaderComponent } from './components/liga-header/liga-header.component';
import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LigaHeaderComponent, TeamHeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public jsonData: any[] = [];

  constructor(private dataReader: DataReaderService) {
  }

  ngOnInit(): void {
    this.dataReader.getDataFromJson().subscribe({
      next: data => {
        console.log("Datos cargados: ", data),
        this.jsonData = Array.isArray(data) ? data : [];
      },
      error: err => console.log("Error al cargar datos: ", err)
    })    
  }
  
}
