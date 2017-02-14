import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFilter'
})
export class DateFilter implements PipeTransform{
    transform(val: string): string {
        return (new Date(val)).toDateString();
    }
}