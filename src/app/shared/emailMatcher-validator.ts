import { ValidatorFn, AbstractControl } from "@angular/forms";

export class emailMatcherValidator{
    static courrielConfirmation(): ValidatorFn{
        return (c: AbstractControl): { [key: string]: boolean } | null => {
           let courriel = c.get('courriel');
           let validerCourriel = c.get('validerCourriel');

           if(!courriel.value || !validerCourriel.value){
               return null;
           }

           if(courriel.value === validerCourriel.value){
               return null;
           }else{
               return {'courrielConfirmation':true};
           }
        };



    }
}