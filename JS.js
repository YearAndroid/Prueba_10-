(function(){

    //ejercicio 1
        console.log('BIENVENIDOS AL SISTEMA');

    let atributo= document.querySelector('#btn');
        atributo.addEventListener('click',function(){
            alert('BIENVENIDOS AL SISTEMA');
        })
        //ejercicio 2
       function enviarnombre(...nombre1){
           nombre1.forEach((n,i)=>console.log(n,i));
       }
       enviarnombre("Maycol","Jesus","Arauz")
        
       
       
        //ejercicio 3
        let persona = {nombre :"maycol",apellido:"arauz",edad:23,sexo:"Masculino"};
        let nombre,apellido,edad,sexo;
        ({nombre,apellido,edad,sexo}= persona);

        console.log(nombre,apellido);

            //ejercicio 4
            (function (){ 
                     alert('saludos humanos');
                
                    console.log('saludos humanos')
            })();
                //ejercicio 5
            let multi = (a,b,c) => (a+b)*c;

                console.log(multi(2,2,5));

})();

