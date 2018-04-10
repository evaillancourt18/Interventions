import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/caracteres-validator';
import { TypeService } from './type.service';
import { IType } from './type';

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
      noType: ['',Validators.required]
    });

    this.types.obtenirTypes()
    .subscribe(typ=> this.typesProblemes = typ,
    error => this.errorMessage = <any> error);
  }

}
