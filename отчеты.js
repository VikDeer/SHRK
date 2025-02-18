
let nav = document.querySelectorAll('.nav li')
let navBtn = document.querySelector('.nav button')

for (i = 0; i < nav.length; i++) {
   if (localStorage.navShow == '0') {
   nav[i].classList.add('hidden')
   navBtn.textContent = 'Раскрыть'
}
if (localStorage.navShow == '1') {
   nav[i].classList.remove('hidden')
   navBtn.textContent = 'Скрыть'
}
}

let showNav = function() {
   if (localStorage.navShow == '1' || navBtn.textContent == 'Скрыть') {
   for (i = 0; i < nav.length; i++) {
      nav[i].classList.add('hidden')
      navBtn.textContent = 'Раскрыть'
      localStorage.navShow = 0
   }}
   else if (localStorage.navShow == '0' || navBtn.textContent == 'Раскрыть') {
      for (i = 0; i < nav.length; i++) {
      nav[i].classList.remove('hidden')
      navBtn.textContent = 'Скрыть'
      localStorage.navShow = 1
   }
}

}
navBtn.onclick = showNav


let patCollect = document.getElementById('collect');
let patLeader = document.getElementById('leader');
let patPart = document.getElementById('part');
let patOK = document.getElementById('pat-ok')
let patCopy = document.getElementById('pat-copy')
let timeSelect = document.getElementById('time')
let patReport = document.getElementById('pat-report-rez')

if (localStorage.id) {patCollect.value = localStorage.id}

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
      if (month.toString().length == 1) {
         month = `0${month}`
      }
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
      

      patReport.value = `${patData}\n[b]Отчёт о проведении лагерного патруля:[/b]\n${patTime}\n${patCollecting}\n${patLeading}\n${patParty}`

      patReport.style.height = 'auto';
      patReport.style.height = `${patReport.scrollHeight}px`;

      localStorage.id = patCollect.value
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

if (localStorage.id) {whatcherIn.value = localStorage.id}

function makeWhatch() {
   let allCompete
   if (watchStart.value && watchEnd.value && whatcherIn.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      if (month.toString().length == 1) {
         month = `0${month}`
      }
      let watchData = `[b]Дата проведения лагерного дозора:[/b] ${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}`

      let watchHours = `[b]Часы дозора:[/b] ${watchStart.value} - ${watchEnd.value}`

      let watcher = `[b]Дозорный:[/b] [link${whatcherIn.value}] [${whatcherIn.value}]`

      let watchPath = `[b]Маршрут:[/b] ${watchPathIn.value}`

      watchReport.value = `${watchData}\n[b]Отчёт о проведении лагерного дозора:[/b]\n${watchHours}\n${watcher}\n${watchPath}`

      watchReport.style.height = 'auto';
      watchReport.style.height = `${watchReport.scrollHeight}px`;

      localStorage.id = whatcherIn.value
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

if (localStorage.id) {lecerIn.value = localStorage.id}

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
      if (month.toString().length == 1) {
         month = `0${month}`
      }
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

      localStorage.id = lecerIn.value

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

if (localStorage.id) {vpatCollect.value = localStorage.id}

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
      if (month.toString().length == 1) {
         month = `0${month}`
      }
      vpatData = '[b]' + data.getDate() + '.' + month + '.' + data.getFullYear().toString().substr(2,2) + '[/b]';
      
      vpatTime = 'Время сбора: ' + vtimeSelect.value
      
      vpatCollecting = 'Собирающий: [link' + vpatCollect.value + '] [' + vpatCollect.value + ']'
      
      let vpatLeaders = vpatLeader.value.split(' ')
      vpatLeading = 'Ведущий: [link' + vpatLeaders[0] + '] [' + vpatLeaders[0] + ']'
      if (vpatLeaders[1]) {vpatLeading = vpatLeading + ' (А), [link' + vpatLeaders[1] + '] [' + vpatLeaders[1] + '] (Б)'}
      else { vpatLeading += ` (Общий)`}

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

      localStorage.id = vpatCollect.value
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

if (localStorage.id) {gamerIn.value = localStorage.id}

function makeGame() {
   let allCompete
   if (gameStart.value && gameEnd.value && gamerIn.value && gameParty.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      if (month.toString().length == 1) {
         month = `0${month}`
      }
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

      localStorage.id = gamerIn.value

   }      
}

gameOK.onclick = makeGame;

let dStart = document.getElementById('d-start')
let dEnd = document.getElementById('d-end')
let dIn = document.getElementById('der-input')
let dPathIn = document.getElementById('pas-d-path')
let dPathAct = document.getElementById('act-d-path')
let dOK = document.getElementById('d-ok')
let dReport = document.getElementById('d-rep-rez')
let dCopy = document.getElementById('d-copy')
let pasSel = document.getElementById('pas-sel'); let actSel = document.getElementById('act-sel')
let pasD = document.getElementById('pas-path'); let actD = document.getElementById('act-path')

if (localStorage.id) {dIn.value = localStorage.id}

dSelect = function() {
   if (this == 'pas') {
      actD.classList.add("hidden");
      pasD.classList.remove("hidden")
   } else if (this == 'act') {
      actD.classList.remove("hidden");
      pasD.classList.add("hidden")
   }
   dOK.classList.remove("hidden")
}

pasSel.onclick = dSelect.bind(pasSel.value);
actSel.onclick = dSelect.bind(actSel.value)

function makeD() {
   let allCompete
   if (dStart.value && dEnd.value && dIn.value) {
      allCompete = true;
   } else { alert('Заполни всё!')}
   
   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      if (month.toString().length == 1) {
         month = `0${month}`
      }
      let dData = `[b]${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}[/b]`

      let dHours = `Часы дозора: ${dStart.value} - ${dEnd.value}`

      let der = `Дозорный: [link${dIn.value}] [${dIn.value}]`

      let dPath
      if (pasSel.checked) {
         dPath = `Локация: ${dPathIn.value}`
         dReport.value = `[b]Отчёт о пассивном дозоре.[/b]\n${dData}\n${dHours}\n${der}\n${dPath}`
      } else if (actSel.checked) {
         dPath = `Маршрут: ${dPathAct.value.substr(8,1)}`
         dReport.value = `[b]Отчёт об активном дозоре.[/b]\n${dData}\n${dHours}\n${der}\n${dPath}`
      }

      dReport.style.height = 'auto';
      dReport.style.height = `${dReport.scrollHeight}px`;

      localStorage.id = dIn.value
   }
}

dOK.onclick = makeD;

let travCol = document.getElementById('trav-col');
let travParty = document.getElementById('trav-p');
let travOK = document.getElementById('trav-ok')
let travReport = document.getElementById('trav-rep-rez')
let travCopy = document.getElementById('trav-copy')

if (localStorage.id) {travCol.value = localStorage.id}

function makeTrav() {
   let allCompete
   let what = document.querySelector('input[name="trav-w"]:checked')
   if (!travCol.value && !travParty.value && !what) {
      allCompete = false;
      alert('Заполни всё!')
   } else {
      allCompete = true
   }

   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      if (month.toString().length == 1) {
         month = `0${month}`
      }
      let travData = `[b]${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}[/b]`

      let title = `[b]Отчёт о ${what.value}[/b]`

      let collect = `[u]Собирающий:[/u] [link${travCol.value}] [${travCol.value}]`

      let travPartys = travParty.value.split(' ')
      travPart = '[u]Участники:[/u] [link' + travPartys[0] + '] [' + travPartys[0] + ']'
      for (let j = 1; j < travPartys.length; j++) {
         travPart = travPart + ', [link' + travPartys[j] + '] [' + travPartys[j] + ']'
      }

      let report = `${travData}\n${title}\n${collect}\n${travPart}`

      travReport.value = report
      
      travReport.style.height = 'auto';
      travReport.style.height = `${travReport.scrollHeight}px`;

      localStorage.id = travCol.value
   }
}

travOK.onclick = makeTrav

let docCol = document.getElementById("doc-col");
let docPartys = document.getElementById("doc-p")
let docPom = document.getElementById("doc-pom")
let docOK = document.getElementById("doc-ok")
let docReport = document.getElementById("doc-rep-rez")
let docCopy = document.getElementById("doc-copy")

if (localStorage.id) {docCol.value = localStorage.id}

function makeDoc() {
   let allCompete
   if (!docCol.value && !docPartys.value) {
      allCompete = false;
      alert('Заполни всё!')
   } else {
      allCompete = true
   }

   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      if (month.toString().length == 1) {
         month = `0${month}`
      }
      let docData = `[b]${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}[/b]`

      let collect = `[u]Собирающий:[/u] [link${docCol.value}] [${docCol.value}]`

      let part = docPartys.value.split(' ')
      let players = ''
      let first = part[0].split('+')
      players += `[link${first[0]}] [${first[0]}] (+${first[1]} мышей)`
      if (part.length > 0) {
      for (j = 1; j < part.length; j++) {
         let arr = part[j].split('+')
         players = players + `, [link${arr[0]}] [${arr[0]}] (+${arr[1]} мышей)`  
      }
      }
      players = `[u]Участники:[/u] ${players}`

      let pom = '[u]Помощники:[/u]'
      if (docPom.value) {
         let poms = docPom.value.split(' ');
         pom += `[link${poms[0]}] [${poms[0]}]`
         if (poms[1]) {
         for (h = 1; h < poms.length; h++) {
            pom += `, [link${poms[h]}] [${poms[h]}]`
         }
      }
      } else {
         pom = `${pom} -`
      }

      docReport.value = `${docData}\n[b]Отчёт о докторском патруле.[/b]\n${players}\n${collect}\n${pom}`
 
      docReport.style.height = 'auto';
      docReport.style.height = `${docReport.scrollHeight}px`;

      localStorage.id = docCol.value
   }
}

docOK.onclick = makeDoc;

let medalerName = document.getElementById('medal-name');
let medalID = document.getElementById('medal-id');
let medalDol = document.getElementById('medal-d');
let medalGr = document.getElementById('medal-gr')
let medalType = document.getElementById('medal-t')
let medalOK = document.getElementById('m-ok');
let medalReport = document.getElementById('m-rep-rez');
let medalCopy = document.getElementById('m-copy');
let medalScr = document.getElementById('m-scr')

if (localStorage.id) {medalID.value = localStorage.id}
if (localStorage.name) {medalerName.value = localStorage.name}
for (j = 1; j < 10; j++) {
   if (localStorage.dol == medalDol.childNodes[j].value) {medalDol.childNodes[j].selected = true}
}

let mMedals = ['Юный активист', 'Непревзойденный активист', 'Юный непоседа', 'Неповторимый непоседа', 'Юный страж', 'Превосходный страж']
let nMedals = ['Острые когти', 'Умелый боец', 'Покоритель волн', 'Покоривший море', 'Покоритель вершин', 'Покоривший солёные скалы', 'Археолог-любитель', 'Великий кладоискатель', 'Собачий нюх', 'Совершенное чутьё']
let kMedals = ['Правосудие', 'Ветеран передовой', 'Наш дом — наша крепость']
let sfMedals = ['Спокойные берега', 'Блюститель порядка', 'Всегда начеку', 'Спокойствие бесценно', 'Прирождённый охотник', 'Неутомимый добытчик', 'Молодой поварёнок', 'Талантливый кулинар', 'Любимец доктора', 'Опытный травник', 'Проворный зверолов', 'Прошедший тысячи троп', 'Исцеляющий взгляд', 'Заклинатель трав']
let oMedals = ['Путеводный свет', 'Преданный спутник', 'Верный напарник', 'Крепкая лапа', 'Перо знаний', 'Мозгодуй', 'Из уст в уста', 'Сокровенные знания', 'Исследующий морские глубины', 'Пересчитавший все песчинки на морском дне', 'Хитрый вор перьев', 'Прозвавшийся птичьим несчастьем', 'Обнаруживший залежи драгоценностей', 'Хранитель морских сокровищ', 'Слушающий причитания моря', 'Позаботившийся о морском покое', 'Мастер кисти', 'Виртуоз кисти', 'Овладевающий морским искусством', 'Мастер морского боя', 'Боевой товарищ', 'Старший зверь','Ловкий добытчик лакомства','Бесплатный сыр лишь в мышеловке','Сырный любитель','Сырная душа','Ловец горячих новостей','Охотник за сенсациями','Искусство убеждения','Продай мне эту ручку']
let ostMedals = ['Триумф','Коллективные узы','Объединяющий дух','Лапа помощи','Мастер слова','Виртуоз слова','Паучьи сети','Ловкий собиратель','Всегда на связи','Опутанный всемирной паутиной','Верный компаньон','Образцовый проводник','Плечом к плечу','Мы — едины']
let otrMedals = ['Сказитель легенд','Зубастый крепыш','Белопёрый поздравитель','Любимый учитель','Дарящий улыбку','Чистота и порядок','Пернатый крикун','Резвость дельфина']

let medalTypes = ['Для малышей', 'За навыки', 'Каратели', 'Связанные со сферами', 'Связанные с отрядами', 'Остальные медали', 'Отрядные медали']
for (i = 0; i < medalTypes.length; i++) {
   let opt = document.createElement('option');
   opt.textContent = medalTypes[i];
   medalGr.append(opt)
}

let medalButtons = document.querySelectorAll('medal')
let medalGroups = {}
for (i = 0; i < medalTypes.length; i++) {
   medalGroups[medalTypes[i]] = document.getElementById(medalTypes[i])
}
for (i = 0; i < mMedals.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = mMedals[i]
   medalGroups['Для малышей'].lastChild.append(opt)
}
for (i = 0; i < nMedals.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = nMedals[i]
   medalGroups['За навыки'].lastChild.append(opt)
}
for (i = 0; i < kMedals.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = kMedals[i]
   medalGroups['Каратели'].lastChild.append(opt)
}
for (i = 0; i < sfMedals.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = sfMedals[i]
   medalGroups['Связанные со сферами'].lastChild.append(opt)
}
for (i = 0; i < oMedals.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = oMedals[i]
   medalGroups['Связанные с отрядами'].lastChild.append(opt)
}
for (i = 0; i < ostMedals.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = ostMedals[i]
   medalGroups['Остальные медали'].lastChild.append(opt)
}
for (i = 0; i < otrMedals.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = otrMedals[i]
   medalGroups['Отрядные медали'].lastChild.append(opt)
}

medalShow = function(a) {
   for (key in medalGroups) {
      medalGroups[key].classList.add('hidden')
   }
   medalGroups[a].classList.remove('hidden')
}

medalGr.addEventListener('change', () => { medalShow(medalGr.value) })

let makeMedal = function() {
   let allCompete = true;
   if (!medalerName.value && !medalID.value && !medalScr.value) {
      allCompete = false
      alert('Заполни всё!')
   }

   if (allCompete) {
      let scrs = medalScr.value.split(' ')
      let dokva = `[b]Доказательства:[/b] [url=${scrs[0]}]скриншот[/url]`
      for (j = 1; j < scrs.length; j++) {
         dokva += ` [[url=${scrs[j]}]${j+1}[/url]]`
      }

      medalReport.value = `[b]Запрос медали[/b]\nЯ, ${medalerName.value} [${medalID.value}], ${medalDol.value} шайки, выполнил(а) требования на медаль «${medalGroups[medalGr.value].lastChild.value}».\n${dokva}`
      
      medalReport.style.height = 'auto';
      medalReport.style.height = `${medalReport.scrollHeight}px`;

      localStorage.id = medalID.value;
      localStorage.name = medalerName.value;
      localStorage.dol = medalDol.value
   }
}

medalOK.onclick = makeMedal

let navID = document.getElementById('nav-id')
let navParty = document.getElementById('nav-party')
let navScr = document.getElementById('nav-scr')
let navOK = document.getElementById('nav-ok')
let navReport = document.getElementById('nav-rep-rez')
let navCopy = document.getElementById('nav-copy')

if (localStorage.id) {navID.value = localStorage.id}

let makeNav = function() {
   let allCompete = true
   if (!navID.value) {
      allCompete = false
      alert('Заполни всё!')
   }

   if (allCompete) {

      let data = new Date;
      let month = data.getMonth() + 1;
      if (month.toString().length == 1) {
         month = `0${month}`
      }
      let navData = `${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}`


   let scr
   if (navScr.value) {
      scrs = navScr.value.split(' ')
      scr = `[url=${scrs[0]}]скриншот Глубокого Залива до вылазки[/url]\n[url=${scrs[1]}]скриншот Глубокого Залива после вылазки[/url]`
   } else {
      scr = `Скриншоты были отправлены в беседу навигаторов.`
   }

      let party
      if (!navParty.value) {
         party = `[b]Участники:[/b] -`
      } else {
         let navP = navParty.value.split(' ')
         party = `[b]Участники:[/b] [link${navP[0]}] [${navP[0]}]`
         for (i = 1; i < navP.length; i++) {
            party += `, [link${navP[i]}] [${navP[i]}]`
         }
      }

      navReport.value = `[b]Дата проведения: ${navData}[/b]\n[b]Навигатор:[/b] [link${navID.value}] [${navID.value}]\n${party}\n${scr}`
      
      navReport.style.height = 'auto';
      navReport.style.height = `${navReport.scrollHeight}px`;

      localStorage.id = navID.value
   }
}

navOK.onclick = makeNav

let grushID = document.getElementById('grush-id');
let grushStart = document.getElementById('grush-start');
let grushEnd = document.getElementById('grush-end');
let grushRole = document.getElementById('grush-role')
let grushMH = document.getElementById('grush-m-h');
let grushM = document.getElementById('grush-m')
let grushOK = document.getElementById('grush-ok')
let grushReport = document.getElementById('grush-rep-rez')
let grushCopy = document.getElementById('grush-copy');

if (localStorage.id) {grushID.value = localStorage.id}

let grushShow = function(a) {
   if (a == 'МГ') {
      grushMH.classList.remove('hidden')
   } else {
      grushMH.classList.add('hidden')
   }
}

grushRole.addEventListener('change', () => { grushShow(grushRole.value) })

let makeGrush = function() {
   let allCompete = true;
   if (!grushID.value && !grushStart.value && !grushEnd.value) {
      allCompete = false
      alert('Заполни всё!')
   }

   if (allCompete) {
      let data = new Date;
      let month = data.getMonth() + 1;
      if (month.toString().length == 1) {
         month = `0${month}`
      }
      let grushData = `${data.getDate()}.${month}.${data.getFullYear().toString().substr(2,2)}`

      let start = grushStart.value.split(':'); let end = grushEnd.value.split(':')
      let startInMinutes = start[0] * 60 + start[1] * 1;
      let endInMinutes = end[0] * 60 + end[1] * 1;

      let differenceInMinutes = endInMinutes - startInMinutes;

// Переводим разницу в часы и минуты
let hours = Math.floor(differenceInMinutes / 60);
let min = differenceInMinutes % 60;

      let time
      if (hours == 1) {
         time = `(${hours} час`
      } else if (hours == 0) {
         time = `(`
      } else if (hours < 5) {
         time = `(${hours} часа`
      } else {
         time = `(${hours} часов`
      }
      if (min == 0) {
         time += `)`
      } else if (min == 1 && !hours == 0) {
         time += ` ${min} минута)`
      } else if (min < 5 && min > 0 && !hours == 0) {
         time += ` ${min} минуты)`
      } else if (!hours == 0) {
         time += ` ${min} минут)`
      
   } else if (min == 1 && hours == 0) {
      time += `${min} минута)`
   } else if (min < 5 && min > 0 && hours == 0) {
      time += `${min} минуты)`
   } else if (hours == 0) {
      time += `${min} минут)`
   }
   
   grushReport.value = `[b]Грушевание[/b]\n${grushData}; ${grushStart.value} - ${grushEnd.value} ${time}\n[b]${grushRole.value}:[/b] [link${grushID.value}] [${grushID.value}]`

   if (grushRole.value == 'МГ') {
      grushReport.value += ` ${grushM.value}`
   }

   grushReport.style.height = 'auto';
   grushReport.style.height = `${grushReport.scrollHeight}px`;

   localStorage.id = grushID.value
   }
}


grushOK.onclick = makeGrush

let troferName = document.getElementById('trof-name');
let trofID = document.getElementById('trof-id');
let trofDol = document.getElementById('trof-d');
let trofGr = document.getElementById('trof-gr')
let trofType = document.getElementById('trof-t')
let trofOK = document.getElementById('trof-ok');
let trofReport = document.getElementById('trof-rep-rez');
let trofCopy = document.getElementById('trof-copy');
let trofScr = document.getElementById('trof-scr')

if (localStorage.id) {trofID.value = localStorage.id}
if (localStorage.name) {troferName.value = localStorage.name}
for (j = 1; j < 10; j++) {
   if (localStorage.dol == trofDol.childNodes[j].value) {trofDol.childNodes[j].selected = true}
}

let otrofs = ['Треклятый дублон', 'Кинжал триумфа', 'Медный компас', 'Верный путь', 'Записки краболова', 'Жаба', 'Мешок с золотом','Созвездие морского конька','Созвездие акулы','Созвездие дельфина','Созвездие косатки','Созвездие осьминога','Созвездие мурены','Созвездие ската','Созвездие черепахи','Созвездие крылатки','Созвездие медузы','Созвездие летучей рыбы','Созвездие марлина','Созвездие нарвала','Созвездие кита']
let otrtrofs = ['Задорный компаньон','Безупречность осьминога','Китовая забота','Неугомонность чайки','Акулья свирепость','Рыбья задорность','Черепашья мудрость','Прирождëнный творец','Коралловый хохотун','Рубиновый глаз','Красноречивый рассказчик','Задорность малька','Путеводная звезда']
let dtrofs = ['Пистоль','Абордажный палаш','Монета мертвецов']

let trofTypes = ['Общекомандные трофеи', 'Отрядные трофеи', 'Должностные трофеи']
for (i = 0; i < trofTypes.length; i++) {
   let opt = document.createElement('option');
   opt.textContent = trofTypes[i];
   trofGr.append(opt)
}

let trofButtons = document.querySelectorAll('trof')
let trofGroups = {}
for (i = 0; i < trofTypes.length; i++) {
   trofGroups[trofTypes[i]] = document.getElementById(trofTypes[i])
}
for (i = 0; i < otrofs.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = otrofs[i]
   trofGroups['Общекомандные трофеи'].lastChild.append(opt)
}
for (i = 0; i < otrtrofs.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = otrtrofs[i]
   trofGroups['Отрядные трофеи'].lastChild.append(opt)
}
for (i = 0; i < dtrofs.length; i++) {
   let opt = document.createElement('option')
   opt.textContent = dtrofs[i]
   trofGroups['Должностные трофеи'].lastChild.append(opt)
}

trofShow = function(a) {
   for (key in trofGroups) {
      trofGroups[key].classList.add('hidden')
   }
   trofGroups[a].classList.remove('hidden')
}

trofGr.addEventListener('change', () => { trofShow(trofGr.value) })

let maketrof = function() {
   let allCompete = true;
   if (!troferName.value && !trofID.value && !trofScr.value) {
      allCompete = false
      alert('Заполни всё!')
   }

   if (allCompete) {
      let scrs = trofScr.value.split(' ')
      let dokva = `[b]Доказательства:[/b] [url=${scrs[0]}]скриншот[/url]`
      for (j = 1; j < scrs.length; j++) {
         dokva += ` [[url=${scrs[j]}]${j+1}[/url]]`
      }

      trofReport.value = `[b]Запрос трофея[/b]\nЯ, ${troferName.value} [${trofID.value}], ${trofDol.value} шайки, выполнил(а) требования на трофей «${trofGroups[trofGr.value].lastChild.value}».\n${dokva}`
      
      trofReport.style.height = 'auto';
      trofReport.style.height = `${trofReport.scrollHeight}px`;
      
      localStorage.id = trofID.value;
      localStorage.name = troferName.value;
      localStorage.dol = trofDol.value
   }
}

trofOK.onclick = maketrof

let copyReport = function() {
   this.select();
   document.execCommand("copy")
}

patCopy.onclick = copyReport.bind(patReport)
watchCopy.onclick = copyReport.bind(watchReport)
lecCopy.onclick = copyReport.bind(lecReport)
vpatCopy.onclick = copyReport.bind(vpatReport)
gameCopy.onclick = copyReport.bind(gameReport)
dCopy.onclick = copyReport.bind(dReport)
travCopy.onclick = copyReport.bind(travReport)
docCopy.onclick = copyReport.bind(docReport)
medalCopy.onclick = copyReport.bind(medalReport)
navCopy.onclick = copyReport.bind(navReport)
grushCopy.onclick = copyReport.bind(grushReport)
