// Datos de ejemplo
const movimientos = [
    { nombre: 'Cena', tipo: 'Egreso', monto: 45.50 },
    { nombre: 'Consultoría', tipo: 'Ingreso', monto: 200.00 },
    { nombre: 'Supermercado', tipo: 'Egreso', monto: 150.00 },
    { nombre: 'Libro JavaScript', tipo: 'Ingreso', monto: 35.00 },
    { nombre: 'Compra online', tipo: 'Egreso', monto: 120.00 }
];

// Historia de Usuario 1: Listar nombres de movimientos
const obtenerNombresMovimientos = (movs) => movs.map(mov => mov.nombre);

console.log("Nombres de movimientos registrados:");
console.log(obtenerNombresMovimientos(movimientos));

// Historia de Usuario 2: Filtrar egresos mayores a $100
const filtrarEgresosMayores = (movs) => movs.filter(mov => mov.tipo === 'Egreso' && mov.monto > 100);

console.log("\nEgresos mayores a $100:");
console.log(filtrarEgresosMayores(movimientos));

// Historia de Usuario 3: Buscar movimiento por nombre
const buscarMovimiento = (movs, nombre) => movs.find(mov => mov.nombre.toLowerCase() === nombre.toLowerCase());

const nombreBuscado = "Cena";
const resultadoBusqueda = buscarMovimiento(movimientos, nombreBuscado);

console.log(`\nBuscar movimiento por nombre: '${nombreBuscado}'`);
console.log(resultadoBusqueda ? resultadoBusqueda : "Movimiento no encontrado.");

