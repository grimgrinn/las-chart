import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() lasData: any;

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    if (Object.keys(this.lasData).length) {
      this.buildChart();
    }
  }

  buildChart() {
    console.log('build chart');
    console.log(this.lasData);
    let curves = this.lasData;

    var k = Object.keys(curves);
    var depths = curves[k[0]];
    var mnemonica1 = curves[k[1]];
    var mnemonica2 = curves[k[2]];
    var mnemonicaName = k[1];

    var minValMnemonica1 = Math.min.apply(Math, mnemonica1),
        maxValMnemonica1 = Math.max.apply(Math, mnemonica1),
        minValMnemonica2 = Math.min.apply(Math, mnemonica2),
        maxValMnemonica2 = Math.max.apply(Math, mnemonica2),
        minValDepth = Math.min.apply(Math, depths),
        maxValDepth = Math.max.apply(Math, depths);


    var trace1 = {
      x: mnemonica1,
      y: depths,
      name: k[1],
      mode: 'lines',
      fillcolor: '#b30000',
      line: {
        color: '#23af14'
      }
    };

    var trace2 = {
      x: mnemonica2,
      y: depths,
      name: k[2],
      mode: 'lines',
      fillcolor: '#b30000',
      line: {
        color: '#4842b5'
      }
    };

    var layout = {
      title: 'LAS Graph',
      autosize: true,
      xaxis: {
        range: [minValMnemonica1, maxValMnemonica2],
        showgrid: true,
        showline: true,
        mirror: 'ticks',
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        side: 'top'
      },
      yaxis: {range: [maxValDepth, minValDepth],
        text: 'Depth',
        showgrid: true,
        showline: true,
        mirror: 'ticks',
        gridcolor: '#bdbdbd',
        gridwidth: 1
      }
    };

    var data = [trace1, trace2];

    Plotly.newPlot('chart', data, layout);
  }
}
