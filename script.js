btn.addEventListener('click', function(e) {
    e.preventDefault();
    var x = Number(fn.value);
    var y = Number(sn.value);
    //alert(x + " " +y );
    var strUser = slct.options[slct.selectedIndex].text;
    console.log(x," ",y, " ", strUser);
    var z = x+y;
    result.innerHTML = z;
}
)