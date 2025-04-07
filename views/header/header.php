<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/assets/css/lminfo_styles.css">
    <link rel="stylesheet" href="/views/header/header.css">
    <script type="text/javascript" src="/views/header/header.js"></script>
</head>
<body>
    <header>
        <div class="header">
            <div class="logo">
            <a href="https://lilymaxfield.info/" class="logo">Lily Maxfield</a>
            </div>

            <div class="navlinks">
                <a href="/views/experience/experience.php" class="navlink">Experience</a>
                <a href="/views/skills/skills.php" class="navlink">Skills</a>
                <a href="/views/portfolio/portfolio.php" class="navlink">Portfolio</a>
                <a href="/views/contact/contact.php" class="navlink">Contact</a>
            </div>

            <div class="menu-button">
                <button><img src="/assets/images/menu.png" alt="Menu Button" onclick="setMobileMenuVisibility()"></button>
            </div>
        </div>
        <div class="mobile-menu" id="mobile-menu">
            <a href="/views/experience/experience.php" class="navlink">Experience</a>
            <a href="/views/skills/skills.php" class="navlink">Skills</a>
            <a href="/views/portfolio/portfolio.php" class="navlink">Portfolio</a>
            <a href="/views/contact/contact.php" class="navlink">Contact</a>
        </div>
    </header>
</body>
</html>