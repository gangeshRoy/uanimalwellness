import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';


declare var Accelerator: any;

@Component({
  selector: 'acceletorMetricChart',
  templateUrl: './acceletorMetricChart.component.html',

  styleUrls: ['./acceletorMetricChart.component.css'],
  encapsulation: ViewEncapsulation.None
})
/*MetricChartComponent for use metric chart*/
export class MetricChartComponent implements OnInit {
    ngOnInit():void {
            let options={
                /*Here set API response data*/
            };          
            new Accelerator('metric1',options).createChart('Metric','TotalFlights');
            new Accelerator('metric2',options).createChart('Metric','TotalPets');
            new Accelerator('metric3',options).createChart('Metric','ScanSkipped');
            new Accelerator('metric4',options).createChart('Metric','ScanDelayed');
            new Accelerator('metric5',options).createChart('Metric','PetNotOk');
            new Accelerator('metric6',options).createChart('Metric','CrateNotOk');
          
    }
  
}

