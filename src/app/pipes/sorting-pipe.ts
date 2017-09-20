import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sorting'
})

export class SortingPipe implements PipeTransform {
    sortedList = []

    categoryList = ["Bas", "Bas Guitar", "Guitar", "Drums"]
    test = []

    transform(value: any, type: string){
        this.test[0] = value[0][type]
        for(let i of value){
            if(this.test !== undefined){
                if( this.test.find(i[type]) == -1 ){
        //             this.test.push(i)
                }
                console.log(i[type])
            }
            console.log(this.test)
        }

        this.categoryList.forEach(cat => {
            for(let item of value){
                if( item[type] === cat ) {
                    this.sortedList.push(item)
                }
                // console.log(item[type])
                // go through list and find lowest value
            }
        });
        console.log(this.sortedList)
        return this.sortedList
    }

}