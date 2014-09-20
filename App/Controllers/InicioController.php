<?php

namespace App\Controllers;

use jaspion\Controllers\Controller;

/**
 * @secured=true
 *
 *
 */
class InicioController extends Controller {

    public function inicioAction() {
        $this->render('index');
    }

    public function erro404() {
        $this->render("erro404");
    }

    public function erro500($ex = null) {
        $this->view->erro = $ex;
        $this->render("erro500");
    }

}
