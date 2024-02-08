const perguntas = [
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let x = 5;",
        "variable x = 5;",
        "int x = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Object",
        "Boolean",
        "Array",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de linha em JavaScript?",
      respostas: [
        "/* Comentário */",
        "<!-- Comentário -->",
        "// Comentário",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "addToEnd()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para imprimir uma mensagem no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "toInteger()",
        "parseInt()",
        "stringToInt()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "&",
        "+",
        "||",
      ],
      correta: 1
    }
  ];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)        
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta

          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          } 
          
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)

    }

    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
}