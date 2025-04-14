function deleteCookie(name) {
    var d = new Date();

    d.setDate(d.getDate() - 1);

    var expires = ";expires=" + d;
    var value = "";

    document.cookie = name + "=" + value + expires + "; path=/";
}

document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('kc-form-login')
        .innerHTML += 
            '<a class="pf-c-button pf-m-primary pf-m-block btn-lg" ' +
                'name="dp-back-to-broker" ' +
                'id="dp-back_to_broker" ' +
                'onclick="deleteCookie(\'kc-social-item\'); history.back()">' +
                'Zurück zur Auswahl' +
            '</a>';
});
