const { DateTime } = require('luxon')

const MONTHS = {
  tam: 'jan',
  hel: 'feb',
  maa: 'mar',
  huh: 'apr',
  tou: 'may',
  kes: 'jun',
  hei: 'jul',
  elo: 'aug',
  syy: 'sep',
  lok: 'oct',
  mar: 'nov',
  jou: 'dec'
}

const parseToriDatetime = (str) => {
  const today = DateTime.local()
  const yesterday = today.minus({ days: 1 })
  const todayStr = today.toFormat('dd MMM')
  const yesterdayStr = yesterday.toFormat('dd MMM')

  str = str
    .replace('tänään', todayStr)
    .replace('eilen', yesterdayStr)

  str = Object.entries(MONTHS).reduce(
    (accStr, [fi, en]) => accStr.replace(fi, en),
    str
  )

  return DateTime
    .fromFormat(str, 'dd MMM HH:mm')
    .toJSDate()
}


module.exports = parseToriDatetime
