<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <?php include '../../assets/php/lminfo_head.php';?>
	<script type="text/javascript" src="filterSkills.js"></script>
</head>
<body>
	<?php include '../header/header.php';?>
	<div class="page-container">
		<div class="content-wrap">
			<h1 class="lminfo-h1">Skills</h1>

			<p class="lminfo-p">Here are some of the skills I have picked up.</p>
			<p class="lminfo-p">Beginner - ★<pre>   </pre>Proficient - ★★<pre>   </pre>Expert - ★★★</p>

			<div class="spacer-div-single"></div>

			<input class="lminfo-body-search" placeholder="Type here to search" onkeyup="filter()" id="skills-search" />

			<div class="spacer-div-single"></div>

			<div id="skills-list" class="skills-list">
				<!--Skill divs automatically populated here using "skills.js"-->
			
				<?php
					$string = file_get_contents("skills.json");
					$json_a = json_decode($string);
					foreach($json_a->skills as $skill)
					{
						echo '<div><div class="skill-text">',
							 $skill,
							 '</div></div>';
					}
				?>
			</div>
		</div>
	</div>
	<?php include '../footer/footer.php';?>
</body>
</html>