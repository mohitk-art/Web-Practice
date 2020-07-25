function x()
{
var row=document.form.rows.value;
var col=document.form.cols.value;
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
}
if(row>4)
{
alert("Maximum rows are 4");
document.form.rows.focus();  //focus on row input
return false;
}
if(col>4)
{
alert("Maximum cols are 4");
document.form.cols.focus();		//focus on col input
return false;
}

$(document).ready(function(){

/* hide selected row and cols */
if(col==3)
{
$(form.i14).hide();
$(form.i24).hide();
$(form.i34).hide();
$(form.i44).hide();
}
if(row==3)
{
/*hide */
$(form.i41).hide();
$(form.i42).hide();
$(form.i43).hide();
$(form.i44).hide();
}
if(col==2)
{
// hide
$(form.i14).hide();
$(form.i24).hide();
$(form.i34).hide();
$(form.i44).hide();
$(form.i13).hide();  /*test */
$(form.i23).hide();
$(form.i33).hide();
$(form.i43).hide();
}
if(row==2)
{
//hide
$(form.i41).hide();
$(form.i42).hide();
$(form.i43).hide();
$(form.i44).hide();
$(form.i31).hide();
$(form.i32).hide();
$(form.i33).hide();
$(form.i34).hide();
}
if(col==1)
{
//hide
$(form.i14).hide();
$(form.i24).hide();
$(form.i34).hide();
$(form.i44).hide();
$(form.i13).hide();
$(form.i23).hide();
$(form.i33).hide();
$(form.i43).hide();
$(form.i12).hide();
$(form.i22).hide();
$(form.i32).hide();
$(form.i42).hide();
}
if(row==1)
{
//hide
$(form.i41).hide();
$(form.i42).hide();
$(form.i43).hide();
$(form.i44).hide();
$(form.i31).hide();
$(form.i32).hide();
$(form.i33).hide();
$(form.i34).hide();
$(form.i21).hide();
$(form.i22).hide();
$(form.i23).hide();
$(form.i24).hide();
}


//display
if(row==2&&col==1)
{
$(form.i21).css('display','');
}
if(row==3&&col==1)
{
$(form.i21).css('display','');
$(form.i31).css('display','');
}
if(row==4&&col==1)
{
$(form.i21).css('display','');
$(form.i31).css('display','');
$(form.i41).css('display','');
}
if(row==1&&col==2)
{
$(form.i12).css('display','');
}
if(row==2&&col==2)
{
$(form.i12).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
}
if(row==3&&col==2)
{
$(form.i12).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i31).css('display','');
$(form.i32).css('display','');
}
if(row==4&&col==2)
{
$(form.i12).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i31).css('display','');
$(form.i32).css('display','');
$(form.i41).css('display','');
$(form.i42).css('display','');
}
if(row==1&&col==3)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
}
if(row==2&&col==3)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i23).css('display','');
}
if(row==3&&col==3)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i23).css('display','');
$(form.i31).css('display','');
$(form.i32).css('display','');
$(form.i33).css('display','');
}
if(row==4&&col==3)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i23).css('display','');
$(form.i31).css('display','');
$(form.i32).css('display','');
$(form.i33).css('display','');
$(form.i41).css('display','');
$(form.i42).css('display','');
$(form.i43).css('display','');
}
if(row==1&&col==4)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
$(form.i14).css('display','');
}
if(row==2&&col==4)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
$(form.i14).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i23).css('display','');
$(form.i24).css('display','');
}
if(row==3&&col==4)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
$(form.i14).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i23).css('display','');
$(form.i24).css('display','');
$(form.i31).css('display','');
$(form.i32).css('display','');
$(form.i33).css('display','');
$(form.i34).css('display','');
}
if(row==4&&col==4)
{
$(form.i12).css('display','');
$(form.i13).css('display','');
$(form.i14).css('display','');
$(form.i21).css('display','');
$(form.i22).css('display','');
$(form.i23).css('display','');
$(form.i24).css('display','');
$(form.i31).css('display','');
$(form.i32).css('display','');
$(form.i33).css('display','');
$(form.i34).css('display','');
$(form.i41).css('display','');
$(form.i42).css('display','');
$(form.i43).css('display','');
$(form.i44).css('display','');
}
});
//}																				/*end of x function */

/*
function value()
{ */
/*declaration */
var v11=form.i11.value;
var v12=form.i12.value;
var v13=form.i13.value;
var v14=form.i14.value;

var v21=form.i21.value;
var v22=form.i22.value;
var v23=form.i23.value;
var v24=form.i24.value;

var v31=form.i31.value;
var v32=form.i32.value;
var v33=form.i33.value;
var v34=form.i34.value;

var v41=form.i41.value;
var v42=form.i42.value;
var v43=form.i43.value;
var v44=form.i44.value;


/*is empty */ 
/*
if(v11=="")
{
alert("First Enter row1,col1");
return false;
}

if(v12=="")
{
alert("First Enter row1,col2");
return false;
}
if(v13=="")
{
alert("First Enter row1,col3");
return false;
}
if(v14=="")
{
alert("First Enter row1,col4");
return false;
}
if(v21=="")
{
alert("First Enter row2,col1");
return false;
}
if(v22=="")
{
alert("First Enter row2,col2");
return false;
}
if(v23=="")
{
alert("First Enter row2,col3");
return false;
}
if(v24=="")
{
alert("First Enter row2,col4");
return false;
}
if(v31=="")
{
alert("First Enter row3,col1");
return false;
}
if(v32=="")
{
alert("First Enter row3,col2");
return false;
}
if(v33=="")
{
alert("First Enter row3,col3");
return false;
}
if(v34=="")
{
alert("First Enter row3,col4");
return false;
}
if(v41=="")
{
alert("First Enter row4,col1");
return false;
}
if(v42=="")
{
alert("First Enter row4,col2");
return false;
}
if(v43=="")
{
alert("First Enter row4,col3");
return false;
}
if(v44=="")
{
alert("First Enter row4,col4");
return false;
}
*/
return true;
}																											/* end of value function */