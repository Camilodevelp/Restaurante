export async function obtenerDatosDeApi() {
  try {
    // Realizar la solicitud HTTP con fetch y esperar la respuesta
    let respuesta = await fetch("http://localhost:3000/category/breakfast");

    // Verificar si la respuesta es exitosa
    if (respuesta.ok) {
      // Parsear la respuesta como JSON y esperar el resultado
      const datos = await respuesta.json();
      //   const data = JSON.parse(datos);
      
      // Accede a la propiedad "plato" que contiene los objetos
      const arrayDePlatos = datos.plato;
       console.log(arrayDePlatos)

// Ahora arrayDePlatos es un array que contiene los objetos
// console.log(arrayDePlatos);
      return arrayDePlatos;
    } else {
      // Manejar errores de respuesta HTTP (ej. 404, 500)
      throw new Error("Error en la solicitud: " + respuesta.status);
    }
  } catch (error) {
    // Manejar errores de red
    console.error("Hubo un problema con la operación fetch: " + error.message);
  }
}


export const objx = await obtenerDatosDeApi();
console.log(objx)
console.log("soyyo")
// Parsea el JSON a un objeto JavaScript
