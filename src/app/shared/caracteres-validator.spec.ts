import { VerifierCaracteresValidator } from "./caracteres-validator";

describe('sansEspaces Validator', () => {

 it('une chaîne vide est invalide', () => {
    let validator = VerifierCaracteresValidator.sansEspaces();
    let result = validator(null);
    expect(result['sansEspaces']).toBe(true);
 });
});