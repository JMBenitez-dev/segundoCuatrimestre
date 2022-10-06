"use strict";
exports.__esModule = true;
var ara_a_1 = require("./ara\u00F1a");
var gato_1 = require("./gato");
var pez_1 = require("./pez");
var listadoAnimales_1 = require("./listadoAnimales");
var gatito1 = new gato_1.Gato(5, "Michi1");
var gatito2 = new gato_1.Gato(4, "Michi2");
var puercoAraña1 = new ara_a_1.Araña(8);
var puercoAraña2 = new ara_a_1.Araña(6);
var pezLagarto1 = new pez_1.Pez(0, "Nemo");
var pezLagarto2 = new pez_1.Pez(0, "Dory");
var arregloDeAnimales = [gatito1, gatito2, puercoAraña1, puercoAraña2, pezLagarto1];
var nuestrosAnimales = new listadoAnimales_1.ListadoAnimales(arregloDeAnimales);
var resultado = nuestrosAnimales.buscar(pezLagarto2);
console.log("Primera busqueda", resultado);
nuestrosAnimales.agregarAnimal(pezLagarto2);
resultado = nuestrosAnimales.buscar(pezLagarto2);
console.log("Segunda busqueda", resultado);
var consulta = arregloDeAnimales[3].getPatas();
console.log("Consulta devuelve", consulta);
