// en esta tarea no utilizo este archivo

function formatearASueldo(sueldo) {
    return sueldo.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });
  }
  
  export const funcionesLibreria = {
    formatearAFechaLocal,
    formatearANombrePropio,
    formatearASueldo,
  };
