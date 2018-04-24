// import { VerifierCaracteresValidator } from "./caracteres-validator";
// import { AbstractControl } from "@angular/forms";

// describe('sansEspaces Validator', () => {

//  it('une chaîne vide est invalide', () => {
//     let control = { value: ''};
//     let validator = VerifierCaracteresValidator.sansEspaces();
//     let result = validator(control as AbstractControl);
//     expect(result['sansEspaces']).toBe(false);
//  });

//  it('une chaîne avec 10 espaces est invalide', () => {
//     let control = { value: ' '.repeat(10)};
//     let validator = VerifierCaracteresValidator.sansEspaces();
//     let result = validator(control as AbstractControl);
//     expect(result['sansEspaces']).toBe(false);
//  });

//  it('une phrase avec des mots est valide', () => {
//     let control = { value: "une phrase avec des mots"};
//     let validator = VerifierCaracteresValidator.sansEspaces();
//     let result = validator(control as AbstractControl);
//     expect(result['sansEspaces']).toBeNull();
//  });

//  it('une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
//     let control = { value: "   une phrase avec des mots   "};
//     let validator = VerifierCaracteresValidator.sansEspaces();
//     let result = validator(control as AbstractControl);
//     expect(result['sansEspaces']).toBe(true);
//  });

 
// });

// describe('longueurMinimum Validator', () => {

//     it('une expression avec 1 espace et 2 caractère est invalide', () => {
//         let control = { value: " aa"};
//         let validator = VerifierCaracteresValidator.longueurMinimum(3);
//         let result = validator(control as AbstractControl);
//         expect(result['longueurMinimum']).toBe(false);
//      });

//      it('une expression avec 2 espace et 1 caractère est invalide', () => {
//         let control = { value: "  a"};
//         let validator = VerifierCaracteresValidator.longueurMinimum(3);
//         let result = validator(control as AbstractControl);
//         expect(result['longueurMinimum']).toBe(false);
//      });

//      it('une expression avec 3 espace et 3 caractère est valide', () => {
//         let control = { value: "   J'aime Angular"};
//         let validator = VerifierCaracteresValidator.longueurMinimum(3);
//         let result = validator(control as AbstractControl);
//         expect(result['longueurMinimum']).toBe(true);
//      });

//      it('une expression avec 5 espace, 5 caractères et 5 espaces est valide', () => {
//         let control = { value: "     J'aime Angular     "};
//         let validator = VerifierCaracteresValidator.longueurMinimum(3);
//         let result = validator(control as AbstractControl);
//         expect(result['longueurMinimum']).toBe(true);
//      });
// });
