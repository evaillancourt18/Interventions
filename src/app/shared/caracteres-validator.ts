import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierCaracteresValidator{
static sansEspaces(): ValidatorFn{
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if(c.value==""){
            return {'sansEspaces': false};
        }
        return {'sansEspaces': true};
    };
}

}
