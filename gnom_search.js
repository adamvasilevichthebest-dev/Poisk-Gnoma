/******************** 
 * Gnom_Search *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'gnom_search';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);











flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(osfRoutineBegin());
flowScheduler.add(osfRoutineEachFrame());
flowScheduler.add(osfRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trials_conditions.xlsx', 'path': 'trials_conditions.xlsx'},
    {'name': 'trials_conditions.xlsx', 'path': 'trials_conditions.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instruction;
var key_resp;
var hand_change_rightClock;
var text_4;
var key_resp_3;
var trials_rightClock;
var mouse;
var stim1;
var stim2;
var stim3;
var stim4;
var stim5;
var stim6;
var stim7;
var stim8;
var stim9;
var stim10;
var stim11;
var stim12;
var stim13;
var fix_crossClock;
var text_3;
var hand_change_leftClock;
var text;
var key_resp_2;
var trials_leftClock;
var mouse_2;
var stim1_2;
var stim2_2;
var stim3_2;
var stim4_2;
var stim5_2;
var stim6_2;
var stim7_2;
var stim8_2;
var stim9_2;
var stim10_2;
var stim11_2;
var stim12_2;
var stim13_2;
var endClock;
var text_2;
var osfClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: 'Большое спасибо, что согласились принять участье в эксперименте!!\n\nВам будут предъявляться изображения, среди которых нужно найти гнома. Когда вы найдете гнома, кликните по нему свободной рукой, и тогда перейдете к следующей пробе!! Между пробами постарайтесь фиксировать взгляд в центре экрана\n\nВо время поиска гнома вам нужно выполнять движения рукой, как если бы вы поднимали предмет с ручкой по направлению ко рту. Поднимайте и опускайте руку, имитируя захват объекта, пока не появится сообщение о смене руки. Во время смены руки вы также можете отдохнуть!\n\nЕсли вы прочитали и всё поняли, нажмите на ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "hand_change_right"
  hand_change_rightClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Выполняйте движения поднятия и опускания предмета ПРАВОЙ рукой\n\nЕсли вы чувствуете усталость, можете отдохнуть!\n\nКогда будете готовы перейти к следующем блоку, нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trials_right"
  trials_rightClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  /* Syntax Error: Fix Python code */
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  stim3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  stim4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  stim5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  stim6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  stim7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  stim8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  stim9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim9', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  stim10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim10', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  stim11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim11', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  stim12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim12', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  stim13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim13', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  // Initialize components for Routine "fix_cross"
  fix_crossClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "hand_change_left"
  hand_change_leftClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Выполняйте движения поднятия и опускания объекта ЛЕВОЙ рукой\n\nЕсли вы чувствуете усталость, можете отдохнуть!\n\nКогда будете готовы перейти к следующем блоку, нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trials_left"
  trials_leftClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  /* Syntax Error: Fix Python code */
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  stim1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  stim2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  stim3_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  stim4_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim4_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  stim5_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim5_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  stim6_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim6_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  stim7_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim7_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  stim8_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim8_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  stim9_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim9_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  stim10_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim10_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  stim11_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim11_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  stim12_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim12_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  stim13_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim13_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.1, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'спасибо что прошли эксперимент!! пж ниче не жмите и подождите, пока эксперимент закончится',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "osf"
  osfClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instrMaxDurationReached;
var _key_resp_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instruction);
    instrComponents.push(key_resp);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction* updates
    if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 1 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 16, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(hand_change_rightRoutineBegin(snapshot));
      trials_2LoopScheduler.add(hand_change_rightRoutineEachFrame());
      trials_2LoopScheduler.add(hand_change_rightRoutineEnd(snapshot));
      const trials_condLoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(trials_condLoopBegin(trials_condLoopScheduler, snapshot));
      trials_2LoopScheduler.add(trials_condLoopScheduler);
      trials_2LoopScheduler.add(trials_condLoopEnd);
      trials_2LoopScheduler.add(hand_change_leftRoutineBegin(snapshot));
      trials_2LoopScheduler.add(hand_change_leftRoutineEachFrame());
      trials_2LoopScheduler.add(hand_change_leftRoutineEnd(snapshot));
      const trials_cond_leftLoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(trials_cond_leftLoopBegin(trials_cond_leftLoopScheduler, snapshot));
      trials_2LoopScheduler.add(trials_cond_leftLoopScheduler);
      trials_2LoopScheduler.add(trials_cond_leftLoopEnd);
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_cond;
function trials_condLoopBegin(trials_condLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cond = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials_conditions.xlsx',
      seed: undefined, name: 'trials_cond'
    });
    psychoJS.experiment.addLoop(trials_cond); // add the loop to the experiment
    currentLoop = trials_cond;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_cond of trials_cond) {
      snapshot = trials_cond.getSnapshot();
      trials_condLoopScheduler.add(importConditions(snapshot));
      trials_condLoopScheduler.add(trials_rightRoutineBegin(snapshot));
      trials_condLoopScheduler.add(trials_rightRoutineEachFrame());
      trials_condLoopScheduler.add(trials_rightRoutineEnd(snapshot));
      trials_condLoopScheduler.add(fix_crossRoutineBegin(snapshot));
      trials_condLoopScheduler.add(fix_crossRoutineEachFrame());
      trials_condLoopScheduler.add(fix_crossRoutineEnd(snapshot));
      trials_condLoopScheduler.add(trials_condLoopEndIteration(trials_condLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_condLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_cond);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_condLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_cond_left;
function trials_cond_leftLoopBegin(trials_cond_leftLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_cond_left = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials_conditions.xlsx',
      seed: undefined, name: 'trials_cond_left'
    });
    psychoJS.experiment.addLoop(trials_cond_left); // add the loop to the experiment
    currentLoop = trials_cond_left;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_cond_left of trials_cond_left) {
      snapshot = trials_cond_left.getSnapshot();
      trials_cond_leftLoopScheduler.add(importConditions(snapshot));
      trials_cond_leftLoopScheduler.add(trials_leftRoutineBegin(snapshot));
      trials_cond_leftLoopScheduler.add(trials_leftRoutineEachFrame());
      trials_cond_leftLoopScheduler.add(trials_leftRoutineEnd(snapshot));
      trials_cond_leftLoopScheduler.add(fix_crossRoutineBegin(snapshot));
      trials_cond_leftLoopScheduler.add(fix_crossRoutineEachFrame());
      trials_cond_leftLoopScheduler.add(fix_crossRoutineEnd(snapshot));
      trials_cond_leftLoopScheduler.add(trials_cond_leftLoopEndIteration(trials_cond_leftLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_cond_leftLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_cond_left);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_cond_leftLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var hand_change_rightMaxDurationReached;
var _key_resp_3_allKeys;
var hand_change_rightMaxDuration;
var hand_change_rightComponents;
function hand_change_rightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hand_change_right' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    hand_change_rightClock.reset();
    routineTimer.reset();
    hand_change_rightMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('hand_change_right.started', globalClock.getTime());
    hand_change_rightMaxDuration = null
    // keep track of which components have finished
    hand_change_rightComponents = [];
    hand_change_rightComponents.push(text_4);
    hand_change_rightComponents.push(key_resp_3);
    
    for (const thisComponent of hand_change_rightComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function hand_change_rightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hand_change_right' ---
    // get current time
    t = hand_change_rightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of hand_change_rightComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hand_change_rightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hand_change_right' ---
    for (const thisComponent of hand_change_rightComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('hand_change_right.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "hand_change_right" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_rightMaxDurationReached;
var gotValidClick;
var trials_rightMaxDuration;
var trials_rightComponents;
function trials_rightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trials_right' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trials_rightClock.reset();
    routineTimer.reset();
    trials_rightMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    /* Syntax Error: Fix Python code */
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    stim1.setPos(stim_pos_map["stim1"]);
    stim1.setImage(stim_data_map["stim1"]["image"]);
    stim2.setPos(stim_pos_map["stim2"]);
    stim2.setImage(stim_data_map["stim2"]["image"]);
    stim3.setPos(stim_pos_map["stim3"]);
    stim3.setImage(stim_data_map["stim3"]["image"]);
    stim4.setPos(stim_pos_map["stim4"]);
    stim4.setImage(stim_data_map["stim4"]["image"]);
    stim5.setPos(stim_pos_map["stim5"]);
    stim5.setImage(stim_data_map["stim5"]["image"]);
    stim6.setPos(stim_pos_map["stim6"]);
    stim6.setImage(stim_data_map["stim6"]["image"]);
    stim7.setPos(stim_pos_map["stim7"]);
    stim7.setImage(stim_data_map["stim7"]["image"]);
    stim8.setPos(stim_pos_map["stim8"]);
    stim8.setImage(stim_data_map["stim8"]["image"]);
    stim9.setPos(stim_pos_map["stim9"]);
    stim9.setImage(stim_data_map["stim9"]["image"]);
    stim10.setPos(stim_pos_map["stim10"]);
    stim10.setImage(stim_data_map["stim10"]["image"]);
    stim11.setPos(stim_pos_map["stim11"]);
    stim11.setImage(stim_data_map["stim11"]["image"]);
    stim12.setPos(stim_pos_map["stim12"]);
    stim12.setImage(stim_data_map["stim12"]["image"]);
    stim13.setPos(stim_pos_map["stim13"]);
    stim13.setImage(stim_data_map["stim13"]["image"]);
    psychoJS.experiment.addData('trials_right.started', globalClock.getTime());
    trials_rightMaxDuration = null
    // keep track of which components have finished
    trials_rightComponents = [];
    trials_rightComponents.push(mouse);
    trials_rightComponents.push(stim1);
    trials_rightComponents.push(stim2);
    trials_rightComponents.push(stim3);
    trials_rightComponents.push(stim4);
    trials_rightComponents.push(stim5);
    trials_rightComponents.push(stim6);
    trials_rightComponents.push(stim7);
    trials_rightComponents.push(stim8);
    trials_rightComponents.push(stim9);
    trials_rightComponents.push(stim10);
    trials_rightComponents.push(stim11);
    trials_rightComponents.push(stim12);
    trials_rightComponents.push(stim13);
    
    for (const thisComponent of trials_rightComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var clicked_comp;
var correct_click_made;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trials_rightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trials_right' ---
    // get current time
    t = trials_rightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (mouse.clicked_name) {
        clicked_comp = mouse.clicked_name[0];
        if (_pj.in_es6(clicked_comp, stim_data_map)) {
            mouse.clicked_name = [];
            all_clicks_comp.push(clicked_comp);
            all_clicks_image.push(stim_data_map[clicked_comp]["image"]);
            if ((clicked_comp === target_comp_name)) {
                correct_click_made = true;
                continueRoutine = false;
            } else {
                num_errors += 1;
            }
        } else {
            mouse.clicked_name = [];
        }
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([stim1, stim2, stim3, stim4, stim5, stim6, stim7, stim8, stim9, stim10, stim11, stim12, stim13])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    
    // *stim1* updates
    if (t >= 0.0 && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }
    
    
    // *stim2* updates
    if (t >= 0.0 && stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2.tStart = t;  // (not accounting for frame time here)
      stim2.frameNStart = frameN;  // exact frame index
      
      stim2.setAutoDraw(true);
    }
    
    
    // *stim3* updates
    if (t >= 0.0 && stim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3.tStart = t;  // (not accounting for frame time here)
      stim3.frameNStart = frameN;  // exact frame index
      
      stim3.setAutoDraw(true);
    }
    
    
    // *stim4* updates
    if (t >= 0.0 && stim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4.tStart = t;  // (not accounting for frame time here)
      stim4.frameNStart = frameN;  // exact frame index
      
      stim4.setAutoDraw(true);
    }
    
    
    // *stim5* updates
    if (t >= 0.0 && stim5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim5.tStart = t;  // (not accounting for frame time here)
      stim5.frameNStart = frameN;  // exact frame index
      
      stim5.setAutoDraw(true);
    }
    
    
    // *stim6* updates
    if (t >= 0.0 && stim6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim6.tStart = t;  // (not accounting for frame time here)
      stim6.frameNStart = frameN;  // exact frame index
      
      stim6.setAutoDraw(true);
    }
    
    
    // *stim7* updates
    if (t >= 0.0 && stim7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim7.tStart = t;  // (not accounting for frame time here)
      stim7.frameNStart = frameN;  // exact frame index
      
      stim7.setAutoDraw(true);
    }
    
    
    // *stim8* updates
    if (t >= 0.0 && stim8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim8.tStart = t;  // (not accounting for frame time here)
      stim8.frameNStart = frameN;  // exact frame index
      
      stim8.setAutoDraw(true);
    }
    
    
    // *stim9* updates
    if (t >= 0.0 && stim9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim9.tStart = t;  // (not accounting for frame time here)
      stim9.frameNStart = frameN;  // exact frame index
      
      stim9.setAutoDraw(true);
    }
    
    
    // *stim10* updates
    if (t >= 0.0 && stim10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim10.tStart = t;  // (not accounting for frame time here)
      stim10.frameNStart = frameN;  // exact frame index
      
      stim10.setAutoDraw(true);
    }
    
    
    // *stim11* updates
    if (t >= 0.0 && stim11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim11.tStart = t;  // (not accounting for frame time here)
      stim11.frameNStart = frameN;  // exact frame index
      
      stim11.setAutoDraw(true);
    }
    
    
    // *stim12* updates
    if (t >= 0.0 && stim12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim12.tStart = t;  // (not accounting for frame time here)
      stim12.frameNStart = frameN;  // exact frame index
      
      stim12.setAutoDraw(true);
    }
    
    
    // *stim13* updates
    if (t >= 0.0 && stim13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim13.tStart = t;  // (not accounting for frame time here)
      stim13.frameNStart = frameN;  // exact frame index
      
      stim13.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trials_rightComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trials_rightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trials_right' ---
    for (const thisComponent of trials_rightComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trials_right.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    psychoJS.experiment.addData("all_clicks_comp", all_clicks_comp.join(";"));
    psychoJS.experiment.addData("all_clicks_image", all_clicks_image.join(";"));
    psychoJS.experiment.addData("num_errors", num_errors);
    if (correct_click_made) {
        psychoJS.experiment.addData("final_correct", 1);
    } else {
        psychoJS.experiment.addData("final_correct", 0);
    }
    mouse.clicked_name = [];
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "trials_right" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix_crossMaxDurationReached;
var fix_crossMaxDuration;
var fix_crossComponents;
function fix_crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_cross' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fix_crossClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fix_crossMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fix_cross.started', globalClock.getTime());
    fix_crossMaxDuration = null
    // keep track of which components have finished
    fix_crossComponents = [];
    fix_crossComponents.push(text_3);
    
    for (const thisComponent of fix_crossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fix_crossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_cross' ---
    // get current time
    t = fix_crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_crossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_crossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_cross' ---
    for (const thisComponent of fix_crossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fix_cross.stopped', globalClock.getTime());
    if (fix_crossMaxDurationReached) {
        fix_crossClock.add(fix_crossMaxDuration);
    } else {
        fix_crossClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var hand_change_leftMaxDurationReached;
var _key_resp_2_allKeys;
var hand_change_leftMaxDuration;
var hand_change_leftComponents;
function hand_change_leftRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hand_change_left' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    hand_change_leftClock.reset();
    routineTimer.reset();
    hand_change_leftMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('hand_change_left.started', globalClock.getTime());
    hand_change_leftMaxDuration = null
    // keep track of which components have finished
    hand_change_leftComponents = [];
    hand_change_leftComponents.push(text);
    hand_change_leftComponents.push(key_resp_2);
    
    for (const thisComponent of hand_change_leftComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function hand_change_leftRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hand_change_left' ---
    // get current time
    t = hand_change_leftClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of hand_change_leftComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hand_change_leftRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hand_change_left' ---
    for (const thisComponent of hand_change_leftComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('hand_change_left.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "hand_change_left" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_leftMaxDurationReached;
var trials_leftMaxDuration;
var trials_leftComponents;
function trials_leftRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trials_left' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trials_leftClock.reset();
    routineTimer.reset();
    trials_leftMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    /* Syntax Error: Fix Python code */
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    stim1_2.setPos(stim_pos_map["stim1_2"]);
    stim1_2.setImage(stim_data_map["stim1_2"]["image"]);
    stim2_2.setPos(stim_pos_map["stim2_2"]);
    stim2_2.setImage(stim_data_map["stim2_2"]["image"]);
    stim3_2.setPos(stim_pos_map["stim3_2"]);
    stim3_2.setImage(stim_data_map["stim3_2"]["image"]);
    stim4_2.setPos(stim_pos_map["stim4_2"]);
    stim4_2.setImage(stim_data_map["stim4_2"]["image"]);
    stim5_2.setPos(stim_pos_map["stim5_2"]);
    stim5_2.setImage(stim_data_map["stim5_2"]["image"]);
    stim6_2.setPos(stim_pos_map["stim6_2"]);
    stim6_2.setImage(stim_data_map["stim6_2"]["image"]);
    stim7_2.setPos(stim_pos_map["stim7_2"]);
    stim7_2.setImage(stim_data_map["stim7_2"]["image"]);
    stim8_2.setPos(stim_pos_map["stim8_2"]);
    stim8_2.setImage(stim_data_map["stim8_2"]["image"]);
    stim9_2.setPos(stim_pos_map["stim9_2"]);
    stim9_2.setImage(stim_data_map["stim9_2"]["image"]);
    stim10_2.setPos(stim_pos_map["stim10_2"]);
    stim10_2.setImage(stim_data_map["stim10_2"]["image"]);
    stim11_2.setPos(stim_pos_map["stim11_2"]);
    stim11_2.setImage(stim_data_map["stim11_2"]["image"]);
    stim12_2.setPos(stim_pos_map["stim12_2"]);
    stim12_2.setImage(stim_data_map["stim12_2"]["image"]);
    stim13_2.setPos(stim_pos_map["stim13_2"]);
    stim13_2.setImage(stim_data_map["stim13_2"]["image"]);
    psychoJS.experiment.addData('trials_left.started', globalClock.getTime());
    trials_leftMaxDuration = null
    // keep track of which components have finished
    trials_leftComponents = [];
    trials_leftComponents.push(mouse_2);
    trials_leftComponents.push(stim1_2);
    trials_leftComponents.push(stim2_2);
    trials_leftComponents.push(stim3_2);
    trials_leftComponents.push(stim4_2);
    trials_leftComponents.push(stim5_2);
    trials_leftComponents.push(stim6_2);
    trials_leftComponents.push(stim7_2);
    trials_leftComponents.push(stim8_2);
    trials_leftComponents.push(stim9_2);
    trials_leftComponents.push(stim10_2);
    trials_leftComponents.push(stim11_2);
    trials_leftComponents.push(stim12_2);
    trials_leftComponents.push(stim13_2);
    
    for (const thisComponent of trials_leftComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trials_leftRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trials_left' ---
    // get current time
    t = trials_leftClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (mouse_2.clicked_name) {
        clicked_comp = mouse_2.clicked_name[0];
        console.log(`КЛИК! clicked_comp = '${clicked_comp}' | target = '${target_comp_name}'`);
        if (_pj.in_es6(clicked_comp, stim_data_map)) {
            mouse_2.clicked_name = [];
            all_clicks_comp.push(clicked_comp);
            all_clicks_image.push(stim_data_map[clicked_comp]["image"]);
            if ((clicked_comp === target_comp_name)) {
                console.log("\u041f\u0420\u0410\u0412\u0418\u041b\u042c\u041d\u041e! \u0417\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u043c \u043f\u0440\u043e\u0431\u0443.");
                correct_click_made = true;
                continueRoutine = false;
            } else {
                console.log(`Неправильно. Ошибок: ${(num_errors + 1)}`);
                num_errors += 1;
            }
        } else {
            console.log("\u041a\u043b\u0438\u043a \u043d\u0435 \u0432 stim_data_map (\u043c\u0438\u043c\u043e \u0441\u0442\u0438\u043c\u0443\u043b\u0430)");
            mouse_2.clicked_name = [];
        }
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([stim1_2, stim2_2, stim3_2, stim4_2, stim5_2, stim6_2, stim7_2, stim8_2, stim9_2, stim10_2, stim11_2, stim12_2, stim13_2])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
        }
      }
    }
    
    // *stim1_2* updates
    if (t >= 0.0 && stim1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_2.tStart = t;  // (not accounting for frame time here)
      stim1_2.frameNStart = frameN;  // exact frame index
      
      stim1_2.setAutoDraw(true);
    }
    
    
    // *stim2_2* updates
    if (t >= 0.0 && stim2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2_2.tStart = t;  // (not accounting for frame time here)
      stim2_2.frameNStart = frameN;  // exact frame index
      
      stim2_2.setAutoDraw(true);
    }
    
    
    // *stim3_2* updates
    if (t >= 0.0 && stim3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3_2.tStart = t;  // (not accounting for frame time here)
      stim3_2.frameNStart = frameN;  // exact frame index
      
      stim3_2.setAutoDraw(true);
    }
    
    
    // *stim4_2* updates
    if (t >= 0.0 && stim4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4_2.tStart = t;  // (not accounting for frame time here)
      stim4_2.frameNStart = frameN;  // exact frame index
      
      stim4_2.setAutoDraw(true);
    }
    
    
    // *stim5_2* updates
    if (t >= 0.0 && stim5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim5_2.tStart = t;  // (not accounting for frame time here)
      stim5_2.frameNStart = frameN;  // exact frame index
      
      stim5_2.setAutoDraw(true);
    }
    
    
    // *stim6_2* updates
    if (t >= 0.0 && stim6_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim6_2.tStart = t;  // (not accounting for frame time here)
      stim6_2.frameNStart = frameN;  // exact frame index
      
      stim6_2.setAutoDraw(true);
    }
    
    
    // *stim7_2* updates
    if (t >= 0.0 && stim7_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim7_2.tStart = t;  // (not accounting for frame time here)
      stim7_2.frameNStart = frameN;  // exact frame index
      
      stim7_2.setAutoDraw(true);
    }
    
    
    // *stim8_2* updates
    if (t >= 0.0 && stim8_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim8_2.tStart = t;  // (not accounting for frame time here)
      stim8_2.frameNStart = frameN;  // exact frame index
      
      stim8_2.setAutoDraw(true);
    }
    
    
    // *stim9_2* updates
    if (t >= 0.0 && stim9_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim9_2.tStart = t;  // (not accounting for frame time here)
      stim9_2.frameNStart = frameN;  // exact frame index
      
      stim9_2.setAutoDraw(true);
    }
    
    
    // *stim10_2* updates
    if (t >= 0.0 && stim10_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim10_2.tStart = t;  // (not accounting for frame time here)
      stim10_2.frameNStart = frameN;  // exact frame index
      
      stim10_2.setAutoDraw(true);
    }
    
    
    // *stim11_2* updates
    if (t >= 0.0 && stim11_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim11_2.tStart = t;  // (not accounting for frame time here)
      stim11_2.frameNStart = frameN;  // exact frame index
      
      stim11_2.setAutoDraw(true);
    }
    
    
    // *stim12_2* updates
    if (t >= 0.0 && stim12_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim12_2.tStart = t;  // (not accounting for frame time here)
      stim12_2.frameNStart = frameN;  // exact frame index
      
      stim12_2.setAutoDraw(true);
    }
    
    
    // *stim13_2* updates
    if (t >= 0.0 && stim13_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim13_2.tStart = t;  // (not accounting for frame time here)
      stim13_2.frameNStart = frameN;  // exact frame index
      
      stim13_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trials_leftComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trials_leftRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trials_left' ---
    for (const thisComponent of trials_leftComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trials_left.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    psychoJS.experiment.addData("all_clicks_comp", all_clicks_comp.join(";"));
    psychoJS.experiment.addData("all_clicks_image", all_clicks_image.join(";"));
    psychoJS.experiment.addData("num_errors", num_errors);
    if (correct_click_made) {
        psychoJS.experiment.addData("final_correct", 1);
    } else {
        psychoJS.experiment.addData("final_correct", 0);
    }
    mouse_2.clicked_name = [];
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "trials_left" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_2);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    if (endMaxDurationReached) {
        endClock.add(endMaxDuration);
    } else {
        endClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var osfMaxDurationReached;
var osfMaxDuration;
var osfComponents;
function osfRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'osf' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    osfClock.reset();
    routineTimer.reset();
    osfMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
    return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    },
    body: JSON.stringify({ experimentID: 'DO18LCFhUC06', // * обновить, указав experiment ID из DATAPIPE на шаге 4.3 *
    filename: filename,
    data: data,
    }),
    }).then(response => response.json()).then(data => {
    // Log response aud force experiment end
    console.log(data);
    quitPsychoJS();
    })
    psychoJS.experiment.addData('osf.started', globalClock.getTime());
    osfMaxDuration = null
    // keep track of which components have finished
    osfComponents = [];
    
    for (const thisComponent of osfComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function osfRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'osf' ---
    // get current time
    t = osfClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of osfComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function osfRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'osf' ---
    for (const thisComponent of osfComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('osf.stopped', globalClock.getTime());
    // the Routine "osf" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
