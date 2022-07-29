    //-----------------------------------------------------------------------------
    //mayor menor de 4 numeros
    function mm4(){
        var a = parseInt(document.form.a.value);
        var b = parseInt(document.form.b.value);
        var c = parseInt(document.form.c.value);
        var d = parseInt(document.form.d.value);
        
             if(a<b & a<c & a<b & a<d & b<d & c<d){   
                   alert("El número menor es: "+a+"");
                   alert("El número mayor es: "+d+"");
                }
                else if(a<c & a<d & a<b & c<d & c<b & d<b){
                   alert("El número menor es: "+a+"");
                   alert("El número mayor es: "+b+"");
                }
                else if(a<d & a<b & a<c & d<b & d<c & b<c){
                   alert("El número menor es: "+a+"");
                   alert("El número mayor es: "+c+"");
                }
                else if(b<c & b<d & b<a & c<d & c<a & d<a){
                   alert("l número menor es: "+b+"");
                   alert("El número mayor es: "+a+"");
                }
                else if(b<d & b<a & b<c & d<a & d<c & a<c){
                   alert("El número menor es: "+b+"");
                   alert("El número mayor es: "+c+"");
                }
                else if(b<a & b<c & b<d & a<c & a<d & c<d){
                   alert("El número menor es: "+b+"");
                   alert("El número mayor es: "+d+"");
                }
                else if(c<d & c<a & c<b & d<a & b<d & a<b){
                   alert("El número menor es: "+c+"");
                   alert("El número mayor es: "+b+"");
                }
                else if(c<a & c<b & c<d & a<b & a<d & b<d){
                   alert("El número menor es: "+c+"");
                   alert("El número mayor es: "+d+"");
                }
                else if(c<b & c<d & c<a & b<d & b<a & d<a){
                   alert("El número menor es: "+c+"");
                   alert("El número mayor es: "+a+"");
                }
                else if(d<a & d<b & d<c & a<b & a<c & b<c){
                   alert("El número menor es: "+d+"");
                   alert("El número mayor es: "+c+"");
                }
                else if(d<b & d<c & d<a & b<c & b<a & c<a){
                   alert ("El número menor es: "+d+"");
                   alert ("El número mayor es: "+a+"");
                }
                else if(d<c & d<a & d<b & c<a & c<b & a<b){
                   alert("El número menor es: "+d+"");
                   alert("El número mayor es: "+b+"");
                }
                else if(d<c & d<a & d<b & c<a & c<b & a<b){
                   alert("El número menor es: "+d+"");
                   alert("El número mayor es: "+b+"");
                }
              }