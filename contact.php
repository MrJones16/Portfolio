<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'peytonjamesjones@gmail.com'; // replace with your email address
  $subject = 'New message from your portfolio website';
  $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo '<p>Thank you for your message!</p>';
  } else {
    echo '<p>Sorry, there was a problem sending your message. Please try again later.</p>';
  }
}
?>