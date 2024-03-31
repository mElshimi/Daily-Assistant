"use strict";

// show time now
setInterval(date, 1000);
function date() {
  // create a new Date object
  const date = new Date();
  // update the clock innerHTML with the current time
  document.querySelector(".clock").innerHTML = date.toLocaleTimeString();
  // update the date innerHTML with the current date
  document.querySelector(".date").innerHTML = date.toDateString();
}

// my quotes array
let ranQuotesArr = [
  `Do every job you’re in like you’re going to do it for the rest of your life, and demonstrate that ownership of it.`,
  `هناك جبال يجب عليك عبورها، وإلا فلن يمضي المسار أكثر من ذلك.`,
  `Have those uncomfortable moments. Because my strong personal belief is it is those moments that cause you to grow the most yourself, but that also differentiate you the most in your career.`,
  `لا يهم إلى أي مدى تمضي بطيئًا. ما زلت تحضن أي شخص لا يفعل أي شيء`,
  `الحياة هي 10٪ ما يحدث لي و 90٪ من كيفية تفاعلي معها.`,
  `بعد عشرين عاما من الآن ، ستشعر بخيبة أمل أكبر من الأشياء التي لم تفعلها أكثر من تلك التي فعلتها. لذا ، تخلص من خطوط القوس ، وأبحر بعيدا عن الميناء الآمن ، والتقط الرياح التجارية في أشرعتك. استكشف ، احلم ، اكتشف.`,
  `النجاح ليس نهائيا. الفشل ليس قاتلا: الشجاعة للاستمرار هي التي تهم`,
  `كل ما نحتاجه في مثل هذه المواقف هو تذكير بقوة إمكاناتنا. لحسن الحظ ، تم الحفاظ على بعض أفضل معارف البشرية من قبل أفضل العقول في التاريخ ، ويجب على الجميع قراءتها مرة واحدة على الأقل في حياتهم. تم وضع هذه الخبرة في مدونة ستساعدك على التعافي من الفشل وتوفر لك الدافع لمواصلة المحاولة.`,
  `تذكرني ندوبي بأنني نجوت بالفعل من أعمق جروحي. وهذا في حد ذاته إنجاز. وهم يعيدون إلى الأذهان شيئا آخر أيضا. يذكرونني بأن الضرر الذي ألحقته بي الحياة قد جعلني ، في العديد من الأماكن ، أقوى وأكثر مرونة. ما آلمني في الماضي جعلني في الواقع أفضل استعدادا لمواجهة الحاضر. `,
  `القائد الحقيقي لديه الثقة في الوقوف بمفرده ، والشجاعة لاتخاذ قرارات صعبة ، والتعاطف للاستماع إلى احتياجات الآخرين. إنه لا يشرع في أن يكون قائدا ولكنه يصبح قائدا من خلال المساواة في أفعاله ونزاهة نيته. `,
  `ما تحتاجه هو فهم واضح للواقع وثقة كاملة في قدرتك على التأثير عليه من خلال جهودك الخاصة. هذه هي الطريقة التي يتم بها تطوير المرونة والتفاؤل.`,
  `ويتيح الاستنتاج القائل بأن القدرة على الصمود تتم من عمليات عادية وليست عمليات استثنائية نظرة أكثر إيجابية بشأن التنمية البشرية والتكيف، فضلا عن توجيه السياسات والممارسات الرامية إلى تعزيز نماء الأطفال المعرضين لخطر المشاكل وعلم النفس المرضي`,
  `وقد تكون البيئات الأسرية التي تتسم بالاستقرار والتماسك والتنظيم والحفاظ على الروتين والطقوس هي الأكثر ملاءمة للقدرة على الصمود بين المراهقين`,
  `إغماض العينين لن يغير في شيء. لا شيء سيختفي لمجرد أنك لا تريد أن تراه. بل، ستجد أن الأمر ازداد سوءاً في المرة التالية التي تنظر فيها. هذا هو العالم الذي نحيا فيه. أبق عينيك مفتوحتين على وسعهما. الجبان فقط هو من يغمض عينيه. إغماض عينيك وسد أذنيك لن يوقف الزمن” هاروكي موراكامي`,
  `Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.`,
  `The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So, write and draw and build and play and dance and live only as you can.`,
  `One thing I have learned is that I am not the owner of my talent, I am the manager of it.`,
  `I used to get upset by people not understanding me, but I’ve made a career out of it now.`,
  `There is no must in art because art is free.`,
  `Every champion was once a contender that refused to give up.`,
  `You are never really playing an opponent. You are playing yourself, your own highest standards, and when you reach your limits, that is real joy.`,
  `إذا أعطتك الحياة الليمون، فعليك صنع عصير الليمون، وحاول العثور على شخص تمنحه عصير الليمون وتقيم معه حفلة`,
  `الحياة هي كل الذكريات باستثناء اللحظة الحالية التي تمر بسرعة بحيث يصعب عليك أن تدركها`,
  `إن الدنيا بحر عميق وقد غرق فيه أناس كثير فلتكن سفينتك تقوى الله`,
  `لا تحسبنّ المجد تمراً أنت آكله لن تبلغ المجد حتى تلعق الصبرا`,
  `الحياة ليست بحثاً عن الذات، ولكنها رحلة لصنع الذات، فكوّن من نفسك شيئاً يَصعب تقليده`,
  `أنـتَ تكـره حياتك…وغَـيـركَ يَـحـلـم بـأن يـمـلك مِـثـلـهـا…فدائمـاً قل الحمدُ لله. ليس من الضروري أن يكون كلامي مقبولاً، من الضروري أن يكون صادقاً. أحد أفضل الطرق لجلب السعادة لنفسك، هي إسعاد الآخرين من حولك وأحد أفضل الطرق لإسعاد الآخرين من حولك، هي أن تكون أنت سعيداً`,
  `كلما ارتفع الإنسان، تكاثفت حوله الغيوم والمحن. لا تستخدم عَقلك كثيراً مع بعض الناس…فَهناك ناس لا تستحق حتى التفكير`,
  `إذا كنت تثق في نفسك حقًا، فلا تزعج الآخرين بالسؤال اليومي “هل تعتقدون أنني قادر على النجاح؟`,
  `Perhaps the single most important element in mastering the techniques and tactics of racing is experience. But once you have the fundamentals, acquiring the experience is a matter of time.`,
  `Sometimes you do the hard work and set the table and somebody else eats the meal`,
  `من أفني شبابه لاهيا قضى مشيبه باكياَ`,
  `علينا أن نحافظ على صلاتنا لأن المحافظة عليها من أفضل القربات إلى الله -سبحانه وتعالى- ومن أحبّ الأعمال إليه.`,
  `اقم صلاتك فالصلاة اكبر معين على تحصيل مصالح الدنيا والاخرة ودفع مفاسد الدنيا والاخرة.`,
  `علام الأسف والحزن ؟ إن هذا العالم الجديد لا يستحق أسفاً ولا حزناً`,
  `لا تدخل أصحاب المصالح الأنانية في عملك لأنهم يفسدونه.`,
  `لا تمش في طريق من طرق الحياة إلا ومعك سوط عزيمتك وإرادتك لتلهب به كل عقبة تعترض طريقك.`,
  `The day I stop giving is the day I stop receiving. The day I stop learning is the day I stop growing. You miss 100% of the shots you don’t take.`,
  `The more difficult the victory, the greater the happiness in winning.`,
  `What do you do with a mistake: recognize it, admit it, learn from it, forget it.`,
  `الشجاعة أهم الصفات الإنسانية لأنها الصفة التي تضمن باقي الصفات.`,
  `النفس معجونة بالكبر والحرص والحسد، فمن أراد الله تعالى هلاكه منع منه التواضع والنصيحة والقناعة.`,
  `الأمور التي تعرفها تعادل في حجمها حفنة الرمل التي في يدك، أمّا الأمور التي لا تعرفها تعادل في حجمها حجم الكون.`,
  `Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.`,
  `If your actions inspire others to dream more, learn more, do more, and become more, then you are a leader.`,
  `السؤال الحقيقي ليس ما إذا كان هناك حياة اخرى بعد الموت.. السؤال الحقيقي هو هل كنت على قيد الحياة قبل الموت.`,
  `You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.`,
  `أن تجربتي في الحرب والحياة والعلم، قادتني للاعتقاد بامتلاكنا لحياة واحدة فقط على هذا الكوكب.. لدينا فرصة واحدة لنعيشها ولنساهم في مستقبل مجتمعنا وفي مستقبل الحياة.. الحياة ما بعد الموت هي فقط في ما سيتذكره الناس عنك.`,
  `Shame corrodes the very part of us that believes we are capable of change.`,
  `برفقة العدالة تجتاز العالم، وبرفقة الظلم لا تعبر عتبة بيتك.`,
];

// variables for selecting DOM elements
const taskInp = document.querySelector(".input-f-task");
const taskAdd = document.querySelector(".btn-add-task");
const quoteInp = document.querySelector(".input-f-quote");
const quoteAdd = document.querySelector(".btn-add-quote");
const btnMissedTasks = document.querySelector(".missed-tasks");
const btnMissedTasksClose = document.querySelector(".btn-missed-tasks-close");
const btnAddAllMissedTasks = document.querySelector(".add-all-tasks");
const btnDeleteAllMissedTasks = document.querySelector(".delete-all-tasks");
const btnManageQuotes = document.querySelector(".manage-quotes");
const btnQuotesClose = document.querySelector(".btn-quotes-close");
const btnDeleteAllQuotes = document.querySelector(".delete-all-quotes");
const missedTasksBody = document.querySelector(".missed-body");
const managePage = document.querySelector("#manage");
const missedTaskModel = document.querySelector(".missed-tasks-model");
const quote = document.querySelector(".quote");
const missedBodyMisTasks = document.querySelector(".missed-body");
const quotesModel = document.querySelector(".quotes-model");
const toDoList = document.querySelector(".to-do-list");
const quoteBody = document.querySelector(".quotes-body");

// arrays for storing tasks and quotes
let tasksArr = [];
let tasksMissedArr = [];
let quotesArr = [];
let todayQuote = "";
let day = 0;
let curMisTask = 0;
let currentIndexTask = 0;

// check if local storage is have quotes array  or not to load it is found
if (localStorage.getItem("quotes")) {
  quotesArr = JSON.parse(localStorage.getItem("quotes"));
  displayManageQuotes();
  if (localStorage.getItem("todayQuote") == "undefined") {
    getTodayQuote();
    displayQuote();
  }
} else {
  quoteBody.innerHTML = `<h2>You don't have any Quotes yet!</h2>`;
}

// check if local storage is have missed tasks array  or not to load it is found
if (localStorage.getItem("missedTasks")) {
  tasksMissedArr = JSON.parse(localStorage.getItem("missedTasks"));
  displayMissedTasks();
} else {
  missedBodyMisTasks.innerHTML = `<h2>No missing tasks found</h2>`;
}

// check if local storage is have today quote  or not to load it is found
if (localStorage.getItem("todayQuote")) {
  todayQuote = localStorage.getItem("todayQuote");
  displayQuote();
}

// check if local storage is have tasks  or not to load it is found
if (localStorage.getItem("tasks")) {
  // if there is a task data parse it and add the tasks to our array
  tasksArr = JSON.parse(localStorage.getItem("tasks"));
  displayTask();
} else {
  toDoList.innerHTML = `<h2>no task for today</h2>`;
}

// check if local storage is have day or not to load it is found
if (localStorage.getItem("newDay")) {
  day = Number(localStorage.getItem("newDay"));
}

// function to start app
function start() {
  // get new date
  const date = new Date();
  // save date as string to get day  of month in number format
  let dayStr = date.toDateString();
  // get day as number format
  let currentDay = Number(dayStr.slice(8, 10));
  // if there is no day saved in local storage
  localStorage.setItem("newDay", currentDay);
  // currentDa~y = 1;
  // check  if  the  user's day is match with save or not
  if (currentDay !== day) {
    location.reload();
    //  reset all arrays for new day
    getMissedTasks();
    localStorage.removeItem("tasks");
    localStorage.removeItem("todayQuote");
    getTodayQuote();
  }
}
console.log(day);

// invoke  start function when page loaded
start();

// event  for button click on task btn
taskAdd.addEventListener("click", addTask);
function addTask() {
  if (taskAdd.value == "add task") {
    newTask();
  } else {
    updateTask();
  }
}

// event for check is input value is valid
taskInp.addEventListener("keyup", validTask);
function validTask() {
  let taskRegex = /^[\w ,.]{3,15}$/;
  if (!taskRegex.test(taskInp.value)) {
    taskAdd.disabled = "true";
    return false;
  } else {
    taskAdd.removeAttribute("disabled");
    return true;
  }
}

// function to  create a new task and push it into tasks array
function newTask() {
  if (!validTask()) {
    alert("please enter valid text like [a,z-A,Z-1,9  ,]");
    return false;
  } else {
    if (taskInp.value !== "") {
      let task = {
        text: taskInp.value,
        done: 0,
      };
      tasksArr.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasksArr));
      console.log(tasksArr);
      taskInp.value = "";
      displayTask();
    }
  }
}

// display tasks
function displayTask() {
  // check if arr tasks is empty
  if (tasksArr.length != 0) {
    // container for save data
    let container = ``;
    for (let i = 0; i < tasksArr.length; i++) {
      tasksArr[i].done == 1
        ? (container += `
        <div class="to-do">
          <div class="to-left">
            <span onclick="doneTask(${i})" class="checked"></span>
            <span class="che-text">${tasksArr[i].text}</span>
          </div>
          <div onclick="delTask(${i})" class="to-right-delete">❌</div>
        </div>
      `)
        : (container += `
        <div class="to-do">
          <div class="to-left">
            <span onclick="doneTask(${i})" class="unchecked"></span>
            <span class="to-text">${tasksArr[i].text}</span>
          </div>
          <div onclick="getTaskInfo(${i})" class="to-right-update" >🖋️</div>
          <div onclick="delTask(${i})" class="to-right-delete">❌</div>
        </div>
      `);
    }
    // display data in element in html
    toDoList.innerHTML = container;
  } else {
    toDoList.innerHTML = `<h2>no task for today</h2>`;
  }
}

// function for update the task
function updateTask() {
  if (!validTask()) {
    alert("please enter valid text like [a,z-A,Z-1,9  ,]");
    return false;
  } else {
    let task = {
      text: taskInp.value,
      done: 0,
    };
    tasksArr[currentIndexTask] = task;
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    taskInp.value = "";
    taskAdd.value = "add task";
    displayTask();
  }
}

// function for get task info
function getTaskInfo(index) {
  openMangPage();
  currentIndexTask = index;
  taskInp.value = tasksArr[index].text;
  taskAdd.value = "Update";
}

// function for delete task
function delTask(index) {
  tasksArr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  displayTask();
}

// function for task is done
function doneTask(index) {
  let checkedTask = {
    text: tasksArr[index].text,
    done: 1,
  };
  tasksArr[index] = checkedTask;
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  displayTask();
}

// event for open model page missed tasks
btnMissedTasks.addEventListener("click", missedTaskOpen);
function missedTaskOpen() {
  missedTaskModel.classList.replace("missed-task-close", "missed-task-open");
}

// event for close model page missed tasks
btnMissedTasksClose.addEventListener("click", missedTasksClose);
function missedTasksClose() {
  missedTaskModel.classList.replace("missed-task-open", "missed-task-close");
}

// function for send tasks to new day
function sendMissedTaskTOnNewDay(index) {
  tasksArr.push(tasksMissedArr[index]);
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  delMissedTask(index);
  displayTask();
}

// function for delete task from missed task array
function delMissedTask(index) {
  tasksMissedArr.splice(index, 1);
  localStorage.setItem("missedTasks", JSON.stringify(tasksMissedArr));
  displayMissedTasks();
}

// function for get missed tasks and push in missed array task
function getMissedTasks() {
  for (let i = 0; i < tasksArr.length; i++) {
    if (tasksArr[i].done === 0) {
      tasksMissedArr.push(tasksArr[i]);
      localStorage.setItem("missedTasks", JSON.stringify(tasksMissedArr));
    }
  }
}

// event for add all missed task  on the next day
btnAddAllMissedTasks.addEventListener("click", addAllMisTasks);
function addAllMisTasks() {
  for (let i = 0; i < tasksMissedArr.length; i++) {
    tasksArr.push(tasksMissedArr[i]);
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }
  displayTask();
  deleteAllMisTasks();
}

// event for delete  all missed tasks
btnDeleteAllMissedTasks.addEventListener("click", deleteAllMisTasks);
function deleteAllMisTasks() {
  localStorage.removeItem("missedTasks");
  missedBodyMisTasks.innerHTML = `<h2>No missing tasks found</h2>`;
}

// function for display missed tasks
function displayMissedTasks() {
  if (tasksMissedArr.length != 0) {
    let container = ``;
    for (let i = 0; i < tasksMissedArr.length; i++) {
      container += `   
        <div class="to-do">
          <div class="to-left">
            <span onclick="doneTask" class="unchecked"></span>
            <span class="to-text">${tasksMissedArr[i].text}</span>
          </div>
          <div onclick="sendMissedTaskTOnNewDay(${i})" class="to-right-update">⤴️</div>
          <div onclick="delMissedTask(${i})" class="to-right-delete">❌</div>
        </div>`;
    }
    missedBodyMisTasks.innerHTML = container;
  } else {
    missedBodyMisTasks.innerHTML = `<h2>No missing tasks found</h2>`;
  }
}

// event  for check is input value is valid
quoteInp.addEventListener("keyup", validQuote);
function validQuote() {
  let quoteRegex = /^[\w ,.]{5,150}$/;
  if (!quoteRegex.test(quoteInp.value)) {
    quoteAdd.disabled = "true";
    return false;
  } else {
    quoteAdd.removeAttribute("disabled");
    return true;
  }
}

// event for  add quotes and function
quoteAdd.addEventListener("click", addQuote);
function addQuote() {
  if (!validQuote()) {
    alert("please enter valid text like [a,z-A,Z-1,9  ,]");
    return false;
  } else {
    if (quoteInp.value !== "") {
      let quote = quoteInp.value;
      quotesArr.push(quote);
      localStorage.setItem("quotes", JSON.stringify(quotesArr));
      quoteInp.value = "";
    }
  }
}

// function for get today quote from quotes array
function getTodayQuote() {
  let ranQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
  localStorage.setItem("todayQuote", ranQuote);
}

// function for display today quote
function displayQuote() {
  if (todayQuote == "undefined") {
    quote.innerHTML = `<h1>nothing found in your quotes you can add random quotes or add yours</h1>`;
  } else {
    quote.innerHTML = `<h1>${todayQuote}</h1>`;
  }
}

// function for display all quotes in quotes model manage
function displayManageQuotes() {
  if (quotesArr.length.length != 0) {
    let container = ``;
    for (let i = 0; i < quotesArr.length; i++) {
      container += `        
        <div class="s-quote">
          <h2>${quotesArr[i]}</h2>
          <div class="q-btn">
            <div onclick="deleteFromQuotes(${i})" class="to-right-delete">❌</div>
          </div>
        </div>`;
    }
    quoteBody.innerHTML = container;
  }
}

// event for delete all quotes and function
btnDeleteAllQuotes.addEventListener("click", deleteAllQuotes);
function deleteAllQuotes() {
  localStorage.removeItem("quotes");
  quoteBody.innerHTML = `<h2>You don't have any Quotes yet!</h2>`;
}

// function for delete from quotes
function deleteFromQuotes(index) {
  quotesArr.splice(index, 1);
  localStorage.setItem("quotes", JSON.stringify(quotesArr));
  displayManageQuotes();
  if (quotesArr.length === 0) {
    deleteAllQuotes();
  }
}

// event for open model page quotes
btnManageQuotes.addEventListener("click", quotesOpen);
function quotesOpen() {
  quotesModel.classList.replace("quotes-close", "quotes-open");
}

// event for close model page quotes
btnQuotesClose.addEventListener("click", quotesClose);
function quotesClose() {
  quotesModel.classList.replace("quotes-open", "quotes-close");
}

// event for add random quotes from array by me
const btnRanQuote = document.querySelector(".random-quotes");
btnRanQuote.addEventListener("click", addRanQuote);
function addRanQuote() {
  for (let i = 0; i < ranQuotesArr.length; i++) {
    if (quotesArr[i] == ranQuotesArr[0]) {
      alert("you have already added them");
      break;
    } else {
      quotesArr.push(ranQuotesArr[i]);
    }
  }
  localStorage.setItem("quotes", JSON.stringify(quotesArr));
  location.reload();
}

// event for manage model and function  show/hide it
let btnHello = document.querySelector(".btn-hello");
btnHello.addEventListener("click", openMangPage);
function openMangPage() {
  managePage.classList.replace("mang-close", "mang-open");
}

// btn close manage page
let btnMangClose = document.querySelector(".btn-mang-close");
btnMangClose.addEventListener("click", closeMangPage);
// function for close mange
function closeMangPage() {
  let managePage = document.querySelector("#manage");
  managePage.classList.replace("mang-open", "mang-close");
}

// event for escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (
      managePage.classList.contains("mang-open") &&
      missedTaskModel.classList.contains("missed-task-open") &&
      quotesModel.classList.contains("quotes-close")
    ) {
      missedTasksClose();
      // quotesClose();
    } else if (
      managePage.classList.contains("mang-open") &&
      missedTaskModel.classList.contains("missed-task-close") &&
      quotesModel.classList.contains("quotes-close")
    ) {
      closeMangPage();
    } else if (
      managePage.classList.contains("mang-open") &&
      missedTaskModel.classList.contains("missed-task-close") &&
      quotesModel.classList.contains("quotes-open")
    ) {
      quotesClose();
    } else if (
      managePage.classList.contains("mang-open") &&
      missedTaskModel.classList.contains("missed-task-open") &&
      quotesModel.classList.contains("quotes-open")
    ) {
      quotesClose();
    }
  }
});

// important btn events open and close
document.querySelector(".hello").addEventListener("click", function () {
  document
    .querySelector(".important")
    .classList.replace("imp-close", "imp-open");
});
document
  .querySelector(".important button")
  .addEventListener("click", function impClose() {
    document
      .querySelector(".important")
      .classList.replace("imp-open", "imp-close");
  });

// contact-model btn events open and close
document.querySelector(".contact").addEventListener("click", function () {
  document
    .querySelector(".contact-model")
    .classList.replace("con-close", "con-open");
});

document
  .querySelector(".contact-model button")
  .addEventListener("click", function impClose() {
    document
      .querySelector(".contact-model")
      .classList.replace("con-open", "con-close");
  });
