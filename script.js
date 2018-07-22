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

    if (x==0 || y==0 ){
        result.innerHTML = "Заповніть поля";
        document.getElementById('result').classList.add('incorrect');
    }
    else{
        showMessage(z, expected);
    }
      
}
)
function showMessage(z, expected) {
    if(z === expected) {
        result.innerHTML = 'Молодець!';
        document.getElementById('result').classList.add('correct');
       // var element = document.getElementById("myDIV");
        //element.classList.add("mystyle");
        result.classList.remove('span2');
        result.classList.add('span');
        if (localStorage["possitive"]){
        localStorage["possitive"] = Number(localStorage["possitive"])+1;
        }
         else {
             localStorage["possitive"] =1;
         }
        //add class span
        //result2.innerHTML = '';

    } else if(z != expected) {
        //result.innerHTML = '';
        result.innerHTML = 'Спробуй ще.';
        document.getElementById('result').classList.add('incorrect');
        //add class span2
        if (localStorage["negative"]){
            localStorage["negative"] = Number(localStorage["negative"])+1;
        }
        else {
            localStorage["negative"] =1;
        }
    }
  }