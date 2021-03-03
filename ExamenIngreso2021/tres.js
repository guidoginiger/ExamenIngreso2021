
function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let temperatura;
	let sexo;
	let seguir;
	let precio = 600;
	let contViudo = 0;
	let nomMin;
	let edadMin;
	let total = 0;
	let importe;
	let descuento;

	do{
		nombre = prompt("Ingrese nombre");

		estadoCivil = prompt("Ingrese estado civil, soltero/casado/viudo");

		edad= parseInt(prompt("Ingrese edad mayor a 17"));

			while(edad < 17 || isNaN(edad)){

				edad= parseInt(prompt("ERROR. Reingrese edad mayor a 17"));
			}

		temperatura = parseInt(prompt("Ingrese temperatura mayor a 0"));

			while(temperatura < 0 || isNaN(temperatura)){

				temperatura = parseInt(prompt("Reingrese temperatura mayor a 0"));
			}

		sexo = prompt("Ingrese sexo f/m");

			while( sexo != "f" && sexo != "m"){

				sexo = prompt("ERROR. Reingrese sexo f/m");
			}

		

		if( edad >= 60 && estadocivil == "viudo"){

				contViudo++;}

		if( sexo == "f" && estadoCivil == "soltera"){

			if(flag || edad < edadMin){

				edadMin=edad;
				nomMin=nombre;
				flag = 0;
			}
		}
		
		importe = precio;
		total = importe; 


		seguir= prompt("¿Quiere ingresar mas pasajeros?");
	}while(seguir == "si");

	if( edad>60 && edad%50==0){

		descuento = total - total *0.25; 
	}


	console.log("Cantidad viudos mayores de 60:" +contViudo);
	console.log( +nomMin+ " es la persona soltera mas joven con " +edadMin+ " años.");
	console.log("Precio con descuento es $: "+descuento);
}
