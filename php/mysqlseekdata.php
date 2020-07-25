<?php
//mysql_seek_data
$conn = mysql_connect("localhost","root","");
mysql_select_db("test");
$rs=mysql_query("select *from std");

//start from
mysql_data_seek($rs,2);
$row = mysql_fetch_array($rs);
echo $row[0];
?>