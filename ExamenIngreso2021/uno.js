
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let inflamable; 
	let marca;
	let marcaMax;
	let promedioA;
	let promedioQ;
	let promedioI;
	let maxTipo;
	let contAlcohol = 0;
	let acumAlcohol = 0;
	let contQuat = 0;
	let acumQuat = 0;
	let contIAC = 0;
	let acumIac = 0;
	let acumIg = 0;
	let acumCom = 0;
	let acumEx = 0;
	let maxTipoIn;
	let maxTipoCaro;
	let flag = 1;

	for(let i = 0; i<5; i++){
	tipo = prompt("Ingrese producto, ALCOHOL, IAC, QUAT");

		while(tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){

			tipo = prompt("ERROR. Reingrese producto, ALCOHOL, IAC, QUAT");
		}

	precio = parseInt(prompt("Ingrese precio entre 100 y 300"));

		while( precio < 100 || precio > 300 || isNaN(precio)){

			precio = parseInt(prompt("ERROR. Reingrese precio entre 100 y 300"));
		}

	cantidad = parseInt(prompt("Ingrese unidades entre 1 y 1000"));

		while( cantidad < 1 || cantidad > 1000 || isNaN(cantidad)){

			cantidad = parseInt(prompt("ERROR. Reingrese unidades entre 1 y 1000"));
		}

	inflamable = prompt("Ingrese inflamable, ignifugo, combustible, explosivo");

		while( inflamable != "ignifugo" && inflamable != "combustible" && inflamable != "explosivo"){

			inflamable = prompt("ERROR. Reingrese inflamable, ignifugo, combustible, explosivo");
		}
	
	marca= prompt("Ingrese Marca");
	
	if( tipo == "ALCOHOL" ){

		acumAlcohol+= cantidad;
		contAlcohol++;

		promedioA = acumAlcohol / contAlcohol;
	}

	if (tipo == "IAC"){
		acumIac+= cantidad;
		contIAC++;

		promedioI = acumIac / contIAC;

	}

	if ( tipo == "QUAT"){

		acumQuat+= cantidad;
		contQuat++;

		promedioQ = acumQuat / contQuat;
	}

	if( inflamable == "ignifugo"){

		acumIg += cantidad;
	}

	else if (inflamable == "combustible"){

		acumCom += cantidad;
	}
	else { 

		acumEx += cantidad;
	}
 
	if(flag || precio > maxTipoCaro){

		maxTipoCaro = precio;
		
		maxTipo = tipo;

		marcaMax = marca;

		flag = 0;
	}
}
	


	if( acumIg > acumCom  && acumIg > acumEx ){

		maxTipoIn = "ignifugo";
	}

	else if( acumCom >= acumIg && acumCom > acumEx){

		maxTipoIn = "combustible";
	}
	else{

		maxTipoIn = "explosivos";
	}

	console.log("Promedio de ALCOHOL es: " +promedioA);
	console.log("Promedio de IAC es: " +promedioI);
	console.log("Promeedio de QUAT es: "+promedioQ);

	console.log("El inflamable con mayor cantidad en total es: " +maxTipoIn);

	console.log("La marca: " +marcaMax+ "del producto: " +maxTipo+ "es el producto mas caro");

}
