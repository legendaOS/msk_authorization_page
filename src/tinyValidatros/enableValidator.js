import validatePassword from "./passwordValidator"
import validateEmail from "./loginValidator"

function checkEnable(password, login) {
    return !(validatePassword(password).length == false && !validateEmail(login) == false)
}

export default checkEnable