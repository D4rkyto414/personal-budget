const movimientos = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-movimiento').addEventListener('submit', function(event) {
        event.preventDefault();
        const tipo = document.getElementById('tipo').value;
        const monto = parseFloat(document.getElementById('monto').value);
        const descripcion = document.getElementById('descripcion').value;
        registrarMovimiento(tipo, monto, descripcion);
        this.reset();
    });
});

function registrarMovimiento(tipo, monto, descripcion) {
    try {
        const nuevoMovimiento = new Movimiento(tipo, monto, descripcion);
        movimientos.push(nuevoMovimiento);
        actualizarUI();
    } catch (error) {
        alert(error.message);
    }
}

function actualizarUI() {
    const contenedor = document.getElementById('lista-movimientos');
    contenedor.innerHTML = '';
    movimientos.forEach(mov => contenedor.appendChild(mov.render()));
}

