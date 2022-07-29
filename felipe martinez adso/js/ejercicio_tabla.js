    //-----------------------------------------------------------------------------
    //TABLAS

    function tabla(){
        var n2=parseInt(document.tablas.n2.value)
        var r="";
        for(var i=1; i<=10; i++){
          r=r+n2+"X"+i+"="+(n2*i)+"<br>";
        }
        var result=document.getElementById("resultado");
        result.innerHTML= r;}