import { Card } from './task/card';

export class Column {
	  _id: number;
    title: string;
    boardId: string;
    order: number;
    cards: Card[];
}