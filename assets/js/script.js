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

// * "Assigned Homework" checkbox elements (1st Appt)
var firstApptFinishVidEl = document.querySelector('#first-appt-finish-videos');
var reviewExtraPagesEl = document.querySelector('#review-extra-pages');
var removeProdEl = document.querySelector('#remove-products');
var practiceCatProdEl = document.querySelector('#practice-categorizing-products');
var practiceCreateCatdEl = document.querySelector('#practice-creating-categories');
var firstApptContinueVidEl = document.querySelector('#first-appt-continue-videos');

var additionalNotesEl = document.querySelector('#additional-notes');
var registeredBusinessEl = document.querySelector('#registered-business');
var nextAppointmentEl = document.querySelector('#next-appointment-date');
var nextTopicEl = document.querySelector('#next-topic');

var htmlNotes = '';
var currentApptValue = '';
var contText = '';
var introText = '';
var hwCompletedText = '';
var hwPercentText = '';
var workedOnText = '';
var assignedHwText = '';
var additionalNotesText = '';
var registeredBusinessText = '';
var nextAppointmentText = '';
var nextTopicText = '';

var dashNavText = '';
var extraPageText = '';
var createCatText = '';
var organizeCatText = '';
var createProdText = '';
var prodGridText = '';
var catProdText = '';

var firstApptFinishVidText = '';
var reviewExtraPagesText = '';
var removeProdText = '';
var practiceCatProdText = '';
var practiceCreateCatdText = '';
var firstApptContinueVidText = '';

function updateHtmlNotes() {
  if (currentApptValue && currentApptValue !== 'default') {
    contactedClient = `<p>
  <b>Contacted client for${contText} ${currentApptValue} Warhead Training appointment</b>
</p>
`;
    htmlNotes = contactedClient + introText + hwCompletedText + hwPercentText + workedOnText + assignedHwText + additionalNotesText + registeredBusinessText + nextAppointmentText;
  }

  htmlNotesEl.innerHTML = htmlNotes;
}

function resetHtmlNotes() {
  htmlNotes = '';
  contText = '';
  introText = '';
  hwCompletedText = '';
  hwPercentText = '';
  workedOnText = '';
  assignedHwText = '';
  additionalNotesText = '';
  registeredBusinessText = '';
  nextAppointmentText = '';
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
      introText = `<p>
  Client did do an intro warhead call with onboarding.
</p>
`;
    } else {
      introText = `<p>
  Client did not do an intro warhead call with onboarding.
</p>
`;
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
      hwCompletedText = `<p>
  Homework has been completed by client.
</p>
`;
    } else {
      hwCompletedText = `<p>
  Homework has not been completed by client.
</p>
`;
    }

    updateHtmlNotes();
  });
}

function setHwPercent() {
  if (!hwPercentEl) {
    return;
  }

  hwPercentEl.addEventListener('input', function (event) {
    hwPercentText = `<p>
  ${event.target.value}% of WH videos completed.
</p>
`;
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
    workedOnText = `Worked On: 
<ul> 
  ${dashNavText}
  ${extraPageText}
  ${createCatText}
  ${organizeCatText}
  ${createProdText}
  ${prodGridText}
  ${catProdText}
</ul>
`;
  } else {
    workedOnText = '';
  }
}

function setFirstApptAssignedHw() {
  var firstApptAssignedHwElements = [firstApptFinishVidEl, reviewExtraPagesEl, removeProdEl, practiceCatProdEl, practiceCreateCatdEl, firstApptContinueVidEl];

  firstApptAssignedHwElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateFirstApptAssignedHw();
        updateHtmlNotes();
      });
    }
  });
}

function updateFirstApptAssignedHw() {
  firstApptFinishVidText = firstApptFinishVidEl && firstApptFinishVidEl.checked ? `<li>Finish 1st appointment teachable videos</li>` : ``;
  reviewExtraPagesText = reviewExtraPagesEl && reviewExtraPagesEl.checked ? `<li>Review Extra Pages</li>` : ``;
  removeProdText = removeProdEl && removeProdEl.checked ? `<li>Remove unrelated products</li>` : '';
  practiceCatProdText = practiceCatProdEl && practiceCatProdEl.checked ? `<li>Practice categorizing products using guide</li>` : '';
  practiceCreateCatdText = practiceCreateCatdEl && practiceCreateCatdEl.checked ? `<li>Practice creating categories</li>` : '';
  firstApptContinueVidText = firstApptContinueVidEl && firstApptContinueVidEl.checked ? `<li>Continue watching teachable videos</li>` : '';

  if (firstApptFinishVidEl.checked || reviewExtraPagesEl.checked || removeProdEl.checked || practiceCatProdEl.checked || practiceCreateCatdEl.checked || firstApptContinueVidText.checked) {
    assignedHwText = `Assigned homework: <ul> ${firstApptFinishVidText}${reviewExtraPagesText}${removeProdText}${practiceCatProdText}${practiceCreateCatdText}${firstApptContinueVidText}</ul>`;
  } else {
    assignedHwText = '';
  }
}

function setAdditionalNotes() {
  additionalNotesEl.addEventListener('keyup', function (event) {
    additionalNotesText = `<p>Additional Notes: ${event.target.value}</p>`;
    updateHtmlNotes();
  });
}

function setRegisteredBusiness() {
  if (!registeredBusinessEl) {
    return;
  }

  registeredBusinessEl.addEventListener('change', function () {
    if (currentApptValue !== '1st Appointment') {
      registeredBusinessText = '';
      return;
    }

    if (registeredBusinessEl.checked) {
      registeredBusinessText = '<p>Client has started registering their business</p>';
    } else {
      registeredBusinessText = '<p>Client has not started registering their business</p>';
    }
    updateHtmlNotes();
  });
}

function setNextAppointment() {
  nextAppointmentEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      nextAppointmentText = '';
    } else {
      nextAppointmentText = `<p>
  Set next Warhead appointment for ${event.target.value}.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setNextTopic() {
  nextTopicEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      nextTopicText = '';
    } else {
      nextTopicText = `<p>
  Next topic: ${event.target.value}.
</p>
`;
    }
    updateHtmlNotes();
  });
}

handleApptSelection();
setContAppt();
setIntroCompleted();
setHwCompleted();
setHwPercent();
setFirstApptWorkedOn();
setFirstApptAssignedHw();
setAdditionalNotes();
setRegisteredBusiness();
setNextAppointment();
setNextTopic();

// ✅ TODO: User selects an appointment, the coresponding form appears and the first line of html is added to output panel
// TODO: As user fills out form, the appropriate html notes are added to the output panel
// TODO: All form inputs go back to default on page load
// TODO: When user clicks on the output panel, the notes are copied
