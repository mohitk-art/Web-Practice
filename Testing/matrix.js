

function check()	//test
{
var row=document.form.rows.value;
var col=document.form.cols.value;
var row1=document.form1.rows.value;
var col1=document.form1.cols.value;

//matrix a
if(row=="")
{
alert("First Enter number of Rows");
document.form.rows.focus();
return false;
}
if(col=="")
{
alert("First Enter number of Columns");
document.form.cols.focus();
return false;
}
// if value is max or min 
if(row==0)
{
alert("Don't Enter value Zero in row or col box");
document.form.rows.focus();
return false;
}
if(col==0)
{
alert("Don't Enter value Zero in row or col box");
document.form.cols.focus();
return false;
}

//matrix b
if(row1=="")
{
alert("First Enter number of Rows");
document.form1.rows.focus();
return false;  //exit page 
}
if(col1=="")
{
alert("First Enter number of Columns");
document.form1.cols.focus();
return false;  //exit page
}
// if value is max or min 
if(row1==0)
{
alert("Don't Enter value Zero in row or col box");
document.form1.rows.focus();
return false;  //exit page
}
if(col1==0)
{
alert("Don't Enter value Zero in row or col box");
document.form1.cols.focus();
return false; //exit page
}
return true;  //next page
}																													//end of front page function



function read()																									//read page function
{
var row=document.form.rows.value;
var col=document.form.cols.value;
var row1=document.form1.rows.value;
var col1=document.form1.cols.value;

check();  // check values of row and col box

$(document).ready(function(){


//page 
document.write("<style>h4{color:green;text-shadow:yellow 1px 1px;}h3{color:red;}input{width:100px;height:40px;font-size:20px;cursor:pointer;}input:hover{color:blue;background-color:yellow;}#button{color:white;background-color:blue;border-radius:15px;cursor:pointer;margin-left:30px;}#button:hover{-webkit-transform:scale(1.2,1.2);}</style>");
document.write("<h3>Addition of matrix</h3>");

//matrix a
document.write("<h4>Matrix a</h4>");
document.write("<form name='form' method='post' action='#'>");
for(var i=1;i<=row;i++)
{
for(var j=1;j<=col;j++)
{
document.write("<input type='text' name='v",i,j,"' placeholder='row",i,",col",j,"' onChange='check();'/>");
}
document.write("<br/>");
}
document.write("</form>");


//matrix b
document.write("<h4>Matrix b</h4>");
document.write("<form name='form1' method='post' action='#'>");
for(var i=1;i<=row1;i++)
{
for(var j=1;j<=col1;j++)
{
document.write("<input type='text' name='v",i,j,"' placeholder='row",i,",col",j,"' onChange='check();'/>");
}
document.write("<br/>");
}
document.write("</form>");


document.write("<h5 style='padding-left:200px;'><a href='matrix.htm'><input type='button' value='Back' id='button'/></a>");
document.write("<input type='button' name='sum' value='Sum' onDblClick='sum();' id='button'/></h5>");


//script 
document.write("<script>function a(){");
for(var i=1;i<=row;i++)
{
	for(var j=1;j<=col;j++)
	{  
document.write("if(form.v",i,j,".value==0){alert('please enter value of row",i,",col",j,"');form.v",i,j,".focus();return false;}");
document.write("if(form1.v",i,j,".value==0){alert('please enter value of row",i,",col",j,"');form1.v",i,j,".focus();return false;}");
}}
document.write("}</script>");
//end of script


});

			   
			   

}																												//end of read page function



function sum()
{
	a();// check value of elements of matrix a and matrix b
var v11=(form.v11.value)+(form1.v11.value);
document.write(v11);
}