const { UserService } = require("../service/UserService");

const userService = new UserService();

exports.getMe = function(req, res, next){

    const idUser = 1;//MOCK -> Deve vir do usuário logado req.user.id

    const user = userService.get(idUser)

    res.json(user);

}
