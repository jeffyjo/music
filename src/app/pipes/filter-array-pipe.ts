import { Pipe, PipeTransform } from '@angular/core';

// # Filter Array of Objects
@Pipe({ name: 'filter', pure: false })
export class FilterArrayPipe implements PipeTransform {
  // transform(value : any, filterString: string, propName: string) {
  //   if (value === undefined) {
  //     return value;
  //   } for (let item of value){
  //     const resultsArray = []
  //     if (item[propName] === filterString){
  //       resultsArray.push(item)
  //     }
  //     return resultsArray
  //   }
  // }
  transform(value:any){
    for(let i of value){
      console.log(i)
      return i
    }
  }
}