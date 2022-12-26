import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settingGender'
})
export class SettingGenderPipe implements PipeTransform {

  transform(value:boolean): string {
    
   if(value==false)
   return"Male"
   else return "FeMale";
  }

}
