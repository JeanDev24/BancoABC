const guardarPrestamoStorage = (prestamo) => {
    localStorage.setItem("prestamo", JSON.stringify(prestamo));
};

const obtenerPrestamoStorage = () => {
    const prestamoStorage = JSON.parse(localStorage.getItem("prestamo"));
    pintarPrestamo(prestamoStorage);
};

obtenerPrestamoStorage();