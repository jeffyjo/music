import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandinfoComponent } from './homepage/bandinfo/bandinfo.component';
import { GearListComponent } from './homepage/gear-list/gear-list.component';
import { CalendarEventComponent } from './homepage/calendar/calendar.component';
import { HomepageUiComponent } from './homepage/homepage-ui/homepage-ui.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderIndexComponent } from './header-index/header-index.component';
import { EventComponent } from './homepage/event/event.component';


//Routes
export const appRoutes : Routes = [
    { path : "login", component : HeaderIndexComponent },
    { path : "", component : HomepageComponent,
      children : [
        { path : "", component: HomepageUiComponent },
        { path : "calendar", component : CalendarEventComponent },
        { path : "gearlist", component : GearListComponent },
        { path : "bandinfo", component : BandinfoComponent },
        { path : "events/:id", component : EventComponent }
    ] }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    
    exports: [ RouterModule ]
})
export class AppRoutingModule { }