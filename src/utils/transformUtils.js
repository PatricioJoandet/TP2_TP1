/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
  const array = str.split(separador);
  const res = [];

  array.forEach((e) => {
    const num = Number(e);

    if (!isNaN(num)) {
      res.push(num);
    }
  });

  return res;
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr
 * @param {string} separador
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
  return arr.join(separador);
}

// exportar ambas funciones
export {
  transformarStringEnArrayDeNumeros,
  transformarArrayDeNumerosAUnSoloString,
};
