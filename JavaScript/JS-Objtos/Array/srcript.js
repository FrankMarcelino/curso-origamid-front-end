const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValorComida = comidas.shift()
console.log(primeiroValorComida)

// Remova o último valor de comidas e coloque em uma variável
const ultimoValorComida = comidas.pop()
console.log(ultimoValorComida)
// Adicione 'Arroz' ao final da array
comidas.push('arroz')

console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift('peixe','batatas')

console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort())

// Inverta a ordem dos estudantes
console.log(estudantes.reverse())
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join


html = html.split('section');
html = html.join('ul')
html = html.split('div');
html = html.join('li')

console.log(html)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice()
console.log(carros.pop())
console.log(cloneCarros)