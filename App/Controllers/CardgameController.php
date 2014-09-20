<?php

namespace App\Controllers;

/**
 * Description of CardGameController
 *
 * @author gilmario
 *
 */
class CardgameController extends \jaspion\Controllers\Controller {

    public function inicioAction() {
        $this->render("index");
    }

    public function registroAction() {
        if (isset($_POST['player'])) {
            $_SESSION['player'] = $_POST['player'];
            $this->gameAction();
            $this->mensagem("Bem vindo " . $_POST['player']);
        } else {
            $this->mensagem("Você não está identificado");
        }
        $this->render("index");
    }

    /**
     * @identificado
     */
    public function gameAction() {
        $this->addScript("card");
        $this->addScript("conexao");
        $this->addScript("init");
        $this->mensagem("Bem vindo!!!");
        $this->render("game");
    }

}
