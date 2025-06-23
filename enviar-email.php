<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars(strip_tags($_POST['nome']));
    $telefone = htmlspecialchars(strip_tags($_POST['telefone']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $empresa = htmlspecialchars(strip_tags($_POST['empresa']));
    $mensagem = htmlspecialchars(strip_tags($_POST['mensagem']));

    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'maikolinops@gmail.com'; // ✅ Seu e-mail do Gmail
        $mail->Password   = 'abby zkxy xrha bbgi'; // ✅ Gerada no painel do Google
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Remetente e destinatário
        $mail->setFrom('maikolinops@gmail.com', 'IA-XTECH');
        $mail->addAddress('maikolinops@gmail.com');

        // Conteúdo
        $mail->isHTML(true);
        $mail->Subject = 'Novo contato do site IA-XTECH';
        $mail->Body    = "
            <strong>Nome:</strong> {$nome}<br>
            <strong>Telefone:</strong> {$telefone}<br>
            <strong>Email:</strong> {$email}<br>
            <strong>Empresa:</strong> {$empresa}<br>
            <strong>Mensagem:</strong><br>{$mensagem}
        ";

        $mail->send();
        echo 'Mensagem enviada com sucesso.';
    } catch (Exception $e) {
        echo 'Erro ao enviar a mensagem. Mailer Error: ', $mail->ErrorInfo;
    }
}
?>
