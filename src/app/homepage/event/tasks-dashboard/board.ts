import { Column } from './column/column';
import { Card } from './column/task/card';

export class Board {
	_id: string;
	title: string;
	columns: Column[];
  // cards: Card[];
}