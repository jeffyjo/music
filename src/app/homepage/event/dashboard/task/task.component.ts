import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  NgZone, 
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';
import { Card } from './card';
import { TaskService } from './taskservice';
import { ClickOutsideDirective } from '../../../../shared/clickOutside.directive';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() card
  // @Output() cardUpdate: EventEmitter<Card>;
  editingCard = false;
  currentTitle: string;
  description: string;
  // zone: NgZone;
  constructor(private el: ElementRef,
  //   private _ref: ChangeDetectorRef,
  //   // private _ws: WebSocketService,
  //   private _cardService: TaskService
  ) {
  //   this.zone = new NgZone({ enableLongStackTrace: false });
  //   this.cardUpdate = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.card)
    this.currentTitle = this.card.title;
    this.description = this.card.description;
    // this._ws.onCardUpdate.subscribe((card: Card) => {
    //   if (this.card._id === card._id) {
    //     this.card.title = card.title;
    //     this.card.order = card.order;
    //     this.card.columnId = card.columnId;
    //   }
    // });
  }

  // blurOnEnter(event) {
  //   if (event.keyCode === 13) {
  //     event.target.blur();
  //   } else if (event.keyCode === 27) {
  //     this.card.title = this.currentTitle;
  //     this.editingCard = false;
  //   }
  // }

  editCard() {
    console.log("editting")
    this.editingCard = true;
    this.currentTitle = this.card.title;

    // let textArea = this.el.nativeElement.getElementsByTagName('textarea')[0];

    // setTimeout(function() {
    //   textArea.focus();
    // }, 0);
  }

  test(){
    console.log("test")
  }

  test2(){
    console.log("test2")
  }

  // updateCard() {
  //   if (!this.card.title || this.card.title.trim() === '') {
  //     this.card.title = this.currentTitle;
  //   }

  //   this._cardService.put(this.card).then(res => {
  //     // this._ws.updateCard(this.card.boardId, this.card);
  //   });
  //   this.editingCard = false;
  // }

  // //TODO: check lifecycle
  // private ngOnDestroy() {
  //   //this._ws.onCardUpdate.unsubscribe();
  // }



  // http://lishman.io/angular-2-event-binding

}
