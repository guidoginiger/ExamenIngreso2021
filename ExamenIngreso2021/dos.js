
function mostrar()
{
  let nombre;
  let tipo;
  let cantidadM;
  let sexo;
  let notaProm;
  let contNB = 0;
  let contNF = 0;
  let contNM = 0;
  let acumNB = 0;
  let acumNF = 0;
  let acumNM = 0;
  let edad;
  let seguir;
  let nombreMejor;
  let mejorProm;
  let nombreJoven;
  let edadMin;
  let promSexoB;
  let promSexoF;
  let promSexoM;
  let nombreMas;
  let edadMas;
  let MatMas;
  let flag = 1;


  do{
    nombre= prompt("Ingrese nombre");
    
    tipo = prompt("Ingrese cursada: libre/presencial/remota");

      while( tipo != "libre" && tipo != "presencial" && tipo != "remota"){

        tipo = prompt("ERROR. Reingrese cursada: libre/presencial/remota");
      }

    cantidadM = parseInt(prompt("Ingrese cantidad. Mas de 0 y menos de 8"));

      while(cantidadM < 0 || cantidadM > 8 || isNaN(cantidadM)){

        cantidadM = parseInt(prompt("ERROR. Reingrese cantidad. Mas de 0 y menos de 8"));
      }

    sexo = prompt("Ingrese sexo: binario/femenino/masculino");

      while( sexo !="binario" && sexo != "femenino" && sexo != "masculino"){

        sexo = prompt("ERROR. Reingrese sexo: binario/femenino/masculino");
      }

    notaProm = parseInt(prompt("Ingrese nota entre 0 y 10"));

      while( notaProm <0 || notaProm >10 || isNaN(notaProm)){

        notaProm = parseInt(prompt("ERROR. Reingrese nota entre 0 y 10"));
      }

    edad = parseInt(prompt("Ingrese edad"));

      while(isNaN(edad)){

        edad = parseInt(prompt("ERROR. Reingrese edad"));
      }

    
    if( sexo != "masculino"){ 
      if(flag || notaProm > mejorProm){

        mejorProm = notaProm;
        nombreMejor = nombre;
        flag = 0;
      }
    }

    if( cantidadM == "libre"){

      if(flag || edad < edadMin){

        edadMin = edad;
        nombreJoven = nombre;
        flag= 0;
      }
    }

    if ( sexo == "binario"){
      acumNB += notaProm;
      contNB++;
    }

    else if( sexo== "femenino"){
      acumNF+= notaProm;
      contNF++;
    }
    else{
      acumNM+= notaProm;
      contNM++;
    }

    if( cantidadM != "remota" ){
    if( flag || edad> edadMas && cantidadM > MatMas){

      edadMas = edad;
      nombreMas = nombre;
      MatMas = cantidadM;
      flag = 0;
    }
    
    }

    seguir=prompt("¿Quiere ingresar mas datos?");
  }while( seguir == "si");


  promSexoB = acumNB / contNB;
  promSexoF = acumNF / contNF;
  promSexoM = acumNM / contNM;


  console.log(+nombreMejor+ "es el mejor promedio");
  console.log(+nombreJoven+ "es el mas joven que da libre");
  console.log("El promedio de nota por sexo binario es: " +promSexoB);
  console.log("El promedio de nota por sexo femenino es: "+promSexoF);
  console.log("El promedio de nota por sexo masculino es: "+promSexoM);
  console.log(+nombreMas+ " con " +edadMas+ " años, es el que cursa mas materias");

}
