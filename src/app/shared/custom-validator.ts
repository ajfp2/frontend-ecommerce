import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidator extends Validators {

    static nameValidator(nombres: any): ValidatorFn{
        
        return (control: AbstractControl): ValidationErrors | null => {
            const forbidden = nombres.find(control.value);
            console.log("ESTA", forbidden);
            
            return forbidden ? {forbiddenName: {value: control.value}} : null;
        };
    }

    static onlyNumbers(control: AbstractControl): ValidationErrors | null {
        return /^\d+$/.test(control.value) ? null : { onlyNumbers: true };
      }
}
