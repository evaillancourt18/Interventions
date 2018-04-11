import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/caracteres-validator';
import { TypeService } from './type.service';
import { IType } from './type';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';

@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesProblemes: IType[];
  errorMessage: string;

  constructor(private fb: FormBuilder, private types: TypeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenomProbleme: ['',[VerifierCaracteresValidator.sansEspaces(),VerifierCaracteresValidator.longueurMinimum(3)]],
      nomProbleme: ['',[VerifierCaracteresValidator.sansEspaces(),VerifierCaracteresValidator.longueurMinimum(3)]],
      noType: ['',Validators.required],
      notification: ['PasMeNotifier'],
      telephone: [{value: '', disabled:true}],
        courrielGroup: this.fb.group({
          courriel: [{value: '', disabled:true}],
          validerCourriel: [{value: '', disabled:true}],
        })
      

    });

    this.types.obtenirTypes()
    .subscribe(typ=> this.typesProblemes = typ,
    error => this.errorMessage = <any> error);

    this.problemeForm.get('notification').valueChanges.subscribe(value=>this.appliquerNotifications(value));
  }

  appliquerNotifications(typeNotification: string): void {
    const courrielProblemeControl = this.problemeForm.get('courrielGroup.courriel');
    const validerCourrielProblemeControl = this.problemeForm.get('courrielGroup.validerCourriel');
    const telephoneProblemeControl = this.problemeForm.get('telephone');
    const courrielGroupProblemeControl = this.problemeForm.get('courrielGroup');

    courrielProblemeControl.clearValidators();
    courrielProblemeControl.reset();
    courrielProblemeControl.disable();
    validerCourrielProblemeControl.clearValidators();
    validerCourrielProblemeControl.reset();
    validerCourrielProblemeControl.disable();
    telephoneProblemeControl.clearValidators();
    telephoneProblemeControl.reset();
    telephoneProblemeControl.disable();
    courrielGroupProblemeControl.clearValidators();

    if(typeNotification === 'MeNotifierCourriel'){
      courrielProblemeControl.enable();
      courrielProblemeControl.setValidators([Validators.required,Validators.email]);
      validerCourrielProblemeControl.enable();
      validerCourrielProblemeControl.setValidators([Validators.required,Validators.email]);
      courrielGroupProblemeControl.setValidators([Validators.compose([emailMatcherValidator.courrielConfirmation()])]);

    }else if(typeNotification ==='MeNotifierTelephone'){
      telephoneProblemeControl.enable();
      telephoneProblemeControl.setValidators([Validators.required,Validators.pattern('[0-9]+'),Validators.maxLength(10),Validators.minLength(10)]);
    }

    courrielProblemeControl.updateValueAndValidity();
    telephoneProblemeControl.updateValueAndValidity();
    validerCourrielProblemeControl.updateValueAndValidity();
    courrielGroupProblemeControl.updateValueAndValidity();
  }

}
