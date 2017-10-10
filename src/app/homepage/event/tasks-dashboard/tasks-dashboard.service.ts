// import { BoardsService } from './mockboard.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Board } from './board';
import { Column } from './column/column';
// import { Card } from './column/task/card';

@Injectable()
export class BoardService {
    // boardsCache : Board = [];

    constructor(private boardService : BoardService){
        // this.boardsCache = this.boardService.getBoards
    }

}