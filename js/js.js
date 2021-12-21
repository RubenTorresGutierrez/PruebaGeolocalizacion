/**
*   @file js
*   @description Programa que encuentra la geolocalización del dispositivo
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

class Geolocalizador{

    constructor(){

	//Atributos
	this.p = document.getElementById('location');
	
	window.onload = this.iniciar.bind(this);

    }

    iniciar(){

	if(!navigator.geolocation)
	    // p.textContent = 'Tu navegador no soparta geolocalización';
	    throw 'Tu navegador no soparta geolocalización';

	navigator.geolocation.getCurrentPosition(this.mostrarPosicion.bind(this));

    }

    mostrarPosicion(posicion){

	this.p.textContent = `Latitud: ${posicion.coords.latitude} Longitud: ${posicion.coords.longitude}`;

    }

}

new Geolocalizador();
