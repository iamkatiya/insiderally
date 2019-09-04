<?
$to .= 'weelman93@gmail.com';
$subject = 'Заявка с сайта inside rally!';
$name=''; $phone=''; $email=''; $dzen='';
if (!empty($_POST["name"])) {
    $name = '<p style = "font-size: 1.2em; color: #333" ><span style = "font-weight: 600" > ФИО:</span > '.$_POST['name'].' </p>';
};
if(!empty($_POST["phone"])) {
    $phone = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Телефон:</span> ' . $_POST['phone'] . '</p>';
};
if(!empty($_POST["email"])) {
    $email = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">email:</span> ' . $_POST['email'] . '</p>';
}
if(!empty($_POST["dzen"])) {
    $dzen = '<p style="font-size: 1.2em; color: #333"><span style="font-weight: 600">Авто:</span> ' . $_POST['dzen'] . '</p>';
}
$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body style="padding: 20px; border: 1px solid #000">'
                        . $name . $phone . $email . $dzen .
                    '</body>
                </html>';
echo $message;
$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: https://insiderally.ru/ <site@insiderally.ru>\r\n";
mail($to, $subject, $message, $headers);
?>