let patCollect = document.getElementById('collect');
let patLeader = document.getElementById('leader');
let patPart = document.getElementById('part');
let patOK = document.getElementById('pat-ok')
let patCopy = document.getElementById('pat-copy')
let timeSelect = document.getElementById('time')
let patReport = document.getElementById('pat-report-rez')

let timeOptions = ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
let timeOption = []
let timeText = document.getElementById('another-time')
for (let i = 0; i < timeOptions.length; i++) {
   timeOption[i] = document.createElement('option')
   timeOption[i].textContent = timeOptions[i]
   timeOption[i].value = timeOptions[i]
   timeSelect.append(timeOption[i])
}

function makePat() {
   let allCompete
   if (patPart.value && patCollect.value && patLeader.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      patLeading = ''; patParty = ''
      let data = new Date;
      let month = data.getMonth() + 1
      patData = '[b]Дата проведения лагерного патруля:[/b] ' + data.getDate() + '.' + month + '.' + data.getFullYear().toString().substr(2,2);
      
      if (timeText.value) { patTime = '[b]Время сбора:[/b] ' + timeText.value }
      else { patTime = '[b]Время сбора:[/b] ' + timeSelect.value }
      
      patCollecting = '[b]Собирающий:[/b] [link' + patCollect.value + '] [' + patCollect.value + ']'
      
      let patLeaders = patLeader.value.split(' ')
      patLeading = '[b]Ведущий(ие):[/b] [link' + patLeaders[0] + '] [' + patLeaders[0] + ']'
      if (patLeaders[1]) {patLeading = patLeading + ', [link' + patLeaders[1] + '] [' + patLeaders[1] + ']'}

      let patPartys = patPart.value.split(' ')
      patParty = '[b]Участники:[/b] [link' + patPartys[0] + '] [' + patPartys[0] + ']'
      for (let j = 1; j < patPartys.length; j++) {
         patParty = patParty + ', [link' + patPartys[j] + '] [' + patPartys[j] + ']'
      }
      
      let patIntruder = '[b]Нарушители:[/b] -'

      patReport.value = `${patData}\n[b]Отчёт о проведении лагерного патруля:[/b]\n${patTime}\n${patCollecting}\n${patLeading}\n${patParty}\n${patIntruder}`

      patReport.style.height = 'auto';
      patReport.style.height = `${patReport.scrollHeight}px`;
   }
}

patOK.onclick = makePat;

let watchStart = document.getElementById('watch-start')
let watchEnd = document.getElementById('watch-end')
let whatcherIn = document.getElementById('watcher-input')
let watchPathIn = document.getElementById('watch-path')
let watchOK = document.getElementById('watch-ok')
let watchReport = document.getElementById('watch-rep-rez')
let watchCopy = document.getElementById('watch-copy')

function makeWhatch() {
   let allCompete
   if (watchStart.value && watchEnd.value && whatcherIn.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      let watchData = `[b]Дата проведения лагерного дозора:[/b] ${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}`

      let watchHours = `[b]Часы дозора:[/b] ${watchStart.value} - ${watchEnd.value}`

      let watcher = `[b]Дозорный:[/b] [link${whatcherIn.value}] [${whatcherIn.value}]`

      let watchPath = `[b]Маршрут:[/b] ${watchPathIn.value}`

      watchReport.value = `${watchData}\n[b]Отчёт о проведении лагерного дозора:[/b]\n${watchHours}\n${watcher}\n${watchPath}\n[b]Нарушители:[/b] -`

      watchReport.style.height = 'auto';
      watchReport.style.height = `${watchReport.scrollHeight}px`;
   }
}

watchOK.onclick = makeWhatch;

let lecStart = document.getElementById('lec-time')
let lecerIn = document.getElementById('lec-id')
let lecType = document.getElementById('lec-type')
let lecParty = document.getElementById('lec-party')
let lecOK = document.getElementById('lec-ok')
let lecReport = document.getElementById('lec-rep-rez')
let lecCopy = document.getElementById('lec-copy')

function makeLec() {
   let allCompete
   if (lecStart.value && lecerIn.value && lecType.value && lecParty.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      let lecData = `[b]${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)} | ${lecStart.value}[/b]`

      let lector = `[b]Ведущий:[/b] [link${lecerIn.value}] [${lecerIn.value}]`

      let theme = `[b]Тема лекции:[/b] ${lecType.value}`

      let party = lecParty.value.split(' ')
      let players = ''
      for (j = 0; j < party.length; j++) {
         let arr = party[j].split('+')
         players = players + `[link${arr[0]}] [${arr[0]}] (+${arr[1]} монет) `
      }
      players = `[b]Участники:[/b] ${players}`

      lecReport.value = `${lecData}\n[b]Отчёт о проведённой лекции:[/b]\n${lector}\n${theme}\n${players}`

      lecReport.style.height = 'auto';
      lecReport.style.height = `${lecReport.scrollHeight}px`;
   }
}

lecOK.onclick = makeLec

let copyReport = function() {
   this.select();
   document.execCommand("copy")
}

patCopy.onclick = copyReport.bind(patReport)
watchCopy.onclick = copyReport.bind(watchReport)
lecCopy.onclick = copyReport.bind(lecReport)
