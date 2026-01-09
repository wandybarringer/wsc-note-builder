// *CORE UI & FORM CONTROL ELEMENTS
var deptSelectEl = document.querySelector('#department');
var apptSelectEl = document.querySelector('#appointment');
var nonSpecFormEl = document.querySelector('#non-specific-form');
var htmlNotesEl = document.querySelector('#html-notes');
var copyMsgDialogEl = document.querySelector('#copy-msg-dialog');
var copyDialogEl = document.querySelector('#copy-dialog');
var initialsReqDialogEl = document.querySelector('#initials-required-dialog');
var clearBtnEl = document.querySelector('#clear-btn');
var initialsEl = document.querySelector('#initials');

// *APPOINTMENT SPECIFIC CONTAINERS (NODELISTS)
var firstApptSpecEl = document.querySelectorAll('.first-appt');
var secondApptSpecEl = document.querySelectorAll('.second-appt');
var secondAndThirdApptSpecEl = document.querySelectorAll('.second-and-third-appt');
var thirdApptSpecEl = document.querySelectorAll('.third-appt');
var postApptSpecEl = document.querySelectorAll('.post-appt');
var missedApptSpecEl = document.querySelector('.missed-appt');
var contactedByClientSpecEl = document.querySelector('.contacted-by-client');
var rescheduleSpecEl = document.querySelector('.reschedule');
var podioLinkSpecEl = document.querySelector('.podio');
var generalContactSpecEl = document.querySelector('.general-contact');

// *DATA ATTRIBUTE SELECTORS FOR DEPT & TEMPLATE SPECIFIC ELEMENTS
var warheadOptions = document.querySelectorAll('option[data-dept="warhead"]');
var smOptions = document.querySelectorAll('option[data-dept="supplier-management"]');

// *"WORKED ON" - PARENT CONTAINERS & SHOW ALL LOGIC
var workedOnEl = document.querySelector('#worked-on');
var showAllWorkedOnContEl = document.querySelector('#show-all-worked-on-container');
var showAllWorkedOnEl = document.querySelector('#show-all-worked-on');

var firstApptWorkedOnItems = document.querySelectorAll('div:has(> #dashboard-navigation), ' + 'div:has(> #extra-pages), ' + 'div:has(> #creating-categories), ' + 'div:has(> #organizing-categories), ' + 'div:has(> #creating-products), ' + 'div:has(> #products-grid), ' + 'div:has(> #categorizing-products) ');
var secondApptWorkedOnItems = document.querySelectorAll('div:has(> #discounts), ' + 'div:has(> #checkout-sections), ' + 'div:has(> #paypal-apple-pay), ' + 'div:has(> #test-order), ' + 'div:has(> #process-order) ');
var thirdApptWorkedOnItems = document.querySelectorAll('div:has(> #updating-products), ' + 'div:has(> #unavailable-products)');
var postApptWorkedOnItems = document.querySelectorAll('div:has(> #stripe),' + 'div:has(> #variants),' + 'div:has(> #google-analytics)');
var whAssistanceWorkedOnItems = document.querySelectorAll('div:has(> #new-updating-products),' + 'div:has(> #process-real-order),' + 'div:has(> #modify-variants)');

// *"ASSIGNED HOMEWORK" - PARENT CONTAINERS & SHOW ALL LOGIC
var assignedHwEl = document.querySelector('#assigned-hw');
var showAllAssignedHwContEl = document.querySelector('#show-all-assigned-hw-container');
var showAllAssignedHwEl = document.querySelector('#show-all-assigned-hw');

var firstApptAssignedHwItems = document.querySelectorAll('div:has(> #first-appt-finish-videos), ' + 'div:has(> #review-extra-pages), ' + 'div:has(> #remove-products), ' + 'div:has(> #practice-categorizing-products), ' + 'div:has(> #practice-creating-categories), ' + 'div:has(> #register-business), ' + 'div:has(> #first-appt-continue-videos)');
var secondApptAssignedHwItems = document.querySelectorAll('div:has(> #second-appt-finish-videos), ' + 'div:has(> #practice-discounts), ' + 'div:has(> #practice-orders), ' + 'div:has(> #second-appt-continue-videos)');
var thirdApptAssignedHwItems = document.querySelectorAll('div:has(> #third-appt-finish-videos), ' + 'div:has(> #practice-updating), ' + 'div:has(> #all-videos)');

// *INDIVIDUAL CHECKBOX/RADIO & PROMPT ELEMENTS

// General Progress Elements
var contApptPromptEl = document.querySelector('#continuation-prompt');
var contApptEl = document.querySelector('#continuation');
var movedUpPromptEl = document.querySelector('#moved-up-prompt');
var movedUpEl = document.querySelector('#moved-up');
var screenSharePromptEl = document.querySelector('#screen-share-prompt');
var screenShareEl = document.querySelector('#screen-share');
var screenShareOtherPromptEl = document.querySelector('#screen-share-other-prompt');
var screenShareOtherEl = document.querySelector('#screen-share-other');
var hwPromptEl = document.querySelector('#hw-prompt');
var hwNoEl = document.querySelector('#hw-no');
var hwNoneEl = document.querySelector('#hw-none');
var hwYesEl = document.querySelector('#hw-yes');
var hwPercentPromptEl = document.querySelector('#hw-percent-prompt');
var hwPercentEl = document.querySelector('#hw-percent');
var initialsPromptEl = document.querySelector('#initials-prompt');

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
var googleAnalyticsEl = document.querySelector('#google-analytics');

// "Worked On" Checklist (WH Assistance)
var updatingNewProdEl = document.querySelector('#new-updating-products');
var updatingNewProdNameEl = document.querySelector('#new-updating-products-name');
var processRealOrderEl = document.querySelector('#process-real-order');
var modifyVariantsEl = document.querySelector('#modify-variants');

// Custom "Worked On" Checkbox & Text
var customWorkedOnChecboxEl = document.querySelector('#custom-worked-on-checkbox');
var customWorkedOnTextEl = document.querySelector('#custom-worked-on-text');

// "Assigned Homework" Checklist (1st Appt)
var firstApptFinishVidEl = document.querySelector('#first-appt-finish-videos');
var reviewExtraPagesEl = document.querySelector('#review-extra-pages');
var removeProdEl = document.querySelector('#remove-products');
var practiceCatProdEl = document.querySelector('#practice-categorizing-products');
var practiceCreateCatdEl = document.querySelector('#practice-creating-categories');
var registerBusinessEl = document.querySelector('#register-business');
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
var vmBoxFullEl = document.querySelector('#vm-box-full');
var vmNotSetupEl = document.querySelector('#vm-not-setup');
var emailSentPromptEl = document.querySelector('#email-sent-prompt');
var emailSentEl = document.querySelector('#email-sent');
var sentMissedEmailPromptEl = document.querySelector('#sent-missed-email-promt');
var sentMissedEmailEl = document.querySelector('#sent-missed-email');
var markedPodioPromptEl = document.querySelector('#marked-podio-prompt');
var markedPodioEl = document.querySelector('#marked-podio');

// Contacted By Client Elements
var messageTypeNoneRadioEl = document.querySelector('#message-type-none');
var messageTypeVoicemailRadioEl = document.querySelector('#message-type-voicemail');
var messageTypeEmailRadioEl = document.querySelector('#message-type-email');
var messageTypeTextRadioEl = document.querySelector('#message-type-text');
var reasonForContactEl = document.querySelector('#reason-for-contact');
var successfulContactPromptEl = document.querySelector('#successful-contact-prompt');
var successfulContactNoEl = document.querySelector('#successful-contact-no');
var successfulContactNoneEl = document.querySelector('#successful-contact-none');
var successfulContactYesEl = document.querySelector('#successful-contact-yes');
var contactedPhoneNumberPromptEl = document.querySelector('#contacted-phone-number-prompt');
var contactedPhoneNumberEl = document.querySelector('#contacted-phone-number');
var contactedSecondaryPhoneNumberPromptEl = document.querySelector('#contacted-secondary-phone-number-prompt');
var contactedSecondaryPhoneNumberEl = document.querySelector('#contacted-secondary-phone-number');
var contactedLeftVmPromptEl = document.querySelector('#contacted-left-vm-prompt');
var contactedVmNoEl = document.querySelector('#contacted-vm-no');
var contactedVmNoneEl = document.querySelector('#contacted-vm-none');
var contactedVmYesEl = document.querySelector('#contacted-vm-yes');
var contactedVmBoxFullEl = document.querySelector('#contacted-vm-box-full');
var contactedVmNotSetupEl = document.querySelector('#contacted-vm-not-setup');
var contactedNoVmReasonPromptEl = document.querySelector('#contacted-no-vm-reason-prompt');
var contactedEmailSentPromptEl = document.querySelector('#contacted-email-sent-prompt');
var contactedEmailSentEl = document.querySelector('#contacted-email-sent');
var advisedClientEl = document.querySelector('#advised-client');
var needsRescheduledEl = document.querySelector('#needs-reschedule');
var contactedNeedsReschedulePromptEl = document.querySelector('#contacted-needs-reschedule-prompt');
var contactedRescheduleDatePromptEl = document.querySelector('#contacted-reschedule-date-prompt');
var contactedRescheduleDateEl = document.querySelector('#contacted-reschedule-date');

// Reschedule Elements
var rescheduleReasonEl = document.querySelector('#reschedule-reason');
var rescheduleDateEl = document.querySelector('#reschedule-date');

// General Contact Elements
var generalContactPurposeEl = document.querySelector('#general-contact-purpose');
var generalContactNoteEl = document.querySelector('#general-contact-note');

// Podio Link Elements
var podioLinkEl = document.querySelector('#podio-link');

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
var additionalNotesPromptEl = document.querySelector('#additional-notes-prompt');
var additionalNotesEl = document.querySelector('#additional-notes');
var startedRegPromptEl = document.querySelector('#started-registering-prompt');
var startedRegNoEl = document.querySelector('#started-registering-no');
var startedRegNoneEl = document.querySelector('#started-registering-none');
var startedRegYesEl = document.querySelector('#started-registering-yes');

var livePromptEl = document.querySelector('#live-prompt');
var registeredPromptEl = document.querySelector('#registered-prompt');
var resaleCertPromptEl = document.querySelector('#resale-cert-prompt');
var designFinishedPromptEl = document.querySelector('#design-finished-prompt');

var liveNoEl = document.querySelector('#live-no');
var liveNoneEl = document.querySelector('#live-none');
var liveYesEl = document.querySelector('#live-yes');
var registeredNoEl = document.querySelector('#registered-no');
var registeredNoneEl = document.querySelector('#registered-none');
var registeredYesEl = document.querySelector('#registered-yes');
var resaleCertNoEl = document.querySelector('#resale-cert-no');
var resaleCertNoneEl = document.querySelector('#resale-cert-none');
var resaleCertYesEl = document.querySelector('#resale-cert-yes');
var designFinishedNoEl = document.querySelector('#design-finished-no');
var designFinishedNoneEl = document.querySelector('#design-finished-none');
var designFinishedYesEl = document.querySelector('#design-finished-yes');

var additionalTrainingPromptEl = document.querySelector('#additional-training-prompt');
var additionalTrainingEl = document.querySelector('#additional-training');

var nextApptDatePromptEl = document.querySelector('#next-appt-date-prompt');
var nextTopicPromptEl = document.querySelector('#next-topic-prompt');
var nextAppointmentEl = document.querySelector('#next-appointment-date');
var nextTopicEl = document.querySelector('#next-topic');

// *OTHER APPOINTMENT PROMPS & INPUTS
var otherDeptApptPromptEl = document.querySelector('#other-dept-appt-prompt');
var otherDeptApptEl = document.querySelector('#other-dept-appt');
var whAssistanceApptPromptEl = document.querySelector('#wh-assistance-appt-prompt');
var whAssistanceApptEl = document.querySelector('#wh-assistance-appt');
var whAssistanceTechPromptEl = document.querySelector('#wh-assistance-tech-prompt');
var whAssistanceTechEl = document.querySelector('#wh-assistance-tech');
var whAssistanceDatePromptEl = document.querySelector('#wh-assistance-date-prompt');
var whAssistanceDateEl = document.querySelector('#wh-assistance-date');
var obAssistanceApptPromptEl = document.querySelector('#ob-assistance-appt-prompt');
var obAssistanceApptEl = document.querySelector('#ob-assistance-appt');
var obAssistanceTechPromptEl = document.querySelector('#ob-assistance-tech-prompt');
var obAssistanceTechEl = document.querySelector('#ob-assistance-tech');
var obAssistanceDatePromptEl = document.querySelector('#ob-assistance-date-prompt');
var obAssistanceDateEl = document.querySelector('#ob-assistance-date');
var nicheChangeApptPromptEl = document.querySelector('#niche-change-appt-prompt');
var nicheChangeApptEl = document.querySelector('#niche-change-appt');
var nicheChangeTechPromptEl = document.querySelector('#niche-change-tech-prompt');
var nicheChangeTechEl = document.querySelector('#niche-change-tech');
var nicheChangeDatePromptEl = document.querySelector('#niche-change-date-prompt');
var nicheChangeDateEl = document.querySelector('#niche-change-date');
var websiteAnalysisApptPromptEl = document.querySelector('#website-analysis-appt-prompt');
var websiteAnalysisApptEl = document.querySelector('#website-analysis-appt');
var websiteAnalysisTechPromptEl = document.querySelector('#website-analysis-tech-prompt');
var websiteAnalysisTechEl = document.querySelector('#website-analysis-tech');
var websiteAnalysisDatePromptEl = document.querySelector('#website-analysis-date-prompt');
var websiteAnalysisDateEl = document.querySelector('#website-analysis-date');

// *SUPPLIER MANAGEMENT
var howManyProductsPromptEl = document.querySelector('#how-many-products-prompt');
var howManyProductsEl = document.querySelector('#how-many-products');
var howManySuppliersNumberEl = document.querySelector('#how-many-suppliers-number');
var howManySuppliersNamesEl = document.querySelector('#how-many-suppliers-names');
var applicationProcessEl = document.querySelector('#application-process');
var dropshipDatabaseEl = document.querySelector('#dropship-database');
var submittedApplicationEl = document.querySelector('#submitted-application');
var submittedApplicationToEl = document.querySelector('#submitted-application-to');
var assistedApplicationEl = document.querySelector('#assisted-application');
var assistedApplicationToEl = document.querySelector('#assisted-application-to');
var followUpEmailEl = document.querySelector('#follow-up-email');
var followUpEmailToEl = document.querySelector('#follow-up-email-to');
var applyAndEmailEl = document.querySelector('#apply-and-email');
var contApplyAndEmailEl = document.querySelector('#cont-apply-and-email');
var removeNonNicheEl = document.querySelector('#remove-non-niche');
var completedSmEl = document.querySelector('#completed-supplier-management');
var completedMarketingEl = document.querySelector('#completed-marketing');
var marketingDateEl = document.querySelector('#marketing-date');
var smWsTechEl = document.querySelector('#sm-ws-tech');
var smWsDateEl = document.querySelector('#sm-ws-appointment-date');
var seoBasicsEl = document.querySelector('#seo-basics');
var catAndProdEl = document.querySelector('#cat-and-prod');
var ensureProdCatEl = document.querySelector('#ensure-prod-cat');
var metasReviewedEl = document.querySelector('#metas-review');
var reviseTitlesDescEl = document.querySelector('#revise-titles-desc');
var optimizeImagesEl = document.querySelector('#optimize-images');
var reviewSocialMediaEl = document.querySelector('#review-social-media');

// *THEME & GLOBAL STATE VARIABLES
var toggleSwitch = document.querySelector('#dark-light-toggle');
var currentTheme = document.documentElement.getAttribute('data-theme');
var currentDeptValue = '';
var savedDept = '';
var currentApptValue = '';

// *TEXT STRING VARIABLES (FOR NOTE GENERATION)
var htmlNotes = '';
var contactedClientText = '';
var contText = '';
var movedUpText = '';
var screenShareText = '';
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
var googleAnalyticsText = '';
var unavailableCjProdText = '';
var updatingNewProdText = '';
var updatingNewProdNameText = 'New Supplier(s)';
var processRealOrderText = '';
var modifyVariantsText = '';
var customWorkedonText = '';

// Assigned HW Strings
var assignedHwText = '';
var firstApptFinishVidText = '';
var reviewExtraPagesText = '';
var removeProdText = '';
var practiceCatProdText = '';
var practiceCreateCatdText = '';
var registerBusinessText = '';
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

// Supplier Management Strings
var howManyProductsText = '';
var howManySuppliersNumberText = '';
var howManySuppliersNamesText = '';
var updatedHowManySuppliersText = '';
var applicationProcessText = '';
var dropshipDatabaseText = '';
var submittedApplicationText = '';
var submittedApplicationToText = '';
var assistedApplicationText = '';
var assistedApplicationToText = '';
var followUpEmailText = '';
var followUpEmailToText = '';
var applyAndEmailText = '';
var contApplyAndEmailText = '';
var removeNonNicheText = '';
var completedSmText = '';
var completedMarketingText = '';
var marketingDateText = '';
var smWsTechText = '';
var smWsDateText = '';
var updatedSmWsText = '';
var seoBasicsText = '';
var catAndProdText = '';
var ensureProdCatText = '';
var metasReviewedText = '';
var reviseTitlesDescText = '';
var optimizeImagesText = '';
var reviewSocialMediaText = '';
var marketingReviewedText = '';

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

// Contacted by Client Strings
var contactedByClientText = '';
var messageType = '';
var reasonForContactText = '';
var successfulContactText = '';
var contactedPhoneNumberText = '';
var contactedSecondaryPhoneNumberText = '';
var updatedContactedPhoneNumberText = '';
var contactedLeftVmText = '';
var contactedNoVmReasonText = '';
var contactedUpdatedVmText = '';
var contactedEmailSentText = '';
var advisedClientText = '';
var returnContactText = '';
var contactedRescheduleDateText = '';

// Reschedule Strings
var rescheduleReasonText = '';
var rescheduleDateText = '';

// General Contact Strings
var generalContactPurposeText = '';
var generalContactNoteText = '';

// Podio Strings
var podioLinkText = '';

// Logic & Footer Strings
var additionalNotesText = '';
var startedRegText = '';
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
var registeredText = '';
var resaleCertText = '';
var designFinishedText = '';
var smRequirementsText = '';
var additionalTrainingText = '';
var smReminderText = '';
var nextAppointmentText = '';
var whAssistanceTechText = '';
var whAssistanceDateText = '';
var whAssistanceText = '';
var obAssistanceTechText = '';
var obAssistanceDateText = '';
var obAssistanceText = '';
var nicheChangeTechText = '';
var nicheChangeDateText = '';
var nicheChangeText = '';
var websiteAnalysisTechText = '';
var websiteAnalysisDateText = '';
var websiteAnalysisText = '';
var nextTopicText = '';
var storedInitials = '';
var initialsText = '';

var apptLabels = {
  'wh-first-appt': '1st',
  'wh-second-appt': '2nd',
  'wh-third-appt': '3rd',
  'wh-post-appt': 'Post',
  'wh-assistance': 'Warhead Assistance',
  'sm-first-appt': '1st',
  'sm-follow-up': 'Follow Up',
  'sm-final-upgraded': 'Final (Upgraded)',
  'sm-final-non-upgraded': 'Final (Non-Upgraded)',
  'sm-marketing': 'One-Time Marketing',
};

// *CORE UI & UTILITY FUNCTIONS

function setVisibility(item, show) {
  if (!item) return;

  var elements = item.length !== undefined && !(item instanceof HTMLElement) ? item : [item];

  elements.forEach(function (el) {
    el.classList.toggle('show-content', show);
    el.classList.toggle('hide-content', !show);
  });
}

function setSavedDepartment() {
  savedDept = localStorage.getItem('savedDept');

  if (savedDept) {
    deptSelectEl.value = savedDept;
    updateDeptVisibility();
  }
}

function setThemeToggle() {
  document.addEventListener('DOMContentLoaded', function () {
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  });
}

function copyHtmlNotes() {
  htmlNotesEl.disabled = true;

  htmlNotesEl.addEventListener('mouseenter', function () {
    if (currentApptValue === 'default' || !currentApptValue) return;
    if (initialsText === '') {
      initialsReqDialogEl.show();
    } else {
      copyMsgDialogEl.show();
    }
  });

  htmlNotesEl.addEventListener('mouseleave', function () {
    if (currentApptValue === 'default' || !currentApptValue) return;
    if (initialsText === '') {
      initialsReqDialogEl.close();
    } else {
      copyMsgDialogEl.close();
    }
  });

  htmlNotesEl.addEventListener('click', function () {
    if (currentApptValue === 'default' || !currentApptValue || initialsText === '') {
      return;
    }

    navigator.clipboard.writeText(htmlNotesEl.value);
    copyDialogEl.showModal();
    setTimeout(function () {
      copyDialogEl.close();
    }, 750);
  });
}

function formatPhone(value) {
  var digits = value.replace(/\D/g, '');
  if (digits.length > 10 && digits.startsWith('1')) {
    digits = digits.substring(1);
  }
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.substring(0, 3)}) ${digits.substring(3)}`;
  return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6, 10)}`;
}

function clearInputs() {
  clearBtnEl.disabled = true;

  clearBtnEl.addEventListener('click', function () {
    if (currentApptValue === 'default' || !currentApptValue) {
      return;
    }
    if (showAllWorkedOnEl) showAllWorkedOnEl.checked = false;
    if (showAllAssignedHwEl) showAllAssignedHwEl.checked = false;
    resetHtmlNotes();
    updateHtmlNotes();
    setInitials();
    updateApptVisibility();
  });
}

function handleDateFormat(date) {
  var updatedDate = date.replace('⋅', ', ');

  if (!date) {
    return '';
  } else {
    return updatedDate;
  }
}

function addNewWorkedOnRow(container) {
  var newRow = document.createElement('div');
  newRow.className = 'custom-worked-on-row';
  newRow.innerHTML = `
    <input type="checkbox" class="custom-checkbox" /> 
    <input type="text" class="custom-text" placeholder="Custom text" />
  `;
  container.appendChild(newRow);
}

function addNewAssignedHwRow(container) {
  var newRow = document.createElement('div');
  newRow.className = 'custom-assigned-hw-row';
  newRow.innerHTML = `
    <input type="checkbox" class="custom-checkbox" /> 
    <input type="text" class="custom-text" placeholder="Custom text" />
  `;
  container.appendChild(newRow);
}

// *VISIBILITY & TEMPLATE CONTROLS

function parseDataAttributes(el) {
  if (!el) return;

  var currentDept = deptSelectEl.value;
  var currentAppt = apptSelectEl.value;

  var allowedDepts = [];
  var allowedTemplates = [];

  try {
    var deptAttr = el.getAttribute('data-dept');
    var tempAttr = el.getAttribute('data-template');

    allowedDepts = deptAttr ? (deptAttr.startsWith('[') ? JSON.parse(deptAttr) : [deptAttr]) : [];
    allowedTemplates = tempAttr ? (tempAttr.startsWith('[') ? JSON.parse(tempAttr) : [tempAttr]) : [];
  } catch (e) {
    console.error('Error parsing data attributes for element:', el, e);
  }

  var deptMatch = allowedDepts.length === 0 || allowedDepts.includes(currentDept);
  var apptMatch = allowedTemplates.length === 0 || allowedTemplates.includes(currentAppt);

  setVisibility(el, deptMatch && apptMatch);
}

function matchesDept(el, currentDept) {
  var deptAttr = el.getAttribute('data-dept');

  if (!deptAttr) return true;

  try {
    var allowedDepts = deptAttr.startsWith('[') ? JSON.parse(deptAttr) : [deptAttr];
    return allowedDepts.includes(currentDept);
  } catch (e) {
    console.error('Error parsing data-dept for matchesDept:', e);
    return false;
  }
}

function handleDeptSelection() {
  deptSelectEl.addEventListener('change', function (event) {
    currentDeptValue = event.target.value;
    apptSelectEl.value = 'default';

    localStorage.setItem('savedDept', currentDeptValue);

    setVisibility(nonSpecFormEl, false);

    resetHtmlNotes();
    updateDeptVisibility();
  });
}

function updateDeptVisibility() {
  var selectedValue = deptSelectEl.value;
  currentDeptValue = selectedValue;

  var isDefault = selectedValue === 'default';
  var isOnboarding = selectedValue === 'onboarding';
  var isWarhead = selectedValue === 'warhead';
  var isSupplierManagement = selectedValue === 'supplier-management';
  var isSoicalMedia = selectedValue === 'social-media';

  if (isDefault) {
    apptSelectEl.disabled = true;
    clearBtnEl.disabled = true;
  } else if (!isDefault) {
    apptSelectEl.disabled = false;
  }

  if (isSupplierManagement) {
    howManyProductsPromptEl.before(livePromptEl);
    howManyProductsPromptEl.before(registeredPromptEl);
    howManyProductsPromptEl.before(resaleCertPromptEl);
  } else if (isWarhead) {
    designFinishedPromptEl.after(resaleCertPromptEl);
    designFinishedPromptEl.after(registeredPromptEl);
    designFinishedPromptEl.after(livePromptEl);
  }

  warheadOptions.forEach(function (option) {
    setVisibility(option, isWarhead && !isDefault && !isOnboarding && !isSupplierManagement && !isSoicalMedia);
  });

  smOptions.forEach(function (option) {
    setVisibility(option, isSupplierManagement && !isDefault && !isOnboarding && !isWarhead && !isSoicalMedia);
  });
}

function handleApptSelection() {
  apptSelectEl.addEventListener('change', function (event) {
    currentApptValue = event.target.value;

    if (currentApptValue === 'default') {
      htmlNotesEl.disabled = true;
      clearBtnEl.disabled = true;
    } else {
      htmlNotesEl.disabled = false;
      clearBtnEl.disabled = false;
    }

    if (currentApptValue === 'contacted-by-client') {
      contactedNeedsReschedulePromptEl.before(additionalNotesPromptEl);
    } else if (currentApptValue !== 'contacted-by-client') {
      startedRegPromptEl.before(additionalNotesPromptEl);
    }

    resetHtmlNotes();
    setInitials();
    updateApptVisibility();
  });
}

function updateApptVisibility() {
  var selectedValue = apptSelectEl.value;
  currentApptValue = selectedValue;
  var selectedDept = deptSelectEl.value;
  currentDeptValue = selectedDept;

  var isDefault = selectedValue === 'default';
  var isShowAllWorkedOn = showAllWorkedOnEl.checked;
  var isShowAllHw = showAllAssignedHwEl.checked;

  setVisibility(nonSpecFormEl, !isDefault);

  var conditionalElements = document.querySelectorAll('[data-dept], [data-template]');
  conditionalElements.forEach(parseDataAttributes);

  if (selectedValue === 'wh-assistance') {
    [contApptPromptEl, hwPromptEl, hwPercentPromptEl].forEach((el) => setVisibility(el, false));
  }

  if (isShowAllWorkedOn) {
    var allWorkedOnItems = workedOnEl.querySelectorAll('div[data-dept]');
    allWorkedOnItems.forEach((el) => {
      if (matchesDept(el, selectedDept)) {
        setVisibility(el, true);
      }
    });
  }

  if (isShowAllHw && selectedValue !== 'wh-post-appt') {
    var allHwItems = assignedHwEl.querySelectorAll('div[data-dept]');
    allHwItems.forEach((el) => {
      if (matchesDept(el, selectedDept)) {
        setVisibility(el, true);
      }
    });
  }

  updateHtmlNotes();
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
    updateApptVisibility();
  });
}

// *NOTE GENERATION & RESET LOGIC

function updateHtmlNotes() {
  var displayApptName = apptLabels[currentApptValue] || currentApptValue;

  if ((currentApptValue === 'wh-first-appt' && currentApptValue !== 'default') || (currentApptValue === 'wh-second-appt' && currentApptValue !== 'default') || (currentApptValue === 'wh-third-appt' && currentApptValue !== 'default') || (currentApptValue === 'wh-post-appt' && currentApptValue !== 'default')) {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${contText}${displayApptName} Warhead Training</b> appointment. ${screenShareText}
</p>
`;
    htmlNotes = contactedClientText + hwText + workedOnText + postWorkedOnText + assignedHwText + postChecklistText + additionalNotesText + startedRegText + completionFormText + smText + smRequirementsText + additionalTrainingText + nextAppointmentText + whAssistanceText + obAssistanceText + nicheChangeText + websiteAnalysisText + nextTopicText + initialsText;
  } else if (currentApptValue === 'missed-appt' && currentApptValue !== 'default') {
    htmlNotes = missedApptText + initialsText;
  } else if (currentApptValue === 'contacted-by-client' && currentApptValue !== 'default') {
    htmlNotes = contactedByClientText + reasonForContactText + returnContactText + advisedClientText + additionalNotesText + contactedRescheduleDateText + whAssistanceText + obAssistanceText + nicheChangeText + websiteAnalysisText + initialsText;
  } else if (currentApptValue === 'reschedule' && currentApptValue !== 'default') {
    contactedClientText = `<p>
  Contacted client but they are <b>unable to attend appointment.</b>
</p>
`;
    htmlNotes = contactedClientText + rescheduleReasonText + rescheduleDateText + whAssistanceText + obAssistanceText + nicheChangeText + websiteAnalysisText + initialsText;
  } else if (currentApptValue === 'podio-link' && currentApptValue !== 'default') {
    htmlNotes = podioLinkText;
  } else if (currentApptValue === 'wh-assistance' && currentApptValue !== 'default') {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${displayApptName}</b> appointment. ${screenShareText}
</p>
`;
    htmlNotes = contactedClientText + workedOnText + additionalNotesText + nextAppointmentText + whAssistanceText + obAssistanceText + nicheChangeText + websiteAnalysisText + nextTopicText + initialsText;
  } else if (currentApptValue === 'general' && currentApptValue !== 'default') {
    contactedClientText = `<p>
  Contacted client <b>${generalContactPurposeText}</b>
</p>
`;
    htmlNotes = contactedClientText + generalContactNoteText + initialsText;
  } else if ((currentApptValue === 'sm-first-appt' && currentApptValue !== 'default') || (currentApptValue === 'sm-follow-up' && currentApptValue !== 'default') || (currentApptValue === 'sm-final-upgraded' && currentApptValue !== 'default') || (currentApptValue === 'sm-final-non-upgraded' && currentApptValue !== 'default')) {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${contText}${displayApptName} Supplier Management</b> appointment.
</p>
`;
    htmlNotes = contactedClientText + smRequirementsText + howManyProductsText + updatedHowManySuppliersText + workedOnText + assignedHwText + removeNonNicheText + completedSmText + additionalNotesText + nextAppointmentText + updatedSmWsText + marketingDateText + whAssistanceText + obAssistanceText + nicheChangeText + websiteAnalysisText + initialsText;
  } else if (currentApptValue === 'sm-marketing' && currentApptValue !== 'default') {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${displayApptName}</b> appointment.
</p>
`;
    htmlNotes = contactedClientText + movedUpText + marketingReviewedText + additionalNotesText + completedMarketingText + whAssistanceText + obAssistanceText + nicheChangeText + websiteAnalysisText + initialsText;
  }

  htmlNotesEl.value = htmlNotes;
}

function resetHtmlNotes() {
  var container = document.getElementById('custom-worked-on-container');
  if (container) {
    container.innerHTML = '';
    addNewWorkedOnRow(container);
  }

  var container = document.getElementById('custom-assigned-hw-container');
  if (container) {
    container.innerHTML = '';
    addNewAssignedHwRow(container);
  }

  refreshAllCustomWorkedOn();
  refreshAllCustomAssignedHw();

  htmlNotes = '';
  contText = '';
  movedUpText = '';
  screenShareText = '';
  hwText = '';
  hwPercentText = '';
  workedOnText = '';
  updatingNewProdNameText = '';
  customWorkedonText = '';
  postWorkedOnText = '';
  assignedHwText = '';
  customAssignedHwText = '';
  postChecklistText = '';
  additionalNotesText = '';
  startedRegText = '';
  completionFormText = '';
  smText = '';
  liveText = '';
  registeredText = '';
  designFinishedText = '';
  smRequirementsText = '';
  additionalTrainingText = '';
  nextAppointmentText = '';
  nextTopicText = '';
  smReminderText = '';
  missedApptText = '';
  reasonForContactText = '';
  returnContactText = '';
  advisedClientText = '';
  contactedRescheduleDateText = '';
  rescheduleReasonText = '';
  rescheduleDateText = '';
  generalContactPurposeText = '';
  generalContactNoteText = '';
  podioLinkText = '';
  whAssistanceText = '';
  obAssistanceText = '';
  nicheChangeText = '';
  websiteAnalysisText = '';
  howManyProductsText = '';
  howManySuppliersNumberText = '';
  howManySuppliersNamesText = '';
  updatedHowManySuppliersText = '';
  removeNonNicheText = '';
  completedSmText = '';
  completedMarketingText = '';
  marketingDateText = '';
  smWsDateText = '';
  smWsTechText = '';
  updatedSmWsText = '';
  marketingReviewedText = '';
  submittedApplicationToText = '';
  assistedApplicationToText = '';
  followUpEmailToText = '';

  htmlNotesEl.value = '';

  var nonSpecForms = document.querySelectorAll('#non-specific-form');

  nonSpecForms.forEach(function (form) {
    form.reset();
  });

  var allPrompts = [phoneNumberPromptEl, secondaryPhoneNumberPromptEl, leftVmPromptEl, noVmReasonPromptEl, emailSentPromptEl, sentMissedEmailPromptEl, markedPodioPromptEl, successfulContactPromptEl, contactedPhoneNumberPromptEl, contactedSecondaryPhoneNumberPromptEl, contactedLeftVmPromptEl, contactedNoVmReasonPromptEl, contactedRescheduleDatePromptEl, completionFormSignedPromptEl, whyNotSignedPromptEl, additionalTrainingPromptEl, sentSmGuidePromptEl, enrolledSmPromptEl, smTechPromptEl, smApptPromptEl, whAssistanceApptPromptEl, whAssistanceDatePromptEl, whAssistanceTechPromptEl, obAssistanceApptPromptEl, obAssistanceDatePromptEl, obAssistanceTechPromptEl, nicheChangeApptPromptEl, nicheChangeDatePromptEl, nicheChangeTechPromptEl, websiteAnalysisApptPromptEl, websiteAnalysisDatePromptEl, websiteAnalysisTechPromptEl, resaleCertPromptEl];

  allPrompts.forEach(function (element) {
    element.setAttribute('class', 'hide-content');
  });
}

// *All DEPT STRING HANDLERS
function setContAppt() {
  if (!contApptEl) {
    return;
  }

  contApptEl.addEventListener('change', function () {
    if (contApptEl.checked && apptSelectEl.value === 'wh-first-appt') {
      startedRegPromptEl.classList.remove('show-content');
      startedRegPromptEl.classList.add('hide-content');
    } else if (!contApptEl.checked && apptSelectEl.value === 'wh-first-appt') {
      startedRegPromptEl.classList.remove('hide-content');
      startedRegPromptEl.classList.add('show-content');
    }

    if (contApptEl.checked) {
      startedRegNoneEl.checked = true;
      startedRegText = '';
      contText = 'continuation ';
    } else {
      contText = '';
    }
    updateHtmlNotes();
  });
}

function setMovedUp() {
  movedUpEl.addEventListener('change', function () {
    if (!movedUpEl.checked) {
      movedUpText = '';
    } else if (movedUpEl.checked) {
      movedUpText = ` early due to availability`;
    }
    updateHtmlNotes();
  });
}

function setLiveRegisteredDesign() {
  var liveRadioElements = [liveNoEl, liveNoneEl, liveYesEl];

  liveRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      setVisibility(additionalTrainingPromptEl, registeredYesEl.checked && liveYesEl.checked && designFinishedYesEl.checked);
      if (liveYesEl.checked) {
        liveText = `Client's website is live.`;
      } else if (liveNoEl.checked) {
        liveText = `Client's website is <b>not live</b>.`;
      } else if (liveNoneEl.checked) {
        liveText = '';
      } else {
        liveText = '';
      }
      updateSmRequirements();
      updateHtmlNotes();
    });
  });

  var registeredRadioElements = [registeredNoEl, registeredNoneEl, registeredYesEl];

  registeredRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      setVisibility(additionalTrainingPromptEl, registeredYesEl.checked && liveYesEl.checked && designFinishedYesEl.checked);
      if (registeredYesEl.checked) {
        registeredText = `Client's business is registered.`;
        setVisibility(resaleCertPromptEl, true);
      } else if (registeredNoEl.checked) {
        registeredText = `Client's business is <b>not registered</b>.`;
        resaleCertText = '';
        setVisibility(resaleCertPromptEl, false);
        resaleCertNoneEl.checked = true;
      } else if (registeredNoneEl.checked) {
        registeredText = '';
        resaleCertText = '';
        setVisibility(resaleCertPromptEl, false);
        resaleCertNoneEl.checked = true;
      } else {
        registeredText = '';
        resaleCertText = '';
        setVisibility(resaleCertPromptEl, false);
        resaleCertNoneEl.checked = true;
      }
      updateSmRequirements();
      updateHtmlNotes();
    });
  });

  var resaleCertRadioElements = [resaleCertNoEl, resaleCertNoneEl, resaleCertYesEl];

  resaleCertRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      setVisibility(additionalTrainingPromptEl, registeredYesEl.checked && liveYesEl.checked && designFinishedYesEl.checked && resaleCertYesEl.checked);
      if (resaleCertYesEl.checked) {
        resaleCertText = `Client has obtained their resale certificate.`;
      } else if (resaleCertNoEl.checked) {
        resaleCertText = `Client <b>has not</b> obtained their resale certificate.`;
      } else if (resaleCertNoneEl.checked) {
        resaleCertText = '';
      } else {
        resaleCertText = '';
      }
      updateSmRequirements();
      updateHtmlNotes();
    });
  });

  var designFinishedRadioElements = [designFinishedNoEl, designFinishedNoneEl, designFinishedYesEl];

  designFinishedRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      setVisibility(additionalTrainingPromptEl, registeredYesEl.checked && liveYesEl.checked && designFinishedYesEl.checked);
      if (designFinishedYesEl.checked) {
        designFinishedText = `Client's design is finished.`;
      } else if (designFinishedNoEl.checked) {
        designFinishedText = `Client's design is <b>not finished</b>.`;
      } else if (designFinishedNoneEl.checked) {
        designFinishedText = '';
      } else {
        designFinishedText = '';
      }
      updateSmRequirements();
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
}

function updateSmRequirements() {
  if (liveText || registeredText || designFinishedText || resaleCertText) {
    smRequirementsText = `<p>
  ${liveText} ${registeredText} ${resaleCertText} ${designFinishedText}
</p>
`;
  } else {
    smRequirementsText = '';
  }
}

function setNextAppointment() {
  nextAppointmentEl.addEventListener('input', function (event) {
    var newNextApptStr = handleDateFormat(event.target.value);

    if (!newNextApptStr) {
      nextAppointmentText = '';
    } else {
      nextAppointmentText = `<p>
  Set our next appointment for ${newNextApptStr}.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setOtherAppointment() {
  var otherApptPrompts = [whAssistanceApptPromptEl, whAssistanceDatePromptEl, whAssistanceTechPromptEl, obAssistanceApptPromptEl, obAssistanceDatePromptEl, obAssistanceTechPromptEl, nicheChangeApptPromptEl, nicheChangeDatePromptEl, nicheChangeTechPromptEl];

  otherApptPrompts.forEach(function (element) {
    element.setAttribute('class', 'hide-content');
  });

  otherDeptApptEl.addEventListener('change', function () {
    if (otherDeptApptEl && otherDeptApptEl.checked) {
      whAssistanceApptPromptEl.setAttribute('class', 'show-content');
      obAssistanceApptPromptEl.setAttribute('class', 'show-content');
      nicheChangeApptPromptEl.setAttribute('class', 'show-content');
      websiteAnalysisApptPromptEl.setAttribute('class', 'show-content');
    } else if (!otherDeptApptEl.checked) {
      whAssistanceApptPromptEl.setAttribute('class', 'hide-content');
      obAssistanceApptPromptEl.setAttribute('class', 'hide-content');
      nicheChangeApptPromptEl.setAttribute('class', 'hide-content');
      websiteAnalysisApptPromptEl.setAttribute('class', 'hide-content');
      obAssistanceDatePromptEl.setAttribute('class', 'hide-content');
      obAssistanceTechPromptEl.setAttribute('class', 'hide-content');
      whAssistanceDatePromptEl.setAttribute('class', 'hide-content');
      whAssistanceTechPromptEl.setAttribute('class', 'hide-content');
      nicheChangeDatePromptEl.setAttribute('class', 'hide-content');
      nicheChangeTechPromptEl.setAttribute('class', 'hide-content');
      websiteAnalysisDatePromptEl.setAttribute('class', 'hide-content');
      websiteAnalysisTechPromptEl.setAttribute('class', 'hide-content');
      whAssistanceApptEl.checked = false;
      obAssistanceApptEl.checked = false;
      nicheChangeApptEl.checked = false;
      websiteAnalysisApptEl.checked = false;
      var inputsToClear = [whAssistanceDateEl, obAssistanceDateEl, nicheChangeDateEl, websiteAnalysisDateEl, whAssistanceTechEl, obAssistanceTechEl, nicheChangeTechEl, websiteAnalysisTechEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      whAssistanceDateText = '';
      whAssistanceTechText = '';
      whAssistanceText = '';
      obAssistanceDateText = '';
      obAssistanceTechText = '';
      obAssistanceText = '';
      nicheChangeDateText = '';
      nicheChangeTechText = '';
      nicheChangeText = '';
      websiteAnalysisDateText = '';
      websiteAnalysisTechText = '';
      websiteAnalysisText = '';
      updateHtmlNotes();
    }
  });

  whAssistanceApptEl.addEventListener('change', function () {
    if (whAssistanceApptEl && whAssistanceApptEl.checked) {
      whAssistanceDatePromptEl.setAttribute('class', 'show-content');
      whAssistanceTechPromptEl.setAttribute('class', 'show-content');
    } else if (!whAssistanceApptEl.checked) {
      whAssistanceDatePromptEl.setAttribute('class', 'hide-content');
      whAssistanceTechPromptEl.setAttribute('class', 'hide-content');
      whAssistanceDateText = '';
      whAssistanceTechText = '';
      whAssistanceText = '';
      var inputsToClear = [whAssistanceDateEl, whAssistanceTechEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  obAssistanceApptEl.addEventListener('change', function () {
    if (obAssistanceApptEl && obAssistanceApptEl.checked) {
      obAssistanceDatePromptEl.setAttribute('class', 'show-content');
      obAssistanceTechPromptEl.setAttribute('class', 'show-content');
    } else if (!obAssistanceApptEl.checked) {
      obAssistanceDatePromptEl.setAttribute('class', 'hide-content');
      obAssistanceTechPromptEl.setAttribute('class', 'hide-content');
      obAssistanceDateText = '';
      obAssistanceTechText = '';
      obAssistanceText = '';
      var inputsToClear = [obAssistanceDateEl, obAssistanceTechEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  nicheChangeApptEl.addEventListener('change', function () {
    if (nicheChangeApptEl && nicheChangeApptEl.checked) {
      nicheChangeDatePromptEl.setAttribute('class', 'show-content');
      nicheChangeTechPromptEl.setAttribute('class', 'show-content');
    } else if (!nicheChangeApptEl.checked) {
      nicheChangeDatePromptEl.setAttribute('class', 'hide-content');
      nicheChangeTechPromptEl.setAttribute('class', 'hide-content');
      nicheChangeDateText = '';
      nicheChangeTechText = '';
      nicheChangeText = '';
      var inputsToClear = [nicheChangeDateEl, nicheChangeTechEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  websiteAnalysisApptEl.addEventListener('change', function () {
    if (websiteAnalysisApptEl && websiteAnalysisApptEl.checked) {
      websiteAnalysisDatePromptEl.setAttribute('class', 'show-content');
      websiteAnalysisTechPromptEl.setAttribute('class', 'show-content');
    } else if (!websiteAnalysisApptEl.checked) {
      websiteAnalysisDatePromptEl.setAttribute('class', 'hide-content');
      websiteAnalysisTechPromptEl.setAttribute('class', 'hide-content');
      websiteAnalysisDateText = '';
      websiteAnalysisTechText = '';
      websiteAnalysisText = '';
      var inputsToClear = [websiteAnalysisDateEl, websiteAnalysisTechEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  whAssistanceTechEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      whAssistanceTechText = '';
    } else if (event.target.value) {
      whAssistanceTechText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  whAssistanceDateEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      whAssistanceDateText = '';
    } else if (event.target.value) {
      whAssistanceDateText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  obAssistanceTechEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      obAssistanceTechText = '';
    } else if (event.target.value) {
      obAssistanceTechText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  obAssistanceDateEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      obAssistanceDateText = '';
    } else if (event.target.value) {
      obAssistanceDateText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  nicheChangeTechEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      nicheChangeTechText = '';
    } else if (event.target.value) {
      nicheChangeTechText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  nicheChangeDateEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      nicheChangeDateText = '';
    } else if (event.target.value) {
      nicheChangeDateText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  websiteAnalysisTechEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      websiteAnalysisTechText = '';
    } else if (event.target.value) {
      websiteAnalysisTechText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  websiteAnalysisDateEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      websiteAnalysisDateText = '';
    } else if (event.target.value) {
      websiteAnalysisDateText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });
}

function updateOtherAppointment() {
  if (whAssistanceTechText || whAssistanceDateText) {
    whAssistanceText = `<p>
  Set Warhead Assistance appointment with ${whAssistanceTechText} for ${whAssistanceDateText}.
</p>
`;
  } else {
    whAssistanceText = '';
  }

  if (obAssistanceTechText || obAssistanceDateText) {
    obAssistanceText = `<p>
  Set Onboarding Assistance appointment with ${obAssistanceTechText} for ${obAssistanceDateText}.
</p>
`;
  } else {
    obAssistanceText = '';
  }

  if (nicheChangeTechText || nicheChangeDateText) {
    nicheChangeText = `<p>
  Set Niche Change appointment with ${nicheChangeTechText} for ${nicheChangeDateText}.
</p>
`;
  } else {
    nicheChangeText = '';
  }

  if (websiteAnalysisTechText || websiteAnalysisDateText) {
    websiteAnalysisText = `<p>
  Set Website Analysis appointment with ${websiteAnalysisTechText} for ${websiteAnalysisDateText}.
</p>
`;
  } else {
    websiteAnalysisText = '';
  }
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
  additionalNotesEl.addEventListener('input', function (event) {
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

function setInitials() {
  storedInitials = localStorage.getItem('initials');

  if (storedInitials) {
    initialsEl.value = storedInitials;
    initialsText = `<p> 
  -${storedInitials}
</p>
`;
  }
  initialsEl.addEventListener('input', function (event) {
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

    if (initialsText === '') {
      htmlNotesEl.classList.remove('can-be-active');
    } else {
      htmlNotesEl.classList.add('can-be-active');
    }

    updateHtmlNotes();
  });
}

// "Worked On" String Handlers
var workedOnElements = [dashNavEl, extraPageEl, createCatEl, organizeCatEl, createProdEl, prodGridEl, catProdEl, discountsEl, checkoutSectionsEl, payPalEl, testOrderEl, processOrderEl, updatingProdEl, unavailableProdEl, stripeEl, variantsEl, googleAnalyticsEl, updatingNewProdEl, processRealOrderEl, modifyVariantsEl, applicationProcessEl, dropshipDatabaseEl, submittedApplicationEl, assistedApplicationEl, followUpEmailEl];

function setWorkedOn() {
  updatingNewProdNameEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      updatingNewProdNameText = 'New Supplier(s)';
    } else {
      updatingNewProdNameText = event.target.value;
    }
    updateWorkedOn();
    updateHtmlNotes();
  });

  submittedApplicationToEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      submittedApplicationToText = '';
    } else {
      submittedApplicationToText = event.target.value;
    }
    updateWorkedOn();
    updateHtmlNotes();
  });

  assistedApplicationToEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      assistedApplicationToText = '';
    } else {
      assistedApplicationToText = event.target.value;
    }
    updateWorkedOn();
    updateHtmlNotes();
  });

  followUpEmailToEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      followUpEmailToText = '';
    } else {
      followUpEmailToText = event.target.value;
    }
    updateWorkedOn();
    updateHtmlNotes();
  });

  workedOnElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateWorkedOn();
        updateHtmlNotes();
      });
    }
  });
}

function initDynamicWorkedOn() {
  var container = document.getElementById('custom-worked-on-container');
  if (!container) return;

  container.addEventListener('input', function (event) {
    var row = event.target.closest('.custom-worked-on-row');
    if (!row) return;

    var checkbox = row.querySelector('.custom-checkbox');
    var textInput = row.querySelector('.custom-text');

    if (event.target.classList.contains('custom-checkbox') && !checkbox.checked) {
      if (container.children.length > 1 && row !== container.lastElementChild) {
        row.remove();
        refreshAllCustomWorkedOn();
        return;
      }
    }

    if (row === container.lastElementChild) {
      if (checkbox.checked || textInput.value.trim() !== '') {
        addNewWorkedOnRow(container);
      }
    }

    refreshAllCustomWorkedOn();
  });
}

function refreshAllCustomWorkedOn() {
  var combinedHtml = '';

  var rows = document.querySelectorAll('.custom-worked-on-row');

  rows.forEach((row) => {
    var checkbox = row.querySelector('.custom-checkbox');
    var textInput = row.querySelector('.custom-text');

    if (checkbox && checkbox.checked) {
      var value = textInput.value.trim();
      if (value !== '') {
        combinedHtml += `\n <li>${value}</li>`;
      }
    }
  });

  customWorkedonText = combinedHtml;

  if (typeof updateWorkedOn === 'function') updateWorkedOn();
  if (typeof updateHtmlNotes === 'function') updateHtmlNotes();
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

  stripeText = stripeEl && stripeEl.checked ? `\n <li>Linked Stripe</li>` : ``;
  variantsText = variantsEl && variantsEl.checked ? `\n <li>Condensing Variants</li>` : ``;
  googleAnalyticsText = googleAnalyticsEl && googleAnalyticsEl.checked ? `\n <li>Helped set up Google Analytics</li>` : ``;

  updatingNewProdText = updatingNewProdEl && updatingNewProdEl.checked ? `\n <li>Updating Products from ${updatingNewProdNameText}</li>` : '';
  processRealOrderText = processRealOrderEl && processRealOrderEl.checked ? `\n <li>Processing Real Customer Order</li>` : '';
  modifyVariantsText = modifyVariantsEl && modifyVariantsEl.checked ? `\n <li>Modifying Singular Products to Variants</li>` : '';

  applicationProcessText = applicationProcessEl && applicationProcessEl.checked ? `\n <li>Covered the supplier application process</li>` : '';
  dropshipDatabaseText = dropshipDatabaseEl && dropshipDatabaseEl.checked ? `\n <li>Introduction to dropship database</li>` : '';
  submittedApplicationText = submittedApplicationEl && submittedApplicationEl.checked ? `\n <li>Submitted application to: ${submittedApplicationToText}</li>` : '';
  assistedApplicationText = assistedApplicationEl && assistedApplicationEl.checked ? `\n <li>Assisted client in submitting applications to: ${assistedApplicationToText}</li>` : '';
  followUpEmailText = followUpEmailEl && followUpEmailEl.checked ? `\n <li>Assisted client in sending follow up emails to: ${followUpEmailToText}</li>` : '';

  var isAnythingChecked = workedOnElements.some(function (el) {
    return el && el.checked;
  });

  if (isAnythingChecked || customWorkedonText !== '') {
    workedOnText = `Worked On: 
<ul>${dashNavText}${extraPageText}${createCatText}${organizeCatText}${createProdText}${prodGridText}${catProdText}${discountsText}${checkoutSectionsText}${payPalText}${testOrderText}${processOrderText}${updatingProdText}${unavailableProdText}${stripeText}${variantsText}${googleAnalyticsText}${unavailableCjProdText}${updatingNewProdText}${processRealOrderText}${modifyVariantsText}${applicationProcessText}${dropshipDatabaseText}${submittedApplicationText}${assistedApplicationText}${followUpEmailText}${customWorkedonText}
</ul>
`;
  } else {
    workedOnText = '';
  }
}

// "Assigned HW" String Handlers
var assignedHwElements = [firstApptFinishVidEl, reviewExtraPagesEl, removeProdEl, practiceCatProdEl, practiceCreateCatdEl, registerBusinessEl, firstApptContinueVidEl, secondApptFinishVidEl, practiceDiscountsEl, practiceOrdersEl, secondApptContinueVidEl, thirdApptFinishVidEl, practiceUpdateEl, allVidEl, applyAndEmailEl, contApplyAndEmailEl];

function setAssignedHw() {
  assignedHwElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateAssignedHw();
        updateHtmlNotes();
      });
    }
  });
}

function initDynamicAssignedHw() {
  var container = document.getElementById('custom-assigned-hw-container');
  if (!container) return;

  container.addEventListener('input', function (event) {
    var row = event.target.closest('.custom-assigned-hw-row');
    if (!row) return;

    var checkbox = row.querySelector('.custom-checkbox');
    var textInput = row.querySelector('.custom-text');

    if (event.target.classList.contains('custom-checkbox') && !checkbox.checked) {
      if (container.children.length > 1 && row !== container.lastElementChild) {
        row.remove();
        refreshAllCustomAssignedHw();
        return;
      }
    }

    if (row === container.lastElementChild) {
      if (checkbox.checked || textInput.value.trim() !== '') {
        addNewAssignedHwRow(container);
      }
    }

    refreshAllCustomAssignedHw();
  });
}

function refreshAllCustomAssignedHw() {
  var combinedHtml = '';

  var rows = document.querySelectorAll('.custom-assigned-hw-row');

  rows.forEach((row) => {
    var checkbox = row.querySelector('.custom-checkbox');
    var textInput = row.querySelector('.custom-text');

    if (checkbox && checkbox.checked) {
      var value = textInput.value.trim();
      if (value !== '') {
        combinedHtml += `\n <li>${value}</li>`;
      }
    }
  });

  customAssignedHwText = combinedHtml;

  if (typeof updateAssignedHw === 'function') updateAssignedHw();
  if (typeof updateHtmlNotes === 'function') updateHtmlNotes();
}

function updateAssignedHw() {
  firstApptFinishVidText = firstApptFinishVidEl && firstApptFinishVidEl.checked ? `\n <li>Finish 1st appointment teachable videos</li>` : ``;
  reviewExtraPagesText = reviewExtraPagesEl && reviewExtraPagesEl.checked ? `\n <li>Review Extra Pages</li>` : ``;
  removeProdText = removeProdEl && removeProdEl.checked ? `\n <li>Remove unrelated products</li>` : '';
  practiceCatProdText = practiceCatProdEl && practiceCatProdEl.checked ? `\n <li>Practice categorizing products using guide</li>` : '';
  practiceCreateCatdText = practiceCreateCatdEl && practiceCreateCatdEl.checked ? `\n <li>Practice creating categories</li>` : '';
  registerBusinessText = registerBusinessEl && registerBusinessEl.checked ? `\n <li>Register business</li>` : '';
  firstApptContinueVidText = firstApptContinueVidEl && firstApptContinueVidEl.checked ? `\n <li>Continue watching teachable videos</li>` : '';

  secondApptFinishVidText = secondApptFinishVidEl && secondApptFinishVidEl.checked ? `\n <li>Finish 2nd appointment teachable videos</li>` : ``;
  practiceDiscountsText = practiceDiscountsEl && practiceDiscountsEl.checked ? `\n <li>Practice creating discounts</li>` : ``;
  practiceOrdersText = practiceOrdersEl && practiceOrdersEl.checked ? `\n <li>Practice making & processing test orders using guides</li>` : '';
  secondApptContinueVidText = secondApptContinueVidEl && secondApptContinueVidEl.checked ? `\n <li>Continue watching teachable videos<</li>` : '';

  thirdApptFinishVidText = thirdApptFinishVidEl && thirdApptFinishVidEl.checked ? `\n <li>Finish 3rd appointment teachable videos</li>` : '';
  practiceUpdateText = practiceUpdateEl && practiceUpdateEl.checked ? `\n <li>Practice updating products using guides</li>` : '';
  allVidText = allVidEl && allVidEl.checked ? `\n <li>Complete all videos</li>` : '';

  applyAndEmailText = applyAndEmailEl && applyAndEmailEl.checked ? `\n <li>Apply to a minimum of 2 new suppliers and send follow-up emails every 2-3 days before the next appointment</li>` : '';
  contApplyAndEmailText = contApplyAndEmailEl && contApplyAndEmailEl.checked ? `\n <li>Continue working on sending applications and follow up emails</li>` : '';

  var isAnythingChecked = assignedHwElements.some(function (el) {
    return el && el.checked;
  });

  if (isAnythingChecked || customAssignedHwText !== '') {
    assignedHwText = `Assigned homework: 
<ul>${firstApptFinishVidText}${reviewExtraPagesText}${removeProdText}${practiceCatProdText}${practiceCreateCatdText}${registerBusinessText}${firstApptContinueVidText}${secondApptFinishVidText}${practiceDiscountsText}${practiceOrdersText}${secondApptContinueVidText}${thirdApptFinishVidText}${practiceUpdateText}${allVidText}${applyAndEmailText}${contApplyAndEmailText}${customAssignedHwText}
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

// Missed Appointment String Handlers
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
      emailSentText = '';
      sentMissedEmailText = '';
      markedPodioText = '';
      phoneNumberEl.value = '';
      secondaryPhoneNumberEl.value = '';
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
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
      } else if (secondAttemptRadioEl.checked) {
        attemptText = `<b>2nd attempt</b>`;
        phoneNumberPromptEl.setAttribute('class', 'hide-content');
        secondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        leftVmPromptEl.setAttribute('class', 'show-content');
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        emailSentPromptEl.setAttribute('class', 'hide-content');
        sentMissedEmailPromptEl.setAttribute('class', 'hide-content');
        markedPodioPromptEl.setAttribute('class', 'hide-content');
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
      } else if (thirdAttemptRadioEl.checked) {
        attemptText = `<b>3rd attempt</b>`;
        phoneNumberPromptEl.setAttribute('class', 'hide-content');
        secondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        leftVmPromptEl.setAttribute('class', 'show-content');
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        emailSentPromptEl.setAttribute('class', 'hide-content');
        sentMissedEmailPromptEl.setAttribute('class', 'show-content');
        markedPodioPromptEl.setAttribute('class', 'show-content');
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
      } else {
        attemptText = ``;
        phoneNumberPromptEl.setAttribute('class', 'hide-content');
        secondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        leftVmPromptEl.setAttribute('class', 'hide-content');
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        emailSentPromptEl.setAttribute('class', 'hide-content');
        sentMissedEmailPromptEl.setAttribute('class', 'hide-content');
        markedPodioPromptEl.setAttribute('class', 'hide-content');
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
      }
      updateMissedAppointment();
      updateHtmlNotes();
    });
  });

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
      } else if (vmYesEl.checked) {
        leftVmText = `Left voicemail`;
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
      } else if (vmNoneEl.checked) {
        leftVmText = ``;
        noVmReasonPromptEl.setAttribute('class', 'hide-content');
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
      } else {
        leftVmText = ``;
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
      }
      updateVmText();
      updateHtmlNotes();
    });
  });

  vmBoxFullEl.addEventListener('change', function () {
    if (!vmBoxFullEl.checked) {
      noVmReasonText = '';
    } else if (vmBoxFullEl.checked) {
      noVmReasonText = `voicemail box is full`;
    }
    updateVmText();
    updateHtmlNotes();
  });

  vmNotSetupEl.addEventListener('change', function () {
    if (!vmNotSetupEl.checked) {
      noVmReasonText = '';
    } else if (vmNotSetupEl.checked) {
      noVmReasonText = `voicemail is not set up`;
    }
    updateVmText();
    updateHtmlNotes();
  });

  emailSentEl.addEventListener('change', function () {
    if (!emailSentEl.checked) {
      emailSentText = '';
    } else if (emailSentEl.checked) {
      emailSentText = ' Sent email to client.';
    }
    updateMissedAppointment();
    updateHtmlNotes();
  });

  sentMissedEmailEl.addEventListener('change', function () {
    if (!sentMissedEmailEl.checked) {
      sentMissedEmailText = '';
    } else if (sentMissedEmailEl.checked) {
      sentMissedEmailText = ' Sent <b>missed appointment</b> email to account manager and front-end.';
    }
    updateMissedAppointment();
    updateHtmlNotes();
  });

  markedPodioEl.addEventListener('change', function () {
    if (!markedPodioEl.checked) {
      markedPodioText = '';
    } else if (markedPodioEl.checked) {
      markedPodioText = ' Marked Podio.';
    }
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
  ${attemptText} to reach out to client.${updatedPhoneNumberText} Client didn't answer.${updatedVmText}${emailSentText}${sentMissedEmailText}${markedPodioText}
</p>
`;
}

// Contacted By Client String Handlers
function setContactedByClient() {
  setVisibility(contactedEmailSentPromptEl, false);
  contactedByClientText = `<p>
  Contacted by client.
</p>
`;

  var contactedPrompts = [successfulContactPromptEl, contactedPhoneNumberPromptEl, contactedSecondaryPhoneNumberPromptEl, contactedLeftVmPromptEl, contactedNoVmReasonPromptEl, contactedRescheduleDatePromptEl];

  contactedPrompts.forEach(function (element) {
    element.setAttribute('class', 'hide-content');
  });

  var messageTypeRadioElements = [messageTypeNoneRadioEl, messageTypeVoicemailRadioEl, messageTypeEmailRadioEl, messageTypeTextRadioEl];

  messageTypeRadioElements.forEach(function (element) {
    var currentMsgType = element.value;

    element.addEventListener('change', function () {
      if (messageTypeNoneRadioEl.checked) {
        contactedByClientText = `<p>
  Contacted by client.
</p>
`;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        setVisibility(contactedEmailSentPromptEl, false);
        contactedPrompts.forEach(function (element) {
          element.setAttribute('class', 'hide-content');
        });
      } else if (messageTypeVoicemailRadioEl.checked || messageTypeEmailRadioEl.checked || messageTypeTextRadioEl.checked) {
        contactedByClientText = `<p>
  Contacted by client via ${currentMsgType}.
</p>
`;
        successfulContactPromptEl.setAttribute('class', 'show-content');
        contactedPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedSecondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedLeftVmPromptEl.setAttribute('class', 'hide-content');
        contactedNoVmReasonPromptEl.setAttribute('class', 'hide-content');
        setVisibility(contactedEmailSentPromptEl, true);
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        successfulContactNoneEl.checked = true;
      }
      updateHtmlNotes();
    });
  });

  reasonForContactEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      reasonForContactText = '';
    } else {
      reasonForContactText = `<p>
  Reason: ${event.target.value}
</p>
`;
    }

    updateHtmlNotes();
  });

  var successfulContactRadioElements = [successfulContactNoEl, successfulContactNoneEl, successfulContactYesEl];

  successfulContactRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      updatedContactedPhoneNumberText = '';
      contactedUpdatedVmText = '';
      contactedVmNoneEl.checked = true;
      contactedPhoneNumberEl.value = '';
      contactedSecondaryPhoneNumberEl.value = '';
      if (successfulContactNoEl.checked) {
        successfulContactText = `Attempted to contact client but got no response.`;
        contactedPhoneNumberPromptEl.setAttribute('class', 'show-content');
        contactedSecondaryPhoneNumberPromptEl.setAttribute('class', 'show-content');
        contactedLeftVmPromptEl.setAttribute('class', 'show-content');
      } else if (successfulContactYesEl.checked) {
        successfulContactText = `Succesfully contacted client.`;
        contactedPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedSecondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedLeftVmPromptEl.setAttribute('class', 'hide-content');
        contactedNoVmReasonPromptEl.setAttribute('class', 'hide-content');
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
      } else if (successfulContactNoneEl.checked) {
        successfulContactText = '';
        contactedPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedSecondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedLeftVmPromptEl.setAttribute('class', 'hide-content');
        contactedNoVmReasonPromptEl.setAttribute('class', 'hide-content');
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
      } else {
        successfulContactText = '';
        contactedPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedSecondaryPhoneNumberPromptEl.setAttribute('class', 'hide-content');
        contactedLeftVmPromptEl.setAttribute('class', 'hide-content');
        contactedNoVmReasonPromptEl.setAttribute('class', 'hide-content');
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
      }
      updateReturnContactText();
      updateHtmlNotes();
    });
  });

  contactedPhoneNumberEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      contactedPhoneNumberText = '';
    } else {
      event.target.value = formatPhone(event.target.value);
      contactedPhoneNumberText = event.target.value;
    }
    updateContactedPhoneNumberText();
    updateHtmlNotes();
  });

  contactedSecondaryPhoneNumberEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      contactedSecondaryPhoneNumberText = '';
    } else {
      event.target.value = formatPhone(event.target.value);
      contactedSecondaryPhoneNumberText = event.target.value;
    }
    updateContactedPhoneNumberText();
    updateHtmlNotes();
  });

  var contactedVmRadioElements = [contactedVmNoEl, contactedVmNoneEl, contactedVmYesEl];

  contactedVmRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (contactedVmNoEl.checked) {
        contactedNoVmReasonPromptEl.setAttribute('class', 'show-content');
        contactedLeftVmText = `Did not leave voicemail`;
      } else if (contactedVmYesEl.checked) {
        contactedNoVmReasonPromptEl.setAttribute('class', 'hide-content');
        contactedLeftVmText = `Left voicemail`;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
      } else if (contactedVmNoneEl.checked) {
        contactedNoVmReasonPromptEl.setAttribute('class', 'hide-content');
        contactedLeftVmText = ``;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
      } else {
        contactedNoVmReasonPromptEl.setAttribute('class', 'hide-content');
        contactedLeftVmText = ``;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
      }
      updateContactedVmText();
      updateHtmlNotes();
    });
  });

  contactedVmBoxFullEl.addEventListener('change', function () {
    if (!contactedVmBoxFullEl.checked) {
      contactedNoVmReasonText = '';
    } else if (contactedVmBoxFullEl.checked) {
      contactedNoVmReasonText = `voicemail box is full`;
    }
    updateContactedVmText();
    updateHtmlNotes();
  });

  contactedVmNotSetupEl.addEventListener('change', function () {
    if (!contactedVmNotSetupEl.checked) {
      contactedNoVmReasonText = '';
    } else if (contactedVmNotSetupEl.checked) {
      contactedNoVmReasonText = `voicemail is not set up`;
    }
    updateContactedVmText();
    updateHtmlNotes();
  });

  contactedEmailSentEl.addEventListener('change', function () {
    if (contactedEmailSentEl.checked) {
      contactedEmailSentText = ` Sent email to client.`;
    } else if (!contactedEmailSentEl.checked) {
      contactedEmailSentText = ``;
    }
    updateReturnContactText();
    updateHtmlNotes();
  });

  advisedClientEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      advisedClientText = '';
    } else {
      advisedClientText = `<p>
  Advised client: ${event.target.value}
</p>
`;
    }
    updateHtmlNotes();
  });

  needsRescheduledEl.addEventListener('change', function () {
    if (needsRescheduledEl.checked) {
      contactedRescheduleDatePromptEl.setAttribute('class', 'show-content');
    } else if (!needsRescheduledEl.checked) {
      contactedRescheduleDatePromptEl.setAttribute('class', 'hide-content');
      contactedRescheduleDateText = '';
      contactedRescheduleDateEl.value = '';
    } else {
      contactedRescheduleDatePromptEl.setAttribute('class', 'hide-content');
    }
    updateHtmlNotes();
  });

  contactedRescheduleDateEl.addEventListener('input', function (event) {
    var newContactedRescheduleOriginalStr = handleDateFormat(event.target.value);

    if (!newContactedRescheduleOriginalStr) {
      contactedRescheduleDateText = '';
    } else {
      contactedRescheduleDateText = `<p>
  Rescheduled our appointment to ${newContactedRescheduleOriginalStr}.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function updateContactedPhoneNumberText() {
  if (contactedPhoneNumberText && !contactedSecondaryPhoneNumberText) {
    updatedContactedPhoneNumberText = ` Used phone number on file: ${contactedPhoneNumberText}.`;
  } else if (contactedPhoneNumberText && contactedSecondaryPhoneNumberText) {
    updatedContactedPhoneNumberText = ` Used phone numbers on file: ${contactedPhoneNumberText} & ${contactedSecondaryPhoneNumberText}.`;
  } else if (!contactedPhoneNumberText && !contactedSecondaryPhoneNumberText) {
    updatedContactedPhoneNumberText = '';
  }
  updateReturnContactText();
}

function updateContactedVmText() {
  if (contactedLeftVmText && !contactedNoVmReasonText) {
    contactedUpdatedVmText = ` ${contactedLeftVmText}.`;
  } else if (contactedLeftVmText && contactedNoVmReasonText) {
    contactedUpdatedVmText = ` ${contactedLeftVmText}, ${contactedNoVmReasonText}.`;
  } else {
    contactedUpdatedVmText = '';
  }

  updateReturnContactText();
}

function updateReturnContactText() {
  if (!successfulContactText && !updatedContactedPhoneNumberText && !contactedUpdatedVmText && !contactedEmailSentText) {
    returnContactText = '';
  } else {
    returnContactText = `<p>
  ${successfulContactText}${updatedContactedPhoneNumberText}${contactedUpdatedVmText}${contactedEmailSentText}
</p>  
`;
  }
}

// General String Handler
function setGeneralContact() {
  generalContactPurposeEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      generalContactPurposeText = '';
    } else {
      generalContactPurposeText = ` for ${event.target.value}`;
    }
    updateHtmlNotes();
  });

  generalContactNoteEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      generalContactNoteText = '';
    } else {
      generalContactNoteText = `<p>
  ${event.target.value}
</p>
`;
    }
    updateHtmlNotes();
  });
}

// Reschedule String Handler
function setReschedule() {
  rescheduleReasonEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      rescheduleReasonText = '';
    } else {
      rescheduleReasonText = `<p>
  Reason: ${event.target.value}
</p>
`;
    }
    updateHtmlNotes();
  });

  rescheduleDateEl.addEventListener('input', function (event) {
    var newRescheduleDateStr = handleDateFormat(event.target.value);

    if (!newRescheduleDateStr) {
      rescheduleDateText = '';
    } else {
      rescheduleDateText = `<p>
  Rescheduled Warhead appointment to ${newRescheduleDateStr}.
</p>
`;
    }
    updateHtmlNotes();
  });
}

// Podio Link String Handlers
function setPodioLink() {
  podioLinkEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      podioLinkText = '';
    } else {
      podioLinkText = `<h3><a href="${event.target.value}" target="_blank">Support Project</a></h3>`;
    }
    updateHtmlNotes();
  });
}

// *WARHEAD SPECIFIC STRING HANDLERS
function setScreenShare() {
  screenShareOtherPromptEl.classList.add('hide-content');

  screenShareEl.addEventListener('change', function (event) {
    currentScreenShareValue = event.target.value;

    if (currentScreenShareValue === 'default' || currentScreenShareValue === 'Other') {
      screenShareText = '';
    } else {
      screenShareText = `Used ${currentScreenShareValue}.`;
    }

    if (currentScreenShareValue === 'Other') {
      screenShareOtherPromptEl.classList.remove('hide-content');
      screenShareOtherPromptEl.classList.add('show-content');
    } else if (currentScreenShareValue !== 'Other') {
      screenShareOtherPromptEl.classList.remove('show-content');
      screenShareOtherPromptEl.classList.add('hide-content');
    }

    updateHtmlNotes();
  });

  screenShareOtherEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      screenShareText = '';
    } else if (event.target.value) {
      screenShareText = `Used ${event.target.value}.`;
    }
    updateHtmlNotes();
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
</p>
`;
  } else {
    hwText = '';
  }
}

function setStartedRegistering() {
  var startedRegRadioElements = [startedRegNoEl, startedRegNoneEl, startedRegYesEl];

  startedRegRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (currentApptValue !== 'wh-first-appt') {
        startedRegText = '';
        updateHtmlNotes();
        return;
      }

      if (startedRegYesEl.checked) {
        startedRegText = `<p>
  Client <b>has</b> started registering business.
</p>`;
      } else if (startedRegNoEl.checked) {
        startedRegText = `<p>
  Client <b>has not</b> started registering business.
</p>`;
      } else if (startedRegNoneEl.checked) {
        startedRegText = '';
      } else {
        startedRegText = '';
      }

      updateHtmlNotes();
    });
  });
}

function setCompletionForm() {
  whyNotSignedPromptEl.setAttribute('class', 'hide-content');

  completionFormSentEl.addEventListener('change', function () {
    if (currentApptValue !== 'wh-third-appt' && currentApptValue !== 'wh-second-appt') {
      completionFormSignedText = '';
      updateHtmlNotes();
      return;
    }

    if (completionFormSentEl.checked) {
      completionFormSentText = `Sent & explained completion form.`;
    } else {
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
      if (currentApptValue !== 'wh-third-appt' && currentApptValue !== 'wh-second-appt') {
        completionFormSignedText = '';
        updateHtmlNotes();
        return;
      }

      if (cfSignedElYes.checked) {
        whyNotSignedPromptEl.setAttribute('class', 'hide-content');
        completionFormSignedText = ` Client has <b>signed</b> completion form.`;
      } else if (cfSignedElNo.checked) {
        whyNotSignedPromptEl.setAttribute('class', 'show-content');
        completionFormSignedText = ` Client has <b>not signed</b> completion form.`;
      } else if (cfSignedElNone.checked) {
        whyNotSignedPromptEl.setAttribute('class', 'hide-content');
        completionFormSignedText = '';
      } else {
        completionFormSignedText = '';
      }
      updateCompletionForm();
      updateHtmlNotes();
    });
  });

  whyNotSignedEl.addEventListener('input', function (event) {
    whyNotSignedText = event.target.value;
    updateCompletionForm();
    updateHtmlNotes();
  });
}

function updateCompletionForm() {
  if (completionFormSentText || completionFormSignedText) {
    completionFormText = `<p>
  ${completionFormSentText}${completionFormSignedText} ${whyNotSignedText}
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
    if (currentApptValue !== 'wh-post-appt') {
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
    if (currentApptValue !== 'wh-post-appt') {
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

  smTechEl.addEventListener('input', function (event) {
    smTechText = event.target.value;
    updateSupplierManagement();
    updateHtmlNotes();
  });

  smApptEl.addEventListener('input', function (event) {
    var newSmApptStr = handleDateFormat(event.target.value);

    if (!newSmApptStr) {
      smApptText = '';
    } else {
      smApptText = newSmApptStr;
    }

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

// *SUPPLIER MANAGEMENT SPECIFIC STRING HANDLERS
function setHowManyProducts() {
  howManyProductsEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      howManyProductsText = '';
    } else {
      howManyProductsText = `<p>
  Client has ${event.target.value} products on their website.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setHowManySuppliers() {
  howManySuppliersNumberEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      howManySuppliersNumberText = '';
    } else {
      howManySuppliersNumberText = event.target.value;
    }
    updatedHowManySuppliers();
    updateHtmlNotes();
  });

  howManySuppliersNamesEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      howManySuppliersNamesText = '';
    } else {
      howManySuppliersNamesText = event.target.value;
    }
    updatedHowManySuppliers();
    updateHtmlNotes();
  });
}

function updatedHowManySuppliers() {
  if (howManySuppliersNumberText || howManySuppliersNamesText) {
    updatedHowManySuppliersText = `<p>
  Client has ${howManySuppliersNumberText} suppliers: ${howManySuppliersNamesText}
</p>
`;
  } else {
    updatedHowManySuppliersText = '';
  }
}

function setRemoveNonNiche() {
  removeNonNicheEl.addEventListener('change', function () {
    if (!removeNonNicheEl.checked) {
      removeNonNicheText = '';
    } else {
      removeNonNicheText = `<p>
  Advised client to remove any non-niche related items.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setCompletedSm() {
  completedSmEl.addEventListener('change', function () {
    if (!completedSmEl.checked) {
      completedSmText = '';
    } else {
      completedSmText = `<p>
  Client has <b>completed supplier management</b>.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setCompletedMarketing() {
  completedMarketingEl.addEventListener('change', function () {
    if (!completedMarketingEl.checked) {
      completedMarketingText = '';
    } else {
      completedMarketingText = `<p>
  Client has <b>completed supplier management and marketing appointment</b>.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setSmWsAppt() {
  smWsDateEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      smWsDateText = '';
    } else {
      smWsDateText = event.target.value;
    }
    updatedSmWsAppt();
    updateHtmlNotes();
  });

  smWsTechEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      smWsTechText = '';
    } else {
      smWsTechText = event.target.value;
    }
    updatedSmWsAppt();
    updateHtmlNotes();
  });
}

function updatedSmWsAppt() {
  if (smWsDateText || smWsTechText) {
    updatedSmWsText = `<p>
  Booked Website Analysis appointment with ${smWsTechText} on ${smWsDateText}
</p>
`;
  } else {
    updatedSmWsText = '';
  }
}

function setMarketingAppt() {
  marketingDateEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      marketingDateText = '';
    } else {
      marketingDateText = `<p>
  Set One-Time Marketing appointment on ${event.target.value}
</p>
`;
    }
    updateHtmlNotes();
  });
}

var marketingReviewedElements = [seoBasicsEl, catAndProdEl, ensureProdCatEl, metasReviewedEl, reviseTitlesDescEl, optimizeImagesEl, reviewSocialMediaEl];

function setMarketingReviewed() {
  marketingReviewedElements.forEach(function (element) {
    element.addEventListener('change', function () {
      updateMarketingReviewed();
      updateHtmlNotes();
    });
  });
}

function updateMarketingReviewed() {
  seoBasicsText = seoBasicsEl && seoBasicsEl.checked ? '\n <li>The basics of SEO</li>' : '';
  catAndProdText = catAndProdEl && catAndProdEl.checked ? '\n <li>Categories and products</li>' : '';
  ensureProdCatText = ensureProdCatEl && ensureProdCatEl.checked ? '\n <li>Ensuring products are categorized</li>' : '';
  metasReviewedText = metasReviewedEl && metasReviewedEl.checked ? '\n <li>Category keywords, meta titles, and meta descriptions</li>' : '';
  reviseTitlesDescText = reviseTitlesDescEl && reviseTitlesDescEl.checked ? '\n <li>Revising product titles and product descriptions</li>' : '';
  optimizeImagesText = optimizeImagesEl && optimizeImagesEl.checked ? '\n <li>Optimizing images</li>' : '';
  reviewSocialMediaText = reviewSocialMediaEl && reviewSocialMediaEl.checked ? '\n <li>Social media</li>' : '';

  var isAnythingChecked = marketingReviewedElements.some(function (el) {
    return el && el.checked;
  });

  if (isAnythingChecked) {
    marketingReviewedText = `Reviewed:
<ul>${seoBasicsText}${catAndProdText}${ensureProdCatText}${metasReviewedText}${reviseTitlesDescText}${optimizeImagesText}${reviewSocialMediaText}
</ul>
`;
  } else {
    marketingReviewedText = '';
  }
}

// *INITIALIZATION (DOM CONTENT LOADED)

document.addEventListener('DOMContentLoaded', () => {
  setVisibility(resaleCertPromptEl, false);

  if (initialsText === '') {
    htmlNotesEl.classList.remove('can-be-active');
  } else {
    htmlNotesEl.classList.add('can-be-active');
  }

  htmlNotesEl.value = '';

  var allForms = document.querySelectorAll('form');

  allForms.forEach(function (form) {
    form.reset();
  });

  copyHtmlNotes();
  clearInputs();
  setShowAllWorkedOn();
  setShowAllAssignedHw();
  setSavedDepartment();
  handleDeptSelection();
  handleApptSelection();
  setContAppt();
  setMovedUp();
  setScreenShare();
  setHwCompleted();
  setHwPercent();

  setWorkedOn();
  initDynamicWorkedOn();

  setAssignedHw();
  initDynamicAssignedHw();

  setPostChecklist();

  setAdditionalNotes();
  setStartedRegistering();
  setCompletionForm();
  setSupplierManagement();
  setLiveRegisteredDesign();
  setNextAppointment();
  setOtherAppointment();
  setNextTopic();

  setHowManyProducts();
  setHowManySuppliers();
  setRemoveNonNiche();
  setCompletedSm();
  setCompletedMarketing();
  setSmWsAppt();
  setMarketingAppt();
  setMarketingReviewed();

  setMissedAppointment();
  setContactedByClient();
  setReschedule();
  setGeneralContact();
  setPodioLink();
  setInitials();
});

setThemeToggle();
