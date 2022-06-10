export default class validarCPF {
    constructor(element) {
        this.element = element
    }

    limpar(cpf) {
        return cpf.replace(/\D/g, '')
    }

    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf)
        return this.construir(cpfLimpo)
    }

    validar(cpf) {
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
        return (matchCpf && matchCpf[0] === cpf)
    }

    validarMudanca(cpfElement){
        if(this.validar(cpfElement.value)){
            cpfElement.value = this.formatar(cpfElement.value)
            cpfElement.classList.add('valido')
            cpfElement.classList.remove('erro')
            cpfElement.nextElementSibling.classList.remove('ativar')
        } else {
            cpfElement.classList.remove('valido')
            cpfElement.classList.add('erro')
            cpfElement.nextElementSibling.classList.add('ativar')
        }
    }

    adicionarEvento() {
        this.element.addEventListener('change', () => {
            this.validarMudanca(this.element)
        })
    }

    adicionarErroSpan() {
        const erroElement = document.createElement('span')
        erroElement.classList.add('erro-text')
        erroElement.innerText = 'CPF Inválido'
        this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling)
    }

    iniciar() {
        this.adicionarErroSpan()
        this.adicionarEvento()
        return this
    }
}