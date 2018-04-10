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
});


