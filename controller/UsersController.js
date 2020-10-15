
class UsersController{

    constructor() {
    }

    getMe(req, res, next){



        const user = {
            id: 1,
            nome: 'Marcelo'
        }

        res.json(user);

    }

}

exports.UsersController = UsersController;