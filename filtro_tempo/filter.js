// ticket em JSON de exemplo
let value = '{"data":{"tickets":[{"id":"numeroDeID","ticket":"numeroDeTicket","status":"st","service_name":"Nome do serviço","service_asset":"asst","open_date":"11/08/2022 14:02:07","resolve_date":"11/08/2022 17:18:16","prev_retorno":null}]},"mensagem":"OK"}'

const data = JSON.parse(value)
const ticket = data.data.tickets
const open_date = ticket[0].open_date

// condicional para filtrar resolve_date ou prev_retorno
if (!ticket[0].resolve_date){
  close_date = ticket[0].prev_retorno
} else {
  close_date = ticket[0].resolve_date
}

function formatarData() {
  // separado para montar a data no formato US

  dia = open_date.toString().substring(0,2)
  mes = open_date.toString().substring(3,5)
  ano = open_date.toString().substring(6,10)
  hora = open_date.toString().substring(open_date.length - 8)

  // aqui junta no formato US para o ticket de abertura
  formatUsT2 = ano + '-' + mes + '-' + dia + ' ' + hora

  dia = close_date.toString().substring(0,2)
  mes = close_date.toString().substring(3,5)
  ano = close_date.toString().substring(6,10)
  hora = close_date.toString().substring(close_date.length - 8)

  // aqui junta no formato US para o ticket de fechamento
  formatUsT1 = ano + '-' + mes + '-' + dia + ' ' + hora
}

formatarData()
var t2 = new Date(formatUsT2)
var t1 = new Date(formatUsT1) // datatime atual

// data final - data inicial
var diffMS = (t1.getTime() - t2.getTime())/(60*1000) // milissegundos para minutos

// return diffMS // Zabbix

console.log(diffMS) // para teste