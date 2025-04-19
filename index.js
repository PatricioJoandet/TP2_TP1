import { leerArchivoComoString, escribirTextoEnArchivo } from './src/utils/fileUtils.js'
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from './src/utils/transformUtils.js'
import { combinarDosArrays, combinarNArrays } from './src/apareo.js'

// leo los 4 archivos a memoria
const setA = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(SetA).in');
const setB = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(SetB).in');
const impares = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
const pares = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');

console.log(setA);
console.log("-".repeat(50));
console.log(setB);
console.log("-".repeat(50));
console.log(impares);
console.log("-".repeat(50));
console.log(pares);


// preparo los 4 arrays a partir de los archivo leidos
const array1 = transformarStringEnArrayDeNumeros(setA,",");
const array2 = transformarStringEnArrayDeNumeros(setB,",");
const array3 = transformarStringEnArrayDeNumeros(impares,",");
const array4 = transformarStringEnArrayDeNumeros(pares,",");

console.log(array1);
console.log("-".repeat(50));
console.log(array2);
console.log("-".repeat(50));
console.log(array3);
console.log("-".repeat(50));
console.log(array4);

// combino los primeros dos arrays
const combinado1 = combinarDosArrays(array1, array2);
console.log(combinado1);


// combino los cuatro arrays
const arrayDeArrays = [array1, array2, array3, array4];
const combinado2 = combinarNArrays(arrayDeArrays);
console.log(combinado2);


const combinado1String = transformarArrayDeNumerosAUnSoloString(combinado1, ",");
const combinado2String = transformarArrayDeNumerosAUnSoloString(combinado2, ",");
const stringTest = ":)";

console.log(combinado1String);
console.log("-".repeat(50));
console.log(combinado2String);

escribirTextoEnArchivo('./out/combinado.out', combinado1String, true);
escribirTextoEnArchivo('./out/combinado2.out', combinado2String, true);
escribirTextoEnArchivo('./out/test.out', stringTest, false);
