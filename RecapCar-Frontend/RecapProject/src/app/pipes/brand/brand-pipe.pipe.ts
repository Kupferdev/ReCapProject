import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../../models/brand/brand';

@Pipe({
  name: 'brandPipe',
  standalone: true
})
export class BrandPipePipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText? value.filter((b : Brand) => b.brandName.toLocaleLowerCase().includes(filterText)) : value;
  }

}
