async function authorize(login, password) {
    // фейковые аккаунты
    const users = {
        'admin@ya.ru': 'admin123',
        'error@ya.ru': 'error123'
    }
    // промис resolve всегда кроме rejectа ошибки на пользователя error@ya.ru
    return new Promise((resolve, reject) => {
        if (login && password) {

            if (password == users[login]) {
                if (login == 'error@ya.ru') {
                    reject({
                        '_status': 'SERVER_ERROR'
                    })
                }
                resolve({
                    '_key': 'secret_key',
                    '_status': 'OK',
                    '_login': login
                })
            }
        }
        resolve({
            '_status': 'NOT_AUGHT'
        })

    })
}

export default authorize