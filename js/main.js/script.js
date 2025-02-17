// Obtener los elementos del DOM
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

const rojoDecimal = document.getElementById('rojoDecimal');
const verdeDecimal = document.getElementById('verdeDecimal');
const azulDecimal = document.getElementById('azulDecimal');

const valorRojo = document.getElementById('valorRojo');
const valorVerde = document.getElementById('valorVerde');
const valorAzul = document.getElementById('valorAzul');

const colorDisplay = document.getElementById('colorDisplay');
const hexColor = document.getElementById('hexColor');
const colorPicker = document.getElementById('colorPicker');

// Función para actualizar el color y el código hexadecimal
function actualizarColor() {
  const r = rojo.value;
  const g = verde.value;
  const b = azul.value;
  
  // Actualizar los valores de los controles deslizantes y campos numéricos
  valorRojo.textContent = r;
  valorVerde.textContent = g;
  valorAzul.textContent = b;
  rojoDecimal.value = r;
  verdeDecimal.value = g;
  azulDecimal.value = b;

  // Actualizar el color de fondo
  colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Actualizar el código hexadecimal
  const hex = rgbToHex(r, g, b);
  hexColor.textContent = hex;
}

// Función para convertir RGB a hexadecimal
function rgbToHex(r, g, b) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Función auxiliar para convertir un número a hexadecimal
function toHex(n) {
  const hex = parseInt(n).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

// Añadir eventos a los controles deslizantes
rojo.addEventListener('input', actualizarColor);
verde.addEventListener('input', actualizarColor);
azul.addEventListener('input', actualizarColor);

// Añadir eventos a los campos numéricos
rojoDecimal.addEventListener('input', (e) => {
  rojo.value = e.target.value;
  actualizarColor();
});
verdeDecimal.addEventListener('input', (e) => {
  verde.value = e.target.value;
  actualizarColor();
});
azulDecimal.addEventListener('input', (e) => {
  azul.value = e.target.value;
  actualizarColor();
});

// Añadir evento al color picker
colorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  
  // Convertir el color en hexadecimal a RGB
  const rgb = hexToRgb(color);
  
  // Actualizar los controles deslizantes y campos numéricos con los valores RGB
  rojo.value = rgb.r;
  verde.value = rgb.g;
  azul.value = rgb.b;
  rojoDecimal.value = rgb.r;
  verdeDecimal.value = rgb.g;
  azulDecimal.value = rgb.b;

  // Actualizar el color de fondo y el valor hexadecimal
  colorDisplay.style.backgroundColor = color;
  hexColor.textContent = color.toUpperCase();
});

// Función para convertir hexadecimal a RGB
function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

// Llamar la función para establecer el color inicial
actualizarColor();
