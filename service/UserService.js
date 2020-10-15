
class UserService {

    constructor() {
        console.log('construtor UserService')
    }

    get(id){

        console.log('entrou no userService.get', id);

        const user = {
            id: id,
            nome: 'Marcelo'
        }

        console.log('userService', user);

        return user;

    }

}

exports.UserService = UserService;