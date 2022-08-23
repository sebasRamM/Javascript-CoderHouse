let nombre = (prompt('Ingrese su nombre'))
let edad =  parseInt(prompt('Ingrese su edad'))

for(let i = 1; i <= 20; i++) {
    if(edad >= 18) {
        alert(`Bienvenido ${nombre} su turno es: ${i}`)
        nombre = (prompt('Ingrese su nombre'))
        edad =  parseInt(prompt('Ingrese su edad'))
    }else if (edad < 18) {
        alert('Lo sentimos, no puede ingresar por ser menor de edad')
    } 
}

