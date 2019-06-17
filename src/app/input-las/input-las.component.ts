import { Component, OnInit } from '@angular/core'
import {ChartComponent} from '../chart/chart.component';

@Component({
  selector: 'app-input-las',
  templateUrl: './input-las.component.html',
  styleUrls: ['./input-las.component.css']
})
export class InputLASComponent implements OnInit {

  lasData = [];

  constructor() { }

  ngOnInit() {}

  onFileChange(event): any {
    let reader: FileReader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsText(file);

      reader.onload = result => {
        let header = [];
        let data = [];
        let curves = [];
        let strings = (<string>reader.result).split("\n");
        let dataflag = false;
        let curvesflag = false;
        for (let i = 0; i < strings.length; ++i) {
          let str = strings[i].split(/\s+/);
          // console.log(str, i);
          if (!dataflag) {
            header.push(str);
          } else {
            str.shift();
            data.push(str);
            console.log(curves);
            let curvesKeys = Object.keys(curves);
            for (let j = 0; j < str.length; ++j) {
              curves[curvesKeys[j]].push(str[j]);
            }
          }

          if (curvesflag) {
            console.log('in curves');
            if (str[0].indexOf('#') < 0 && str[0].indexOf('~') < 0)
              curves[str[0]] = [];
          }

          if (str[0] && str[0].indexOf('~A') === 0) {
            dataflag = true;
            curvesflag = false;
          }
          if (str[0] && str[0].indexOf('~C') === 0) {
            curvesflag = true;
          }
        }

        this.lasData = curves;

        // console.log(header);
        // console.log(curves);
        // console.log(data);

        // drawChart();
        // drawChartOwn();
        // drawChartPlotly();
        // console.log(fr.result.split("\n"));
        // let lasobject = lasreader(fr.result);
        // console.log(lasobject);
        // console.log(lasobject.header);
      };

    }
  }

}
