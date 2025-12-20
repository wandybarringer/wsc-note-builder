var apptSelectEl = document.querySelector('#appointment');
var nonSpecFormEl = document.querySelector('#non-specific-form');
var firstApptSpecEl = document.querySelectorAll('.first-appt');
var secondApptSpecEl = document.querySelectorAll('.second-appt');
var thirdApptSpecEl = document.querySelectorAll('.third-appt');
var postApptSpecEl = document.querySelectorAll('.post-appt');
var htmlNotesEl = document.querySelector('#html-notes');
var contApptEl = document.querySelector('#continuation');
var introNoEl = document.querySelector('#intro-no');
var introNoneEl = document.querySelector('#intro-none');
var introYesEl = document.querySelector('#intro-yes');
var hwNoEl = document.querySelector('#hw-no');
var hwNoneEl = document.querySelector('#hw-none');
var hwYesEl = document.querySelector('#hw-yes');
var hwPercentEl = document.querySelector('#hw-percent');
var workedOnEl = document.querySelector('#worked-on');
var assignedHwEl = document.querySelector('#assigned-hw');

var firstApptWorkedOnItems = document.querySelectorAll('div:has(> #dashboard-navigation), ' + 'div:has(> #extra-pages), ' + 'div:has(> #creating-categories), ' + 'div:has(> #organizing-categories), ' + 'div:has(> #creating-products), ' + 'div:has(> #products-grid), ' + 'div:has(> #categorizing-products) ');
var secondApptWorkedOnItems = document.querySelectorAll('div:has(> #discounts), ' + 'div:has(> #checkout-sections), ' + 'div:has(> #paypal-apple-pay), ' + 'div:has(> #test-order), ' + 'div:has(> #process-order) ');
var thirdApptWorkedOnItems = document.querySelectorAll('div:has(> #updating-products), ' + 'div:has(> #unavailable-products)');

var firstApptAssignedHwItems = document.querySelectorAll('div:has(> #first-appt-finish-videos), ' + 'div:has(> #review-extra-pages), ' + 'div:has(> #remove-products), ' + 'div:has(> #practice-categorizing-products), ' + 'div:has(> #practice-creating-categories), ' + 'div:has(> #first-appt-continue-videos)');
var secondApptAssignedHwItems = document.querySelectorAll('div:has(> #second-appt-finish-videos), ' + 'div:has(> #practice-discounts), ' + 'div:has(> #practice-orders), ' + 'div:has(> #second-appt-continue-videos)');
var thirdApptAssignedHwItems = document.querySelectorAll('div:has(> #third-appt-finish-videos), ' + 'div:has(> #practice-updating), ' + 'div:has(> #all-videos)');

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

// * "Worked On" checkbox elements (Post Appt)
var stripeEl = document.querySelector('#stripe');
var variantsEl = document.querySelector('#variants');
var unavailableCjProdEl = document.querySelector('#unavailable-cj-products');

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

// * "Post Checklist" checkbox elements
var businessEmailEl = document.querySelector('#business-email');
var timeZoneEl = document.querySelector('#time-zone');
var taxGroupEl = document.querySelector('#tax-group');
var modulesEl = document.querySelector('#modules');
var testItemsEl = document.querySelector('#test-items');
var brandsEl = document.querySelector('#brands');
var genericCategoriesEl = document.querySelector('#generic-categories');
var varientsCondensedEl = document.querySelector('#varients-condensed');
var taglineEl = document.querySelector('#tagline');

var additionalNotesEl = document.querySelector('#additional-notes');
var registeredBusinessNoEl = document.querySelector('#registered-no');
var registeredBusinessNoneEl = document.querySelector('#registered-none');
var registeredBusinessYesEl = document.querySelector('#registered-yes');

var completionFormSentEl = document.querySelector('#completion-form-sent');
var cfSignedElNo = document.querySelector('#cf-signed-no');
var cfSignedElNone = document.querySelector('#cf-signed-none');
var cfSignedElYes = document.querySelector('#cf-signed-yes');
var completionFormSignedPromptEl = document.querySelector('#completion-form-signed-prompt');
var whyNotSignedEl = document.querySelector('#why-not-signed');
var whyNotSignedPromptEl = document.querySelector('#why-not-signed-prompt');

var bookedSmEl = document.querySelector('#booked-sm');
var sentSmGuidePromptEl = document.querySelector('#sent-sm-guide-prompt');
var sentSmGuideEl = document.querySelector('#sent-sm-guide');
var enrolledSmPromptEl = document.querySelector('#enrolled-sm-prompt');
var enrolledSmEl = document.querySelector('#enrolled-sm');
var smTechPromptEl = document.querySelector('#sm-tech-assigned-prompt');
var smTechEl = document.querySelector('#sm-tech');
var smApptPromptEl = document.querySelector('#sm-appointment-date-prompt');
var smApptEl = document.querySelector('#sm-appointment-date');

var nextApptDatePromptEl = document.querySelector('#next-appt-date-prompt');
var nextTopicPromptEl = document.querySelector('#next-topic-prompt');
var liveNoEl = document.querySelector('#live-no');
var liveNoneEl = document.querySelector('#live-none');
var liveYesEl = document.querySelector('#live-yes');
var additionalTrainingPromptEl = document.querySelector('#additional-training-prompt');
var additionalTrainingEl = document.querySelector('#additional-training');
var smReminderEl = document.querySelector('#sm-reminder');

var nextAppointmentEl = document.querySelector('#next-appointment-date');
var nextTopicEl = document.querySelector('#next-topic');
var initialsEl = document.querySelector('#initials');
var copyBtnEl = document.querySelector('#copy-btn');
var showAllWorkedOnContEl = document.querySelector('#show-all-worked-on-container');
var showAllAssignedHwContEl = document.querySelector('#show-all-assigned-hw-container');
var showAllWorkedOnEl = document.querySelector('#show-all-worked-on');
var showAllAssignedHwEl = document.querySelector('#show-all-assigned-hw');
var customWorkedOnChecboxEl = document.querySelector('#custom-worked-on-checkbox');
var customWorkedOnTextEl = document.querySelector('#custom-worked-on-text');

// * Dark/Light mode toggle elements

var toggleSwitch = document.querySelector('#dark-light-toggle');
// TODO: Put into function, call and make sure to reset position and theme to light - save theme to local storage
toggleSwitch.addEventListener('change', function () {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

var htmlNotes = '';
var currentApptValue = '';
var contText = '';
var introText = '';
var hwCompletedText = '';
var hwPercentText = '';
var hwText = '';

var workedOnText = '';
var postWorkedOnText = '';
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
var stripeText = '';
var variantsText = '';
var unavailableCjProdText = '';
var customWorkedonText = '';

var assignedHwText = '';
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

var postChecklistText = '';
var businessEmailText = '';
var timeZoneText = '';
var taxGroupText = '';
var modulesText = '';
var testItemsText = '';
var brandsText = '';
var genericCategoriesText = '';
var varientsCondensedText = '';
var taglineText = '';

var additionalNotesText = '';
var registeredBusinessText = '';

var completionFormSentText = '';
var completionFormSignedText = '';
var whyNotSignedText = '';
var completionFormText = '';

var sentSmGuideText = '';
var enrolledSmText = '';
var smTechText = '';
var smApptText = '';
var smText = '';

var liveText = '';
var additionalTrainingText = '';
var smReminderText = '';

var nextAppointmentText = '';
var nextTopicText = '';
var storedInitials = '';
var initialsText = '';

function copyHtmlNotes() {
  copyBtnEl.addEventListener('click', function () {
    navigator.clipboard.writeText(htmlNotesEl.value);
  });
}

function setShowAllWorkedOn() {
  if (!showAllWorkedOnEl) {
    return;
  }

  var allWorkedOnNodeLists = [firstApptWorkedOnItems, secondApptWorkedOnItems, thirdApptWorkedOnItems];

  showAllWorkedOnEl.addEventListener('change', function () {
    if (showAllWorkedOnEl.checked) {
      allWorkedOnNodeLists.forEach(function (nodeList) {
        nodeList.forEach(function (element) {
          element.classList.remove('hide-content');
          element.classList.add('show-content');
        });
      });
    } else {
      updateApptVisibility();
    }
  });
}

function setShowAllAssignedHw() {
  if (!showAllAssignedHwEl) {
    return;
  }

  var allAssignedHwNodeLists = [firstApptAssignedHwItems, secondApptAssignedHwItems, thirdApptAssignedHwItems];

  showAllAssignedHwEl.addEventListener('change', function () {
    if (showAllAssignedHwEl.checked) {
      allAssignedHwNodeLists.forEach(function (nodeList) {
        nodeList.forEach(function (element) {
          element.classList.remove('hide-content');
          element.classList.add('show-content');
        });
      });
    } else {
      updateApptVisibility();
    }
  });
}

function updateHtmlNotes() {
  if (currentApptValue && currentApptValue !== 'default') {
    contactedClient = `<p>
  <b>Contacted client for${contText} ${currentApptValue} Warhead Training appointment</b>
</p>
`;
    htmlNotes = contactedClient + introText + hwText + workedOnText + postWorkedOnText + assignedHwText + postChecklistText + additionalNotesText + registeredBusinessText + completionFormText + smText + liveText + additionalTrainingText + nextAppointmentText + nextTopicText + smReminderText + initialsText;
  }

  htmlNotesEl.value = htmlNotes;
}

function resetHtmlNotes() {
  htmlNotes = '';
  contText = '';
  introText = '';
  hwText = '';
  workedOnText = '';
  postWorkedOnText = '';
  assignedHwText = '';
  postChecklistText = '';
  additionalNotesText = '';
  registeredBusinessText = '';
  smText = '';
  nextAppointmentText = '';
  nextTopicText = '';

  htmlNotesEl.value = '';

  var nonSpecForms = document.querySelectorAll('#non-specific-form');

  nonSpecForms.forEach((form) => {
    form.reset();
  });
}

function updateApptVisibility() {
  var selectedValue = apptSelectEl.value;
  var nextPrompts = [nextApptDatePromptEl, nextTopicPromptEl];
  currentApptValue = selectedValue;

  var allForms = [firstApptSpecEl, secondApptSpecEl, thirdApptSpecEl, postApptSpecEl];

  allForms.forEach(function (nodeList) {
    nodeList.forEach(function (element) {
      element.classList.remove('show-content');
      element.classList.add('hide-content');
    });
  });

  if (!showAllWorkedOnEl.checked) {
    var allWorkedOnNodeLists = [firstApptWorkedOnItems, secondApptWorkedOnItems, thirdApptWorkedOnItems];

    allWorkedOnNodeLists.forEach(function (nodeList) {
      nodeList.forEach(function (element) {
        element.classList.remove('show-content');
        element.classList.add('hide-content');
      });
    });
  }

  var allAssignedHwNodeLists = [firstApptAssignedHwItems, secondApptAssignedHwItems, thirdApptAssignedHwItems];

  if (!showAllAssignedHwEl.checked) {
    allAssignedHwNodeLists.forEach(function (nodeList) {
      nodeList.forEach(function (element) {
        element.classList.remove('show-content');
        element.classList.add('hide-content');
      });
    });
  }

  if (selectedValue === 'default') {
    nonSpecFormEl.classList.remove('show-content');
    nonSpecFormEl.classList.add('hide-content');
  } else {
    nonSpecFormEl.classList.remove('hide-content');
    nonSpecFormEl.classList.add('show-content');
  }

  if (selectedValue === 'Post Appointment') {
    nextPrompts.forEach(function (element) {
      element.classList.remove('show-content');
      element.classList.add('hide-content');
    });
  } else {
    nextPrompts.forEach(function (element) {
      element.classList.remove('hide-content');
      element.classList.add('show-content');
    });
  }

  var selectedAssignedHwItems = null;

  if (selectedValue === '1st Appointment') {
    workedOnEl.classList.remove('hide-content');
    workedOnEl.classList.add('show-content');
    assignedHwEl.classList.remove('hide-content');
    assignedHwEl.classList.add('show-content');
    showAllWorkedOnContEl.setAttribute('class', 'show-content');
    showAllAssignedHwContEl.setAttribute('class', 'show-content');
    firstApptSpecEl.forEach(function (element) {
      element.classList.remove('show-content');
      element.classList.add('show-content');
    });
    selectedAssignedHwItems = firstApptAssignedHwItems;
  } else if (selectedValue === '2nd Appointment') {
    workedOnEl.classList.remove('hide-content');
    workedOnEl.classList.add('show-content');
    assignedHwEl.classList.remove('hide-content');
    assignedHwEl.classList.add('show-content');
    showAllWorkedOnContEl.setAttribute('class', 'show-content');
    showAllAssignedHwContEl.setAttribute('class', 'show-content');
    secondApptSpecEl.forEach(function (element) {
      element.classList.remove('show-content');
      element.classList.add('show-content');
    });
    selectedAssignedHwItems = secondApptAssignedHwItems;
  } else if (selectedValue === '3rd Appointment') {
    workedOnEl.classList.remove('hide-content');
    workedOnEl.classList.add('show-content');
    assignedHwEl.classList.remove('hide-content');
    assignedHwEl.classList.add('show-content');
    showAllWorkedOnContEl.setAttribute('class', 'show-content');
    showAllAssignedHwContEl.setAttribute('class', 'show-content');
    thirdApptSpecEl.forEach(function (element) {
      element.classList.remove('hide-content');
      element.classList.add('show-content');
    });
    selectedAssignedHwItems = thirdApptAssignedHwItems;
  } else if (selectedValue === 'Post Appointment') {
    workedOnEl.classList.remove('show-content');
    workedOnEl.classList.add('hide-content');
    assignedHwEl.classList.remove('show-content');
    assignedHwEl.classList.add('hide-content');
    showAllWorkedOnContEl.setAttribute('class', 'hide-content');
    showAllAssignedHwContEl.setAttribute('class', 'hide-content');

    postApptSpecEl.forEach(function (element) {
      element.classList.remove('hide-content');
      element.classList.add('show-content');
    });
  }

  if (selectedAssignedHwItems && !showAllAssignedHwEl.checked) {
    selectedAssignedHwItems.forEach(function (element) {
      element.classList.remove('hide-content');
      element.classList.add('show-content');
    });
  }

  updateHtmlNotes();
}

function handleApptSelection() {
  apptSelectEl.addEventListener('change', function (event) {
    resetHtmlNotes();
    setInitials();
    updateApptVisibility();
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
  var introRadioElements = [introNoEl, introNoneEl, introYesEl];

  introRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (currentApptValue !== '1st Appointment') {
        introText = '';
        updateHtmlNotes();
        return;
      }

      if (introYesEl.checked) {
        introText = `<p>
  Client did an intro warhead call with onboarding.
</p>`;
      } else if (introNoEl.checked) {
        introText = `<p>
  Client didn't do an intro warhead call with onboarding.
</p>`;
      } else if (introNoneEl.checked) {
        introText = '';
      } else {
        introText = '';
      }

      updateHtmlNotes();
    });
  });
}

function setHwCompleted() {
  var hwRadioElements = [hwNoEl, hwNoneEl, hwYesEl];

  hwRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (hwYesEl.checked) {
        hwCompletedText = `Homework has been completed by client.`;
      } else if (hwNoEl.checked) {
        hwCompletedText = `Homework has not been completed by client.`;
      } else if (hwNoneEl.checked) {
        hwCompletedText = '';
      } else {
        hwCompletedText = '';
      }
      updateHw();
      updateHtmlNotes();
    });
  });
}

function setHwPercent() {
  if (!hwPercentEl) {
    return;
  }

  hwPercentEl.addEventListener('input', function (event) {
    hwPercentText = `${event.target.value}% of WH videos completed.`;
    updateHw();
    updateHtmlNotes();
  });
}

function updateHw() {
  if (hwCompletedText || hwPercentText) {
    hwText = `<p>
  ${hwCompletedText} ${hwPercentText}
<p>
  `;
  } else {
    hwText = '';
  }
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

function setCustomWorkedOn() {
  let customKeyupListener = null;

  customWorkedOnChecboxEl.addEventListener('change', function () {
    if (customWorkedOnChecboxEl.checked) {
      if (customKeyupListener === null) {
        customKeyupListener = function (event) {
          const value = event.target.value.trim();
          customWorkedonText = value !== '' ? `\n <li>${value}</li>` : '';
          updateWorkedOn();
          updateHtmlNotes();
        };
      }
      customWorkedOnTextEl.addEventListener('keyup', customKeyupListener);
      const value = customWorkedOnTextEl.value.trim();
      customWorkedonText = value !== '' ? `\n <li>${value}</li>` : '';
      updateWorkedOn();
      updateHtmlNotes();
    } else {
      if (customKeyupListener) {
        customWorkedOnTextEl.removeEventListener('keyup', customKeyupListener);
      }
      customWorkedonText = '';
      updateWorkedOn();
      updateHtmlNotes();
    }
  });
}

function setPostApptWorkedOn() {
  var postApptWorkedOnElements = [stripeEl, variantsEl, unavailableCjProdEl];

  postApptWorkedOnElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updatePostWorkedOn();
        updateHtmlNotes();
      });
    }
  });
}

function updateWorkedOn() {
  dashNavText = dashNavEl && dashNavEl.checked ? `\n <li>Dashboard/Account Navigation</li>` : ``;
  extraPageText = extraPageEl && extraPageEl.checked ? `\n <li>Extra Pages</li>` : ``;
  createCatText = createCatEl && createCatEl.checked ? `\n <li>Creating Categories</li>` : '';
  organizeCatText = organizeCatEl && organizeCatEl.checked ? `\n <li>Organizing Categories</li>` : '';
  createProdText = createProdEl && createProdEl.checked ? `\n <li>Creating Products</li>` : '';
  prodGridText = prodGridEl && prodGridEl.checked ? `\n <li>Products Grid</li>` : '';
  catProdText = catProdEl && catProdEl.checked ? `\n <li>Categorizing Products</li>` : '';

  discountsText = discountsEl && discountsEl.checked ? `\n <li>Discounts</li>` : '';
  checkoutSectionsText = checkoutSectionsEl && checkoutSectionsEl.checked ? `\n <li>Checkout Sections</li>` : '';
  payPalText = payPalEl && payPalEl.checked ? `\n <li>Linked PayPal/Apple Pay</li>` : '';
  testOrderText = testOrderEl && testOrderEl.checked ? `\n <li>Creating a Test Order</li>` : '';
  processOrderText = processOrderEl && processOrderEl.checked ? `\n <li>Processing Test Order</li>` : '';

  updatingProdText = updatingProdEl && updatingProdEl.checked ? `\n <li>Updating Doba Products</li>` : '';
  unavailableProdText = unavailableProdEl && unavailableProdEl.checked ? `\n <li>Managing Unavailable Products</li>` : '';

  if (dashNavEl.checked || extraPageEl.checked || createCatEl.checked || organizeCatEl.checked || createProdEl.checked || prodGridEl.checked || catProdEl.checked || discountsEl.checked || checkoutSectionsEl.checked || payPalEl.checked || testOrderEl.checked || processOrderEl.checked || updatingProdEl.checked || unavailableProdEl.checked || customWorkedOnChecboxEl.checked) {
    workedOnText = `Worked On: 
<ul>${dashNavText}${extraPageText}${createCatText}${organizeCatText}${createProdText}${prodGridText}${catProdText}${discountsText}${checkoutSectionsText}${payPalText}${testOrderText}${processOrderText}${updatingProdText}${unavailableProdText}${customWorkedonText}
</ul>
`;
  } else {
    workedOnText = '';
  }
}

function updatePostWorkedOn() {
  stripeText = stripeEl && stripeEl.checked ? `\n <li>Linked Stripe</li>` : ``;
  variantsText = variantsEl && variantsEl.checked ? `\n <li>Condensing variants</li>` : ``;
  unavailableCjProdText = unavailableCjProdEl && unavailableCjProdEl.checked ? `\n <li>Managing unavailable products from CJ</li>` : ``;

  if (stripeEl.checked || variantsEl.checked || unavailableCjProdEl.checked) {
    postWorkedOnText = `Worked On/Reviewed:
<ul>${stripeText}${variantsText}${unavailableCjProdText}
</ul>
`;
  } else {
    postWorkedOnText = '';
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

function setPostChecklist() {
  var postChecklistsElements = [businessEmailEl, timeZoneEl, taxGroupEl, modulesEl, testItemsEl, brandsEl, genericCategoriesEl, varientsCondensedEl, taglineEl];

  postChecklistsElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updatePostChecklist();
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

function updatePostChecklist() {
  businessEmailText = businessEmailEl && businessEmailEl.checked ? `\n <li>Business email appears on Settings & Extra Forms</li>` : '';
  timeZoneText = timeZoneEl && timeZoneEl.checked ? `\n <li>Time-zone is set to client's</li>` : '';
  taxGroupText = taxGroupEl && taxGroupEl.checked ? `\n <li>Default Tax Group set</li>` : '';
  modulesText = modulesEl && modulesEl.checked ? `\n <li>Shipping & Payment Modules are set</li>` : '';
  testItemsText = testItemsEl && testItemsEl.checked ? `\n <li>Test items are removed</li>` : '';
  brandsText = brandsEl && brandsEl.checked ? `\n <li>Unrelated brands removed</li>` : '';
  genericCategoriesText = genericCategoriesEl && genericCategoriesEl.checked ? `\n <li>Generic categories removed</li>` : '';
  varientsCondensedText = varientsCondensedEl && varientsCondensedEl.checked ? `\n <li>Variants are condensed</li>` : '';
  taglineText = taglineEl && taglineEl.checked ? `\n <li>Removed tagline placeholder text</li>` : '';

  if (businessEmailText || timeZoneText || taxGroupText || modulesText || testItemsText || brandsText || genericCategoriesText || varientsCondensedText || taglineText) {
    postChecklistText = `Post Training Checklist:
<ul>${businessEmailText}${timeZoneText}${taxGroupText}${modulesText}${testItemsText}${brandsText}${genericCategoriesText}${varientsCondensedText}${taglineText}
<ul>
`;
  } else {
    postChecklistText = '';
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
  var registeredRadioElements = [registeredBusinessNoEl, registeredBusinessNoneEl, registeredBusinessYesEl];

  registeredRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (currentApptValue !== '1st Appointment') {
        registeredBusinessText = '';
        updateHtmlNotes();
        return;
      }

      if (registeredBusinessYesEl.checked) {
        registeredBusinessText = `<p>
  Client <b>has</b> started registering business.
</p>`;
      } else if (registeredBusinessNoEl.checked) {
        registeredBusinessText = `<p>
  Client <b>has not</b> started registering business.
</p>`;
      } else if (registeredBusinessNoneEl.checked) {
        registeredBusinessText = '';
      } else {
        registeredBusinessText = '';
      }

      updateHtmlNotes();
    });
  });
}

function setCompletionForm() {
  var completionFormPrompts = [completionFormSignedPromptEl, whyNotSignedPromptEl];

  completionFormPrompts.forEach(function (element) {
    element.setAttribute('class', 'hide-content');
  });

  completionFormSentEl.addEventListener('change', function () {
    if (currentApptValue !== '3rd Appointment') {
      completionFormSentText = '';
      updateHtmlNotes();
      return;
    }

    if (completionFormSentEl.checked) {
      completionFormSignedPromptEl.setAttribute('class', 'show-content');
      completionFormSentText = `Sent completion form.`;
    } else {
      completionFormSignedPromptEl.setAttribute('class', 'hide-content');
      whyNotSignedPromptEl.setAttribute('class', 'hide-content');
      completionFormSentText = ``;
      completionFormSignedText = '';
      whyNotSignedText = '';
    }
    updateCompletionForm();
    updateHtmlNotes();
  });

  var cfSignedRadioElements = [cfSignedElNo, cfSignedElNone, cfSignedElYes];

  cfSignedRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (currentApptValue !== '3rd Appointment') {
        completionFormSignedText = '';
        updateHtmlNotes();
        return;
      }

      if (cfSignedElYes.checked) {
        whyNotSignedPromptEl.setAttribute('class', 'hide-content');
        completionFormSignedText = ` <b>SIGNED</b> `;
      } else if (cfSignedElNo.checked) {
        whyNotSignedPromptEl.setAttribute('class', 'show-content');
        completionFormSignedText = ` <b>NOT SIGNED</b> `;
      } else if (cfSignedElNone.checked) {
        completionFormSignedText = '';
      } else {
        completionFormSignedText = '';
      }
      updateCompletionForm();
      updateHtmlNotes();
    });
  });

  whyNotSignedEl.addEventListener('keyup', function (event) {
    whyNotSignedText = event.target.value;
    updateCompletionForm();
    updateHtmlNotes();
  });
}

function updateCompletionForm() {
  if (completionFormSentText) {
    completionFormText = `<p>
  ${completionFormSentText}${completionFormSignedText}${whyNotSignedText}
  <p>
  `;
  } else {
    completionFormText = '';
  }
}

function setSupplierManagement() {
  var smPrompts = [sentSmGuidePromptEl, enrolledSmPromptEl, smTechPromptEl, smApptPromptEl];

  smPrompts.forEach(function (element) {
    element.setAttribute('class', 'hide-content');
  });

  bookedSmEl.addEventListener('change', function () {
    if (bookedSmEl.checked) {
      smPrompts.forEach(function (element) {
        element.setAttribute('class', 'show-content');
      });
    } else {
      smPrompts.forEach(function (element) {
        element.setAttribute('class', 'hide-content');
        smText = '';
        updateHtmlNotes();
      });
    }
  });

  sentSmGuideEl.addEventListener('change', function () {
    if (currentApptValue !== '3rd Appointment') {
      sentSmGuideText = '';
      updateHtmlNotes();
      return;
    }

    if (sentSmGuideEl.checked) {
      sentSmGuideText = `Sent client SM How to Guide PDF.`;
    } else {
      sentSmGuideText = '';
    }

    updateSupplierManagement();
    updateHtmlNotes();
  });

  enrolledSmEl.addEventListener('change', function () {
    if (currentApptValue !== '3rd Appointment') {
      enrolledSmText = '';
      updateHtmlNotes();
      return;
    }

    if (enrolledSmEl.checked) {
      enrolledSmText = `Enrolled client in SM Appointment Training course.`;
    } else {
      enrolledSmText = '';
    }

    updateSupplierManagement();
    updateHtmlNotes();
  });

  smTechEl.addEventListener('keyup', function (event) {
    smTechText = event.target.value;
    updateSupplierManagement();
    updateHtmlNotes();
  });

  smApptEl.addEventListener('keyup', function (event) {
    smApptText = event.target.value;
    updateSupplierManagement();
    updateHtmlNotes();
  });
}

function updateSupplierManagement() {
  smText = `<p>
  ${sentSmGuideText} ${enrolledSmText} Booked SM Appointment with ${smTechText} on ${smApptText}.
<p>
`;
}

function setPostApptExtras() {
  var liveRadioElements = [liveNoEl, liveNoneEl, liveYesEl];

  liveRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (liveYesEl.checked) {
        additionalTrainingPromptEl.setAttribute('class', 'show-content');
        nextApptDatePromptEl.setAttribute('class', 'hide-content');
        nextTopicPromptEl.setAttribute('class', 'hide-content');
        liveText = `<p>
  <b>Client's website is live.</b>
<p>
`;
      } else if (liveNoEl.checked) {
        additionalTrainingPromptEl.setAttribute('class', 'hide-content');
        nextApptDatePromptEl.setAttribute('class', 'show-content');
        nextTopicPromptEl.setAttribute('class', 'show-content');
        liveText = `<p>
  <b>Client's website is not live yet</b>
<p>
`;
      } else if (liveNoneEl.checked) {
        additionalTrainingPromptEl.setAttribute('class', 'hide-content');
        nextApptDatePromptEl.setAttribute('class', 'hide-content');
        nextTopicPromptEl.setAttribute('class', 'hide-content');
        liveText = '';
      } else {
        additionalTrainingPromptEl.setAttribute('class', 'hide-content');
        nextApptDatePromptEl.setAttribute('class', 'hide-content');
        nextTopicPromptEl.setAttribute('class', 'hide-content');
        liveText = '';
      }
      updateHtmlNotes();
    });
  });

  additionalTrainingEl.addEventListener('change', function () {
    if (additionalTrainingEl.checked) {
      nextApptDatePromptEl.setAttribute('class', 'show-content');
      nextTopicPromptEl.setAttribute('class', 'show-content');
      additionalTrainingText = `<p>
  Client requesting additional training.
<p>
`;
    } else {
      nextApptDatePromptEl.setAttribute('class', 'hide-content');
      nextTopicPromptEl.setAttribute('class', 'hide-content');
      additionalTrainingText = '';
    }
    updateHtmlNotes();
  });

  smReminderEl.addEventListener('keyup', function (event) {
    if (!event.target.value) {
      smReminderText = '';
    } else {
      smReminderText = `<p>
  Reminded client about Supplier Management Appointment on ${event.target.value}
<p>
`;
    }

    updateHtmlNotes();
  });
}

function setNextAppointment() {
  nextAppointmentEl.addEventListener('input', function (event) {
    var nextApptOriginalStr = event.target.value;
    var nextApptNewStr = nextApptOriginalStr.replace('⋅', ', ');

    if (!event.target.value) {
      nextAppointmentText = '';
    } else {
      nextAppointmentText = `<p>
  Set next Warhead appointment for ${nextApptNewStr}.
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

function setInitials() {
  storedInitials = localStorage.getItem('initials');

  if (storedInitials) {
    initialsEl.value = storedInitials;
    initialsText = `<p> 
  -${storedInitials}
</p>
`;
  }
  initialsEl.addEventListener('keyup', function (event) {
    var currentInitials = event.target.value;

    if (!event.target.value) {
      initialsText = '';
    } else {
      initialsText = `<p> 
  -${event.target.value}
</p>
`;

      localStorage.setItem('initials', currentInitials);
    }
    updateHtmlNotes();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  htmlNotesEl.value = '';

  var allForms = document.querySelectorAll('form');

  allForms.forEach((form) => {
    form.reset();
  });

  copyHtmlNotes();
  setShowAllWorkedOn();
  setShowAllAssignedHw();
  handleApptSelection();
  setContAppt();
  setIntroCompleted();
  setHwCompleted();
  setHwPercent();
  setFirstApptWorkedOn();
  setSecondApptWorkedOn();
  setThirdApptWorkedOn();
  setCustomWorkedOn();
  setPostApptWorkedOn();
  setFirstApptAssignedHw();
  setSecondApptAssignedHw();
  setThirdApptAssignedHw();
  setPostChecklist();
  setAdditionalNotes();
  setRegisteredBusiness();
  setCompletionForm();
  setSupplierManagement();
  setPostApptExtras();
  setNextAppointment();
  setNextTopic();
  setInitials();
});
