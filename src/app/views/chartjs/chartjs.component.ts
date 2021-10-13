import { Component } from '@angular/core';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

  // departmental performance
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'AFU'},
    {data: [28, 100, 40, 19, 86, 27, 90], label: 'NBU'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'ABU'},
    {data: [33, 52, 71, 60, 19, 100, 69], label: 'MBU'},
    {data: [11, 48, 74, 89, 100, 100, 100], label: 'ASMU'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // yellow
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(253,253,27,1)',
      pointBackgroundColor: 'rgba(253,253,27,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(253,253,27,0.8)'
    },
    { // purple
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,13,216,1)',
      pointBackgroundColor: 'rgba(148,13,216,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,13,216,1)'
    },
    { // cyan
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(33,255,248,1)',
      pointBackgroundColor: 'rgba(33,255,248,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(33,255,248,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(33,5,248,1)',
      pointBackgroundColor: 'rgba(33,5,248,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(33,5,248,1)'
    },
    { // voilet
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(245,40,145,1)',
      pointBackgroundColor: 'rgba(245,40,145,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(245,40,145,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // annual stats
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 86, 55, 90], label: 'Revenue'},
    {data: [28, 48, 40, 19, 56, 27, 40], label: 'Profit'}
  ];

  // Sources of revenue
  public doughnutChartLabels: string[] = ['Software Sales', 'Material Sales', 'Labor Sales'];
  public doughnutChartData: number[] = [350, 450, 200];
  public doughnutChartType = 'doughnut';

  // Employee of the month
  public radarChartLabels: string[] = ['Tcheumeni', 'Tsiabou', 'Ateufack', 'Ngasam', 'Ngonno', 'Nganguen', 'Njache', 'Kouakkam'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40, 83], label: 'Technical performance'},
    {data: [100, 48, 40, 19, 86, 27, 28, 58], label: 'HR performance'}
  ];
  public radarChartType = 'radar';

  // // Pie
  // public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  // public pieChartData: number[] = [300, 500, 100];
  // public pieChartType = 'pie';
  //
  // // Departmental revenue
  // public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  // public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  // public polarAreaLegend = true;
  //
  // public polarAreaChartType = 'polarArea';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
