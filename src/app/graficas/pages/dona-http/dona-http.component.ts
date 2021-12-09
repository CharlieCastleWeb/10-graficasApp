import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'

  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [
          //350, 450, 100, 150, 200, 300
        ],
        backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63'
        ]
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );
    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets[0].data = values;
    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0].data = values;
      })

  }

}
