// *CORE UI & FORM CONTROL ELEMENTS
var apptSelectEl = document.querySelector('#appointment');
var nonSpecFormEl = document.querySelector('#non-specific-form');
var htmlNotesEl = document.querySelector('#html-notes');
var copyBtnEl = document.querySelector('#copy-btn');
var copyDialogEl = document.querySelector('dialog');
var initialsEl = document.querySelector('#initials');

// *APPOINTMENT SPECIFIC CONTAINERS (NODELISTS)
var firstApptSpecEl = document.querySelectorAll('.first-appt');
var secondApptSpecEl = document.querySelectorAll('.second-appt');
var thirdApptSpecEl = document.querySelectorAll('.third-appt');
var postApptSpecEl = document.querySelectorAll('.post-appt');
var missedApptSpecEl = document.querySelectorAll('.missed-appt');
var contactedByClientSpecEl = document.querySelectorAll('.contacted-by-client');

// *"WORKED ON" - PARENT CONTAINERS & SHOW ALL LOGIC
var workedOnEl = document.querySelector('#worked-on');
var showAllWorkedOnContEl = document.querySelector('#show-all-worked-on-container');
var showAllWorkedOnEl = document.querySelector('#show-all-worked-on');

var firstApptWorkedOnItems = document.querySelectorAll('div:has(> #dashboard-navigation), ' + 'div:has(> #extra-pages), ' + 'div:has(> #creating-categories), ' + 'div:has(> #organizing-categories), ' + 'div:has(> #creating-products), ' + 'div:has(> #products-grid), ' + 'div:has(> #categorizing-products) ');
var secondApptWorkedOnItems = document.querySelectorAll('div:has(> #discounts), ' + 'div:has(> #checkout-sections), ' + 'div:has(> #paypal-apple-pay), ' + 'div:has(> #test-order), ' + 'div:has(> #process-order) ');
var thirdApptWorkedOnItems = document.querySelectorAll('div:has(> #updating-products), ' + 'div:has(> #unavailable-products)');
var postApptWorkedOnItems = document.querySelectorAll('div:has(> #stripe),' + 'div:has(> #variants)');

// *"ASSIGNED HOMEWORK" - PARENT CONTAINERS & SHOW ALL LOGIC
var assignedHwEl = document.querySelector('#assigned-hw');
var showAllAssignedHwContEl = document.querySelector('#show-all-assigned-hw-container');
var showAllAssignedHwEl = document.querySelector('#show-all-assigned-hw');

var firstApptAssignedHwItems = document.querySelectorAll('div:has(> #first-appt-finish-videos), ' + 'div:has(> #review-extra-pages), ' + 'div:has(> #remove-products), ' + 'div:has(> #practice-categorizing-products), ' + 'div:has(> #practice-creating-categories), ' + 'div:has(> #first-appt-continue-videos)');
var secondApptAssignedHwItems = document.querySelectorAll('div:has(> #second-appt-finish-videos), ' + 'div:has(> #practice-discounts), ' + 'div:has(> #practice-orders), ' + 'div:has(> #second-appt-continue-videos)');
var thirdApptAssignedHwItems = document.querySelectorAll('div:has(> #third-appt-finish-videos), ' + 'div:has(> #practice-updating), ' + 'div:has(> #all-videos)');

// *INDIVIDUAL CHECKBOX/RADIO ELEMENTS

// General Progress Elements
var contApptEl = document.querySelector('#continuation');
var introContEl = document.querySelector('#intro-container');
var introNoEl = document.querySelector('#intro-no');
var introNoneEl = document.querySelector('#intro-none');
var introYesEl = document.querySelector('#intro-yes');
var hwNoEl = document.querySelector('#hw-no');
var hwNoneEl = document.querySelector('#hw-none');
var hwYesEl = document.querySelector('#hw-yes');
var hwPercentEl = document.querySelector('#hw-percent');

// "Worked On" Checklist (1st Appt)
var dashNavEl = document.querySelector('#dashboard-navigation');
var extraPageEl = document.querySelector('#extra-pages');
var createCatEl = document.querySelector('#creating-categories');
var organizeCatEl = document.querySelector('#organizing-categories');
var createProdEl = document.querySelector('#creating-products');
var prodGridEl = document.querySelector('#products-grid');
var catProdEl = document.querySelector('#categorizing-products');

// "Worked On" Checklist (2nd Appt)
var discountsEl = document.querySelector('#discounts');
var checkoutSectionsEl = document.querySelector('#checkout-sections');
var payPalEl = document.querySelector('#paypal-apple-pay');
var testOrderEl = document.querySelector('#test-order');
var processOrderEl = document.querySelector('#process-order');

// "Worked On" Checklist (3rd Appt)
var updatingProdEl = document.querySelector('#updating-products');
var unavailableProdEl = document.querySelector('#unavailable-products');

// "Worked On" Checklist (Post Appt)
var stripeEl = document.querySelector('#stripe');
var variantsEl = document.querySelector('#variants');
var unavailableCjProdEl = document.querySelector('#unavailable-cj-products');

// Custom "Worked On" Checkbox & Text
var customWorkedOnChecboxEl = document.querySelector('#custom-worked-on-checkbox');
var customWorkedOnTextEl = document.querySelector('#custom-worked-on-text');

// "Assigned Homework" Checklist (1st Appt)
var firstApptFinishVidEl = document.querySelector('#first-appt-finish-videos');
var reviewExtraPagesEl = document.querySelector('#review-extra-pages');
var removeProdEl = document.querySelector('#remove-products');
var practiceCatProdEl = document.querySelector('#practice-categorizing-products');
var practiceCreateCatdEl = document.querySelector('#practice-creating-categories');
var firstApptContinueVidEl = document.querySelector('#first-appt-continue-videos');

// "Assigned Homework" Checklist (2nd Appt)
var secondApptFinishVidEl = document.querySelector('#second-appt-finish-videos');
var practiceDiscountsEl = document.querySelector('#practice-discounts');
var practiceOrdersEl = document.querySelector('#practice-orders');
var secondApptContinueVidEl = document.querySelector('#second-appt-continue-videos');

// "Assigned Homework" Checklist (3rd Appt)
var thirdApptFinishVidEl = document.querySelector('#third-appt-finish-videos');
var practiceUpdateEl = document.querySelector('#practice-updating');
var allVidEl = document.querySelector('#all-videos');

// Custom "Assigned Homework" Checkbox & Text
var customAssignedHwChecboxEl = document.querySelector('#custom-assigned-hw-checkbox');
var customAssignedHwTextEl = document.querySelector('#custom-assigned-hw-text');

// Post Training Checklist Elements
var businessEmailEl = document.querySelector('#business-email');
var timeZoneEl = document.querySelector('#time-zone');
var taxGroupEl = document.querySelector('#tax-group');
var modulesEl = document.querySelector('#modules');
var testItemsEl = document.querySelector('#test-items');
var brandsEl = document.querySelector('#brands');
var genericCategoriesEl = document.querySelector('#generic-categories');
var varientsCondensedEl = document.querySelector('#varients-condensed');
var taglineEl = document.querySelector('#tagline');

// Missed Appointment Elements
var firstAttemptRadioEl = document.querySelector('#first-attempt');
var secondAttemptRadioEl = document.querySelector('#second-attempt');
var thirdAttemptRadioEl = document.querySelector('#third-attempt');
var phoneNumberPromptEl = document.querySelector('#phone-number-prompt');
var phoneNumberEl = document.querySelector('#phone-number');
var secondaryPhoneNumberPromptEl = document.querySelector('#secondary-phone-number-prompt');
var secondaryPhoneNumberEl = document.querySelector('#secondary-phone-number');
var leftVmPromptEl = document.querySelector('#left-vm-prompt');
var vmNoEl = document.querySelector('#vm-no');
var vmNoneEl = document.querySelector('#vm-none');
var vmYesEl = document.querySelector('#vm-yes');
var noVmReasonPromptEl = document.querySelector('#no-vm-reason-prompt');
var noVmReasonEl = document.querySelector('#no-vm-reason');
var emailSentPromptEl = document.querySelector('#email-sent-prompt');
var emailSentEl = document.querySelector('#email-sent');
var sentMissedEmailPromptEl = document.querySelector('#sent-missed-email-promt');
var sentMissedEmailEl = document.querySelector('#sent-missed-email');
var markedPodioPromptEl = document.querySelector('#marked-podio-prompt');
var markedPodioEl = document.querySelector('#marked-podio');

// Contacted By Client Elements

// *COMPLETION FORM & SM (SUPPLIER MANAGEMENT) PROMPTS
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

// *POST-APPOINTMENT & NEXT STEPS
var additionalNotesEl = document.querySelector('#additional-notes');
var registeredContEl = document.querySelector('#registered-container');
var registeredBusinessNoEl = document.querySelector('#registered-no');
var registeredBusinessNoneEl = document.querySelector('#registered-none');
var registeredBusinessYesEl = document.querySelector('#registered-yes');

var liveNoEl = document.querySelector('#live-no');
var liveNoneEl = document.querySelector('#live-none');
var liveYesEl = document.querySelector('#live-yes');
var additionalTrainingPromptEl = document.querySelector('#additional-training-prompt');
var additionalTrainingEl = document.querySelector('#additional-training');
var smReminderEl = document.querySelector('#sm-reminder');

var nextApptDatePromptEl = document.querySelector('#next-appt-date-prompt');
var nextTopicPromptEl = document.querySelector('#next-topic-prompt');
var nextAppointmentEl = document.querySelector('#next-appointment-date');
var nextTopicEl = document.querySelector('#next-topic');

// *THEME & GLOBAL STATE VARIABLES
var toggleSwitch = document.querySelector('#dark-light-toggle');
var currentTheme = document.documentElement.getAttribute('data-theme');

// *TEXT STRING VARIABLES (FOR NOTE GENERATION)
var htmlNotes = '';
var currentApptValue = '';
var contText = '';
var introText = '';
var hwCompletedText = '';
var hwPercentText = '';
var hwText = '';

// Worked On Strings
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

// Assigned HW Strings
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
var customAssignedHwText = '';

// Post Checklist Strings
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

// Missed Appointment Strings
var missedApptText = '';
var attemptText = '';
var phoneNumberText = '';
var secondaryPhoneNumberText = '';
var updatedPhoneNumberText = '';
var leftVmText = '';
var noVmReasonText = '';
var updatedVmText = '';
var emailSentText = '';
var sentMissedEmailText = '';
var markedPodioText = '';

// Logic & Footer Strings
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

// *CORE UI & UTILITY FUNCTIONS

function setThemeToggle() {
  document.addEventListener('DOMContentLoaded', function () {
    var savedTheme = localStorage.getItem('theme'); // Look for a saved setting

    // Apply the saved theme on load
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save preference
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // Save preference
      }
    });
  });
}

function copyHtmlNotes() {
  copyBtnEl.addEventListener('click', function () {
    navigator.clipboard.writeText(htmlNotesEl.value);
    copyDialogEl.showModal();
    setTimeout(function () {
      copyDialogEl.close();
    }, 750);
  });
}

// *VISIBILITY & TEMPLATE CONTROLS

function updateApptVisibility() {
  var selectedValue = apptSelectEl.value;
  currentApptValue = selectedValue;

  var isShowAllWorkedOn = showAllWorkedOnEl.checked;
  var isShowAllHw = showAllAssignedHwEl.checked;
  var isDefault = selectedValue === 'default';
  var isPost = selectedValue === 'Post Appointment';
  var isMissed = selectedValue === 'Missed Appointment';
  var isContactedByClient = selectedValue === 'Contacted by Client';

  function setVisibility(item, show) {
    if (!item) return;
    if (item instanceof NodeList || Array.isArray(item)) {
      item.forEach(function (el) {
        el.classList.toggle('show-content', show);
        el.classList.toggle('hide-content', !show);
      });
    } else {
      item.classList.toggle('show-content', show);
      item.classList.toggle('hide-content', !show);
    }
  }

  var allGroups = [firstApptSpecEl, secondApptSpecEl, thirdApptSpecEl, postApptSpecEl, firstApptWorkedOnItems, secondApptWorkedOnItems, thirdApptWorkedOnItems, postApptWorkedOnItems, firstApptAssignedHwItems, secondApptAssignedHwItems, thirdApptAssignedHwItems, missedApptSpecEl, contactedByClientSpecEl];

  allGroups.forEach(function (group) {
    setVisibility(group, false);
  });

  setVisibility(nonSpecFormEl, !isDefault);

  setVisibility(firstApptSpecEl, selectedValue === '1st Appointment');
  setVisibility(secondApptSpecEl, selectedValue === '2nd Appointment');
  setVisibility(thirdApptSpecEl, selectedValue === '3rd Appointment');
  setVisibility(postApptSpecEl, isPost);
  setVisibility(missedApptSpecEl, isMissed);
  setVisibility(contactedByClientSpecEl, isContactedByClient);

  setVisibility(workedOnEl, !isDefault && !isMissed && !isContactedByClient);
  setVisibility(showAllWorkedOnContEl, !isDefault && !isMissed && !isContactedByClient);

  setVisibility(assignedHwEl, !isDefault && !isPost && !isMissed && !isContactedByClient);
  setVisibility(showAllAssignedHwContEl, !isDefault && !isPost && !isMissed && !isContactedByClient);

  setVisibility(nextApptDatePromptEl, !isDefault && !isPost && !isMissed && !isContactedByClient);
  setVisibility(nextTopicPromptEl, !isDefault && !isPost && !isMissed && !isContactedByClient);

  var showGeneralInputs = !isDefault && !isMissed && !isContactedByClient;

  setVisibility(contApptEl.closest('div'), showGeneralInputs);
  setVisibility(hwNoneEl.closest('.toggle-switch').parentElement, showGeneralInputs);
  setVisibility(hwPercentEl.closest('div'), showGeneralInputs);
  setVisibility(additionalNotesEl.closest('.form-group'), showGeneralInputs);

  if (!isMissed) {
    setVisibility(firstApptWorkedOnItems, isShowAllWorkedOn || selectedValue === '1st Appointment');
    setVisibility(secondApptWorkedOnItems, isShowAllWorkedOn || selectedValue === '2nd Appointment');
    setVisibility(thirdApptWorkedOnItems, isShowAllWorkedOn || selectedValue === '3rd Appointment');
    setVisibility(postApptWorkedOnItems, isShowAllWorkedOn || isPost);

    if (isShowAllHw && !isPost) {
      setVisibility(firstApptAssignedHwItems, isShowAllHw || selectedValue === '1st Appointment');
      setVisibility(secondApptAssignedHwItems, isShowAllHw || selectedValue === '2nd Appointment');
      setVisibility(thirdApptAssignedHwItems, isShowAllHw || selectedValue === '3rd Appointment');

      if (selectedValue === '1st Appointment') {
        setVisibility(document.querySelectorAll('div:has(> #second-appt-continue-videos)'), false);
      } else if (selectedValue === '2nd Appointment' || selectedValue === '3rd Appointment') {
        setVisibility(document.querySelectorAll('div:has(> #first-appt-continue-videos)'), false);
      }
    }
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

function setShowAllWorkedOn() {
  if (!showAllWorkedOnEl) {
    return;
  }

  showAllWorkedOnEl.addEventListener('change', function () {
    updateApptVisibility();
  });
}

function setShowAllAssignedHw() {
  if (!showAllAssignedHwEl) {
    return;
  }

  showAllAssignedHwEl.addEventListener('change', function () {
    // This will correctly respect the "Worked On" state too
    updateApptVisibility();
  });
}

// *NOTE GENERATION & RESET LOGIC

function updateHtmlNotes() {
  if (currentApptValue && currentApptValue !== 'default' && currentApptValue !== 'Missed Appointment') {
    contactedClient = `<p>
  <b>Contacted client for${contText} ${currentApptValue} Warhead Training appointment</b>
</p>
`;
    htmlNotes = contactedClient + introText + hwText + workedOnText + postWorkedOnText + assignedHwText + postChecklistText + additionalNotesText + registeredBusinessText + completionFormText + smText + liveText + additionalTrainingText + nextAppointmentText + nextTopicText + smReminderText + initialsText;
  } else if (currentApptValue === 'Missed Appointment' && currentApptValue !== 'default') {
    htmlNotes = missedApptText + initialsText;
  } else if (currentApptValue === 'Contacted by Client' && currentApptValue !== 'default') {
    htmlNotes = contactedByClientText + initialsText;
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
  missedApptText = '';

  htmlNotesEl.value = '';

  localStorage.removeItem('noVmReason');

  var nonSpecForms = document.querySelectorAll('#non-specific-form');

  nonSpecForms.forEach((form) => {
    form.reset();
  });
}

// *APPOINTMENT DETAILS (Intro, HW, Progress)

function setContAppt() {
  if (!contApptEl) {
    return;
  }

  contApptEl.addEventListener('change', function () {
    if (contApptEl.checked) {
      introContEl.classList.remove('show-content');
      introContEl.classList.add('hide-content');
      registeredContEl.classList.remove('show-content');
      registeredContEl.classList.add('hide-content');
      introNoneEl.checked = true;
      introText = '';
      registeredBusinessNoneEl.checked = true;
      registeredBusinessText = '';
      contText = ' continuation';
    } else {
      introContEl.classList.remove('hide-content');
      introContEl.classList.add('show-content');
      registeredContEl.classList.remove('hide-content');
      registeredContEl.classList.add('show-content');
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
    if (this.value > 100) {
      this.value = 100;
    }
    if (this.value < 0 && this.value !== '') {
      this.value = 0;
    }

    if (!event.target.value) {
      hwPercentText = '';
    } else {
      hwPercentText = `${event.target.value}% of WH videos completed.`;
    }
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

// *WORKED ON & ASSIGNED HW HANDLERS

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

  if ((dashNavEl && dashNavEl.checked) || (extraPageEl && extraPageEl.checked) || (createCatEl && createCatEl.checked) || (organizeCatEl && organizeCatEl.checked) || (createProdEl && createProdEl.checked) || (prodGridEl && prodGridEl.checked) || (catProdEl && catProdEl.checked) || (discountsEl && discountsEl.checked) || (checkoutSectionsEl && checkoutSectionsEl.checked) || (payPalEl && payPalEl.checked) || (testOrderEl && testOrderEl.checked) || (processOrderEl && processOrderEl.checked) || (updatingProdEl && updatingProdEl.checked) || (unavailableProdEl && unavailableProdEl.checked) || (customWorkedOnChecboxEl && customWorkedOnChecboxEl.checked)) {
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

  if ((stripeEl && stripeEl.checked) || (variantsEl && variantsEl.checked) || (unavailableCjProdEl && unavailableCjProdEl.checked)) {
    postWorkedOnText = `Worked On/Reviewed:
<ul>${stripeText}${variantsText}${unavailableCjProdText}
</ul>
`;
  } else {
    postWorkedOnText = '';
  }
}

// *HOMEWORK & CHECKLIST LOGIC
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

function setCustomAssignedHw() {
  let customKeyupListener = null;

  customAssignedHwChecboxEl.addEventListener('change', function () {
    if (customAssignedHwChecboxEl.checked) {
      if (customKeyupListener === null) {
        customKeyupListener = function (event) {
          const value = event.target.value.trim();
          customAssignedHwText = value !== '' ? `\n <li>${value}</li>` : '';
          updateAssignedHw();
          updateHtmlNotes();
        };
      }
      customAssignedHwTextEl.addEventListener('keyup', customKeyupListener);
      const value = customAssignedHwTextEl.value.trim();
      customAssignedHwText = value !== '' ? `\n <li>${value}</li>` : '';
      updateAssignedHw();
      updateHtmlNotes();
    } else {
      if (customKeyupListener) {
        customAssignedHwTextEl.removeEventListener('keyup', customKeyupListener);
      }
      customAssignedHwText = '';
      updateAssignedHw();
      updateHtmlNotes();
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

  if ((firstApptFinishVidEl && firstApptFinishVidEl.checked) || (reviewExtraPagesEl && reviewExtraPagesEl.checked) || (removeProdEl && removeProdEl.checked) || (practiceCatProdEl && practiceCatProdEl.checked) || (practiceCreateCatdEl && practiceCreateCatdEl.checked) || (firstApptContinueVidEl && firstApptContinueVidEl.checked) || (secondApptFinishVidEl && secondApptFinishVidEl.checked) || (practiceDiscountsEl && practiceDiscountsEl.checked) || (practiceOrdersEl && practiceOrdersEl.checked) || (secondApptContinueVidEl && secondApptContinueVidEl.checked) || (thirdApptFinishVidEl && thirdApptFinishVidEl.checked) || (practiceUpdateEl && practiceUpdateEl.checked) || (allVidEl && allVidEl.checked) || (customAssignedHwChecboxEl && customAssignedHwChecboxEl.checked)) {
    assignedHwText = `Assigned homework: 
<ul>${firstApptFinishVidText}${reviewExtraPagesText}${removeProdText}${practiceCatProdText}${practiceCreateCatdText}${firstApptContinueVidText}${secondApptFinishVidText}${practiceDiscountsText}${practiceOrdersText}${secondApptContinueVidText}${thirdApptFinishVidText}${practiceUpdateText}${allVidText}${customAssignedHwText}
</ul>
`;
  } else {
    assignedHwText = '';
  }
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

  if ((businessEmailEl && businessEmailEl.checked) || (timeZoneEl && timeZoneEl.checked) || (taxGroupEl && taxGroupEl.checked) || (modulesEl && modulesEl.checked) || (testItemsEl && testItemsEl.checked) || (brandsEl && brandsEl.checked) || (genericCategoriesEl && genericCategoriesEl.checked) || (varientsCondensedEl && varientsCondensedEl.checked) || (taglineEl && taglineEl.checked)) {
    postChecklistText = `Post Training Checklist:
<ul>${businessEmailText}${timeZoneText}${taxGroupText}${modulesText}${testItemsText}${brandsText}${genericCategoriesText}${varientsCondensedText}${taglineText}
</ul>
`;
  } else {
    postChecklistText = '';
  }
}

// *COMPLETION FORMS & SUPPLIER MANAGEMENT (SM)
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
    var smApptOriginalStr = event.target.value;
    smApptText = smApptOriginalStr.replace('⋅', ', ');
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

// *POST-APPOINTMENT EXTRAS & INITIALS
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
    var smReminderOriginalStr = event.target.value;
    var smReminderNewStr = smReminderOriginalStr.replace('⋅', ', ');

    if (!event.target.value) {
      smReminderText = '';
    } else {
      smReminderText = `<p>
  Reminded client about Supplier Management Appointment on ${smReminderNewStr}
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

function setAdditionalNotes() {
  additionalNotesEl.addEventListener('keyup', function (event) {
    if (!event.target.value) {
      additionalNotesText = '';
    } else {
      additionalNotesText = `<p>
  Additional Notes: ${event.target.value}
</p>
`;
    }
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

// *MISSED APPOINTMENT
function setMissedAppointment() {
  var missedApptPrompts = [phoneNumberPromptEl, secondaryPhoneNumberPromptEl, leftVmPromptEl, noVmReasonPromptEl, emailSentPromptEl, sentMissedEmailPromptEl, markedPodioPromptEl];

  missedApptPrompts.forEach(function (element) {
    element.setAttribute('class', 'hide-content');
  });

  var missedApptRadioElements = [firstAttemptRadioEl, secondAttemptRadioEl, thirdAttemptRadioEl];

  missedApptRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      phoneNumberText = '';
      secondaryPhoneNumberText = '';
      leftVmText = '';
      noVmReasonText = '';
      updatedPhoneNumberText = '';
      updatedVmText = '';
      sentMissedEmailText = '';
      markedPodioText = '';
      phoneNumberEl.value = '';
      secondaryPhoneNumberEl.value = '';
      noVmReasonEl.value = '';
      emailSentEl.checked = false;
      vmNoneEl.checked = true;

      if (firstAttemptRadioEl.checked) {
        attemptText = `<b>1st attempt</b>`;
        phoneNumberPromptEl.setAttribute('class', 'show-content');
        secondaryPhoneNumberPromptEl.setAttribute('class', 'show-content');
        leftVmPromptEl.setAttribute('class', 'show-content');
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        emailSentPromptEl.setAttribute('class', 'show-content');
        sentMissedEmailPromptEl.setAttribute('class', 'hide-content');
        markedPodioPromptEl.setAttribute('class', 'hide-content');
        updateMissedAppointment();
        updateHtmlNotes();
      } else if (secondAttemptRadioEl.checked) {
        attemptText = `<b>2nd attempt</b>`;
        phoneNumberPromptEl.setAttribute('class', 'hide-content');
        secondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        leftVmPromptEl.setAttribute('class', 'show-content');
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        emailSentPromptEl.setAttribute('class', 'hide-content');
        sentMissedEmailPromptEl.setAttribute('class', 'hide-content');
        markedPodioPromptEl.setAttribute('class', 'hide-content');
        updateMissedAppointment();
        updateHtmlNotes();
      } else if (thirdAttemptRadioEl.checked) {
        attemptText = `<b>3rd attempt</b>`;
        phoneNumberPromptEl.setAttribute('class', 'hide-content');
        secondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        leftVmPromptEl.setAttribute('class', 'show-content');
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        emailSentPromptEl.setAttribute('class', 'hide-content');
        sentMissedEmailPromptEl.setAttribute('class', 'show-content');
        markedPodioPromptEl.setAttribute('class', 'show-content');
        updateMissedAppointment();
        updateHtmlNotes();
      } else {
        attemptText = ``;
        phoneNumberPromptEl.setAttribute('class', 'hide-content');
        secondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        leftVmPromptEl.setAttribute('class', 'hide-content');
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        emailSentPromptEl.setAttribute('class', 'hide-content');
        sentMissedEmailPromptEl.setAttribute('class', 'hide-content');
        markedPodioPromptEl.setAttribute('class', 'hide-content');
        updateMissedAppointment();
        updateHtmlNotes();
      }
    });
  });

  function formatPhone(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.length > 10 && digits.startsWith('1')) {
      digits = digits.substring(1);
    }
    if (digits.length === 0) return '';
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.substring(0, 3)}) ${digits.substring(3)}`;
    return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6, 10)}`;
  }

  phoneNumberEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      phoneNumberText = '';
      updatePhoneNumberText();
      updateHtmlNotes();
    } else {
      event.target.value = formatPhone(event.target.value);
      phoneNumberText = event.target.value;
      updatePhoneNumberText();
      updateHtmlNotes();
    }
  });

  secondaryPhoneNumberEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      secondaryPhoneNumberText = '';
      updatePhoneNumberText();
      updateHtmlNotes();
    } else {
      event.target.value = formatPhone(event.target.value);
      secondaryPhoneNumberText = event.target.value;
      updatePhoneNumberText();
      updateHtmlNotes();
    }
  });

  var vmRadioElements = [vmNoEl, vmNoneEl, vmYesEl];

  vmRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (vmNoEl.checked) {
        leftVmText = `Did not leave voicemail`;
        noVmReasonPromptEl.setAttribute('class', 'show-content');
        var storedNoVmReason = localStorage.getItem('noVmReason');
        if (storedNoVmReason) {
          noVmReasonEl.value = storedNoVmReason;
          noVmReasonText = storedNoVmReason;
        }
      } else if (vmYesEl.checked) {
        leftVmText = `Left voicemail`;
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
      } else if (vmNoneEl.checked) {
        leftVmText = ``;
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        var currentStored = localStorage.getItem('noVmReason');
        noVmReasonEl.value = currentStored ? currentStored : '';
        noVmReasonText = noVmReasonEl.value;
      } else {
        leftVmText = ``;
      }
      updateVmText();
      updateHtmlNotes();
    });
  });

  noVmReasonEl.addEventListener('keyup', function (event) {
    noVmReasonText = event.target.value;
    localStorage.setItem('noVmReason', noVmReasonText);
    updateVmText();
    updateHtmlNotes();
  });

  emailSentEl.addEventListener('change', function () {
    emailSentText = ' Sent email to client.';
    updateMissedAppointment();
    updateHtmlNotes();
  });

  sentMissedEmailEl.addEventListener('change', function () {
    sentMissedEmailText = ' Sent <b>missed appointment</b> email to account manager and front-end.';
    updateMissedAppointment();
    updateHtmlNotes();
  });

  markedPodioEl.addEventListener('change', function () {
    markedPodioText = ' Marked Podio.';
    updateMissedAppointment();
    updateHtmlNotes();
  });
}

function updatePhoneNumberText() {
  if (phoneNumberText && !secondaryPhoneNumberText) {
    updatedPhoneNumberText = ` Used phone number on file: ${phoneNumberText}.`;
  } else if (phoneNumberText && secondaryPhoneNumberText) {
    updatedPhoneNumberText = ` Used phone numbers on file: ${phoneNumberText} & ${secondaryPhoneNumberText}.`;
  } else if (!phoneNumberText && !secondaryPhoneNumberText) {
    updatedPhoneNumberText = '';
  }
  updateMissedAppointment();
}

function updateVmText() {
  if (leftVmText && !noVmReasonText) {
    updatedVmText = ` ${leftVmText}.`;
  } else if (leftVmText && noVmReasonText) {
    updatedVmText = ` ${leftVmText}, ${noVmReasonText}.`;
  } else {
    updatedVmText = '';
  }
  updateMissedAppointment();
}

function updateMissedAppointment() {
  missedApptText = `<p>
  ${attemptText} to reach out to client for Warhead Training.${updatedPhoneNumberText} Client didn't answer.${updatedVmText}${emailSentText}${sentMissedEmailText}${markedPodioText}
</p>
`;
}

// *INITIALIZATION (DOM CONTENT LOADED)
document.addEventListener('DOMContentLoaded', () => {
  htmlNotesEl.value = '';

  var allForms = document.querySelectorAll('form');

  allForms.forEach(function (form) {
    form.reset();
  });

  // Initialization sequence
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
  setCustomAssignedHw();
  setPostChecklist();
  setAdditionalNotes();
  setRegisteredBusiness();
  setCompletionForm();
  setSupplierManagement();
  setPostApptExtras();
  setNextAppointment();
  setNextTopic();
  setMissedAppointment();
  setInitials();
});

setThemeToggle();
