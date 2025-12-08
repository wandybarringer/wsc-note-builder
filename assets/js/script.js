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

// * "Worked On" checkbox elements (2nd Appt)
var discountsEl = document.querySelector('#discounts');
var checkoutSectionsEl = document.querySelector('#checkout-sections');
var payPalEl = document.querySelector('#paypal-apple-pay');
var testOrderEl = document.querySelector('#test-order');
var processOrderEl = document.querySelector('#process-order');

// * "Worked On" checkbox elements (3rd Appt)
var updatingProdEl = document.querySelector('#updating-products');
var unavailableProdEl = document.querySelector('#unavailable-products');

// * "Assigned Homework" checkbox elements (1st Appt)
var firstApptFinishVidEl = document.querySelector('#first-appt-finish-videos');
var reviewExtraPagesEl = document.querySelector('#review-extra-pages');
var removeProdEl = document.querySelector('#remove-products');
var practiceCatProdEl = document.querySelector('#practice-categorizing-products');
var practiceCreateCatdEl = document.querySelector('#practice-creating-categories');
var firstApptContinueVidEl = document.querySelector('#first-appt-continue-videos');

// * "Assigned Homework" checkbox elements (2nd Appt)
var secondApptFinishVidEl = document.querySelector('#second-appt-finish-videos');
var practiceDiscountsEl = document.querySelector('#practice-discounts');
var practiceOrdersEl = document.querySelector('#practice-orders');
var secondApptContinueVidEl = document.querySelector('#second-appt-continue-videos');

// * "Assigned Homework" checkbox elements (3rd Appt)
var thirdApptFinishVidEl = document.querySelector('#third-appt-finish-videos');
var practiceUpdateEl = document.querySelector('#practice-updating');
var allVidEl = document.querySelector('#all-videos');

var additionalNotesEl = document.querySelector('#additional-notes');
var registeredBusinessEl = document.querySelector('#registered-business');
var completionFormSentEl = document.querySelector('#completion-form-sent');
var completionFormSignedEl = document.querySelector('#completion-form-signed');
var completionFormSignedPromptEl = document.querySelector('#completion-form-signed-prompt');
var whyNotSignedEl = document.querySelector('#why-not-signed');
var whyNotSignedPromptEl = document.querySelector('#why-not-signed-prompt');
var nextAppointmentEl = document.querySelector('#next-appointment-date');
var nextTopicEl = document.querySelector('#next-topic');
var initialsEl = document.querySelector('#initials');

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
var completionFormSentText = '';
var completionFormSignedText = '';
var whyNotSignedText = '';
var completionFormText = '';
var nextAppointmentText = '';
var nextTopicText = '';
var initialsText = '';

var dashNavText = '';
var extraPageText = '';
var createCatText = '';
var organizeCatText = '';
var createProdText = '';
var prodGridText = '';
var catProdText = '';
var discountsText = '';
var checkoutSectionsText = '';
var payPalText = '';
var testOrderText = '';
var processOrderText = '';
var updatingProdText = '';
var unavailableProdText = '';

var firstApptFinishVidText = '';
var reviewExtraPagesText = '';
var removeProdText = '';
var practiceCatProdText = '';
var practiceCreateCatdText = '';
var firstApptContinueVidText = '';
var secondApptFinishVidText = '';
var practiceDiscountsText = '';
var practiceOrdersText = '';
var secondApptContinueVidText = '';
var thirdApptFinishVidText = '';
var practiceUpdateText = '';
var allVidText = '';

function updateHtmlNotes() {
  if (currentApptValue && currentApptValue !== 'default') {
    contactedClient = `<p>
  <b>Contacted client for${contText} ${currentApptValue} Warhead Training appointment</b>
</p>
`;
    htmlNotes = contactedClient + introText + hwCompletedText + hwPercentText + workedOnText + assignedHwText + additionalNotesText + registeredBusinessText + completionFormText + nextAppointmentText + nextTopicText + initialsText;
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
  nextTopicText = '';
}

function handleApptSelection() {
  apptSelectEl.addEventListener('change', function (event) {
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

// TODO: Change yes/no options to radio buttons
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
        updateWorkedOn();
        updateHtmlNotes();
      });
    }
  });
}

function setSecondApptWorkedOn() {
  var secondApptWorkedOnElements = [discountsEl, checkoutSectionsEl, payPalEl, testOrderEl, processOrderEl];

  secondApptWorkedOnElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateWorkedOn();
        updateHtmlNotes();
      });
    }
  });
}

function setThirdApptWorkedOn() {
  var thirdApptWorkedOnElements = [updatingProdEl, unavailableProdEl];

  thirdApptWorkedOnElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateWorkedOn();
        updateHtmlNotes();
      });
    }
  });
}

// TODO: Add a "show all" option to allow any appointment worked on items to be selected
function updateWorkedOn() {
  dashNavText = dashNavEl && dashNavEl.checked ? `\n  <li>Dashboard/Account Navigation</li>` : ``;
  extraPageText = extraPageEl && extraPageEl.checked ? `\n  <li>Extra Pages</li>` : ``;
  createCatText = createCatEl && createCatEl.checked ? `\n  <li>Creating Categories</li>` : '';
  organizeCatText = organizeCatEl && organizeCatEl.checked ? `\n  <li>Organizing Categories</li>` : '';
  createProdText = createProdEl && createProdEl.checked ? `\n  <li>Creating Products</li>` : '';
  prodGridText = prodGridEl && prodGridEl.checked ? `\n  <li>Products Grid</li>` : '';
  catProdText = catProdEl && catProdEl.checked ? `\n  <li>Categorizing Products</li>` : '';

  discountsText = discountsEl && discountsEl.checked ? `\n  <li>Discounts</li>` : '';
  checkoutSectionsText = checkoutSectionsEl && checkoutSectionsEl.checked ? `\n  <li>Checkout Sections</li>` : '';
  payPalText = payPalEl && payPalEl.checked ? `\n  <li>Linked PayPal/Apple Pay</li>` : '';
  testOrderText = testOrderEl && testOrderEl.checked ? `\n  <li>Creating a Test Order</li>` : '';
  processOrderText = processOrderEl && processOrderEl.checked ? `\n  <li>Processing Test Order</li>` : '';

  updatingProdText = updatingProdEl && updatingProdEl.checked ? `\n <li>Updating Doba Products</li>` : '';
  unavailableProdText = unavailableProdEl && unavailableProdEl.checked ? `\n <li>Managing Unavailable Products</li>` : '';

  if (dashNavEl.checked || extraPageEl.checked || createCatEl.checked || organizeCatEl.checked || createProdEl.checked || prodGridEl.checked || catProdEl.checked || discountsEl.checked || checkoutSectionsEl.checked || payPalEl.checked || testOrderEl.checked || processOrderEl.checked || updatingProdEl.checked || unavailableProdEl.checked) {
    workedOnText = `Worked On: 
<ul>${dashNavText}${extraPageText}${createCatText}${organizeCatText}${createProdText}${prodGridText}${catProdText}${discountsText}${checkoutSectionsText}${payPalText}${testOrderText}${processOrderText}${updatingProdText}${unavailableProdText}
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
        updateAssignedHw();
        updateHtmlNotes();
      });
    }
  });
}

function setSecondApptAssignedHw() {
  var secondApptAssignedHwElements = [secondApptFinishVidEl, practiceDiscountsEl, practiceOrdersEl, secondApptContinueVidEl];

  secondApptAssignedHwElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateAssignedHw();
        updateHtmlNotes();
      });
    }
  });
}

function setThirdApptAssignedHw() {
  var thirdApptAssignedHwElements = [thirdApptFinishVidEl, practiceUpdateEl, allVidEl];

  thirdApptAssignedHwElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateAssignedHw();
        updateHtmlNotes();
      });
    }
  });
}

function updateAssignedHw() {
  firstApptFinishVidText = firstApptFinishVidEl && firstApptFinishVidEl.checked ? `\n <li>Finish 1st appointment teachable videos</li>` : ``;
  reviewExtraPagesText = reviewExtraPagesEl && reviewExtraPagesEl.checked ? `\n <li>Review Extra Pages</li>` : ``;
  removeProdText = removeProdEl && removeProdEl.checked ? `\n <li>Remove unrelated products</li>` : '';
  practiceCatProdText = practiceCatProdEl && practiceCatProdEl.checked ? `\n <li>Practice categorizing products using guide</li>` : '';
  practiceCreateCatdText = practiceCreateCatdEl && practiceCreateCatdEl.checked ? `\n <li>Practice creating categories</li>` : '';
  firstApptContinueVidText = firstApptContinueVidEl && firstApptContinueVidEl.checked ? `\n <li>Continue watching teachable videos</li>` : '';

  secondApptFinishVidText = secondApptFinishVidEl && secondApptFinishVidEl.checked ? `\n <li>Finish 2nd appointment teachable videos</li>` : ``;
  practiceDiscountsText = practiceDiscountsEl && practiceDiscountsEl.checked ? `\n <li>Practice creating discounts</li>` : ``;
  practiceOrdersText = practiceOrdersEl && practiceOrdersEl.checked ? `\n <li>Practice making & processing test orders using guides</li>` : '';
  secondApptContinueVidText = secondApptContinueVidEl && secondApptContinueVidEl.checked ? `\n <li>Continue watching teachable videos<</li>` : '';

  thirdApptFinishVidText = thirdApptFinishVidEl && thirdApptFinishVidEl.checked ? `\n <li>Finish 3rd appointment teachable videos</li>` : '';
  practiceUpdateText = practiceUpdateEl && practiceUpdateEl.checked ? `\n <li>Practice updating products using guides</li>` : '';
  allVidText = allVidEl && allVidEl.checked ? `\n <li>Complete all videos</li>` : '';

  if (firstApptFinishVidEl.checked || reviewExtraPagesEl.checked || removeProdEl.checked || practiceCatProdEl.checked || practiceCreateCatdEl.checked || firstApptContinueVidEl.checked || secondApptFinishVidEl.checked || practiceDiscountsEl.checked || practiceOrdersEl.checked || secondApptContinueVidEl.checked || thirdApptFinishVidEl.checked || practiceUpdateEl.checked || allVidEl.checked) {
    assignedHwText = `Assigned homework: 
<ul>${firstApptFinishVidText}${reviewExtraPagesText}${removeProdText}${practiceCatProdText}${practiceCreateCatdText}${firstApptContinueVidText}${secondApptFinishVidText}${practiceDiscountsText}${practiceOrdersText}${secondApptContinueVidText}${thirdApptFinishVidText}${practiceUpdateText}${allVidText}
</ul>
`;
  } else {
    assignedHwText = '';
  }
}

function setAdditionalNotes() {
  additionalNotesEl.addEventListener('keyup', function (event) {
    additionalNotesText = `<p>
  Additional Notes: ${event.target.value}
</p>
`;
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
      registeredBusinessText = `<p>
  Client has started registering their business
</p>
`;
    } else {
      registeredBusinessText = `<p>
  Client has not started registering their business
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setCompletionForm() {
  var completionFormPrompts = [completionFormSignedPromptEl, whyNotSignedPromptEl];

  completionFormPrompts.forEach(function (element) {
    element.setAttribute('class', 'hide-content');
  });

  completionFormSentEl.addEventListener('change', function () {
    if (completionFormSentEl.checked) {
      completionFormSignedPromptEl.setAttribute('class', 'show-content');
    } else {
      completionFormSignedPromptEl.setAttribute('class', 'hide-content');
      whyNotSignedPromptEl.setAttribute('class', 'hide-content');
    }
    updateCompletionForm();
    updateHtmlNotes();
  });

  completionFormSignedEl.addEventListener('change', function () {
    if (completionFormSignedEl.checked) {
      whyNotSignedPromptEl.setAttribute('class', 'show-content');
    } else {
      whyNotSignedPromptEl.setAttribute('class', 'hide-content');
    }
    updateCompletionForm();
    updateHtmlNotes();
  });

  whyNotSignedEl.addEventListener('keyup', function (event) {
    whyNotSignedText = event.target.value;
    updateCompletionForm();
    updateHtmlNotes();
  });
}

function updateCompletionForm() {
  completionFormSentText = completionFormSentEl && completionFormSentEl.checked ? `Sent completion form.` : '';
  completionFormSignedText = completionFormSignedEl && completionFormSignedEl.checked ? ` <b>SIGNED</b> ` : ` <b>NOT SIGNED</b> `;

  if (completionFormSentEl.checked || (completionFormSentEl && completionFormSignedEl)) {
    completionFormText = `<p>
  ${completionFormSentText}${completionFormSignedText}${whyNotSignedText}
  <p>
  `;
  } else {
    completionFormText = '';
  }
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
  Next topic: <b>${event.target.value}</b>
</p>
`;
    }
    updateHtmlNotes();
  });
}

// TODO: Get initials from local storage and have it ADDED TO the html notes ON PAGE LOAD
function setInitials() {
  initialsEl.addEventListener('input', function (event) {
    initialsText = `<p> -${event.target.value}</p>`;
    var initials = event.target.value;
    localStorage.setItem('initials', initials);
    updateHtmlNotes();
  });
}

handleApptSelection();
setContAppt();
setIntroCompleted();
setHwCompleted();
setHwPercent();
setFirstApptWorkedOn();
setSecondApptWorkedOn();
setThirdApptWorkedOn();
setFirstApptAssignedHw();
setSecondApptAssignedHw();
setThirdApptAssignedHw();
setAdditionalNotes();
setRegisteredBusiness();
setCompletionForm();
setNextAppointment();
setNextTopic();
setInitials();

// ✅ TODO: User selects an appointment, the coresponding form appears and the first line of html is added to output panel
// TODO: As user fills out form, the appropriate html notes are added to the output panel
// TODO: All form inputs go back to default on page load/selecting another appointment
// TODO: When user clicks on the output panel, the notes are copied
