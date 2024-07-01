// Calculadora de préstamos

const formulario = document.querySelector("#form");
const monto = document.querySelector("#amount");
const cuotas = document.querySelector("#fees");
const montoFinal = document.querySelector("#finalAmount");
const cuotaFinal = document.querySelector("#finalFees");
const intereses = document.querySelector("#interests");
const totalADevolver = document.querySelector("#totalAmount");
const tasa = 0.01;
const sueldoMinimo = 1000; // Sueldo mínimo para aprobar el préstamo

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const montoPrestamo = parseFloat(monto.value);
    const numeroCuotas = parseInt(cuotas.value);
    const sueldoIngresado = parseFloat(prompt("Ingresa tu sueldo mensual en USD:"));

    if (isNaN(montoPrestamo) || isNaN(numeroCuotas) || montoPrestamo <= 0 || numeroCuotas <= 0) {
        console.error("Ingresa valores válidos para el monto y las cuotas.");
        return;
    }

    if (sueldoIngresado >= sueldoMinimo) {
        const cuotaPrestamo = tasa * montoPrestamo / (1 - Math.pow(1 + tasa, -numeroCuotas));
        obtenerTotal(cuotaPrestamo, numeroCuotas);
    } else {
        console.error("El sueldo no cumple con los requisitos para aprobar el préstamo.");
        alert("Sueldo mínimo para el préstamo es USD 1,000.");
    }
});

const obtenerTotal = (cuotaPrestamo, cuota) => {
    const total = Math.ceil(cuotaPrestamo) * cuota;

    const prestamo = {
        monto: monto.value,
        cuotas: cuotas.value,
        intereses: total - monto.value,
        totalPrestamo: total
    };

    pintarPrestamo(prestamo);
};

const pintarPrestamo = (prestamo) => {
    montoFinal.textContent = `$ ${prestamo.monto}`;
    cuotaFinal.textContent = `${prestamo.cuotas}`;
    intereses.textContent = `$ ${prestamo.intereses}`;
    totalADevolver.textContent = `$ ${prestamo.totalPrestamo}`;

    // Agregar información adicional al usuario
    const fechaPago = new Date();
    fechaPago.setMonth(fechaPago.getMonth() + parseInt(cuotas.value));
    const fechaFormateada = fechaPago.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
    alert(`Fecha de pago de la última cuota: ${fechaFormateada}`);
};
