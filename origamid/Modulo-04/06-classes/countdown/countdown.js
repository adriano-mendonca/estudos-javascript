export default class Countdown {
  constructor(dataFutura){
    this.dataFutura = dataFutura
  }

  get _dataAtual() {
    return new Date()
  }

  get _dataFutura(){
    return new Date(this.dataFutura)
  }

  get _timeStamp(){
    return this._dataFutura.getTime() - this._dataAtual.getTime()
  }

  get dias(){
    return Math.floor(this._timeStamp / (24 * 60 * 60 * 1000))
  }

  get horas(){
    return Math.floor(this._timeStamp / (60 * 60 * 1000))
  }

  get minutos(){
    return Math.floor(this._timeStamp / (60 * 1000))
  }

  get segundos(){
    return Math.floor(this._timeStamp /  1000)
  }

  get total(){
    const days = this.dias
    const hours = this.horas % 24
    const minutes = this.minutos % 60
    const seconds = this.segundos % 60
    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }
}