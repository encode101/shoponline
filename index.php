<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>POC</title>
<link rel="stylesheet" href="css/bootstrap.css" />
<link rel="stylesheet" href="css/style.css" />
</head>

<body>
<div class='container'>
<div class="page-header"><h3>Shopping Mall</h3></div>
 <ul class="nav nav-pills" id="mainMenu">
  <li class="active"><a href="#" data-filter="*">Home</a></li>
  <li><a href="#" data-filter=".mobile">Mobile Phones</a></li>
  <li><a href="#" data-filter=".laptop">Laptops</a></li>
    <li><a href="#" data-filter=".camera">Cameras</a></li>
</ul>

<?php
	include("dbcon.php");	
	$cursor = $collection->find();
?>
<div id="container">
<?php
	foreach ($cursor as $document) {
		echo "<div class='element ".$document["category"]."'>";
			echo "<div class='title'>".$document["title"] . "</div>";
			echo "<div>".$document["category"] . "</div>";
			echo "<div>Price: ".$document["Price"] . "</div>";
			echo "<div><img src='uploads/".$document["pimage"]."' width='90%' class='pimage' /></div>";
		echo "</div>";
	}
?>
</div>
</div>
<script src="js/jquery-1.10.2.js"></script> 
<script src="js/bootstrap.min.js"></script>
<!-- <script src="js/process.js"></script>  -->
<script src="js/jquery.isotope.min.js"></script> 
<script src="js/shuffle.js"></script>
</body>
</html>
