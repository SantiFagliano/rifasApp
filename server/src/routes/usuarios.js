const { Router } = require("express");
const router = Router();
const { obtener_usuario, crear_usuario } = require('../controllers/usuarios.controller');


router.route("/")
    .post(crear_usuario);


router.route("/:id")
    .get(obtener_usuario);

router.route("/login")
    .post();

router.route("/logout")
    .get();



module.exports = router;