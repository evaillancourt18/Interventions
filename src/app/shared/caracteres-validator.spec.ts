import { VerifierCaracteresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {

 it('une chaîne vide est invalide', () => {
    let control = { value: ''};
    let validator = VerifierCaracteresValidator.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['sansEspaces']).toBe(false);
 });

 it('une chaîne avec 10 espaces est invalide', () => {
    let control = { value: ' '.repeat(10)};
    let validator = VerifierCaracteresValidator.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['sansEspaces']).toBe(false);
 });

 it('une phrase avec des mots est valide', () => {
    let control = { value: "une phrase avec des mots"};
    let validator = VerifierCaracteresValidator.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['sansEspaces']).toBe(true);
 });

 it('une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
    let control = { value: "   une phrase avec des mots   "};
    let validator = VerifierCaracteresValidator.sansEspaces();
    let result = validator(control as AbstractControl);
    expect(result['sansEspaces']).toBe(true);
 });
});