<?php

/* https://api.telegram.org/bot1425266980:AAFjbeeBik804d-5e22wZTu-yBTPLUGKN9A/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$about = $_POST['user_about'];

$token = "1425266980:AAFjbeeBik804d-5e22wZTu-yBTPLUGKN9A";
$chat_id = "-358764186";


if (trim($_POST['user_name']) === '') {

  $arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Email: ' => $email,
    'О проекте: ' => $about
  );
  
  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  if ($sendToTelegram) {
    header('Location: index.html');
  } else {
    echo "Error";
  }

}
  

?>