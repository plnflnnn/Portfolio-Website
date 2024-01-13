<?php
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['textarea'];
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/dh_muy23w/PHPMailer/src/Exception.php';
require '/home/dh_muy23w/PHPMailer/src/PHPMailer.php';
require '/home/dh_muy23w/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';                  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'plnflnnn@gmail.com';             // SMTP username
    $mail->Password = 'otrkumfetfsbtdsh';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable SSL encryption, TLS also accepted with port 465
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('plnflnnn@gmail.com', 'Portfolio Website');          //This is the email your form sends From
    $mail->addAddress('plnflnnn@gmail.com'); // Add a recipient address
    //$mail->addAddress('contact@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    // $mail->Subject = 'Subject line goes here';
    // $mail->Body    = 'Body text goes here';
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->Subject = 'Message';
    $mail->Body    = '
        You have received the following data <br> 
        Name: ' . $name . ' <br>
        E-mail: ' . $email . ''. '<br>
        Message: ' . $text . '';
    
    if(!$mail->send()) {
        return false;
    } else {
        return true;
    }
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>