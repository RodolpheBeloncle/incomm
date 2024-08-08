<?php
$protocol = "HTTP/1.0";
if ("HTTP/1.1" == $_SERVER["SERVER_PROTOCOL"])
  $protocol = "HTTP/1.1";
header("$protocol 503 Service Unavailable", true, 503);
header('Content-Type: text/html; charset=utf-8');
header("Retry-After: 3600");
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Site en Maintenance</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #000;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      width: 90vw;
    }

    h1 {
      margin-bottom: 3rem;
      color: white;
    }

    #error-page {
      margin: 0;
      max-width: 100%;
    }
  </style>
</head>

<body>
  <img src="/wp-content/themes/ocade-minimal/Montgolfiere-prenant-son-envol-dans-le-ciel-marocain-txt.webp" alt="Site en maintenance">
</body>

</html>
<?php die(); ?>