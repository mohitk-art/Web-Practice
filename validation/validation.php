<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
$name=$email=$gender=$comment=$website="";
if($_SERVER["REQUEST_METHOD"]=="POST"){
	$name=test_input($POST["name"]);
	$email=test_input($POST["email"]);
	$gender=test_input($POST["gender"]);
	$comment=test_input($POST["comment"]);
	$website=test_input($POST["website"]);
}

function test_input($data){
	$data=trim($data);
	$data=stripslashes($data);
	$data=htmlspecialchars($data);
	return $data;
}
?>

<form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
Name : <input type="text" name="name"><br><br>
Email : <input type="email" name="email"><br><br>
Wesite : <input type="text" name="wesite"><br><br>
Comment : <textarea name="comment" rows="5" cols="40"></textarea><br><br>
Gender : <input type="radio" name="gender" value="female"> female <input type="radio" name="gender" value="male"> male <br><br>
<input type="submit" name="submit" value="submit">
</form>

<?php
echo "Your Input ";
echo "$name<br>";
echo "$email<br>";
echo "$website<br>";
echo "$comment<br>";
echo "$gender<br>";
?>
</body>
</html>