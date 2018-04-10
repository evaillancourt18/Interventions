import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TypeService } from './type.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,AngularFontAwesomeModule, HttpClientModule],
      declarations: [ ProblemeComponent ],
      providers:[TypeService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

     it('should create', () => {
       expect(component).toBeTruthy();
     });

    it('Zone PRÉNOM invalide avec 2 caractères', () => {
      let errors = {};
      let zone = component.problemeForm.get('prenomProbleme');
      zone.setValue('a'.repeat(2));
      errors = zone.errors || {};
      expect(errors['longueurMinimum']).toBe(false);
    });

  it('Zone PRÉNOM valide avec 3 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue('a'.repeat(3));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBe(true);
  });



  it('Zone PRÉNOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBe(true);
  });

  it('Zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBe(false);
  });

  it('Zone PRÉNOM invalide avec 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue('a');
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBe(false);
  });

  it('Zone PRÉNOM invalide avec 50 espaces', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue(' '.repeat(50));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBe(false);
  });

  it('Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenomProbleme');
    zone.setValue("  a");
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBe(false);
  });

  it('Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('PasMeNotifier');

    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone TELEPHONE est vide quand ne pas me notifier', () => {
    component.appliquerNotifications('PasMeNotifier');

    let zone = component.problemeForm.get('telephone');
    expect(zone.value).toBeNull();
  });

  it('Zone COURRIEL est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('PasMeNotifier');

    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone COURRIEL est vide quand ne pas me notifier', () => {
    component.appliquerNotifications('PasMeNotifier');

    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.value).toBeNull();
  });

  it('Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('PasMeNotifier');

    let zone = component.problemeForm.get('courrielGroup.validerCourriel');
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone CONFIRMER COURRIEL est vide quand ne pas me notifier', () => {
    component.appliquerNotifications('PasMeNotifier');

    let zone = component.problemeForm.get('courrielGroup.validerCourriel');
    expect(zone.value).toBeNull();
  });

  it('Zone TELEPHONE est désactivée quand notifier par courriel', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone COURRIEL est activé quand me notifier par courriel', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.status).not.toEqual('DISABLED');
  });

  it('Zone CONFIRMER COURRIEL est activé quand me notifier par courriel', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let zone = component.problemeForm.get('courrielGroup.validerCourriel');
    expect(zone.status).not.toEqual('DISABLED');
  });

  it('Zone COURRIEL est invalide sans valeur quand me notifier par courriel', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let errors = {};
    let zone = component.problemeForm.get('courrielGroup.courriel');
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['required']).toBe(true);
  });

  it('Zone CONFIRMER COURRIEL est invalide sans valeur quand me notifier par courriel', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let errors = {};
    let zone = component.problemeForm.get('courrielGroup.validerCourriel');
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['required']).toBe(true);
  });
  it('Zone COURRIEL est invalide avec un format non conforme', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let errors = {};
    let zone = component.problemeForm.get('courrielGroup.validerCourriel');
    zone.setValue('[a-z0-9._%+-]+@[a-z0-9.-]+');
    errors = zone.errors || {};
    expect(errors['email']).toBe(true);
  });
  it('Zone COURRIEL sans valeur et Zone CONFIRMER COURRIEL avec valeur valide retourne null ', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let errors = {};
    let zoneCourriel = component.problemeForm.get('courrielGroup.courriel');
    let zoneValiderCourriel = component.problemeForm.get('courrielGroup.validerCourriel');
    zoneCourriel.setValue('');
    zoneValiderCourriel.setValue('aaa@aaa.com');

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['courrielConfirmation']).toBeUndefined();
  });

  it('Zone COURRIEL avec valeur valide et Zone CONFIRMER COURRIEL sans valeur  retourne null ', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let errors = {};
    let zoneCourriel = component.problemeForm.get('courrielGroup.courriel');
    let zoneValiderCourriel = component.problemeForm.get('courrielGroup.validerCourriel');
    zoneCourriel.setValue('aaa@aaa.com');
    zoneValiderCourriel.setValue('');

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['courrielConfirmation']).toBeUndefined();
  });

  it('Zones COURRIEL et CONFIRMER COURRIEL sont invalides si les valeurs sont différentes quand notifier par courriel ', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let errors = {};
    let zoneCourriel = component.problemeForm.get('courrielGroup.courriel');
    let zoneValiderCourriel = component.problemeForm.get('courrielGroup.validerCourriel');
    zoneCourriel.setValue('aaa@aaa.com');
    zoneValiderCourriel.setValue('aaa@bbb.com');

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['courrielConfirmation']).toBe(true);
  });

  it('Zones COURRIEL et CONFIRMER COURRIEL sont valides si les valeurs sont identiques quand notifier par courriel ', () => {
    component.appliquerNotifications('MeNotifierCourriel');

    let errors = {};
    let zoneCourriel = component.problemeForm.get('courrielGroup.courriel');
    let zoneValiderCourriel = component.problemeForm.get('courrielGroup.validerCourriel');
    zoneCourriel.setValue('aaa@aaa.com');
    zoneValiderCourriel.setValue('aaa@aaa.com');

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['courrielConfirmation']).toBeUndefined();
  });
});


