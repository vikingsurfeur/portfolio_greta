<!-- TRAITEMENT ENVOI MESSAGE FORM -->

<?php

if (!empty($_POST) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower(
    $_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        if (mail('d.bouscarle@gmail.com', 'Nouveau Message depuis le site Cap Web', 'Nom : '.$_POST['name']."\r\n".'eMail : '.$_POST['email']."\r\n".'Sujet : '.$_POST['subject']."\r\n".'Message : '.$_POST['message'])) {
            echo "Message envoyé avec succès.";
        } else {
            http_response_code(500);
        }
        exit();
    }

?>