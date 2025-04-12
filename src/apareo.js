/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
  return [...new Set(arrA.concat(arrB))].sort((a, b) => a - b);
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
  const finalArr = [];

  arrs.forEach((arr) => {
    arr.forEach((n) => {
      finalArr.push(n);
    });
  });

  return [...new Set(finalArr)].sort((a, b) => a - b);
}

// exportar ambas funciones
export { combinarDosArrays, combinarNArrays };
