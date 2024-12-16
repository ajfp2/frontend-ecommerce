import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidator extends Validators {

    static nameValidator(): ValidatorFn{
        const nombres = ["Prueba", "Test", "Mock", "Fake"];
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;

            if(!value){
                return null;
            }
            const forbidden = nombres.find(n => n == value);
        
            return (forbidden != undefined) ? { nameValidator: true } : null;
        };
        
    }

    static onlyNumbers(control: AbstractControl): ValidationErrors | null {
        return /^\d+$/.test(control.value) ? null : { onlyNumbers: true };
    }
}
