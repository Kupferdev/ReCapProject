import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../../models/car/car';

@Pipe({
  name: 'carPipe',
  standalone: true
})
export class CarPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((c: Car) => c.brandName.toLocaleLowerCase().includes(filterText)
      || c.carName.toLocaleLowerCase().includes(filterText)
      || c.colorName.toLocaleLowerCase().includes(filterText)
      || c.dailyPrice.toString().includes(filterText)
      || c.description.toLocaleLowerCase().includes(filterText)
      || c.modelYear.toString().includes(filterText)) : value;
  }
  // veya ile filtrelemeyi cesitlendirebiliriz.

}
