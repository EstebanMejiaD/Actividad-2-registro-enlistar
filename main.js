/* async function listar() {
  const response = await fetch ("http://127.0.0.1:5500/datos.json")
  const json = await response.text();
  tbody.innerHTML(json);
  console.log(json);
} */
/* De claración de variable json */
var json = [
    { nombre: 'roberto', apellido: 'Lopez', tipo: 'Ti', documento: '125463568', ciudad: 'Cartagena', correo: 'rlopez@hotmail.com', direccion: 'Cl 111-2', telefono: '74629572', edad: '18' },
    { nombre: 'Meyar', apellido: 'Azuces', tipo: 'CC', documento: '174638569', ciudad: 'Bogotá', correo: 'mazuces@gmail.com', direccion: 'Cl 54-4', telefono: '1375968632', edad: '45' },
    { nombre: 'Coror', apellido: 'Smit', tipo: 'p', documento: '364541546', ciudad: 'Sincelejo', correo: 'csmit@gmail.com', direccion: 'Cl 56-65', telefono: '9573629573', edad: '5' },
  ]
  
  //Llenado de tabla con datos estaticos
  const listar = () => {
    // Creación de variable
    let tbody = document.getElementById('usuarios')
    let tbody2 = document.getElementById('datos')
    let tablallena = ""
    let tablallena2 = ""
    // Recorrido de la tabla
    for (let i = 0; i < json.length; i++) {
      tablallena += "<tr><td>" + json[i].nombre + "</td><td>" + json[i].apellido + "</td><td>" + json[i].tipo + "</td><td>" + json[i].documento + "</td><td>" + json[i].ciudad
      tablallena2 += "<tr><td>" + json[i].correo + "</td><td>" + json[i].direccion + "</td><td>" + json[i].telefono + "</td><td>" + json[i].edad
    }
    //Llenado  de la tabla 
    tbody.innerHTML = tablallena
    tbody2.innerHTML = tablallena2
  }
  
  const registrar = () => {
    // Creación de variable
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const tpdoc = document.getElementById("tdoc").value
    /* let tpdoc = document.querySelector("#tdoc").value */
    const documento = parseInt(document.getElementById("documento").value)
    const ciudad = document.getElementById("ciudad").value
    const correo = document.getElementById("correo").value
    const direccion = document.getElementById("direccion").value
    const telefono = parseInt(document.getElementById("telefono").value)
    const edad = parseInt(document.getElementById("edad").value)
  
    //-----------------------declaración de restrinciones-------------------------------------//
    //trim() elimina espacios en blanco
    if (!nombre.trim()) {
      alert('Ingrese un nombre')
      return
    }
  
    if (!apellido.trim()) {
      alert('Ingrese un apellido')
      return
    }
    let tipodoc = "";
    if (tpdoc == "1") {
      alert('Error, seleccione el tipo de documento.')
      console.error('Error, seleccione el tipo de documento.');
      return
    } else {
      if (tpdoc == "2") {
        tipodoc = "TI"
      } else {
        if (tpdoc == "3") {
          tipodoc = "P"
        } else {
          if (tpdoc == "4") {
            tipodoc = "CE"
          }
        }
      }
    }
  
    if (tpdoc == 'Seleccione el tipo de documento') {
      alert('Seleccione el tipo de documento')
      return
    }
    if (!documento) {
      alert('Ingrese el número de documento')
      return
    }
    if (!ciudad.trim()) {
      alert('Ingrese la ciudad')
      return
    }
    if (!correo.trim()) {
      alert('Ingrese el correo')
      return
    }
    if (!direccion.trim()) {
      alert('Ingrese la direccion')
      return
    }
    if (!telefono) {
      alert('Ingrese el número de télefono')
      return
    }
  
    if (!edad) {
      alert('Ingrese su edad')
      return
    }
  
    console.log(tipodoc);
    for (let i = 0; i < json.length; i++) {
      const elemento = json[i]
      if (elemento.tipo_documento == documento || elemento.correo == correo) {
        alert('Registro ya ingresado')
        return
      }
    }
  
    let tbody = document.getElementById('usuarios')
    let tbody2 = document.getElementById('datos')
    tbody.innerHTML += "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + tipodoc + "</td><td>" + documento + "</td><td>" + ciudad + "</td></tr>"
    tbody2.innerHTML += "<tr><td>" + correo + "</td><td>" + direccion + "</td><td>" + telefono + "</td><td>" + edad
    const nuevo = { nombre: nombre, apellido: apellido, tipo: tipodoc, documento: documento, ciudad: ciudad, correo: correo, direccion: direccion, telefono: telefono, edad: edad }
    json.push(nuevo)
  }
  
  
  
  
  
  
  