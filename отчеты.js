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
   if ( patCollect.value && patLeader.value) {
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

      if (patPart.value) {
      let patPartys = patPart.value.split(' ')
      patParty = '[b]Участники:[/b] [link' + patPartys[0] + '] [' + patPartys[0] + ']'
      for (let j = 1; j < patPartys.length; j++) {
         patParty = patParty + ', [link' + patPartys[j] + '] [' + patPartys[j] + ']'
      }
   } else {patParty = '[b]Участники:[/b] -'}
      
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
let lecParty = document.getElementById('lec-party')
let lecOK = document.getElementById('lec-ok')
let lecReport = document.getElementById('lec-rep-rez')
let lecCopy = document.getElementById('lec-copy')
let typeLec = document.getElementById('lec-sel'); let typeSt = document.getElementById('st-sel')
let nameLec = document.getElementById('lec-name'); let nameSt = document.getElementById('st-name')

let lecNames = ['Основы охоты', "Правила и кодекс", "Чрезвычайные ситуации", "Посвящения и тесты", "Боережим", "Жизнь малышей", "Территория", "Иерархия", "Техподдержка и АМС", "Ныряние и лазанье"]
let lections = []
for (let i = 0; i < lecNames.length; i++) {
   lections[i] = document.createElement('option')
   lections[i].value = lecNames[i]
   lections[i].textContent = lecNames[i]
   nameLec.append(lections[i])
}

function makeLec() {
   let allCompete
   if (lecStart.value && lecerIn.value && lecParty.value) {
      if (typeLec.checked || (typeSt.checked && nameSt.value)) {
      allCompete = true;
      }
   }
   
   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      let lecData = `[b]${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)} | ${lecStart.value}[/b]`

      let lector = `[b]Ведущий:[/b] [link${lecerIn.value}] [${lecerIn.value}]`

      let theme
      if (typeLec.checked) {
         theme = `[b]Тема лекции:[/b] ${nameLec.value}`
      } else if (typeSt.checked) {
         theme = `[b]Тема сказки:[/b] ${nameSt.value}`
      }

      let party = lecParty.value.split(' ')
      let players = ''
      if (typeLec.checked) {
      for (j = 0; j < party.length; j++) {
         let arr = party[j].split('+')
         players = players + `[link${arr[0]}] [${arr[0]}] (+${arr[1]} монет) `
      }
      } else if (typeSt.checked) {
         for (j = 0; j < party.length; j++) {
            players = players + `[link${party[j]}] [${party[j]}] (+20 монет) `
         }
      }
      players = `[b]Участники:[/b] ${players}`

      if (typeLec.checked) {
      lecReport.value = `${lecData}\n[b]Отчёт о проведённой лекции:[/b]\n${lector}\n${theme}\n${players}`
      } else if (typeSt.checked) {
         lecReport.value = `${lecData}\n[b]Отчёт о рассказанных сказках:[/b]\n${lector}\n${theme}\n${players}`
      }

      lecReport.style.height = 'auto';
      lecReport.style.height = `${lecReport.scrollHeight}px`;
   } else { alert('Заполни всё!') }
}

let hidLec = document.querySelectorAll('.hidden.lec')

function displayLec() {
   for (j = 0; j < hidLec.length; j++) {
      hidLec[j].classList.remove('hidden')
   }
   if (this == 'сказка') {
      nameSt.classList.remove('hidden')
      nameLec.classList.add('hidden')
      lecParty.placeholder = "1568535 1629378"
   } else if (this == 'лекция') {
      nameLec.classList.remove('hidden')
      nameSt.classList.add('hidden')
      lecParty.placeholder = "1568535+10 1629378+20"
   }
}

typeLec.onclick = displayLec.bind(typeLec.value)
typeSt.onclick = displayLec.bind(typeSt.value)

lecOK.onclick = makeLec

let vpatCollect = document.getElementById('v-collect');
let vpatLeader = document.getElementById('v-leader');
let vpatPart = document.getElementById('v-part');
let vpatOK = document.getElementById('v-pat-ok')
let vpatCopy = document.getElementById('v-pat-copy')
let vtimeSelect = document.getElementById('v-time')
let vpatReport = document.getElementById('v-pat-report-rez')

let vtimeOptions = ['1:00', '3:30', '5:00', '7:00', '9:00', '11:00', '13:00', '15:00', '19:00', '21:00', '23:00'];
let vtimeOption = []
let vtimeText = document.getElementById('v-another-time')
for (let i = 0; i < vtimeOptions.length; i++) {
   vtimeOption[i] = document.createElement('option')
   vtimeOption[i].textContent = vtimeOptions[i]
   vtimeOption[i].value = vtimeOptions[i]
   vtimeSelect.append(vtimeOption[i])
}

function vmakePat() {
   let allCompete
   if ( vpatCollect.value && vpatLeader.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      vpatLeading = ''; vpatParty = ''
      let data = new Date;
      let month = data.getMonth() + 1
      vpatData = '[b]' + data.getDate() + '.' + month + '.' + data.getFullYear().toString().substr(2,2) + '[/b]';
      
      vpatTime = 'Время сбора: ' + vtimeSelect.value
      
      vpatCollecting = 'Собирающий: [link' + vpatCollect.value + '] [' + vpatCollect.value + ']'
      
      let vpatLeaders = vpatLeader.value.split(' ')
      vpatLeading = 'Ведущий: [link' + vpatLeaders[0] + '] [' + vpatLeaders[0] + ']'
      if (vpatLeaders[1]) {vpatLeading = vpatLeading + ', [link' + vpatLeaders[1] + '] [' + vpatLeaders[1] + ']'}

      if (vpatPart.value) {
      let vpatPartys = vpatPart.value.split(' ')
      vpatParty = 'Участники: [link' + vpatPartys[0] + '] [' + vpatPartys[0] + ']'
      for (let j = 1; j < vpatPartys.length; j++) {
         vpatParty = vpatParty + ', [link' + vpatPartys[j] + '] [' + vpatPartys[j] + ']'
      }
   } else {vpatParty = 'Участники: -'}
      
      vpatReport.value = `[b]Отчёт о пограничном патруле.[/b]\n${vpatData}\n${vpatTime}\n${vpatCollecting}\n${vpatLeading}\n${vpatParty}`

      vpatReport.style.height = 'auto';
      vpatReport.style.height = `${vpatReport.scrollHeight}px`;
   }
}

vpatOK.onclick = vmakePat;

let gameStart = document.getElementById('g-start')
let gameEnd = document.getElementById('g-end')
let gamerIn = document.getElementById('g-id')
let gameParty = document.getElementById('g-party')
let gameOK = document.getElementById('g-ok')
let gameReport = document.getElementById('g-rep-rez')
let gameCopy = document.getElementById('g-copy')

function makeGame() {
   let allCompete
   if (gameStart.value && gameEnd.value && gamerIn.value && gameParty.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      let gameData = `[b]Дата проведения игр:[/b] ${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}`

      let start = `[b]Время начала:[/b] ${gameStart.value}`
      let end = `[b]Время окончания:[/b] ${gameEnd.value}`

      let gamer = `[b]Ведущий:[/b] [link${gamerIn.value}] [${gamerIn.value}]`

      let party = gameParty.value.split(' ')
      let players = ''
      for (j = 0; j < party.length; j++) {
         let arr = party[j].split('+')
         players = players + `[link${arr[0]}] [${arr[0]}] (+${arr[1]} монет) `
      }
      players = `[b]Участники:[/b] ${players}`

      gameReport.value = `${gameData}\n[b]Отчёт о проведении игр:[/b]\n${start}\n${end}\n${gamer}\n${players}`

      gameReport.style.height = 'auto';
      gameReport.style.height = `${gameReport.scrollHeight}px`;

   }      
}

gameOK.onclick = makeGame;

let copyReport = function() {
   this.select();
   document.execCommand("copy")
}

patCopy.onclick = copyReport.bind(patReport)
watchCopy.onclick = copyReport.bind(watchReport)
lecCopy.onclick = copyReport.bind(lecReport)
vpatCopy.onclick = copyReport.bind(vpatReport)
gameCopy.onclick = copyReport.bind(gameReport)