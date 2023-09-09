import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(obj:any, greet:string): string {
    if (obj.salary >= 75000) {
      return `Hey ${obj.name} ${greet}`
    }
    else {
      return `Yo ${obj.name} do not worry try hard to ${greet}`
    }
  }

}
