 //-----------------------------------------------------------------------------
    //funcion mayor menor de 2 numeros

    function MM (){ 
        var n1 = document.getElementById ('num1').value;
        var n2 = document.getElementById ('num2').value;
    
      if(n1==n2){
        
        alert("los numeros son iguales");
       }
      else if(n1>n2){
      alert("El mayor es:"+n1+"\nel menor es:"+n2);
       }
      else{
      alert("el mayor es:"+n2+"\nel menor es:"+n1);
      }
      }