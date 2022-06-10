import validarCPF from "./validar-cpf.js";

const cpf = document.querySelector('#cpf')
const validarCpf = new validarCPF(cpf).iniciar()
