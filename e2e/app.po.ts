import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/probleme');
  }

  getParagraphText() {
    return element(by.css('inter-root h5')).getText();
  }

  setChampsValidesScenarioNominal() : void {
    element(by.id('prenomProblemeId')).clear();
    element(by.id('prenomProblemeId')).sendKeys('Etienne');
    element(by.id('nomProblemeId')).clear();
    element(by.id('nomProblemeId')).sendKeys('Vaillancourt');    
    // Sélectionner le premier élément dans la zone de liste déroulante
    element(by.id('noTypeId')).all(by.tagName('option')).get(1).click();      
    // Cliquer sur la première option du bouton radio
    element.all(by.id('notificationId')).get(0).click(); 
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Description du prob');      
  }

  setChampsValidesScenarioAlternatifParMessageTexte() : void {
    element(by.id('prenomProblemeId')).clear();
    element(by.id('prenomProblemeId')).sendKeys('Etienne');
    element(by.id('nomProblemeId')).clear();
    element(by.id('nomProblemeId')).sendKeys('Vaillancourt');    
    // Sélectionner le premier élément dans la zone de liste déroulante
    element(by.id('noTypeId')).all(by.tagName('option')).get(1).click();      
    // Cliquer sur la première option du bouton radio
    element.all(by.id('notificationId')).get(1).click(); 
    element(by.id('telephoneId')).sendKeys('5143459678');
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Description du prob');      
  }

  setChampsValidesScenarioAlternatifParCourriel() : void {
    element(by.id('prenomProblemeId')).clear();
    element(by.id('prenomProblemeId')).sendKeys('Etienne');
    element(by.id('nomProblemeId')).clear();
    element(by.id('nomProblemeId')).sendKeys('Vaillancourt');    
    // Sélectionner le premier élément dans la zone de liste déroulante
    element(by.id('noTypeId')).all(by.tagName('option')).get(1).click();      
    // Cliquer sur la première option du bouton radio
    element.all(by.id('notificationId')).get(2).click(); 
    element(by.id('courrielId')).sendKeys('aaa@bbb.com');
    element(by.id('validerCourrielId')).sendKeys('aaa@bbb.com');
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Description du prob');      
  }

  boutonSubmit() : ElementFinder { 
    return element(by.buttonText('Sauvegarder'));
  }   

  setZonePrenomProblemeCaracteresInsuffisant() : void {
    element(by.id('prenomProblemeId')).clear();
    element(by.id('prenomProblemeId')).sendKeys('XX');
  }

  setZonePrenomProblemeCaracteresSuffisant() : void {
    element(by.id('prenomProblemeId')).clear();
    element(by.id('prenomProblemeId')).sendKeys('XXXXX');
  }

  obtenirClasseZonePrenomProbleme()   { 
    return element(by.id('prenomProblemeId')).getAttribute("class");
  }   

}
