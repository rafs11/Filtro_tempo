//ticket de exemplo
const tickets = {
  id: 'código de id',
  ticket: 'código do ticket',
  status: 'status',
  service_name: 'nome do serviço',
  serice_asset: 'ativo de serviço', //até o momento essas informações são restritas e não importam para o desenvolvimento desse código
  open_date: '28/07/2022 11:00:36',
  resolve_date: null,
  prev_retorno: '29/07/2022 03:00:36'
}

// valor de abertura do date
open_date = tickets.open_date

// colocando no formato US
day = open_date.toString().substring(0, 2)
month = open_date.toString().substring(3, 5)
year = open_date.toString().substring(6, 10)
hour = open_date.toString().substring(11, 19)

formatUs = year + '/' + month + '/' + day + ' ' + hour

var t2 = new Date(formatUs)

// valor de fechamento do date

if (
  typeof tickets.resolve_date === 'undefined' ||
  tickets.resolve_date === null
) {
  close_date = tickets.prev_retorno
} else {
  close_date = tickets.resolve_date
}

// colocando no formato US
day = close_date.toString().substring(0, 2)
month = close_date.toString().substring(3, 5)
year = close_date.toString().substring(6, 10)
hour = close_date.toString().substring(11, 19)

formatUs = year + '/' + month + '/' + day + ' ' + hour

var t1 = new Date(formatUs)

// resultado do time

let diffMS = (t1.getTime() - t2.getTime()) / 60000

// return diffMS // zabbix

console.log(diffMS + 'min') // teste de funcionamento
