function togglePassword(passId, eyeId) {
    var passwordFieldTypeAttr = document.getElementById(passId).getAttribute('type');
    var eyeslash = document.getElementById(eyeId + "_eyeslash");
    if (passwordFieldTypeAttr === "password") {
        $('#' + passId).attr('type', 'text');
        eyeslash.setAttribute('class', 'eyeslash');
    }
    else {
        $('#' + passId).attr('type', 'password');
        eyeslash.setAttribute('class', '');
    }
}