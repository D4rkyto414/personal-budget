// Definir la función constructora base Movimiento
function Movimiento(tipo, monto, descripcion) {
    this.tipo = tipo;
    this.monto = monto;
    this.descripcion = descripcion;
}

// Agregar métodos al prototipo de Movimiento
Movimiento.prototype.validar = function() {
    if (this.monto <= 0) {
        return "El monto debe ser mayor a cero";
    }
    if (!this.descripcion.trim()) {
        return "La descripción no puede estar vacía";
    }
    return null;
};

// Funciones constructoras específicas
function Ingreso(monto, descripcion) {
    Movimiento.call(this, "Ingreso", monto, descripcion);
}
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;

function Egreso(monto, descripcion) {
    Movimiento.call(this, "Egreso", monto, descripcion);
}
Egreso.prototype = Object.create(Movimiento.prototype);
Egreso.prototype.constructor = Egreso;

// Lista de movimientos
const movimientos = [];

// Método para recalcular totales
function recalcularTotales() {
    let totalIngresos = 0;
    let totalEgresos = 0;
    
    movimientos.forEach(mov => {
        if (mov.tipo === "Ingreso") {
            totalIngresos += mov.monto;
        } else {
            totalEgresos += mov.monto;
        }
    });
    
    document.getElementById("total-ingresos").textContent = totalIngresos;
    document.getElementById("total-egresos").textContent = totalEgresos;
}

// Función para agregar un movimiento
function agregarMovimiento() {
    const tipo = document.getElementById("tipo").value;
    const monto = parseFloat(document.getElementById("monto").value);
    const descripcion = document.getElementById("descripcion").value;
    
    let nuevoMovimiento;
    if (tipo === "Ingreso") {
        nuevoMovimiento = new Ingreso(monto, descripcion);
    } else {
        nuevoMovimiento = new Egreso(monto, descripcion);
    }
    
    const error = nuevoMovimiento.validar();
    if (error) {
        alert(error);
        return;
    }
    
    movimientos.push(nuevoMovimiento);
    actualizarUI(nuevoMovimiento);
    recalcularTotales();
    document.getElementById("formulario").reset();
}

// Función para actualizar la UI
function actualizarUI(movimiento) {
    const lista = document.getElementById("lista-movimientos");
    const item = document.createElement("li");
    item.textContent = `${movimiento.tipo}: $${movimiento.monto} - ${movimiento.descripcion}`;
    lista.appendChild(item);
    
    const mensaje = document.getElementById("mensaje-confirmacion");
    mensaje.textContent = "Movimiento registrado con éxito!";
    setTimeout(() => mensaje.textContent = "", 3000);
}

// Evento para el botón de agregar movimiento
document.getElementById("btn-agregar").addEventListener("click", agregarMovimiento);
