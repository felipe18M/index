   //-----------------------------------------------------------------------------
    //funcion cantidad de digitos

    function cdd(){
        var n = parseInt(document.form2.n.value);
              if(n>0 & n<10)
                {
                    
                  document.write("El número tiene un digito:1");
                }
                else if(n>9 & n<100)
                {
                    alert("El número tiene dos digitos:2");
                }
                else if(n>99 & n<1000)
                {
                    alert("El número tiene tres digitos:3");
                }
                else if(n>999 & n<10000)
                {
                    alert("El número tiene cuatro digitos:4");
                }
                else if(n>9999 & n<100000)
                {
                    alert("El número tiene cinco digitos:5");
                }
                else if(n>99999 & n<1000000)
                {
                    alert("El número tiene seis digitos:6");
                }
                else if(n>999999 & n<10000000)
                {
                    alert("El número tiene seis digitos:7");
                }
                else if(n>9999999 & n<100000000)
                {
                    alert("El número tiene seis digitos:8");
                }
                else if(n>99999999 & n<1000000000)
                {
                    alert("El número tiene seis digitos:9");
                }}