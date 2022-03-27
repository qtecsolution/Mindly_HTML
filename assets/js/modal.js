const successModal = document.querySelector('#successModal');
const appointmentModal = document.querySelector('#appointmentModal');

// INITIALIZING MODAL TO BOOTSTARP
const success = new bootstrap.Modal(successModal);
const appointment = new bootstrap.Modal(appointmentModal);

const confirmAppointment = document.querySelector('#confirm-button');


confirmAppointment.addEventListener('click', showSuccess);


// SHOW SIGNUP
function showSuccess() {
    appointment.hide();
    success.show();
}