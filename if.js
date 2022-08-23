let equipo = prompt('Ingrese el nombre de su club de futbol europeo preferido para saber de que país es')
let pais 

while((equipo !== 'Real Madrid') &&
(equipo !== 'Milan') && 
(equipo !== 'Liverpool') && 
(equipo !== 'Barcelona') &&
(equipo !== 'Manchester United') &&
(equipo !== 'Manchester City') &&
(equipo !== 'Atletico de Madrid') &&
(equipo !== 'Inter') &&
(equipo !== 'Bayern Munich') &&
(equipo !== 'Juventus') &&
(equipo !== 'PSG') &&
(equipo !== 'Arsenal')) {

    alert('Escoge un equipo correcto');
    equipo = prompt('Ingrese el nombre de su club de futbol europeo preferido para saber de que país es')

}if(equipo === 'Real Madrid') {
    pais = 'España'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Milan') {
    pais = 'Italia'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Liverpool') {
    pais = 'Inglaterra'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Barcelona') {
    pais = 'España'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Manchester United') {
    pais = 'Inglaterra'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Manchester City') {
    pais = 'Inglaterra'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Atletico de Madrid') {
    pais = 'España'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Inter') {
    pais = 'Italia'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Bayern Munich') {
    pais = 'Alemania'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Juventus') {
    pais = 'Italia'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'PSG') {
    pais = 'Francia'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} else if (equipo === 'Arsenal') {
    pais = 'Inglaterra'
    alert(`Tu equipo ${equipo} es de ${pais}`)
} 
 

