<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>unset function</title>
</head>

<body>
<form method="post" action="#">
<input type="text" name="i1" />
<input type="submit" name="nxt" />
</form>
<?php
if(isset($_POST['nxt'])){
echo $_POST['i1'];
unset($_POST['i1']);
//undefined variable
echo $_POST['i1'];
}
?>

</body>
</html>
