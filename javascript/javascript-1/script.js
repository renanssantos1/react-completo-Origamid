function upperName(name){
  return String(name).toUpperCase()
}

const lowerName = (name) => String(name).toLowerCase()

console.log(lowerName('ANDRE'))

function handleMouse({clientX, clientY}){
  console.log(clientX * clientY)
}

const useQuadrado = [
  4, 
  ((lado) => {return 4 * lado})
]

const [_, perimetro] = useQuadrado;
console.log(perimetro(10))

document.addEventListener('click',handleMouse )