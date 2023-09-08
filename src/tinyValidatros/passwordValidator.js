function validatePassword(p) {
    let errors = [];
    if (p.length < 8) {
        errors.push("пароль должен быть длиной не менее 8 символов"); 
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push(" в пароле должна быть хотя бы одна буква");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push(" в пароле должна быть хотя бы одна цифра"); 
    }
    return errors;
}

export default validatePassword