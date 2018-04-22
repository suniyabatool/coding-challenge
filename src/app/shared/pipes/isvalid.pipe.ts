import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'isvalid',
  pure: false
})
export class IsvalidPipe implements PipeTransform {

  transform(control: any, validations?: string []): boolean {

    let validationFlag: boolean = false;
    validations.forEach((validation, index) => {
      if (control) {
        if (control.hasError(validation) && control.dirty) {
          validationFlag = true;
          return;
        }
      }
    });

    return validationFlag;
  }

}