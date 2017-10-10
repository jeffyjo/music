import { EventsService } from './../../services/events.service';
import { Observable } from 'rxjs/Rx';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Event } from './../../models/event';

export class EventResolver implements Resolve<Event> {

    constructor(private es: EventsService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
        : Observable<Event> | Promise<Event> | Event {
        return this.es.getEvent(route.params['id'])
    }
}