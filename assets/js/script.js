var apptSelectEl = document.querySelector('#appointment');
var nonSpecFormEl = document.querySelector('#non-specific-form');
var firstApptSpecEl = document.querySelectorAll('.first-appt');
var secondApptSpecEl = document.querySelectorAll('.second-appt');
var thirdApptSpecEl = document.querySelectorAll('.third-appt');
var postApptSpecEl = document.querySelectorAll('.post-appt');
var htmlNotesEl = document.querySelector('#html-notes');
var contApptEl = document.querySelector('#continuation');
var introCompletedEl = document.querySelector('#intro-completed');
var hwCompletedEl = document.querySelector('#hw-completed');
var hwPercentEl = document.querySelector('#hw-percent');

// * "Worked On" checkbox elements (1st Appt)
var dashNavEl = document.querySelector('#dashboard-navigation');
var extraPageEl = document.querySelector('#extra-pages');
var createCatEl = document.querySelector('#creating-categories');
var organizeCatEl = document.querySelector('#organizing-categories');
var createProdEl = document.querySelector('#creating-products');
var prodGridEl = document.querySelector('#products-grid');
var catProdEl = document.querySelector('#categorizing-products');

var htmlNotes = '';
var currentApptValue = '';
var contText = '';
var introText = '';
var hwCompletedText = '';
var hwPercentText = '';

var dashNavText = '';
var extraPageText = '';
var createCatText = '';
var organizeCatText = '';
var createProdText = '';
var prodGridText = '';
var catProdText = '';
var workedOnText = '';

function updateHtmlNotes() {
  if (currentApptValue && currentApptValue !== 'default') {
    contactedClient = `<p>
  <b>Contacted client for${contText} ${currentApptValue} Warhead Training appointment</b>
</p>`;
    htmlNotes = contactedClient + introText + hwCompletedText + hwPercentText + workedOnText;
  }

  htmlNotesEl.innerHTML = htmlNotes;
}

function resetHtmlNotes() {
  htmlNotes = '';
  contText = '';
  introText = '';
  hwCompletedText = '';
  hwPercentText = '';
}

function handleApptSelection() {
  apptSelectEl.addEventListener('change', function (event) {
    htmlNotes = '';
    resetHtmlNotes();
    var selectedValue = event.target.value;
    currentApptValue = selectedValue;

    var allForms = [firstApptSpecEl, secondApptSpecEl, thirdApptSpecEl, postApptSpecEl];

    allForms.forEach(function (nodeList) {
      nodeList.forEach(function (element) {
        element.setAttribute('class', 'hide-content');
      });
    });

    if (selectedValue === 'default') {
      nonSpecFormEl.setAttribute('class', 'hide-content');
    } else {
      nonSpecFormEl.setAttribute('class', 'show-content');
    }

    if (selectedValue === '1st Appointment' && firstApptSpecEl) {
      firstApptSpecEl.forEach(function (element) {
        element.setAttribute('class', 'show-content');
      });
    } else if (selectedValue === '2nd Appointment' && secondApptSpecEl) {
      secondApptSpecEl.forEach(function (element) {
        element.setAttribute('class', 'show-content');
      });
    } else if (selectedValue === '3rd Appointment' && thirdApptSpecEl) {
      thirdApptSpecEl.forEach(function (element) {
        element.setAttribute('class', 'show-content');
      });
    } else if (selectedValue === 'Post Appointment' && postApptSpecEl) {
      postApptSpecEl.forEach(function (element) {
        element.setAttribute('class', 'show-content');
      });
    }

    updateHtmlNotes();
  });
}

function setContAppt() {
  if (!contApptEl) {
    return;
  }

  contApptEl.addEventListener('change', function () {
    if (contApptEl.checked) {
      contText = ' continuation';
    } else {
      contText = '';
    }
    updateHtmlNotes();
  });
}

function setIntroCompleted() {
  if (!introCompletedEl) {
    return;
  }

  introCompletedEl.addEventListener('change', function () {
    if (currentApptValue !== '1st Appointment') {
      introText = '';
      return;
    }

    if (introCompletedEl.checked) {
      introText = '<p>Client did do an intro warhead call with onboarding.</p>';
    } else {
      introText = '<p>Client did not do an intro warhead call with onboarding.</p>';
    }
    updateHtmlNotes();
  });
}

function setHwCompleted() {
  if (!hwCompletedEl) {
    return;
  }

  hwCompletedEl.addEventListener('change', function () {
    if (hwCompletedEl.checked) {
      hwCompletedText = `<p>Homework has been completed by client.</p>`;
    } else {
      hwCompletedText = `<p>Homework has not been completed by client.</p>`;
    }

    updateHtmlNotes();
  });
}

function setHwPercent() {
  if (!hwPercentEl) {
    return;
  }

  hwPercentEl.addEventListener('input', function (event) {
    hwPercentText = `<p>${event.target.value}% of WH videos completed.</p>`;
    updateHtmlNotes();
  });
}

function setFirstApptWorkedOn() {
  var firstApptWorkedOnElements = [dashNavEl, extraPageEl, createCatEl, organizeCatEl, createProdEl, prodGridEl, catProdEl];

  firstApptWorkedOnElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateFirstApptWorkedOn();
        updateHtmlNotes();
      });
    }
  });
}

function updateFirstApptWorkedOn() {
  dashNavText = dashNavEl && dashNavEl.checked ? `<li>Dashboard/Account Navigation</li>` : ``;
  extraPageText = extraPageEl && extraPageEl.checked ? `<li>Extra Pages</li>` : ``;
  createCatText = createCatEl && createCatEl.checked ? `<li>Creating Categories</li>` : '';
  organizeCatText = organizeCatEl && organizeCatEl.checked ? `<li>Organizing Categories</li>` : '';
  createProdText = createProdEl && createProdEl.checked ? `<li>Creating Products</li>` : '';
  prodGridText = prodGridEl && prodGridEl.checked ? `<li>Products Grid</li>` : '';
  catProdText = catProdEl && catProdEl.checked ? `<li>Categorizing Products</li>` : '';

  if (dashNavEl.checked || extraPageEl.checked || createCatEl.checked || organizeCatEl.checked || createProdEl.checked || prodGridEl.checked || catProdEl.checked) {
    workedOnText = `Worked On: <ul> ${dashNavText}${extraPageText}${createCatText}${organizeCatText}${createProdText}${prodGridText}${catProdText}</ul>`;
  } else {
    workedOnText = '';
  }
}

handleApptSelection();
setContAppt();
setIntroCompleted();
setHwCompleted();
setHwPercent();
setFirstApptWorkedOn();

// ✅ TODO: User selects an appointment, the coresponding form appears and the first line of html is added to output panel
// TODO: As user fills out form, the appropriate html notes are added to the output panel
// TODO: All form inputs go back to default on page load
// TODO: When user clicks on the output panel, the notes are copied
