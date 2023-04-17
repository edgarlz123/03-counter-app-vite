// Note that jest must be explicitly imported
//import { jest } from '@jest/globals';
//Despues iniciar yarn test una primera vez con el import de jest anterior, funciona correctamente despues independientemente de si está comentada la linea o no.
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    
    test('getSaludo debe retornar "Hola Edgar', () => {
        const name = 'Edgar';
        const message = getSaludo( name );
        expect( message ).toBe(`Hola ${ name }`)
    });

 })