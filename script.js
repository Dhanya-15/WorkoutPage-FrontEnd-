/* Globals and data */

const workoutDays = [
  {
    name: "Day 1 — Lower Body Strength",
    image: "images/day1.jpg",
    warmup: [{ name: "Sun Salutation A – 5 rounds", details: { reps: "5 rounds", instructions: ["Just go smooth, not frantic.", "This wakes everything up."], image: "images/sunsalutation.jpeg" } }],
    workout: [
      { name: "Squats", details: { reps: "3×15", instructions: ["Stand with feet shoulder-width apart.", "Lower hips back and down.", "Keep chest up and knees over toes.", "Rise back up to starting position."], image: "images/squats.gif" } },
      { name: "Glute Bridges", details: { reps: "4×20 (slow squeeze)", instructions: ["Lie on back, knees bent, feet flat.", "Lift hips, squeeze glutes at top.", "Lower slowly back down."], image: "images/glutebridges.gif" } },
      { name: "Reverse Lunges", details: { reps: "3×12/leg (gentler on knees)", instructions: ["Step back with one leg.", "Bend knees to lower body.", "Return to standing."], image: "images/reverselunges.gif" } },
      { name: "Donkey Kicks", details: { reps: "3×20/leg", instructions: ["On all fours, kick leg up and back.", "Squeeze glutes at top."], image: "images/donkeykicks.gif" } },
      { name: "Side-Lying Leg Raises", details: { reps: "3×20/leg", instructions: ["Lie on side, lift top leg up.", "Keep hips steady."], image: "images/sideleglifts.gif" } }
    ],
    yoga: [
      { name: "Butterfly pose", details: { image: "images/butterflypose.gif" } },
      { name: "Pigeon pose (each side)", details: { image: "images/pigeonpose.gif" } },
      { name: "Standing forward fold", details: { image: "images/standingforwardfold.jpg" } },
      { name: "Cat–cow", details: { image: "images/catcow.gif" } },
      { name: "Deep belly breathing", details: { image: "images/deepbellybreathing.gif" } }
    ]
  },
  {
    name: "Day 2 — Upper Body Sculpt",
    image: "images/day2.jpg",
    warmup: [{ name: "Sun Salutation A – 5 rounds", details: { reps: "5 rounds", instructions: ["Just go smooth, not frantic.", "This wakes everything up."], image: "images/sun-salutation-a.jpg" } }],
    workout: [
      { name: "Chest Flys (with dumbbells/bottles)", details: { reps: "4×15", instructions: ["Lie on back holding dumbbells.", "Open arms wide.", "Bring dumbbells together above chest."], image: "images/chest-flys.jpg" } },
      { name: "Standing Chest Press", details: { reps: "3×20", instructions: ["Hold dumbbells at chest.", "Press forward.", "Return."], image: "images/standing-chest-press.jpg" } },
      { name: "Superman Hold", details: { reps: "3×30 sec", instructions: ["Lie face down.", "Lift arms and legs.", "Hold position."], image: "images/superman-hold.jpg" } },
      { name: "Tricep Dips (bed/chair)", details: { reps: "3×12", instructions: ["Hands on chair behind you.", "Lower body down.", "Push back up."], image: "images/tricep-dips.jpg" } },
      { name: "Bicep Curls", details: { reps: "3×15", instructions: ["Hold dumbbells.", "Curl up.", "Lower down."], image: "images/bicep-curls.jpg" } },
      { name: "Back Pull-aparts", details: { reps: "3×20", instructions: ["Hold band/dupatta in front.", "Pull apart.", "Return."], image: "images/back-pull-aparts.jpg" } }
    ],
    yoga: [
      { name: "Cobra", details: { image: "images/cobra.jpg" } },
      { name: "Upward dog", details: { image: "images/upward-dog.jpg" } },
      { name: "Shoulder stretch", details: { image: "images/shoulder-stretch.jpg" } },
      { name: "Thread-the-needle", details: { image: "images/thread-the-needle.jpg" } },
      { name: "Bridge pose", details: { image: "images/bridge-pose.jpg" } }
    ]
  },
  {
    name: "Day 3 — HIIT + Core Burn",
    image: "images/day3.jpg",
    warmup: [{ name: "Sun Salutation A – 5 rounds", details: { reps: "5 rounds", instructions: ["Just go smooth, not frantic.", "This wakes everything up."], image: "images/sun-salutation-a.jpg" } }],
    workout: [
      { name: "Jumping Jacks", details: { reps: "40 sec", instructions: ["Jump with legs apart and hands overhead.", "Return."], image: "images/jumping-jacks.jpg" } },
      { name: "High Knees", details: { reps: "40 sec", instructions: ["Run in place lifting knees high."], image: "images/high-knees.jpg" } },
      { name: "Squat Pulses", details: { reps: "30 sec", instructions: ["Hold squat position and pulse small movements."], image: "images/squat-pulses.jpg" } },
      { name: "Mountain Climbers", details: { reps: "40 sec", instructions: ["Start plank position.", "Alternate knees towards chest."], image: "images/mountain-climbers.jpg" } },
      { name: "Russian Twists", details: { reps: "3×20", instructions: ["Sit with knees bent.", "Twist torso side to side."], image: "images/russian-twists.jpg" } },
      { name: "Dead Bug", details: { reps: "3×12", instructions: ["Lie on back.", "Extend opposite arm and leg."], image: "images/dead-bug.jpg" } }
    ],
    yoga: [
      { name: "Boat pose", details: { image: "images/boat-pose.jpg" } },
      { name: "Cat-cow", details: { image: "images/cat-cow.jpg" } },
      { name: "Seated spinal twist", details: { image: "images/seated-spinal-twist.jpg" } },
      { name: "Child's pose", details: { image: "images/childs-pose.jpg" } },
      { name: "Gentle belly massage breathing", details: { image: "images/belly-massage.jpg" } }
    ]
  },
  {
    name: "Day 4 — Glute & Hamstring Focus",
    image: "images/day4.jpg",
    warmup: [{ name: "Sun Salutation A – 5 rounds", details: { reps: "5 rounds", instructions: ["Just go smooth, not frantic.", "This wakes everything up."], image: "images/sun-salutation-a.jpg" } }],
    workout: [
      { name: "Hip Thrusts", details: { reps: "4×20", instructions: ["Sit with upper back on bench.", "Lift hips.", "Lower down."], image: "images/hip-thrusts.jpg" } },
      { name: "Bulgarian Split Squats", details: { reps: "3×10/leg (use a chair)", instructions: ["Back foot elevated.", "Lower hips.", "Rise up."], image: "images/bulgarian-split-squats.jpg" } },
      { name: "Sumo Squats", details: { reps: "3×15", instructions: ["Wide stance.", "Lower hips.", "Lift up."], image: "images/sumo-squats.jpg" } },
      { name: "Hamstring Curls (towel on floor)", details: { reps: "3×12", instructions: ["Lie face down.", "Use towel under feet.", "Curl feet towards glutes."], image: "images/hamstring-curls.jpg" } },
      { name: "Fire Hydrants", details: { reps: "3×20/leg", instructions: ["On all fours, lift leg sideways."], image: "images/fire-hydrants.jpg" } }
    ],
    yoga: [
      { name: "Pigeon", details: { image: "images/pigeon-pose.jpg" } },
      { name: "Lizard stretch", details: { image: "images/lizard-stretch.jpg" } },
      { name: "Figure-4 stretch", details: { image: "images/figure-4-stretch.jpg" } },
      { name: "Wide-leg forward fold", details: { image: "images/wide-leg-forward-fold.jpg" } }
    ]
  },
  {
    name: "Day 5 — Full Body Tone",
    image: "images/day5.jpg",
    warmup: [{ name: "Sun Salutation A – 5 rounds", details: { reps: "5 rounds", instructions: ["Just go smooth, not frantic.", "This wakes everything up."], image: "images/sun-salutation-a.jpg" } }],
    workout: [
      { name: "Step-ups (stairs/chair)", details: { reps: "3×15/leg", instructions: ["Step up on chair or stairs.", "Step down."], image: "images/step-ups.jpg" } },
      { name: "Curtsy Lunges", details: { reps: "3×12/leg", instructions: ["Step one leg behind other diagonally.", "Lower hips.", "Return."], image: "images/curtsy-lunges.jpg" } },
      { name: "Upright Rows (bottles)", details: { reps: "3×15", instructions: ["Hold bottles.", "Lift to chest height.", "Lower down."], image: "images/upright-rows.jpg" } },
      { name: "Arm Circles", details: { reps: "2×1 min", instructions: ["Circulate arms forward and backward."], image: "images/arm-circles.jpg" } },
      { name: "Plank (45 sec)", details: { reps: "45 sec", instructions: ["Hold plank position.", "Breathe slowly."], image: "images/plank.jpg" } },
      { name: "Glute Bridge Hold (1 min)", details: { reps: "1 min", instructions: ["Lift hips.", "Hold position."], image: "images/glute-bridge-hold.jpg" } }
    ],
    yoga: [
      { name: "Sun Salutation B (2 rounds)", details: { image: "images/sun-salutation-b.jpg" } },
      { name: "Triangle pose", details: { image: "images/triangle-pose.jpg" } },
      { name: "Warrior II", details: { image: "images/warrior-ii.jpg" } },
      { name: "Bridge", details: { image: "images/bridge-pose.jpg" } },
      { name: "Supine twist", details: { image: "images/supine-twist.jpg" } },
      { name: "Long forward fold", details: { image: "images/forward-fold.jpg" } }
    ]
  }
];

// DOM elements
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
const dateElem = document.getElementById("current-date");
const themeToggle = document.getElementById("theme-toggle");
const profilePicHeader = document.getElementById("profile-pic-header");
const usernameHeader = document.getElementById("username-header");

// Page sections
const homeSection = document.getElementById("home-section");
const workoutSection = document.getElementById("workout-section");
const dayDetailPage = document.getElementById("day-detail-page");
const calendarSection = document.getElementById("calendar-section");
const profileSection = document.getElementById("profile-section");
const bmiSection = document.getElementById("bmi-section");

// Menu links
const linkHome = document.getElementById("link-home");
const linkWorkout = document.getElementById("link-workout");
const linkCalendar = document.getElementById("link-calendar");
const linkProfile = document.getElementById("link-profile");
const linkBMI = document.getElementById("link-bmi");
const goButton = document.getElementById("go-button");

// Workout page DOM
const daysContainer = document.getElementById("days-container");
const dayTitle = document.getElementById("day-title");
const activitiesContainer = document.getElementById("activities-container");
const backToWorkoutBtn = document.getElementById("back-to-workout");

// Activity popup
const activityPopup = document.getElementById("activity-popup");
const closeActivityPopupBtn = document.getElementById("close-activity-popup");
const activityPopupTitle = document.getElementById("activity-popup-title");
const activityImage = document.getElementById("activity-image");
const activityReps = document.getElementById("activity-reps");
const activityInstructions = document.getElementById("activity-instructions");

// Timer elements
const timerDisplay = document.getElementById("timer-display");
const timerStart = document.getElementById("timer-start");
const timerStop = document.getElementById("timer-stop");
const timerReset = document.getElementById("timer-reset");

// Calendar Elements
const calendarMonthYear = document.getElementById("calendar-month-year");
const calendarBody = document.getElementById("calendar-body");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const calendarPopup = document.getElementById("calendar-popup");
const closeCalendarPopupBtn = document.getElementById("close-calendar-popup");
const addCycleBtn = document.getElementById("add-cycle-btn");
const removeCycleBtn = document.getElementById("remove-cycle-btn");
const openNotesBtn = document.getElementById("open-notes-btn");

// Notes popup
const notesPopup = document.getElementById("notes-popup");
const closeNotesPopupBtn = document.getElementById("close-notes-popup");
const notesTextarea = document.getElementById("notes-textarea");
const saveNotesBtn = document.getElementById("save-notes-btn");
const deleteNotesBtn = document.getElementById("delete-notes-btn");

// Profile form
const profilePicInput = document.getElementById("profile-pic-input");
const profilePicPreview = document.getElementById("profile-pic-preview");
const profileNameInput = document.getElementById("profile-name");
const profileDOBInput = document.getElementById("profile-dob");
const profileHeightInput = document.getElementById("profile-height");
const profileWeightInput = document.getElementById("profile-weight");
const profileAgeInput = document.getElementById("profile-age");
const profileGenderSelect = document.getElementById("profile-gender");
const profileMobileInput = document.getElementById("profile-mobile");
const profileEmailInput = document.getElementById("profile-email");
const profileGoalInput = document.getElementById("profile-goal");
const saveProfileBtn = document.getElementById("save-profile-btn");
const deleteProfileBtn = document.getElementById("delete-profile-btn");

// BMI form elements
const bmiGenderRadios = document.querySelectorAll("input[name=bmi-gender]");
const bmiHeightInput = document.getElementById("bmi-height");
const bmiWeightInput = document.getElementById("bmi-weight");
const bmiAgeInput = document.getElementById("bmi-age");
const heightValueDisplay = document.getElementById("height-value");
const weightValueDisplay = document.getElementById("weight-value");
const ageDecreaseBtn = document.getElementById("age-decrease");
const ageIncreaseBtn = document.getElementById("age-increase");
const calculateBMIBtn = document.getElementById("calculate-bmi-btn");
const bmiResultPopup = document.getElementById("bmi-result-popup");
const bmiResultValue = document.getElementById("bmi-result-value");
const bmiRanges = document.getElementById("bmi-ranges");
const closeBMIPopupBtn = document.getElementById("close-bmi-popup");

// Other globals
let currentTheme = "light";
let currentPage = "home";
let activeDayIndex = null;
let activeCategory = null;
let timerInterval = null;
let timerSeconds = 0;
let calendarDate = new Date();

let calendarSelectedDate = null;

const STORAGE_KEYS = {
  profile: "userProfile",
  theme: "selectedTheme",
  completedActivities: "completedActivities",
  calendarNotes: "calendarNotes",
  menstrualCycles: "menstrualCycles",
  workoutCompletionByDate: "workoutCompletionByDate"
};

/* Utility functions */
function formatCurrentDate(d = new Date()) {
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dayStr = days[d.getDay()];
  const dateStr = d.toLocaleDateString('en-GB').split('/').join('/');
  const yearShort = dateStr.slice(-2);
  const dayMonth = dateStr.slice(0,5);
  return `${dayStr}, ${dayMonth}/${yearShort}`;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch(e) {
    return null;
  }
}

function slideGoButton() {
  let translateX = 0;
  return function() {
    translateX += 80;
    goButton.style.transform = `translateX(${translateX}px)`;
  };
}
const slideButton = slideGoButton();

/* THEME FUNCTIONS */
function updateThemeIconAndBody(theme) {
  const themeIconMap = {
    light: "fa-sun",
    dark: "fa-moon",
    pastel: "fa-leaf",
    boldred: "fa-fire",
    iceblue: "fa-snowflake"
  };

  document.body.className = "";
  switch(theme) {
    case 'dark': document.body.classList.add("dark-theme"); currentTheme = 'dark'; break;
    case 'pastel': document.body.classList.add("pastel-theme"); currentTheme = 'pastel'; break;
    case 'boldred': document.body.classList.add("boldred-theme"); currentTheme = 'boldred'; break;
    case 'iceblue': document.body.classList.add("iceblue-theme"); currentTheme = 'iceblue'; break;
    default: currentTheme = 'light'; break;
  }

  document.documentElement.style.setProperty('--progress-ring', getComputedStyle(document.documentElement).getPropertyValue('--progress-ring'));
  document.documentElement.style.setProperty('--progress-color', getComputedStyle(document.documentElement).getPropertyValue('--progress-color'));

  const iconClass = themeIconMap[currentTheme] || "fa-sun";
  themeToggle.innerHTML = `<i class="fas ${iconClass}"></i>`;
  saveToStorage(STORAGE_KEYS.theme, currentTheme);
}

function cycleTheme() {
  const themes = ["light", "dark", "pastel", "boldred", "iceblue"];
  let nextIndex = themes.indexOf(currentTheme) + 1;
  if (nextIndex >= themes.length) nextIndex = 0;
  updateThemeIconAndBody(themes[nextIndex]);
}

/* MENU FUNCTIONS */
function toggleMenu() {
  if (sidebar.hasAttribute('hidden')) {
    sidebar.removeAttribute('hidden');
  } else {
    sidebar.setAttribute('hidden', '');
  }
}

function showPage(page) {
  homeSection.classList.add('hidden');
  workoutSection.classList.add('hidden');
  dayDetailPage.classList.add('hidden');
  calendarSection.classList.add('hidden');
  profileSection.classList.add('hidden');
  bmiSection.classList.add('hidden');
  activityPopup.classList.add('hidden');
  calendarPopup.classList.add('hidden');
  notesPopup.classList.add('hidden');
  bmiResultPopup.classList.add('hidden');

  switch(page) {
    case 'home': homeSection.classList.remove('hidden'); break;
    case 'workout': workoutSection.classList.remove('hidden'); break;
    case 'dayDetail': dayDetailPage.classList.remove('hidden'); break;
    case 'calendar': calendarSection.classList.remove('hidden'); break;
    case 'profile': profileSection.classList.remove('hidden'); break;
    case 'bmi': bmiSection.classList.remove('hidden'); break;
  }
  currentPage = page;
  mainContent.focus();

  if (window.innerWidth <= 900) {
    sidebar.setAttribute('hidden', '');
  }
}

/* USER PROFILE */
let userProfile = {
  profilePic: "",
  name: "Guest",
  dob: "",
  height: "",
  weight: "",
  age: "",
  gender: "",
  mobile: "",
  email: "",
  goal: ""
};

function loadProfile() {
  const profile = getFromStorage(STORAGE_KEYS.profile);
  if (profile) {
    userProfile = profile;
  }
  updateProfileUI();
}

function updateProfileUI() {
  profilePicPreview.src = userProfile.profilePic || "images/placeholder-profile.png";
  profilePicHeader.src = userProfile.profilePic || "images/placeholder-profile.png";
  usernameHeader.textContent = userProfile.name || "Guest";

  profileNameInput.value = userProfile.name || "";
  profileDOBInput.value = userProfile.dob || "";
  profileHeightInput.value = userProfile.height || "";
  profileWeightInput.value = userProfile.weight || "";
  profileAgeInput.value = userProfile.age || "";
  profileGenderSelect.value = userProfile.gender || "";
  profileMobileInput.value = userProfile.mobile || "";
  profileEmailInput.value = userProfile.email || "";
  profileGoalInput.value = userProfile.goal || "";
}

function saveProfile() {
  userProfile.name = profileNameInput.value.trim() || "Guest";
  userProfile.dob = profileDOBInput.value;
  userProfile.height = profileHeightInput.value;
  userProfile.weight = profileWeightInput.value;
  userProfile.age = profileAgeInput.value;
  userProfile.gender = profileGenderSelect.value;
  userProfile.mobile = profileMobileInput.value;
  userProfile.email = profileEmailInput.value;
  userProfile.goal = profileGoalInput.value;

  if (profilePicPreview.src.startsWith("data:image")) {
    userProfile.profilePic = profilePicPreview.src;
  }

  saveToStorage(STORAGE_KEYS.profile, userProfile);
  alert("Saved successfully");
  updateProfileUI();
  updateProfileHeader();
}

function deleteProfile() {
  if(confirm("Are you sure want to delete profile? This will clear all stored profile data.")){
    userProfile = { profilePic: "", name: "Guest", dob: "", height: "", weight: "", age: "", gender: "", mobile: "", email: "", goal: "" };
    localStorage.removeItem(STORAGE_KEYS.profile);
    alert("Deleted successfully");
    updateProfileUI();
    updateProfileHeader();
  }
}

function updateProfileHeader() {
  profilePicHeader.src = userProfile.profilePic || "images/placeholder-profile.png";
  usernameHeader.textContent = userProfile.name || "Guest";
}

profilePicInput.addEventListener("change", function(e){
  const file = this.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePicPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

/* DATE */
function updateCurrentDate() {
  const now = new Date();
  dateElem.textContent = formatCurrentDate(now);
}
setInterval(updateCurrentDate, 30 * 1000);
updateCurrentDate();

/* THEME INIT */
let storedTheme = getFromStorage(STORAGE_KEYS.theme);
updateThemeIconAndBody(storedTheme || "light");
themeToggle.addEventListener("click", cycleTheme);

/* MENU */
menuToggle.addEventListener("click", toggleMenu);

/* NAVIGATION */
linkHome.addEventListener("click", e => { e.preventDefault(); showPage("home"); });
linkWorkout.addEventListener("click", e => { e.preventDefault(); showPage("workout"); populateWorkoutDays(); });
linkCalendar.addEventListener("click", e => { e.preventDefault(); showPage("calendar"); renderCalendar(); });
linkProfile.addEventListener("click", e => { e.preventDefault(); showPage("profile"); });
linkBMI.addEventListener("click", e => { e.preventDefault(); showPage("bmi"); resetBMICalculatorUI(); });

// PERFECT - Button STAYS CENTERED FOREVER
goButton.addEventListener("click", () => {
  // DISABLE button immediately
  goButton.disabled = true;
  
  // SHOW dumbbell spinner INSTANTLY
  goButton.querySelector('.go-text').style.opacity = '0';
  goButton.querySelector('.go-arrow').style.opacity = '0';
  goButton.querySelector('.go-spinner').classList.remove('hidden');
  
  // 2 SECOND SPIN then navigate
  setTimeout(() => {
    // RESET button PERFECTLY CENTERED
    goButton.disabled = false;
    goButton.querySelector('.go-text').style.opacity = '1';
    goButton.querySelector('.go-arrow').style.opacity = '1';
    goButton.querySelector('.go-spinner').classList.add('hidden');
    
    // Navigate WITHOUT moving button
    showPage("workout");
    populateWorkoutDays();
  }, 2000);
});


/* WORKOUT PAGE */
function populateWorkoutDays() {
  daysContainer.innerHTML = "";
  workoutDays.forEach((day, index) => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${day.image || 'images/placeholder.png'}" alt="${day.name}" onerror="this.src='images/placeholder.png'">
      <div>${day.name}</div>
    `;
    card.setAttribute("data-index", index);
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");

    card.addEventListener("click", () => openDayDetails(index));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDayDetails(index);
      }
    });

    daysContainer.appendChild(card);
  });
}

function openDayDetails(dayIndex) {
  activeDayIndex = dayIndex;
  showPage("dayDetail");
  populateDayDetails(dayIndex);
}

const completedActivities = getFromStorage(STORAGE_KEYS.completedActivities) || {};

function markActivityDone(dayIndex, category, activityName, btnCircle, card) {
  const key = `${dayIndex}-${category}-${activityName}`;
  const todayKey = new Date().toISOString().slice(0, 10);
  completedActivities[key] = true;
  saveToStorage(STORAGE_KEYS.completedActivities, completedActivities);

  card.classList.add("completed");
  btnCircle.style.backgroundColor = "#3cb371";
  btnCircle.style.boxShadow = "0 0 6px #3cb371";
  btnCircle.setAttribute("aria-pressed", "true");

  updateProgressTracker(dayIndex);
  checkAndSaveWorkoutCompletion(dayIndex, todayKey);

  btnCircle.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.2)" }, { transform: "scale(1)" }],
    { duration: 400 }
  );
}

function unmarkActivityDone(dayIndex, category, activityName, btnCircle, card) {
  const key = `${dayIndex}-${category}-${activityName}`;
  delete completedActivities[key];
  saveToStorage(STORAGE_KEYS.completedActivities, completedActivities);
  card.classList.remove("completed");
  btnCircle.style.backgroundColor = "var(--accent-color)";
  btnCircle.style.boxShadow = "0 0 4px rgba(0,0,0,0.25)";
  btnCircle.setAttribute("aria-pressed", "false");

  updateProgressTracker(dayIndex);
  checkAndSaveWorkoutCompletion(dayIndex, new Date().toISOString().slice(0, 10));
}

function populateDayDetails(dayIndex) {
  const day = workoutDays[dayIndex];
  if (!day) return;

  resetDailyProgress(dayIndex);

  dayTitle.textContent = day.name;
  activitiesContainer.innerHTML = "";

  function createSection(title, category, items, outlineColor) {
    if (!items || items.length === 0) return;
    const section = document.createElement("section");
    section.setAttribute("aria-label", title);

    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.color = outlineColor;
    section.appendChild(heading);

    items.forEach(act => {
      const card = document.createElement("div");
      card.className = "activity-card";
      card.tabIndex = 0;

      const label = document.createElement("span");
      label.textContent = act.name;

      const doneCircle = document.createElement("span");
      doneCircle.className = "mark-done-circle";
      doneCircle.setAttribute("role","button");
      doneCircle.setAttribute("aria-pressed","false");
      doneCircle.setAttribute("tabindex","0");
      doneCircle.setAttribute("aria-label", `Mark ${act.name} as done`);

      const key = `${dayIndex}-${category}-${act.name}`;
      if (completedActivities[key]) {
        card.classList.add("completed");
        doneCircle.style.backgroundColor = "#3cb371";
        doneCircle.style.boxShadow = "0 0 6px #3cb371";
        doneCircle.setAttribute("aria-pressed", "true");
      } else {
        doneCircle.style.backgroundColor = "var(--accent-color)";
        doneCircle.style.boxShadow = "0 0 4px rgba(0,0,0,0.25)";
      }

      function toggleDone() {
        if (completedActivities[key]) {
          unmarkActivityDone(dayIndex, category, act.name, doneCircle, card);
        } else {
          markActivityDone(dayIndex, category, act.name, doneCircle, card);
        }
      }

      doneCircle.addEventListener("click", e => {
        e.stopPropagation();
        toggleDone();
      });
      doneCircle.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          toggleDone();
        }
      });

      card.addEventListener("click", () => openActivityDetail(dayIndex, category, act));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openActivityDetail(dayIndex, category, act);
        }
      });

      card.appendChild(label);
      card.appendChild(doneCircle);
      section.appendChild(card);
    });

    activitiesContainer.appendChild(section);
  }

  createSection("🔥 Warm-up", "warmup", day.warmup, "orange");
  createSection("💪 Workout", "workout", day.workout, "#4caf50");
  createSection("🧘 Yoga", "yoga", day.yoga, "purple");
  updateProgressTracker(dayIndex);
}

function resetDailyProgress(dayIndex) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString().slice(0, 10);
  
  // Check if we completed this day YESTERDAY (keep calendar icon, reset activities)
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayISO = yesterday.toISOString().slice(0, 10);
  
  let workoutCompletionByDate = getFromStorage(STORAGE_KEYS.workoutCompletionByDate) || {};
  
  // ONLY reset if yesterday was completed (new day fresh start)
  if (workoutCompletionByDate[yesterdayISO]) {
    // Reset activities for fresh start today
    ["warmup", "workout", "yoga"].forEach(cat => {
      if (workoutDays[dayIndex] && workoutDays[dayIndex][cat]) {
        workoutDays[dayIndex][cat].forEach(act => {
          const key = `${dayIndex}-${cat}-${act.name}`;
          delete completedActivities[key];
        });
      }
    });
    saveToStorage(STORAGE_KEYS.completedActivities, completedActivities);
    updateProgressTracker(dayIndex);
  }
}

function updateProgressTracker(dayIndex) {
  const day = workoutDays[dayIndex];
  if (!day) return;

  const totalActivities =
    (day.warmup ? day.warmup.length : 0) +
    (day.workout ? day.workout.length : 0) +
    (day.yoga ? day.yoga.length : 0);

  let doneCount = 0;
  function countDone(arr, cat) {
    if (!arr) return;
    arr.forEach(act => {
      const key = `${dayIndex}-${cat}-${act.name}`;
      if (completedActivities[key]) doneCount++;
    });
  }
  countDone(day.warmup, "warmup");
  countDone(day.workout, "workout");
  countDone(day.yoga, "yoga");

  const percent = totalActivities === 0 ? 0 : Math.floor((doneCount / totalActivities) * 100);

  // Update RADIAL progress (NEW)
  const radial = document.getElementById('radialProgress');
  if (radial) {
    const ring = radial.querySelector('.ring-progress');
    const fill = radial.querySelector('.fluid-fill');
    const text = radial.querySelector('.progress-text');
    
    if (ring && fill && text) {
      // Circle circumference for r=52 is 327
      const CIRC = 327;
      const offset = CIRC - (CIRC * percent / 100);
      
      ring.style.strokeDasharray = `${CIRC} ${CIRC}`;
      ring.style.strokeDashoffset = offset;
      fill.style.transform = `translateY(${100 - percent}%)`;
      text.textContent = `${percent}%`;
    }
  }
}

function checkAndSaveWorkoutCompletion(dayIndex, todayKey) {
  const day = workoutDays[dayIndex];
  if (!day) return;

  const totalActivities =
    (day.warmup ? day.warmup.length : 0) +
    (day.workout ? day.workout.length : 0) +
    (day.yoga ? day.yoga.length : 0);

  let doneCount = 0;
  ["warmup", "workout", "yoga"].forEach(cat => {
    if (day[cat]) {
      day[cat].forEach(act => {
        const key = `${dayIndex}-${cat}-${act.name}`;
        if (completedActivities[key]) doneCount++;
      });
    }
  });

  let workoutCompletionByDate = getFromStorage(STORAGE_KEYS.workoutCompletionByDate) || {};
  
  // ✅ USE THE PASSED todayKey (from markActivityDone)
  if (doneCount === totalActivities) {
    workoutCompletionByDate[todayKey] = true;
  } else {
    delete workoutCompletionByDate[todayKey];
  }
  saveToStorage(STORAGE_KEYS.workoutCompletionByDate, workoutCompletionByDate);
}

/* ACTIVITY POPUP */
let timerActive = false;
function openActivityDetail(dayIndex, category, activity) {
  activityPopupTitle.textContent = activity.name;

  if (activity.details && activity.details.image) {
    activityImage.src = activity.details.image;
    activityImage.alt = `${activity.name} image`;
  } else {
    activityImage.src = "images/placeholder.png";
    activityImage.alt = "Image not available";
  }

  activityReps.textContent = activity.details && activity.details.reps ? `Reps: ${activity.details.reps}` : "";
  activityInstructions.innerHTML = "";
  if (activity.details && activity.details.instructions) {
    activity.details.instructions.forEach(instr => {
      const li = document.createElement("li");
      li.textContent = instr;
      activityInstructions.appendChild(li);
    });
  }

  activityPopup.classList.remove("hidden");
  timerSeconds = 0;
  updateTimerDisplay();
  stopTimer();
  trapFocus(activityPopup);
  activeCategory = category;
}

closeActivityPopupBtn.addEventListener("click", () => {
  activityPopup.classList.add("hidden");
  stopTimer();
});

function updateTimerDisplay() {
  let minutes = Math.floor(timerSeconds / 60);
  let seconds = timerSeconds % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (timerActive) return;
  timerActive = true;
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  timerActive = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  timerSeconds = 0;
  updateTimerDisplay();
}

timerStart.addEventListener("click", startTimer);
timerStop.addEventListener("click", stopTimer);
timerReset.addEventListener("click", () => {
  resetTimer();
  stopTimer();
});

/* CALENDAR */
let calendarNotes = getFromStorage(STORAGE_KEYS.calendarNotes) || {};
let menstrualCycles = getFromStorage(STORAGE_KEYS.menstrualCycles) || {};
let workoutCompletionByDate = getFromStorage(STORAGE_KEYS.workoutCompletionByDate) || {};

function renderCalendar() {
  calendarBody.innerHTML = "";

  let year = calendarDate.getFullYear();
  let month = calendarDate.getMonth();

  // Set month-year text
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"];
  calendarMonthYear.textContent = `${monthNames[month]} ${year}`;

  // First day of month
  const firstDay = new Date(year, month, 1);
  const firstWeekDay = firstDay.getDay();

  // Days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Days in prev month
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // **TODAY'S DATE - CORRECTED**
  const today = new Date();  // CURRENT DATE (7th Dec)
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  // Build rows
  let dateNum = 1;
  let nextMonthDateNum = 1;
  let rows = 6;

  for (let r = 0; r < rows; r++) {
    const row = document.createElement("tr");

    for (let d = 0; d < 7; d++) {
      const cell = document.createElement("td");
      cell.tabIndex = -1;

      let cellDateNum = null;
      let cellDate = null;

      if (r === 0 && d < firstWeekDay) {
        // Prev month dates
        let prevDate = daysInPrevMonth - firstWeekDay + d + 1;
        cell.textContent = prevDate;
        cell.classList.add("inactive-day");
      } else if (dateNum > daysInMonth) {
        // Next month dates
        cell.textContent = nextMonthDateNum;
        cell.classList.add("inactive-day");
        nextMonthDateNum++;
      } else {
        // Current month dates
        cellDateNum = dateNum;
        cell.textContent = dateNum;
        cellDate = new Date(year, month, dateNum);
        const isoDate = cellDate.toISOString().slice(0,10);

        cell.dataset.date = isoDate;
        cell.tabIndex = 0;

        // **HIGHLIGHT TODAY CORRECTLY** ✅
        if (year === todayYear && month === todayMonth && dateNum === todayDay) {
          cell.classList.add("current-date");
        }

        // Icon container
        const iconContainer = document.createElement("div");
        iconContainer.className = "calendar-icons";

        // Mensural cycle icon
        if (menstrualCycles[isoDate]) {
          const icon = document.createElement("i");
          icon.className = "fas fa-tint calendar-icon icon-cycle";
          icon.title = "Mensural cycle";
          iconContainer.appendChild(icon);
        }

        // Note icon
        if (calendarNotes[isoDate]) {
          const icon = document.createElement("i");
          icon.className = "fas fa-sticky-note calendar-icon icon-note";
          icon.title = "Note";
          iconContainer.appendChild(icon);
        }

        // Workout completion icon
        if (workoutCompletionByDate[isoDate]) {
          const icon = document.createElement("i");  // FIXED: was "fas"
          icon.className = "fas fa-dumbbell calendar-icon icon-workout";
          icon.title = "Workout completed";
          iconContainer.appendChild(icon);
        }

        if (iconContainer.children.length > 0) {
          cell.appendChild(iconContainer);
        }

        // Click listener
        cell.addEventListener("click", () => openCalendarPopup(isoDate, cell));
        cell.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openCalendarPopup(isoDate, cell);
          }
        });

        dateNum++;
      }

      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}


prevMonthBtn.addEventListener("click", () => {
  calendarDate.setMonth(calendarDate.getMonth() -1);
  renderCalendar();
});
nextMonthBtn.addEventListener("click", () => {
  calendarDate.setMonth(calendarDate.getMonth() +1);
  renderCalendar();
});

function openCalendarPopup(isoDate, cell) {
  calendarPopup.classList.remove("hidden");
  calendarSelectedDate = isoDate;

  const isFemale = userProfile.gender === "female";
  if (isFemale) {
    if (menstrualCycles[isoDate]) {
      addCycleBtn.classList.add("hidden");
      removeCycleBtn.classList.remove("hidden");
    } else {
      addCycleBtn.classList.remove("hidden");
      removeCycleBtn.classList.add("hidden");
    }
  } else {
    addCycleBtn.classList.add("hidden");
    removeCycleBtn.classList.add("hidden");
  }

  calendarPopup.focus();
}

addCycleBtn.addEventListener("click", () => {
  if (!calendarSelectedDate) return;
  menstrualCycles[calendarSelectedDate] = true;
  saveToStorage(STORAGE_KEYS.menstrualCycles, menstrualCycles);
  calendarPopup.classList.add("hidden");
  renderCalendar();
});

removeCycleBtn.addEventListener("click", () => {
  if (!calendarSelectedDate) return;
  delete menstrualCycles[calendarSelectedDate];
  saveToStorage(STORAGE_KEYS.menstrualCycles, menstrualCycles);
  calendarPopup.classList.add("hidden");
  renderCalendar();
});

openNotesBtn.addEventListener("click", () => {
  calendarPopup.classList.add("hidden");
  openNotesPopup(calendarSelectedDate);
});

closeCalendarPopupBtn.addEventListener("click", () => {
  calendarPopup.classList.add("hidden");
});

function openNotesPopup(date) {
  notesPopup.classList.remove("hidden");
  calendarSelectedDate = date;
  notesTextarea.value = calendarNotes[date] || "";
  saveNotesBtn.focus();
}

closeNotesPopupBtn.addEventListener("click", () => {
  notesPopup.classList.add("hidden");
});

saveNotesBtn.addEventListener("click", () => {
  if (!calendarSelectedDate) return;
  let text = notesTextarea.value.trim();
  if (text) {
    calendarNotes[calendarSelectedDate] = text;
  } else {
    delete calendarNotes[calendarSelectedDate];
  }
  saveToStorage(STORAGE_KEYS.calendarNotes, calendarNotes);
  notesPopup.classList.add("hidden");
  renderCalendar();
});

deleteNotesBtn.addEventListener("click", () => {
  if (!calendarSelectedDate) return;
  delete calendarNotes[calendarSelectedDate];
  saveToStorage(STORAGE_KEYS.calendarNotes, calendarNotes);
  notesTextarea.value = "";
  notesPopup.classList.add("hidden");
  renderCalendar();
});

/* BMI */
function resetBMICalculatorUI() {
  bmiHeightInput.value = 170;
  bmiWeightInput.value = 70;
  bmiAgeInput.value = 25;
  heightValueDisplay.textContent = bmiHeightInput.value;
  weightValueDisplay.textContent = bmiWeightInput.value;
  bmiGenderRadios.forEach(r => (r.checked = false));
  updateSliderTrack();
}

function updateSliderTrack() {
  const heightPercent = ((bmiHeightInput.value - 50) / (250 - 50)) * 100;
  bmiHeightInput.style.background = `linear-gradient(to right, var(--accent-color) ${heightPercent}%, #ddd ${heightPercent}%)`;
  
  const weightPercent = ((bmiWeightInput.value - 10) / (200 - 10)) * 100;
  bmiWeightInput.style.background = `linear-gradient(to right, var(--accent-color) ${weightPercent}%, #ddd ${weightPercent}%)`;
}

bmiHeightInput.addEventListener("input", () => {
  heightValueDisplay.textContent = bmiHeightInput.value;
  updateSliderTrack();
});
bmiWeightInput.addEventListener("input", () => {
  weightValueDisplay.textContent = bmiWeightInput.value;
  updateSliderTrack();
});

ageDecreaseBtn.addEventListener("click", () => {
  let age = parseInt(bmiAgeInput.value, 10);
  if (age > 0) {
    bmiAgeInput.value = age - 1;
  }
});
ageIncreaseBtn.addEventListener("click", () => {
  let age = parseInt(bmiAgeInput.value, 10);
  if (age < 100) {
    bmiAgeInput.value = age + 1;
  }
});

calculateBMIBtn.addEventListener("click", () => {
  const gender = [...bmiGenderRadios].find(r => r.checked)?.value;
  const height = Number(bmiHeightInput.value);
  const weight = Number(bmiWeightInput.value);
  const age = Number(bmiAgeInput.value);

  if (!gender || !height || !weight || !age) {
    alert("Please fill all fields");
    return;
  }

  const heightMeters = height / 100;
  let bmi = weight / (heightMeters * heightMeters);
  bmi = Math.round(bmi * 10) / 10;

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  const minNormalWeight = Math.round(18.5 * heightMeters * heightMeters);
  const maxNormalWeight = Math.round(25 * heightMeters * heightMeters);

  bmiResultValue.innerHTML = `<strong>${bmi} - ${category}</strong>`;
  bmiRanges.innerHTML = `
  <div class="bmi-category">Underweight: < ${minNormalWeight}kg</div>
  <div class="bmi-category">Normal weight: ${minNormalWeight}kg - ${maxNormalWeight}kg</div>
  <div class="bmi-category">Overweight: > ${maxNormalWeight}kg</div>
  <div class="bmi-category">Obese: > 30 BMI</div>
`;


  bmiResultPopup.classList.remove("hidden");
  bmiResultPopup.focus();
});

closeBMIPopupBtn.addEventListener("click", () => {
  bmiResultPopup.classList.add("hidden");
});

/* Profile buttons */
saveProfileBtn.addEventListener("click", saveProfile);
deleteProfileBtn.addEventListener("click", deleteProfile);

// BACK BUTTON FIX
backToWorkoutBtn.addEventListener("click", () => {
  activeDayIndex = null;
  showPage("workout");
  populateWorkoutDays();
});

function trapFocus(element) {
  const focusableElements = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');
  if (!focusableElements.length) return;

  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];
  function handleKey(e) {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (e.key === "Escape") {
      element.classList.add("hidden");
      document.activeElement.blur();
      showPage(currentPage);
    }
  }
  element.addEventListener("keydown", handleKey);
  first.focus();
}

/* INITIALIZATION */
loadProfile();
updateProfileHeader();
renderCalendar();
updateSliderTrack();

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) sidebar.removeAttribute("hidden");
});