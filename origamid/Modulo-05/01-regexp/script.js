// Seleção
const regexp = /\w+/gi
const frase = 'Linguagem JavaScript com ECMA5'
//Substituição com .split() ou .replace()
console.log(frase.replace(regexp, 'X'))
//Padrões - CPF, E-mail, CNPJ, Telefone

//Métodos
regexp.test(frase)
regexp.exec(frase)
frase.match(regexp)


const tags = `
<ul>
    <li>Item1</li>
    <li>Item2</li>
</ul>`

const regexp2 = /(?<=<\/?)\w+/g

tags.replace(regexp2, 'div')


const emails = `
empresa@email.com
contato@email.com
suporte@email.com`

const regexp3 = /(\w+0)[\w.]+/g

emails.replace(regexp3, '$1gmail.com')
