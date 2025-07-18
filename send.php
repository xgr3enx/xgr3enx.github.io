<?php
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$tel = $_POST['tel'] ?? '';
$message = $_POST['message'] ?? '';

$to = 'p5n12d90@gmail.com'; // Замени на свою почту
$subject = 'Новое сообщение с сайта';
$headers = "From: $email\r\nReply-To: $email\r\nContent-type: text/plain; charset=utf-8\r\n";

$body = "Имя: $name\nEmail: $email\nТелефон: $tel\nСообщение:\n$message";

if (mail($to, $subject, $body, $headers)) {
    echo 'OK';
} else {
    echo 'Ошибка отправки';
}
