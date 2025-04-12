/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
  return fs.readFileSync(ruta, "utf-8");
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
  try {
    const fileExists = fs.existsSync(ruta);

    if (fileExists || shouldCreateIfNotExists) {
      fs.writeFileSync(file, texto, "utf-8");
    } else {
      throw new Error("El archivo no existe.");
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// exportar ambas funciones

export { leerArchivoComoString, escribirTextoEnArchivo };
