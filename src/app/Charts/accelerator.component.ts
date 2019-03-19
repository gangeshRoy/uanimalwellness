import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';


declare var Accelerator: any;
  



@Component({
  selector: 'acceletorchart',
  templateUrl: './accelerator.component.html',

  styleUrls: ['./accelerator.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AcceletorChartComponent implements OnInit {
 
    ngOnInit():void {
        let options ={
            "width":400,
            "height":300,
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

