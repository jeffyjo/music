import { Component, OnInit } from '@angular/core';

import { Alert, AlertType } from '../models/alert';
import { AlertService } from './alert.service';

@Component({
   moduleId: module.id,
   selector: 'alert',
   template: `
       <div 
           *ngFor="let alert of alerts" 
           class="{{ cssClass(alert) }} test alert-dismissable">
               {{alert.message}}
           <a class="close" (click)="removeAlert(alert)">&times;</a>
        </div>
   `,
})

export class AlertComponent {
   alerts: Alert[] = [];

   constructor(private alertService: AlertService) { }

   ngOnInit() {
       console.log('OnInit in component')
       this.alertService.getAlert().subscribe((alert: Alert) => {
           if (!alert) {
               // clear alerts when an empty alert is received
               this.alerts = [];
               return;
           }

           // add alert to array
           this.alerts.push(alert);
       });
   }

   removeAlert(alert: Alert) {
       this.alerts = this.alerts.filter(x => x !== alert);
   }

   cssClass(alert: Alert) {
       if (!alert) {
           return;
       }

       // return css class based on alert type
       switch (alert.type) {
           case AlertType.Success:
               return 'alert alert-success';
           case AlertType.Error:
               return 'alert alert-danger';
           case AlertType.Info:
               return 'alert alert-info';
           case AlertType.Warning:
               return 'alert alert-warning';
       }
   }
}

// styles: [`

// @keyframes test {
// 0%   {opacity: 1;}
// 25%  {opacity: 0,75;}
// 50%  {opacity: 0,5;}
// 100% {opacity: 0.2;}
// }

// .test {
// animation-name: test;
// animation-duration: 2.1s;
// animation-iteration-count: 1;
// }


// `],