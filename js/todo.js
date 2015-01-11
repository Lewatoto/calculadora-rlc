var vresistor = function () {
    var franja1 = document.getElementById("resistor1");
    var valor1 = franja1.options[franja1.selectedIndex].value;
    var franja2 = document.getElementById("resistor2");
    var valor2 = franja2.options[franja2.selectedIndex].value;
    var franja3 = document.getElementById("resistor3");
    var valor3 = franja3.options[franja3.selectedIndex].value;
    var franja4 = document.getElementById("resistor4");
    var valor4 = franja4.options[franja4.selectedIndex].value;
    var entero = ((parseInt(valor1) * 10) + parseInt(valor2)) * Math.pow(10, parseFloat(valor3));
    var exponente = " ";

    if (entero >= 1000 && entero < 1000000) {
        entero = entero / 1000;
        exponente = "K";
    }
    if (entero >= 1000000 && entero < 1000000000) {
        entero = entero / 1000000;
        exponente = "M";
    }
    if (entero >= 1000000000) {
        entero = entero / 1000000000;
        exponente = "G";
    }

    document.getElementById("resultadoresistor").value = entero.toFixed(2) + " +/- " + valor4 + "%  " + exponente;
};


var vinductor = function () {
    var franja1 = document.getElementById("inductor1");
    var valor1 = franja1.options[franja1.selectedIndex].value;
    var franja2 = document.getElementById("inductor2");
    var valor2 = franja2.options[franja2.selectedIndex].value;
    var franja3 = document.getElementById("inductor3");
    var valor3 = franja3.options[franja3.selectedIndex].value;
    var franja4 = document.getElementById("inductor4");
    var valor4 = franja4.options[franja4.selectedIndex].value;
    var entero = ((parseFloat(valor1) * 10) + parseFloat(valor2)) * Math.pow(10, parseFloat(valor3));
    var resultado = entero * 0.000001;
    var exponente = " ";

    if (resultado < 0.000001){
        resultado = resultado * 1000000000;
        exponente = "n";
    }

    if (resultado >= 0.000001 && resultado < 0.001){
        resultado = resultado * 1000000;
        exponente = "µ";
    }

    if (resultado >= 0.001 && resultado < 0.99){
        resultado = resultado * 1000;
        exponente = "m";
    }

    document.getElementById("resultadoinductor").value = resultado.toFixed(2) + " +/- " + valor4 + "%  " + exponente;
};

var vcapacitor = function () {
    var tension = document.getElementById("capacitor1");
    var valort = tension.options[tension.selectedIndex].value;
    var numero1 = document.getElementById("capacitor2");
    var valor1 = numero1.options[numero1.selectedIndex].value;
    var numero2 = document.getElementById("capacitor3");
    var valor2 = numero2.options[numero2.selectedIndex].value;
    var numero3 = document.getElementById("capacitor4");
    var valor3 = numero3.options[numero3.selectedIndex].value;
    var tolerancia = document.getElementById("capacitor5");
    var valortol = tolerancia.options[tolerancia.selectedIndex].value;
    var entero = ((parseFloat(valor1) * 10) + parseFloat(valor2)) * Math.pow(10,parseFloat(valor3));
    var resultado = entero * 0.000000000001;
    var exponente = " ";

    if (resultado < 0.000000001){
        resultado = resultado * 1000000000000;
        exponente = "p";
    }

    if (resultado >= 0.000000001 && resultado < 0.000001){
        resultado = resultado * 1000000000;
        exponente = "n";
    }

    if (resultado >= 0.000001 && resultado < 0.001){
        resultado = resultado * 1000000;
        exponente = "µ";
    }

    if (resultado >= 0.001 && resultado < 0.1){
        resultado = resultado * 1000;
        exponente = "m";
    }

    if (valort == 0){
        document.getElementById("resultadocapacitor").value = resultado.toFixed(2) + valortol + " " + exponente;
    }
    else {
        document.getElementById("resultadocapacitor").value = valort + " VDC " + resultado.toFixed(2) + valortol + " " + exponente;
    }
};

/*var install = function () {
    var inst = window.navigator.mozApps.install("http://lewatoto.github.io/calculadora-rlc/manifest.webapp")
	   inst.onsuccess = function () {
		  alert('Instalado correctamente.')
	   }
	   inst.onerror = function () {
		  alert('Error en la instalación ('+this.error.name+')')
	   }
}*/
