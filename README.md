# personal-budget

## ¿Qué es una función pura?
Una **función pura** es una función que cumple con dos principios fundamentales:

1. **Determinismo:** Para los mismos argumentos de entrada, siempre devuelve el mismo resultado.
2. **Ausencia de efectos secundarios:** No modifica variables externas ni realiza acciones como mutar datos, imprimir en pantalla o modificar el estado del programa.

Ejemplo de función pura en JavaScript:

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(2, 3)); // Siempre devuelve 5
```

Ejemplo de función impura:

```js
let total = 0;
function agregar(valor) {
  total += valor;
}

agregar(5);
console.log(total); // Modifica una variable externa (efecto secundario)
```

---

## Diferencias entre Programación Imperativa y Funcional

| Característica            | Programación Imperativa | Programación Funcional |
|---------------------------|------------------------|-----------------------|
| **Enfoque**               | Cómo hacer las cosas   | Qué hacer             |
| **Estado**                | Mutable (cambia con el tiempo) | Inmutable (evita cambios de estado) |
| **Uso de variables**      | Se modifican constantemente | Se evitan o usan inmutabilidad |
| **Estructura del código** | Secuencial, con bucles y asignaciones | Basada en funciones y composición |
| **Funciones**             | Pueden tener efectos secundarios | Son puras (sin efectos secundarios) |

