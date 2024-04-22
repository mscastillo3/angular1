import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './Serie.service';

@Component({
  selector: 'app-Serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css']
})
export class SerieComponent implements OnInit {
  series:Array<Serie> = [];
  average: number = 0;
  constructor (private serieService: SerieService) { }
  
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series= series;
      let average2: number = 0;
      let x: number = 0;
      for(let serie of this.series ){
          average2 = average2 + serie.seasons;
          x = x + 1;
  }
  
  average2 = average2/x;
  this.average = average2;
    });
    
  }
  

  ngOnInit() {
    this.getSeries();
  }

}
