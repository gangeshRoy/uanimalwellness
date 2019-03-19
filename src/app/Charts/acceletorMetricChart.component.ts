import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';


declare var Accelerator: any;

@Component({
  selector: 'acceletorMetricChart',
  templateUrl: './acceletorMetricChart.component.html',

  styleUrls: ['./acceletorMetricChart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MetricCharChartComponent implements OnInit {
    ngOnInit():void {
        let options ={
            "DataTable":{
                "LiveScanAlert":[
                    {
                        "Pet Tag No.":{
                            "id":"3016888543",
                            "source":"AWB: C54456"
                        },
                        "Alert Type":"Delayed",
                        "Time":"13.37"
                    },
                    {
                        "Pet Tag No.":{
                            "id":"3016888990",
                            "source":"AWB: C549872"
                        },
                        "Alert Type":"Delayed",
                        "Time":"12.03"
                    },
                    {
                        "Pet Tag No.":{
                            "id":"3016888456",
                            "source":"AWB: C45671"
                        },
                        "Alert Type":"Delayed",
                        "Time":"11.17"
                    },
                    {
                        "Pet Tag No.":{
                            "id":"3016888751",
                            "source":"AWB: C540921"
                        },
                        "Alert Type":"Delayed",
                        "Time":"10.15"
                    }]
                },
                "Metric":{
        
                    "TotalFlights":{
                        // "icon":"https://www.freeiconspng.com/uploads/no-image-icon-6.png",
                        "icon":"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjosY6N3ovhAhXJbSsKHYmdA3sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fflat-color-dog-cage-icon-gm861527308-143090409&psig=AOvVaw35mk7uN50ocJ5_d9nnbc2n&ust=1552999984324986",
                        "label":"Total Flights",
                        "value":78
                    },
                    "TotalPets":{
                        // "icon":"https://www.freeiconspng.com/uploads/no-image-icon-6.png",
                        "icon":"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjosY6N3ovhAhXJbSsKHYmdA3sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fflat-color-dog-cage-icon-gm861527308-143090409&psig=AOvVaw35mk7uN50ocJ5_d9nnbc2n&ust=1552999984324986",

                        "label":"Total Pets",
                        "value":132
                    },
                    "ScanSkipped":{
                        // "icon":"https://www.freeiconspng.com/uploads/no-image-icon-6.png",
                        "icon":"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjosY6N3ovhAhXJbSsKHYmdA3sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fflat-color-dog-cage-icon-gm861527308-143090409&psig=AOvVaw35mk7uN50ocJ5_d9nnbc2n&ust=1552999984324986",

                        "label":"Scan Skipped",
                        "value":42
                    },
                    "ScanDelayed":{
                        // "icon":"https://www.freeiconspng.com/uploads/no-image-icon-6.png",
                        "icon":"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjosY6N3ovhAhXJbSsKHYmdA3sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fflat-color-dog-cage-icon-gm861527308-143090409&psig=AOvVaw35mk7uN50ocJ5_d9nnbc2n&ust=1552999984324986",

                        "label":"Scan Delayed",
                        "value":16
                    },
                    "PetNotOk":{
                        // "icon":"https://www.freeiconspng.com/uploads/no-image-icon-6.png",
                        "icon":"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjosY6N3ovhAhXJbSsKHYmdA3sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fflat-color-dog-cage-icon-gm861527308-143090409&psig=AOvVaw35mk7uN50ocJ5_d9nnbc2n&ust=1552999984324986",

                        "label":"Pet Not Ok",
                        "value":3
                    },
                    "CrateNotOk":{
                        // "icon":"https://www.freeiconspng.com/uploads/no-image-icon-6.png",
                        "icon":"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjosY6N3ovhAhXJbSsKHYmdA3sQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fflat-color-dog-cage-icon-gm861527308-143090409&psig=AOvVaw35mk7uN50ocJ5_d9nnbc2n&ust=1552999984324986",

                        "label":"Crate Not Ok",
                        "value":5
                    }
        
                },
                "Gauge":{
                    "ScanPerformance":{
                        "min":0,
                        "max":100,
                        "value":82
                    }
                }
        };
        
new Accelerator('metric1',options).createChart('Metric','TotalFlights');
new Accelerator('metric2',options).createChart('Metric','TotalPets');
new Accelerator('metric3',options).createChart('Metric','ScanSkipped');
new Accelerator('metric4',options).createChart('Metric','ScanDelayed');
new Accelerator('metric5',options).createChart('Metric','ScanSkipped');
new Accelerator('metric6',options).createChart('Metric','ScanDelayed');
          
    }
  
}

