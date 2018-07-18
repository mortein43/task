btn.addEventListener('click', function(e) {
    e.preventDefault();
    var x = Number(fn.value);
    var y = Number(sn.value);
    var z = Number(ans.value);
    //alert(x + " " +y );
    var strUser = slct.options[slct.selectedIndex].value;
    let expected =0;
    switch(strUser){
        case "+": expected = Number(x) + Number(y); break;
        case "-": expected = Number(x) - Number(y); break;
        case "*": expected = Number(x) * Number(y); break;
        case "/": expected = Number(x) / Number(y); break;
    }
    var x = Number(fn.value);
    var y = Number(sn.value);
    var z = Number(ans.value);
    function showMessage() {
        if(z === expected) {
            result.innerHTML = 'Молодець!';
        } else if(z != expected) {
            result.innerHTML = 'Спробуй ще.';
        }
      }
      showMessage();
}
)