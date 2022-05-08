class Button {
  constructor(text, background, color){
    this.text = text
    this.background = background
    this.color = color
  }

  element(){
    const btn = document.createElement('button')
    btn.innerText = this.text
    btn.style.background = this.background
    btn.style.color = this.color
    return btn
  }
}

const blueButton = new Button('Comprar', 'blue', 'white')

document.body.appendChild(blueButton.element())

const button = {
  get tamanho(){
    return this.numero
  },
  set tamanho(numero){
    this.numero = numero
  }
}

const frutas = {
  lista: [],
  set nova(fruta){
    this.lista.push(fruta)
  }
}


class Veiculo {
  constructor(rodas){
    this.rodas = rodas
  }

  acelerar(){
    console.log('Acelerou!')
  }
}

class Moto extends Veiculo{
  empinar(){
    console.log('Moto empinou com ' + this.rodas + ' rodas')
  }
}

const honda = new Moto(2)
