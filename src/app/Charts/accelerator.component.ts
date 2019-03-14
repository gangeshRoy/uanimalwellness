import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';


declare var Accelerator: any;
  



@Component({
  selector: 'acceletorchart',
  template: '<div id="chart" ></div><span id="test"></span>',
  styleUrls: ['./accelerator.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AcceletorChartComponent implements OnInit {
 
    ngOnInit():void {
        let options ={
            "width":500,
            "height":200,
            "color":{
                "background":"#fff",
                "bar":"#567",
                "axis":"#444",
                "axisLabel":"#444"
            }   
};
        
            new Accelerator('chart',options).createChart('Gauge','ScanPerformance');
    }
  
}

