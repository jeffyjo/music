import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandinfoComponent } from './homepage/bandinfo/bandinfo.component';
import { GearListComponent } from './homepage/gear-list/gear-list.component';
import { CalendarEventComponent } from './homepage/calendar/calendar.component';
import { HomepageUiComponent } from './homepage/homepage-ui/homepage-ui.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderIndexComponent } from './header-index/header-index.component';

//Routes
export const appRoutes : Routes = [
    { path : "", component : HeaderIndexComponent },
    { path : "homepage", component : HomepageComponent,
      children : [
        { path : "", component: HomepageUiComponent },
        { path : "calendar", component : CalendarEventComponent },
        { path : "gearlist", component : GearListComponent },
        { path : "bandinfo", component : BandinfoComponent }
    ] }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    
    exports: [ RouterModule ]
})
export class AppRoutingModule { }