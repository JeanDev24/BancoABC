document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("prestamo")) {
        obtenerPrestamoStorage()
    };
});