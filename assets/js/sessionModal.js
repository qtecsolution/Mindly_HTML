
const sessionModal = document.querySelector('#sessionModal');
const session = new bootstrap.Modal(sessionModal);
const apply = document.querySelector('#btn-apply');

apply.addEventListener('click', showAppointment);

// SHOW SIGNUP
function showAppointment() {
    session.hide();
    appointment.show();
}
