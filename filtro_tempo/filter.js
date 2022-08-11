let value = '{"data":{"tickets":[{"id":"numeroDeID","ticket":"numeroDeTicket","status":"st","service_name":"Nome do serviço","service_asset":"asst","open_date":"11/08/2022 07:24:46","resolve_date":null,"prev_retorno":"11/08/2022 23:24:46"}]},"mensagem":"OK"}'

// algumas informações desse ticket foi ocultado por segurança. As informações necessário são somente as datas

const json = JSON.parse(value)
const ticket = json.data.tickets

open_date = ticket[0].open_date

// separado para montar a data no formato US
dia = open_date.toString().substring(0,2)
mes = open_date.toString().substring(3,5)
ano = open_date.toString().substring(6,10)
hora = open_date.toString().substring(open_date.length - 8)

// aqui junta no formato US
formatUs = ano + '-' + mes + '-' + dia + ' ' + hora

const t2 = new Date(formatUs)


// condicional para filtrar resolve_date ou prev_retorno
if (!ticket[0].resolve_date){
  close_date = ticket[0].prev_retorno
} else {
  close_date = ticket[0].resolve_date
}

// separado para montar a data no formato US
dia = close_date.toString().substring(0,2)
mes = close_date.toString().substring(3,5)
ano = close_date.toString().substring(6,10)
hora = close_date.toString().substring(close_date.length - 8)

// aqui junta no formato US
formatUs = ano + '-' + mes + '-' + dia + ' ' + hora

// results
const t1 = new Date(formatUs) // datatime atual

const diffMS = (t1.getTime() - t2.getTime())/(60*1000) // milissegundos para minutos

// return diffMS //zabbix

console.log(diffMS)