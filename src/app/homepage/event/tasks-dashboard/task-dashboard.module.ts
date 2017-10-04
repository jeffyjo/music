import { BoardService } from './tasks-dashboard.service';
import { NgModule } from '@angular/core';
import { BoardsService } from './mockboard.service';



@NgModule({
    providers: [ 
        BoardService, 
        BoardsService, 
    ],
    exports: []
})
export class TaskDashboardModule{ }