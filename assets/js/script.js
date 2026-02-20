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
var showAllDeptInputsEl = document.querySelector('#show-all-dept-inputs');

// *DATA ATTRIBUTE SELECTORS FOR DEPT & TEMPLATE SPECIFIC ELEMENTS

var obOptions = document.querySelectorAll('option[data-dept="onboarding"]');
var warheadOptions = document.querySelectorAll('option[data-dept="warhead"]');
var smOptions = document.querySelectorAll('option[data-dept="supplier-management"]');
var socmOptions = document.querySelectorAll('option[data-dept="social-media"]');

// *"WORKED ON" - PARENT CONTAINERS & SHOW ALL LOGIC

var workedOnEl = document.querySelector('#worked-on');
var showAllWorkedOnEl = document.querySelector('#show-all-worked-on');

// *"ASSIGNED HOMEWORK" - PARENT CONTAINERS & SHOW ALL LOGIC

var assignedHwEl = document.querySelector('#assigned-hw');
var showAllAssignedHwContEl = document.querySelector('#show-all-assigned-hw-container');
var showAllAssignedHwEl = document.querySelector('#show-all-assigned-hw');

// *INDIVIDUAL CHECKBOX/RADIO & PROMPT ELEMENTS

// General Progress Elements

var contApptPromptEl = document.querySelector('#continuation-prompt');
var contApptEl = document.querySelector('#continuation');
var movedUpEl = document.querySelector('#moved-up');
var screenShareEl = document.querySelector('#screen-share');
var screenShareOtherPromptEl = document.querySelector('#screen-share-other-prompt');
var screenShareOtherEl = document.querySelector('#screen-share-other');
var hwPromptEl = document.querySelector('#hw-prompt');
var hwNoEl = document.querySelector('#hw-no');
var hwNoneEl = document.querySelector('#hw-none');
var hwYesEl = document.querySelector('#hw-yes');
var hwPercentPromptEl = document.querySelector('#hw-percent-prompt');
var hwPercentEl = document.querySelector('#hw-percent');

// *WARHEAD WORKED ON CHECKLIST

var dashNavEl = document.querySelector('#dashboard-navigation');
var extraPageEl = document.querySelector('#extra-pages');
var createCatEl = document.querySelector('#creating-categories');
var organizeCatEl = document.querySelector('#organizing-categories');
var createProdEl = document.querySelector('#creating-products');
var prodGridEl = document.querySelector('#products-grid');
var catProdEl = document.querySelector('#categorizing-products');
var discountsEl = document.querySelector('#discounts');
var checkoutSectionsEl = document.querySelector('#checkout-sections');
var payPalEl = document.querySelector('#paypal-apple-pay');
var payPalStandardEl = document.querySelector('#paypal-standard');
var payPalStandardReasonEl = document.querySelector('#paypal-standard-reason');
var testOrderEl = document.querySelector('#test-order');
var explainedOrderEmailsEl = document.querySelector('#explained-order-emails');
var ordersGridEl = document.querySelector('#orders-grid');
var processDobaOrderEl = document.querySelector('#process-doba-order');
var processCjOrderEl = document.querySelector('#process-cj-order');
var sentGuidesProcessingEl = document.querySelector('#sent-guides-processing');
var exportingProductsEl = document.querySelector('#exporting-products');
var updatingProdEl = document.querySelector('#updating-products');
var unavailableProdEl = document.querySelector('#unavailable-products');
var sentGuidesUpdatingEl = document.querySelector('#sent-guides-updating');
var stripeEl = document.querySelector('#stripe');
var variantsEl = document.querySelector('#variants');
var googleAnalyticsEl = document.querySelector('#google-analytics');
var updatingNewProdEl = document.querySelector('#new-updating-products');
var updatingNewProdNameEl = document.querySelector('#new-updating-products-name');
var processRealOrderEl = document.querySelector('#process-real-order');
var modifyVariantsEl = document.querySelector('#modify-variants');

// Custom "Worked On" Checkbox & Text

var customWorkedOnChecboxEl = document.querySelector('#custom-worked-on-checkbox');
var customWorkedOnTextEl = document.querySelector('#custom-worked-on-text');

// *WARHEAD ASSIGNED HW CHECKLIST

var firstApptFinishVidEl = document.querySelector('#first-appt-finish-videos');
var reviewExtraPagesEl = document.querySelector('#review-extra-pages');
var removeProdEl = document.querySelector('#remove-products');
var practiceCatProdEl = document.querySelector('#practice-categorizing-products');
var practiceCreateCatdEl = document.querySelector('#practice-creating-categories');
var registerBusinessEl = document.querySelector('#register-business');
var secondApptFinishVidEl = document.querySelector('#second-appt-finish-videos');
var practiceDiscountsEl = document.querySelector('#practice-discounts');
var practiceOrdersEl = document.querySelector('#practice-orders');
var continueVidEl = document.querySelector('#continue-videos');
var thirdApptFinishVidEl = document.querySelector('#third-appt-finish-videos');
var practiceUpdateEl = document.querySelector('#practice-updating');
var allVidEl = document.querySelector('#all-videos');

// Custom "Assigned Homework" Checkbox & Text

var customAssignedHwChecboxEl = document.querySelector('#custom-assigned-hw-checkbox');
var customAssignedHwTextEl = document.querySelector('#custom-assigned-hw-text');

// Post Training Checklist

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
var customNoVmReasonRadioEl = document.querySelector('#custom-no-vm-reason-radio');
var customNoVmReasonTextEl = document.querySelector('#custom-no-vm-reason-text');
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
var contactedCustomNoVmReasonRadioEl = document.querySelector('#contacted-custom-no-vm-reason-radio');
var contactedCustomNoVmReasonTextEl = document.querySelector('#contacted-custom-no-vm-reason-text');
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

var whCompletedEl = document.querySelector('#wh-completed');
var noFurtherWhAssistanceEl = document.querySelector('#no-further-wh-assistance');
var nextApptDatePromptEl = document.querySelector('#next-appt-date-prompt');
var nextTopicPromptEl = document.querySelector('#next-topic-prompt');
var nextAppointmentEl = document.querySelector('#next-appointment-date');
var nextTopicEl = document.querySelector('#next-topic');

// *OTHER APPOINTMENT PROMPS & INPUTS

var otherDeptApptPromptEl = document.querySelector('#other-dept-appt-prompt');
var otherDeptApptEl = document.querySelector('#other-dept-appt');

var obAssistanceApptPromptEl = document.querySelector('#ob-assistance-appt-prompt');
var otherDeptApptObPromptEl = document.querySelector('#other-dept-appt-ob-prompt');
var obAssistanceApptEl = document.querySelector('#ob-assistance-appt');
var reminderObAssistancePromptEl = document.querySelector('#reminder-ob-assistance-prompt');
var reminderObAssistanceEl = document.querySelector('#reminder-ob-assistance');
var obAssistanceTechEl = document.querySelector('#ob-assistance-tech');
var obAssistanceBookingIdEl = document.querySelector('#ob-assistance-booking-id');
var obAssistanceDateEl = document.querySelector('#ob-assistance-date');
var obBookingIdPrompt = document.querySelector('#ob-booking-id-prompt');

var whAssistanceApptPromptEl = document.querySelector('#wh-assistance-appt-prompt');
var otherDeptApptWhPromptEl = document.querySelector('#other-dept-appt-wh-prompt');
var whAssistanceApptEl = document.querySelector('#wh-assistance-appt');
var reminderWhAssistancePromptEl = document.querySelector('#reminder-wh-assistance-prompt');
var reminderWhAssistanceEl = document.querySelector('#reminder-wh-assistance');
var whAssistanceTechEl = document.querySelector('#wh-assistance-tech');
var whAssistanceBookingIdEl = document.querySelector('#wh-assistance-booking-id');
var whAssistanceDateEl = document.querySelector('#wh-assistance-date');
var whBookingIdPrompt = document.querySelector('#wh-booking-id-prompt');

var smOtherApptPromptEl = document.querySelector('#sm-appt-prompt');
var otherDeptApptSmPromptEl = document.querySelector('#other-dept-appt-sm-prompt');
var smOtherApptEl = document.querySelector('#sm-appt');
var reminderSmPromptEl = document.querySelector('#reminder-sm-prompt');
var reminderSmOtherEl = document.querySelector('#reminder-sm');
var smOtherTechEl = document.querySelector('#sm-tech');
var smOtherBookingIdEl = document.querySelector('#sm-booking-id');
var smOtherDateEl = document.querySelector('#sm-date');
var smBookingIdPrompt = document.querySelector('#sm-booking-id-prompt');

var nicheChangeApptPromptEl = document.querySelector('#niche-change-appt-prompt');
var otherDeptApptNcPromptEl = document.querySelector('#other-dept-appt-nc-prompt');
var nicheChangeApptEl = document.querySelector('#niche-change-appt');
var reminderNcEl = document.querySelector('#reminder-nc');
var nicheChangeTechEl = document.querySelector('#niche-change-tech');
var ncBookingIdEl = document.querySelector('#nc-booking-id');
var nicheChangeDateEl = document.querySelector('#niche-change-date');
var ncBookingIdPrompt = document.querySelector('#nc-booking-id-prompt');

var websiteAnalysisApptPromptEl = document.querySelector('#website-analysis-appt-prompt');
var otherDeptApptWaPromptEl = document.querySelector('#other-dept-appt-wa-prompt');
var websiteAnalysisApptEl = document.querySelector('#website-analysis-appt');
var reminderWaEl = document.querySelector('#reminder-wa');
var websiteAnalysisTechEl = document.querySelector('#website-analysis-tech');
var waBookingIdEl = document.querySelector('#wa-booking-id');
var websiteAnalysisDateEl = document.querySelector('#website-analysis-date');
var waBookingIdPrompt = document.querySelector('#wa-booking-id-prompt');

// *ONBOARDING

var nicheCompletedNoEl = document.querySelector('#niche-completed-no');
var nicheCompletedNoneEl = document.querySelector('#niche-completed-none');
var nicheCompletedYesEl = document.querySelector('#niche-completed-yes');
var nicheSelectionPromptEl = document.querySelector('#niche-selection-prompt');
var nicheSelectionEl = document.querySelector('#niche-selection');
var domainCompletedNoEl = document.querySelector('#domain-completed-no');
var domainCompletedNoneEl = document.querySelector('#domain-completed-none');
var domainCompletedYesEl = document.querySelector('#domain-completed-yes');
var domainPromptEl = document.querySelector('#domain-prompt');
var domainEl = document.querySelector('#domain');
var obCompleteEl = document.querySelector('#ob-complete');

// OB Worked On Checklist
var canLogInEl = document.querySelector('#can-log-in');
var discussedSuppliersEl = document.querySelector('#discussed-suppliers');
var discussedRegistrationEl = document.querySelector('#discussed-registration');
var downloadChromeEl = document.querySelector('#download-chrome');
var createGmailEl = document.querySelector('#create-gmail');
var createFavFolderEl = document.querySelector('#create-fav-folder');
var linkedBingEl = document.querySelector('#linked-bing');
var ciasEl = document.querySelector('#cais');
var googleVoiceEl = document.querySelector('#google-voice');
var googleSignatureEl = document.querySelector('#google-signature');
var completePinterestEl = document.querySelector('#complete-pinterest');
var completeYoutubeEl = document.querySelector('#complete-youtube');
var completeTwitterEl = document.querySelector('#complete-twitter');
var logInWhEl = document.querySelector('#log-in-wh');
var createdTeachableEl = document.querySelector('#created-teachable');
var obCompletedQuestionnaireEl = document.querySelector('#ob-completed-questionnaire');
var completeStripeEl = document.querySelector('#complete-stripe');
var completePaypalEl = document.querySelector('#complete-paypal');
var dobaSignupEl = document.querySelector('#doba-signup');
var dobaInventoryEl = document.querySelector('#doba-inventory');
var cjSignupEl = document.querySelector('#cj-signup');
var cjCategoryEl = document.querySelector('#cj-category');

// OB Assigned HW Checklist
var googleVoiceHwEl = document.querySelector('#google-voice-hw');
var googleSignatureHwEl = document.querySelector('#google-signature-hw');
var createPinterestHwEl = document.querySelector('#create-pinterest-hw');
var createYoutubeHwEl = document.querySelector('#create-youtube-hw');
var createTwitterHwEl = document.querySelector('#create-twitter-hw');
var createStripeHwEl = document.querySelector('#create-stripe-hw');
var createPaypalHwEl = document.querySelector('#create-paypal-hw');
var stripeLinkBankEl = document.querySelector('#stripe-link-bank');
var paypalLinkBankEl = document.querySelector('#paypal-link-bank');
var complete2dEl = document.querySelector('#complete-2d');
var createCjHwEl = document.querySelector('#create-cj-hw');
var cjCategoryHwEl = document.querySelector('#cj-category-hw');
var createDobaHwEl = document.querySelector('#create-doba-hw');
var dobaInventoryHwEl = document.querySelector('#doba-inventory-hw');
var whVideosHwEl = document.querySelector('#wh-videos-hw');
var registerBusinessHwEl = document.querySelector('#register-business-hw');

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
var seoBasicsEl = document.querySelector('#seo-basics');
var catAndProdEl = document.querySelector('#cat-and-prod');
var ensureProdCatEl = document.querySelector('#ensure-prod-cat');
var metasReviewedEl = document.querySelector('#metas-review');
var reviseTitlesDescEl = document.querySelector('#revise-titles-desc');
var optimizeImagesEl = document.querySelector('#optimize-images');
var reviewSocialMediaEl = document.querySelector('#review-social-media');
var completedSmPromptEl = document.querySelector('#completed-supplier-management-prompt');
var completedSmEl = document.querySelector('#completed-supplier-management');
var completedMarketingEl = document.querySelector('#completed-marketing');
var marketingDateEl = document.querySelector('#marketing-date');

// *SOCIAL MEDIA

var socmReviewedEl = document.querySelector('#social-media-reviewed');
var completedDesignQuestionareEl = document.querySelector('#completed-design-questionnaire');
var accessAllSocialMediaEl = document.querySelector('#access-all-social-media');
var updatedBiosEl = document.querySelector('#updated-bios');
var createdFbIgEl = document.querySelector('#created-fb-ig');
var grammarlyEl = document.querySelector('#grammarly');
var createdCanvaEl = document.querySelector('#created-canva');
var createdChatgptEl = document.querySelector('#created-chatgpt');
var howCreateCanvaTemplatesEl = document.querySelector('#how-create-canva-templates');
var useMbsEl = document.querySelector('#use-mbs');
var mbsRefresherEl = document.querySelector('#mbs-refresher');
var mbsStoriesEl = document.querySelector('#mbs-stories');
var pinterestBoardsEl = document.querySelector('#pinterest-boards');
var pinPinterestPostsEl = document.querySelector('#pin-pinterest-posts');
var pinterestRefresherEl = document.querySelector('#pinterest-refresher');
var productPinsEl = document.querySelector('#product-pins');
var createTwitterPostsEl = document.querySelector('#create-twitter-posts');
var quoteTwitterPostsEl = document.querySelector('#quote-twitter-posts');
var twitterFollowEl = document.querySelector('#twitter-follow');
var joinFbGroupsEl = document.querySelector('#join-fb-groups');
var fbFollowAccountsEl = document.querySelector('#fb-follow-accounts');
var reactCommentShareFbEl = document.querySelector('#react-comment-share-fb');
var inviteToLikeFbEl = document.querySelector('#invite-to-like-fb');
var followPinterestBoardsEl = document.querySelector('#follow-pinterest-boards');
var reactCommentShareTwitterEl = document.querySelector('#react-comment-repost-twitter');
var mbsTrackEl = document.querySelector('#mbs-track');
var mbsAnalyticsEl = document.querySelector('#mbs-analytics');
var performanceContentOverviewsEl = document.querySelector('#performance-content-overviews');
var viewsReachEl = document.querySelector('#views-reach');

var showAllSocmReviewedEl = document.querySelector('#show-all-socm-reviewed');

var watchCanvaEl = document.querySelector('#watch-canva');
var createCanvaTemplateEl = document.querySelector('#create-canva-templates');
var contCanvaTemplatedEl = document.querySelector('#cont-canva-templates');
var planFbIgPostsEl = document.querySelector('#plan-fb-ig-posts');
var contFbIgPostsEl = document.querySelector('#cont-fb-ig-posts');
var saveTwentyPinsEl = document.querySelector('#save-twenty-pins');
var createFivePinsEl = document.querySelector('#create-five-pins');
var threeFiveTwitterPostsEl = document.querySelector('#three-five-twitter-posts');
var quoteThreeTwitterPostsEl = document.querySelector('#quote-three-twitter-posts');

var socmCompletedNoEl = document.querySelector('#socm-completed-no');
var socmCompletedNoneEl = document.querySelector('#socm-completed-none');
var socmCompletedYesEl = document.querySelector('#socm-completed-yes');

// *EDIT NOTE
var noteNumberEl = document.querySelector('#note-number');
var editNoteTextEl = document.querySelector('#edit-note-text');

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
var payPalStandardText = '';
var payPalStandardReasonText = '';
var testOrderText = '';
var explainedOrderEmailsText = '';
var ordersGridText = '';
var processDobaOrderText = '';
var processCjOrderText = '';
var sentGuidesProcessingText = '';
var exportingProductsText = '';
var updatingProdText = '';
var unavailableProdText = '';
var sentGuidesUpdatingText = '';
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
var continueVidText = '';
var secondApptFinishVidText = '';
var practiceDiscountsText = '';
var practiceOrdersText = '';
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

// Onboarding Strings

var nicheCompletedText = '';
var nicheSelectionText = '';
var updatedNicheText = '';
var domainCompletedText = '';
var domainText = '';
var updatedDomainText = '';
var requiresObAssistanceText = '';
var obCompleteText = '';

var canLogInText = '';
var discussedSuppliersText = '';
var discussedRegistrationText = '';
var downloadChromeText = '';
var createGmailText = '';
var createFavFolderText = '';
var linkedBingText = '';
var ciasText = '';
var googleVoiceText = '';
var googleSignatureText = '';
var completePinterestText = '';
var completeYoutubeText = '';
var completeTwitterText = '';
var logInWhText = '';
var createdTeachableText = '';
var obCompletedQuestionnaireText = '';
var completeStripeText = '';
var completePaypalText = '';
var dobaSignupText = '';
var dobaInventoryText = '';
var cjSignupText = '';
var cjCategoryText = '';

var googleVoiceHwText = '';
var googleSignatureHwText = '';
var createPinterestHwText = '';
var createYoutubeHwText = '';
var createTwitterHwText = '';
var createStripeHwText = '';
var createPaypalHwText = '';
var stripeLinkBankText = '';
var paypalLinkBankText = '';
var complete2dText = '';
var createCjHwText = '';
var cjCategoryHwText = '';
var createDobaHwText = '';
var dobaInventoryHwText = '';
var whVideosHwText = '';
var registerBusinessHwText = '';

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

// Social Media Strings

var completedDesignQuestionareText = '';
var accessAllSocialMediaText = '';
var updatedBiosText = '';
var createdFbIgText = '';
var grammarlyText = '';
var createdCanvaText = '';
var createdChatgptText = '';
var howCreateCanvaTemplatesText = '';
var useMbsText = '';
var mbsRefresherText = '';
var mbsStoriesText = '';
var pinterestBoardsText = '';
var pinPinterestPostsText = '';
var pinterestRefresherText = '';
var productPinsText = '';
var createTwitterPostsText = '';
var quoteTwitterPostsText = '';
var twitterFollowText = '';
var joinFbGroupsText = '';
var fbFollowAccountsText = '';
var reactCommentShareFbText = '';
var inviteToLikeFbText = '';
var followPinterestBoardsText = '';
var reactCommentShareTwitterText = '';
var mbsTrackText = '';
var mbsAnalyticsText = '';
var performanceContentOverviewsText = '';
var viewsReachText = '';
var customSocmReviewedText = '';
var socmReviewedText = '';

var watchCanvaText = '';
var createCanvaTemplateText = '';
var contCanvaTemplatedText = '';
var planFbIgPostsText = '';
var contFbIgPostsText = '';
var saveTwentyPinsText = '';
var createFivePinsText = '';
var threeFiveTwitterPostsText = '';
var quoteThreeTwitterPostsText = '';

var socmCompletedText = '';

// Missed Appointment Strings

var missedApptText = '';
var attemptText = '';
var phoneNumberText = '';
var secondaryPhoneNumberText = '';
var updatedPhoneNumberText = '';
var leftVmText = '';
var customNoVmReasonText = '';
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
var contactedCustomNoVmReasonText = '';
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

// Edit Note Strings
var noteNumberText = '';
var editNoteText = '';

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
var liveText = '';
var registeredText = '';
var resaleCertText = '';
var designFinishedText = '';
var smRequirementsText = '';
var additionalTrainingText = '';
var smReminderText = '';
var whCompletedText = '';
var noFurtherWhAssistanceText = '';
var nextAppointmentText = '';
var whAssistanceTechText = '';
var whAssistanceDateText = '';
var whAssistanceBookingIdText = '';
var whAssistanceText = '';
var obAssistanceTechText = '';
var obAssistanceDateText = '';
var obAssistanceBookingIdText = '';
var obAssistanceText = '';
var smTechText = '';
var smDateText = '';
var smBookingIdText = '';
var smText = '';
var nicheChangeTechText = '';
var nicheChangeDateText = '';
var ncBookingIdText = '';
var nicheChangeText = '';
var websiteAnalysisTechText = '';
var websiteAnalysisDateText = '';
var waBookingIdText = '';
var websiteAnalysisText = '';
var nextTopicText = '';
var storedInitials = '';
var initialsText = '';

var apptLabels = {
  'ob-first-appt': '1st Onboarding',
  'ob-second-appt': '2nd Onboarding',
  'ob-third-appt': '3rd Onboarding',
  'ob-fourth-appt': '4th Onboarding',
  'ob-assistance-appt': 'Onboarding Assistance',
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
  'socm-first-appt': '1st',
  'socm-second-appt': '2nd',
  'socm-third-appt': '3rd',
  'socm-fourth-appt': '4th',
  'socm-fifth-appt': '5th',
  'socm-sixth-appt': '6th',
  'socm-seventh-appt': '7th',
  'socm-eighth-appt': '8th',
  'socm-ninth-appt': '9th',
  'socm-tenth-appt': '10th',
};

var deptLabels = {
  onboarding: 'Onboarding',
  warhead: 'Warhead',
  'supplier-management': 'Supplier Management',
  'social-media': 'Social Media',
};

var stripeTimer;

// *CORE UI & UTILITY FUNCTIONS

function updateDynamicStripes() {
  var form = document.getElementById('non-specific-form');
  if (!form) return;

  var allDivs = Array.from(form.querySelectorAll(':scope > div'));

  var visibleRows = allDivs.filter((div) => {
    var hasHideClass = div.classList.contains('hide-content');
    var hasGreyBg = div.classList.contains('grey-bg');
    var hasNoLineBg = div.classList.contains('no-line-bg');
    var isDisplayNone = window.getComputedStyle(div).display === 'none';

    return !hasHideClass && !isDisplayNone && !hasGreyBg && !hasNoLineBg;
  });

  allDivs.forEach((div) => {
    if (!div.classList.contains('grey-bg')) {
      div.style.backgroundColor = 'transparent';
    }
  });

  visibleRows.forEach((div, index) => {
    if (index % 2 === 0) {
      div.style.backgroundColor = 'var(--line-one)';
    } else {
      div.style.backgroundColor = 'var(--line-two)';
    }
  });
}

function scheduleStripeUpdate() {
  cancelAnimationFrame(stripeTimer);
  stripeTimer = requestAnimationFrame(updateDynamicStripes);
}

function setVisibility(item, show) {
  if (!item) return;

  var elements = item.length !== undefined && !(item instanceof HTMLElement) ? item : [item];

  elements.forEach(function (el) {
    el.classList.toggle('show-content', show);
    el.classList.toggle('hide-content', !show);
  });
  scheduleStripeUpdate();
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

function setShowAllInputs() {
  var selector = `[data-dept]:not(#worked-on *):not(#assigned-hw *):not(#social-media-reviewed *):not([data-template="missed-appt"]):not([data-template="contacted-by-client"]):not([data-template="reschedule"]):not([data-template="general"]):not([data-template="podio-link"]):not([data-template="edit-note"]):not(#show-all-assigned-hw-container):not(#assigned-hw)`;
  var allDeptValues = document.querySelectorAll(selector);

  allDeptValues.forEach(function (el) {
    if (showAllDeptInputsEl.checked) {
      setVisibility(el, matchesDept(el, currentDeptValue));
    } else {
      updateApptVisibility();
    }
  });
}

function handleShowAllInputs() {
  showAllDeptInputsEl.disabled = true;

  showAllDeptInputsEl.addEventListener('change', function () {
    setShowAllInputs();
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

function addNewSocmReviewedRow(container) {
  var newRow = document.createElement('div');
  newRow.className = 'custom-socm-reviewed-row';
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
    htmlNotesEl.disabled = true;
    apptSelectEl.disabled = true;
    clearBtnEl.disabled = true;
    showAllDeptInputsEl.disabled = true;
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

  obOptions.forEach(function (option) {
    setVisibility(option, isOnboarding && !isDefault && !isWarhead && !isSupplierManagement && !isSoicalMedia);
  });

  warheadOptions.forEach(function (option) {
    setVisibility(option, isWarhead && !isDefault && !isOnboarding && !isSupplierManagement && !isSoicalMedia);
  });

  smOptions.forEach(function (option) {
    setVisibility(option, isSupplierManagement && !isDefault && !isOnboarding && !isWarhead && !isSoicalMedia);
  });

  socmOptions.forEach(function (option) {
    setVisibility(option, isSoicalMedia && !isDefault && !isOnboarding && !isWarhead && !isSupplierManagement);
  });
}

function handleApptSelection() {
  apptSelectEl.addEventListener('change', function (event) {
    currentApptValue = event.target.value;

    if (currentApptValue === 'default') {
      htmlNotesEl.disabled = true;
      clearBtnEl.disabled = true;
      showAllDeptInputsEl.disabled = true;
    } else if (currentApptValue === 'missed-appt' || currentApptValue === 'contacted-by-client' || currentApptValue === 'reschedule' || currentApptValue === 'general' || currentApptValue === 'edit-note' || currentApptValue === 'podio-link') {
      htmlNotesEl.disabled = false;
      clearBtnEl.disabled = false;
      showAllDeptInputsEl.disabled = true;
    } else {
      htmlNotesEl.disabled = false;
      clearBtnEl.disabled = false;
      showAllDeptInputsEl.disabled = false;
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
  var isMissedAppt = selectedValue === 'missed-appt';
  var isContactedByClient = selectedValue === 'contacted-by-client';
  var isShowAllWorkedOn = showAllWorkedOnEl.checked;
  var isShowAllHw = showAllAssignedHwEl.checked;
  var isShowAllSocmReviewed = showAllSocmReviewedEl.checked;
  var isShowAllInputs = showAllDeptInputsEl.checked;

  setVisibility(nonSpecFormEl, !isDefault);

  var conditionalElements = document.querySelectorAll('[data-dept], [data-template]');
  conditionalElements.forEach(parseDataAttributes);

  if (isMissedAppt) {
    setMissedAppointment();
  }

  if (isContactedByClient) {
    setContactedByClient();
  }

  if (selectedValue === 'ob-fourth-appt') {
    setVisibility(otherDeptApptWhPromptEl, true);
    enrolledSmPromptEl.after(otherDeptApptWhPromptEl);
    otherDeptApptWhPromptEl.classList.add('grey-bg');
    setVisibility(whAssistanceApptPromptEl, false);
    setVisibility(reminderWhAssistancePromptEl, false);
    setVisibility(whBookingIdPrompt, true);
  } else {
    setVisibility(otherDeptApptWhPromptEl, false);
    whAssistanceApptPromptEl.after(otherDeptApptWhPromptEl);
  }

  if (selectedValue === 'wh-assistance') {
    [contApptPromptEl, hwPromptEl, hwPercentPromptEl].forEach(function (el) {
      setVisibility(el, false);
    });
  }

  if (selectedValue === 'wh-post-appt') {
    setVisibility(otherDeptApptSmPromptEl, true);
    enrolledSmPromptEl.after(otherDeptApptSmPromptEl);
    otherDeptApptSmPromptEl.classList.add('grey-bg');
    setVisibility(smOtherApptPromptEl, false);
    setVisibility(smBookingIdPrompt, true);
  } else {
    setVisibility(otherDeptApptSmPromptEl, false);
    smOtherApptPromptEl.after(otherDeptApptSmPromptEl);
  }

  if (selectedValue === 'sm-final-upgraded') {
    setVisibility(otherDeptApptWaPromptEl, true);
    completedSmPromptEl.after(otherDeptApptWaPromptEl);
    otherDeptApptWaPromptEl.classList.add('grey-bg');
    setVisibility(websiteAnalysisApptPromptEl, false);
  } else {
    setVisibility(otherDeptApptWaPromptEl, false);
    websiteAnalysisApptPromptEl.after(otherDeptApptWaPromptEl);
  }

  var allWorkedOnItems = workedOnEl.querySelectorAll('div[data-dept]');
  var allHwItems = assignedHwEl.querySelectorAll('div[data-dept]');
  var allSocmReviewedItems = socmReviewedEl.querySelectorAll('div[data-dept]');

  if (isShowAllWorkedOn && isShowAllInputs) {
    allWorkedOnItems.forEach(function (el) {
      if (matchesDept(el, selectedDept)) {
        setShowAllInputs();
        setVisibility(el, true);
      }
    });
  } else if (!isShowAllWorkedOn && isShowAllInputs) {
    setShowAllInputs();
  } else if (isShowAllWorkedOn && !isShowAllInputs) {
    allWorkedOnItems.forEach(function (el) {
      if (matchesDept(el, selectedDept)) {
        setVisibility(el, true);
      }
    });
  }

  if (isShowAllHw && selectedValue !== 'wh-post-appt') {
    allHwItems.forEach(function (el) {
      if (matchesDept(el, selectedDept)) {
        setVisibility(el, true);
      }
    });
  }

  if (isShowAllSocmReviewed && isShowAllInputs) {
    allSocmReviewedItems.forEach(function (el) {
      if (matchesDept(el, selectedDept)) {
        setShowAllInputs();
        setVisibility(el, true);
      }
    });
  } else if (!isShowAllSocmReviewed && isShowAllInputs) {
    setShowAllInputs();
  } else if (isShowAllSocmReviewed && !isShowAllInputs) {
    allSocmReviewedItems.forEach(function (el) {
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

function setShowAllSocmReviewed() {
  if (!showAllSocmReviewedEl) {
    return;
  }

  showAllSocmReviewedEl.addEventListener('change', function () {
    updateApptVisibility();
  });
}

// *NOTE GENERATION & RESET LOGIC

function updateHtmlNotes() {
  var displayApptName = apptLabels[currentApptValue] || currentApptValue;

  updateHw();

  if ((currentApptValue === 'wh-first-appt' && currentApptValue !== 'default') || (currentApptValue === 'wh-second-appt' && currentApptValue !== 'default') || (currentApptValue === 'wh-third-appt' && currentApptValue !== 'default') || (currentApptValue === 'wh-post-appt' && currentApptValue !== 'default')) {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${contText}${displayApptName} Warhead Training</b> appointment. ${screenShareText}
</p>
`;
    htmlNotes = contactedClientText + hwText + workedOnText + postWorkedOnText + assignedHwText + postChecklistText + additionalNotesText + startedRegText + smRequirementsText + completionFormText + additionalTrainingText + whCompletedText + noFurtherWhAssistanceText + nextAppointmentText + obAssistanceText + whAssistanceText + smText + nicheChangeText + websiteAnalysisText + nextTopicText + initialsText;
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
    htmlNotes = contactedClientText + hwText + workedOnText + postWorkedOnText + assignedHwText + postChecklistText + additionalNotesText + startedRegText + smRequirementsText + completionFormText + additionalTrainingText + noFurtherWhAssistanceText + nextAppointmentText + obAssistanceText + whAssistanceText + smText + nicheChangeText + websiteAnalysisText + nextTopicText + initialsText;
  } else if (currentApptValue === 'general' && currentApptValue !== 'default') {
    htmlNotes = generalContactPurposeText + generalContactNoteText + initialsText;
  } else if ((currentApptValue === 'sm-first-appt' && currentApptValue !== 'default') || (currentApptValue === 'sm-follow-up' && currentApptValue !== 'default') || (currentApptValue === 'sm-final-upgraded' && currentApptValue !== 'default') || (currentApptValue === 'sm-final-non-upgraded' && currentApptValue !== 'default')) {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${contText}${displayApptName} Supplier Management</b> appointment.
</p>
`;
    htmlNotes = contactedClientText + smRequirementsText + howManyProductsText + updatedHowManySuppliersText + workedOnText + assignedHwText + removeNonNicheText + completedSmText + additionalNotesText + nextAppointmentText + updatedSmWsText + marketingDateText + obAssistanceText + whAssistanceText + smText + nicheChangeText + websiteAnalysisText + nextTopicText + initialsText;
  } else if (currentApptValue === 'sm-marketing' && currentApptValue !== 'default') {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${displayApptName}</b> appointment.
</p>
`;
    htmlNotes = contactedClientText + marketingReviewedText + additionalNotesText + completedMarketingText + obAssistanceText + whAssistanceText + smText + nicheChangeText + websiteAnalysisText + initialsText;
  } else if ((currentApptValue === 'socm-first-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-second-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-third-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-fourth-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-fifth-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-sixth-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-seventh-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-eighth-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-ninth-appt' && currentApptValue !== 'default') || (currentApptValue === 'socm-tenth-appt' && currentApptValue !== 'default')) {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${contText}${displayApptName} Social Media</b> appointment.
</p>
`;
    htmlNotes = contactedClientText + hwText + socmReviewedText + assignedHwText + additionalNotesText + socmCompletedText + nextAppointmentText + obAssistanceText + whAssistanceText + smText + nicheChangeText + websiteAnalysisText + nextTopicText + initialsText;
  } else if ((currentApptValue === 'ob-first-appt' && currentApptValue !== 'default') || (currentApptValue === 'ob-second-appt' && currentApptValue !== 'default') || (currentApptValue === 'ob-third-appt' && currentApptValue !== 'default') || (currentApptValue === 'ob-fourth-appt' && currentApptValue !== 'default') || (currentApptValue === 'ob-assistance-appt' && currentApptValue !== 'default')) {
    contactedClientText = `<p>
  Contacted client${movedUpText} for <b>${contText}${displayApptName}</b> appointment.
</p>
`;
    htmlNotes = contactedClientText + updatedNicheText + updatedDomainText + hwText + workedOnText + assignedHwText + additionalNotesText + obCompleteText + nextAppointmentText + obAssistanceText + whAssistanceText + smText + nicheChangeText + websiteAnalysisText + nextTopicText + initialsText;
  } else if (currentApptValue === 'edit-note' && currentApptValue !== 'default') {
    htmlNotes = noteNumberText + editNoteText + initialsText;
  }

  htmlNotesEl.value = htmlNotes;
}

function resetHtmlNotes() {
  var customWorkedOnContainer = document.getElementById('custom-worked-on-container');
  if (customWorkedOnContainer) {
    customWorkedOnContainer.innerHTML = '';
    addNewWorkedOnRow(customWorkedOnContainer);
  }

  var customAssignedHwContainer = document.getElementById('custom-assigned-hw-container');
  if (customAssignedHwContainer) {
    customAssignedHwContainer.innerHTML = '';
    addNewAssignedHwRow(customAssignedHwContainer);
  }

  var customSocmReviewedContainer = document.getElementById('custom-socm-reviewed-container');
  if (customSocmReviewedContainer) {
    customSocmReviewedContainer.innerHTML = '';
    addNewSocmReviewedRow(customSocmReviewedContainer);
  }

  refreshAllCustomWorkedOn();
  refreshAllCustomAssignedHw();
  refreshAllCustomSocmReviewed();

  htmlNotes = '';
  contText = '';
  movedUpText = '';
  screenShareText = '';
  hwText = '';
  hwCompletedText = '';
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
  noFurtherWhAssistanceText = '';
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
  whAssistanceTechText = '';
  whAssistanceDateText = '';
  whAssistanceBookingIdText = '';
  whAssistanceText = '';
  obAssistanceTechText = '';
  obAssistanceDateText = '';
  obAssistanceBookingIdText = '';
  obAssistanceText = '';
  nicheChangeTechText = '';
  nicheChangeDateText = '';
  ncBookingIdText = '';
  nicheChangeText = '';
  websiteAnalysisTechText = '';
  websiteAnalysisDateText = '';
  waBookingIdText = '';
  websiteAnalysisText = '';
  smTechText = '';
  smDateText = '';
  smBookingIdText = '';
  smText = '';
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
  completionFormSignedText = '';
  whyNotSignedText = '';
  socmReviewedText = '';
  socmCompletedText = '';
  updatedNicheText = '';
  updatedDomainText = '';
  customNoVmReasonText = '';
  contactedCustomNoVmReasonText = '';
  obCompleteText = '';
  editNoteText = '';
  noteNumberText = '';
  whCompletedText = '';

  htmlNotesEl.value = '';

  var nonSpecForms = document.querySelectorAll('#non-specific-form');
  showAllDeptInputsEl.checked = false;

  nonSpecForms.forEach(function (form) {
    form.reset();
  });

  var allPrompts = [phoneNumberPromptEl, secondaryPhoneNumberPromptEl, leftVmPromptEl, noVmReasonPromptEl, emailSentPromptEl, sentMissedEmailPromptEl, markedPodioPromptEl, successfulContactPromptEl, contactedPhoneNumberPromptEl, contactedSecondaryPhoneNumberPromptEl, contactedLeftVmPromptEl, contactedNoVmReasonPromptEl, contactedRescheduleDatePromptEl, completionFormSignedPromptEl, whyNotSignedPromptEl, additionalTrainingPromptEl, sentSmGuidePromptEl, enrolledSmPromptEl, whAssistanceApptPromptEl, obAssistanceApptPromptEl, smOtherApptPromptEl, nicheChangeApptPromptEl, websiteAnalysisApptPromptEl, resaleCertPromptEl, otherDeptApptNcPromptEl, otherDeptApptObPromptEl, otherDeptApptWaPromptEl, otherDeptApptSmPromptEl, otherDeptApptWhPromptEl, screenShareOtherPromptEl, nicheSelectionPromptEl, domainPromptEl];

  allPrompts.forEach(function (element) {
    setVisibility(element, false);
  });
}

// *All DEPT STRING HANDLERS

function setContAppt() {
  if (!contApptEl) {
    return;
  }

  contApptEl.addEventListener('change', function () {
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
        registeredText = ` Client's business is registered.`;
        setVisibility(resaleCertPromptEl, true);
      } else if (registeredNoEl.checked) {
        registeredText = ` Client's business is <b>not registered</b>.`;
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
        resaleCertText = ` Client has obtained their resale certificate.`;
      } else if (resaleCertNoEl.checked) {
        resaleCertText = ` Client <b>has not</b> obtained their resale certificate.`;
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
        designFinishedText = ` Client's design is finished.`;
      } else if (designFinishedNoEl.checked) {
        designFinishedText = ` Client's design is <b>not finished</b>.`;
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
      additionalTrainingText = `<p>
  Client requesting additional training.
<p>
`;
    } else {
      additionalTrainingText = '';
    }
    updateHtmlNotes();
  });
}

function updateSmRequirements() {
  if (liveText || registeredText || designFinishedText || resaleCertText) {
    smRequirementsText = `<p>
  ${liveText}${registeredText}${resaleCertText}${designFinishedText}
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
  var otherApptPrompts = [whAssistanceApptPromptEl, obAssistanceApptPromptEl, nicheChangeApptPromptEl, websiteAnalysisApptPromptEl, smOtherApptPromptEl];
  var otherApptInputs = [otherDeptApptNcPromptEl, otherDeptApptObPromptEl, otherDeptApptWaPromptEl, otherDeptApptWhPromptEl, otherDeptApptSmPromptEl];

  otherApptPrompts.forEach(function (element) {
    setVisibility(element, false);
  });

  otherApptInputs.forEach(function (element) {
    setVisibility(element, false);
  });

  otherDeptApptEl.addEventListener('change', function () {
    if (otherDeptApptEl && otherDeptApptEl.checked) {
      setVisibility(otherApptPrompts, true);
    } else if (!otherDeptApptEl.checked) {
      setVisibility(otherApptPrompts, false);
      setVisibility(otherApptInputs, false);
      whAssistanceApptEl.checked = false;
      obAssistanceApptEl.checked = false;
      nicheChangeApptEl.checked = false;
      websiteAnalysisApptEl.checked = false;
      smOtherApptEl.checked = false;
      var inputsToClear = [whAssistanceDateEl, obAssistanceDateEl, nicheChangeDateEl, websiteAnalysisDateEl, whAssistanceTechEl, obAssistanceTechEl, nicheChangeTechEl, websiteAnalysisTechEl, ncBookingIdEl, waBookingIdEl, obAssistanceBookingIdEl, whAssistanceBookingIdEl, smOtherBookingIdEl, smOtherDateEl, smOtherTechEl];
      inputsToClear.forEach(function (input) {
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
      smDateText = '';
      smTechText = '';
      smBookingIdText = '';
      updateHtmlNotes();
    }

    if (otherDeptApptEl.checked && currentApptValue === 'ob-fourth-appt') {
      setVisibility(whAssistanceApptPromptEl, false);
    } else if (!otherDeptApptEl.checked && currentApptValue === 'ob-fourth-appt') {
      setVisibility(otherDeptApptWhPromptEl, true);
    }

    if (otherDeptApptEl.checked && currentApptValue === 'wh-post-appt') {
      setVisibility(smOtherApptPromptEl, false);
    } else if (!otherDeptApptEl.checked && currentApptValue === 'wh-post-appt') {
      setVisibility(otherDeptApptSmPromptEl, true);
    }

    if (otherDeptApptEl.checked && currentApptValue === 'sm-final-upgraded') {
      setVisibility(websiteAnalysisApptPromptEl, false);
    } else if (!otherDeptApptEl.checked && currentApptValue === 'sm-final-upgraded') {
      setVisibility(otherDeptApptWaPromptEl, true);
    }
  });

  whAssistanceApptEl.addEventListener('change', function () {
    if (whAssistanceApptEl && whAssistanceApptEl.checked) {
      setVisibility(otherDeptApptWhPromptEl, true);
      setVisibility(whBookingIdPrompt, true);
      otherDeptApptWhPromptEl.classList.add('grey-bg');
    } else if (!whAssistanceApptEl.checked) {
      setVisibility(otherDeptApptWhPromptEl, false);
      setVisibility(whBookingIdPrompt, true);
      whAssistanceDateText = '';
      whAssistanceTechText = '';
      whAssistanceBookingIdText = '';
      whAssistanceText = '';
      reminderWhAssistanceEl.checked = false;
      var inputsToClear = [whAssistanceDateEl, whAssistanceTechEl, whAssistanceBookingIdEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  smOtherApptEl.addEventListener('change', function () {
    if (smOtherApptEl && smOtherApptEl.checked) {
      setVisibility(otherDeptApptSmPromptEl, true);
      setVisibility(smBookingIdPrompt, true);
      otherDeptApptSmPromptEl.classList.add('grey-bg');
    } else if (!smOtherApptEl.checked) {
      setVisibility(otherDeptApptSmPromptEl, false);
      setVisibility(smBookingIdPrompt, true);
      smDateText = '';
      smTechText = '';
      smBookingIdText = '';
      smText = '';
      reminderSmOtherEl.checked = false;
      var inputsToClear = [smOtherDateEl, smOtherTechEl, smOtherBookingIdEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  obAssistanceApptEl.addEventListener('change', function () {
    if (obAssistanceApptEl && obAssistanceApptEl.checked) {
      setVisibility(otherDeptApptObPromptEl, true);
      setVisibility(obBookingIdPrompt, true);
      otherDeptApptObPromptEl.classList.add('grey-bg');
    } else if (!obAssistanceApptEl.checked) {
      setVisibility(otherDeptApptObPromptEl, false);
      setVisibility(obBookingIdPrompt, true);
      obAssistanceDateText = '';
      obAssistanceTechText = '';
      obAssistanceBookingIdText = '';
      obAssistanceText = '';
      reminderObAssistanceEl.checked = false;
      var inputsToClear = [obAssistanceDateEl, obAssistanceTechEl, obAssistanceBookingIdEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  nicheChangeApptEl.addEventListener('change', function () {
    if (nicheChangeApptEl && nicheChangeApptEl.checked) {
      setVisibility(otherDeptApptNcPromptEl, true);
      setVisibility(ncBookingIdPrompt, true);
      otherDeptApptNcPromptEl.classList.add('grey-bg');
    } else if (!nicheChangeApptEl.checked) {
      setVisibility(otherDeptApptNcPromptEl, false);
      nicheChangeDateText = '';
      nicheChangeTechText = '';
      ncBookingIdText = '';
      nicheChangeText = '';
      reminderNcEl.checked = false;
      var inputsToClear = [nicheChangeDateEl, nicheChangeTechEl, ncBookingIdEl];
      inputsToClear.forEach((input) => {
        if (input) input.value = '';
      });
      updateHtmlNotes();
    }
  });

  websiteAnalysisApptEl.addEventListener('change', function () {
    if (websiteAnalysisApptEl && websiteAnalysisApptEl.checked) {
      setVisibility(otherDeptApptWaPromptEl, true);
      setVisibility(waBookingIdPrompt, true);
      otherDeptApptWaPromptEl.classList.add('grey-bg');
    } else if (!websiteAnalysisApptEl.checked) {
      setVisibility(otherDeptApptWaPromptEl, false);
      setVisibility(waBookingIdPrompt, true);
      websiteAnalysisDateText = '';
      websiteAnalysisTechText = '';
      waBookingIdText = '';
      websiteAnalysisText = '';
      reminderWaEl.checked = false;
      var inputsToClear = [websiteAnalysisDateEl, websiteAnalysisTechEl, waBookingIdEl];
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

  whAssistanceBookingIdEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      whAssistanceBookingIdText = '';
    } else {
      whAssistanceBookingIdText = `Booking ID: ${event.target.value}`;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  reminderWhAssistanceEl.addEventListener('change', function () {
    if (reminderWhAssistanceEl.checked) {
      setVisibility(whBookingIdPrompt, false);
    } else {
      setVisibility(whBookingIdPrompt, true);
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  whAssistanceDateEl.addEventListener('input', function (event) {
    var newWhAssistanceDate = handleDateFormat(event.target.value);
    if (!event.target.value) {
      whAssistanceDateText = '';
    } else if (event.target.value) {
      whAssistanceDateText = newWhAssistanceDate;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  smOtherTechEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      smTechText = '';
    } else if (event.target.value) {
      smTechText = event.target.value;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  smOtherBookingIdEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      smBookingIdText = '';
    } else {
      smBookingIdText = `Booking ID: ${event.target.value}`;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  reminderSmOtherEl.addEventListener('change', function () {
    if (reminderSmOtherEl.checked) {
      setVisibility(smBookingIdPrompt, false);
    } else {
      setVisibility(smBookingIdPrompt, true);
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  smOtherDateEl.addEventListener('input', function (event) {
    var newSmDate = handleDateFormat(event.target.value);

    if (!event.target.value) {
      smDateText = '';
    } else if (event.target.value) {
      smDateText = newSmDate;
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

  obAssistanceBookingIdEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      obAssistanceBookingIdText = '';
    } else {
      obAssistanceBookingIdText = `Booking ID: ${event.target.value}`;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  reminderObAssistanceEl.addEventListener('change', function () {
    if (reminderObAssistanceEl.checked) {
      setVisibility(obBookingIdPrompt, false);
    } else {
      setVisibility(obBookingIdPrompt, true);
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  obAssistanceDateEl.addEventListener('input', function (event) {
    var newObDate = handleDateFormat(event.target.value);
    if (!event.target.value) {
      obAssistanceDateText = '';
    } else if (event.target.value) {
      obAssistanceDateText = newObDate;
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

  ncBookingIdEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      ncBookingIdText = '';
    } else {
      ncBookingIdText = `Booking ID: ${event.target.value}`;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  reminderNcEl.addEventListener('change', function () {
    if (reminderNcEl.checked) {
      setVisibility(ncBookingIdPrompt, false);
    } else {
      setVisibility(ncBookingIdPrompt, true);
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  nicheChangeDateEl.addEventListener('input', function (event) {
    var newNicheChangeDate = handleDateFormat(event.target.value);
    if (!event.target.value) {
      nicheChangeDateText = '';
    } else if (event.target.value) {
      nicheChangeDateText = newNicheChangeDate;
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
    var newWaDate = handleDateFormat(event.target.value);
    if (!event.target.value) {
      websiteAnalysisDateText = '';
    } else if (event.target.value) {
      websiteAnalysisDateText = newWaDate;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  waBookingIdEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      waBookingIdText = '';
    } else {
      waBookingIdText = `Booking ID: ${event.target.value}`;
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });

  reminderWaEl.addEventListener('change', function () {
    if (reminderWaEl.checked) {
      setVisibility(waBookingIdPrompt, false);
    } else {
      setVisibility(waBookingIdPrompt, true);
    }
    updateOtherAppointment();
    updateHtmlNotes();
  });
}

function updateOtherAppointment() {
  if (reminderWhAssistanceEl.checked) {
    whAssistanceText = `<p>
  Reminded client about Warhead appointment with ${whAssistanceTechText} for ${whAssistanceDateText}.
</p>
`;
  } else if (!reminderWhAssistanceEl.checked && (whAssistanceTechText || whAssistanceDateText)) {
    whAssistanceText = `<p>
  Booked Warhead appointment with ${whAssistanceTechText} for ${whAssistanceDateText}. ${whAssistanceBookingIdText}
</p>
`;
  } else {
    whAssistanceText = '';
  }

  if (reminderObAssistanceEl.checked) {
    obAssistanceText = `<p>
  Reminded client about Onboarding Assistance appointment with ${obAssistanceTechText} for ${obAssistanceDateText}.
</p>
`;
  } else if (!reminderObAssistanceEl.checked && (obAssistanceTechText || obAssistanceDateText)) {
    obAssistanceText = `<p>
  Booked Onboarding appointment with ${obAssistanceTechText} for ${obAssistanceDateText}. ${obAssistanceBookingIdText}
</p>
`;
  } else {
    obAssistanceText = '';
  }

  if (reminderSmOtherEl.checked) {
    smText = `<p>
  Reminded client about Supplier Management appointment with ${smTechText} for ${smDateText}.
</p>
`;
  } else if (!reminderSmOtherEl.checked && (smTechText || smDateText)) {
    smText = `<p>
  Booked Supplier Management appointment with ${smTechText} for ${smDateText}. ${smBookingIdText}
</p>
`;
  } else {
    smText = '';
  }

  if (reminderNcEl.checked) {
    nicheChangeText = `<p>
  Reminded client about Niche Change appointment with ${nicheChangeTechText} for ${nicheChangeDateText}.
</p>
`;
  } else if (!reminderNcEl.checked && (nicheChangeTechText || nicheChangeDateText)) {
    nicheChangeText = `<p>
  Booked Niche Change appointment with ${nicheChangeTechText} for ${nicheChangeDateText}. ${ncBookingIdText}
</p>
`;
  } else {
    nicheChangeText = '';
  }

  if (reminderWaEl.checked) {
    websiteAnalysisText = `<p>
  Reminded client about Website Analysis appointment with ${websiteAnalysisTechText} for ${websiteAnalysisDateText}.
</p>
`;
  } else if (!reminderWaEl.checked && (websiteAnalysisTechText || websiteAnalysisDateText)) {
    websiteAnalysisText = `<p>
  Booked Website Analysis appointment with ${websiteAnalysisTechText} for ${websiteAnalysisDateText}. ${waBookingIdText}
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

var workedOnElements = [canLogInEl, discussedSuppliersEl, discussedRegistrationEl, downloadChromeEl, createGmailEl, createFavFolderEl, linkedBingEl, ciasEl, googleVoiceEl, googleSignatureEl, completePinterestEl, completeYoutubeEl, completeTwitterEl, logInWhEl, createdTeachableEl, obCompletedQuestionnaireEl, completeStripeEl, completePaypalEl, dobaSignupEl, dobaInventoryEl, cjSignupEl, cjCategoryEl, dashNavEl, extraPageEl, createCatEl, organizeCatEl, createProdEl, prodGridEl, catProdEl, discountsEl, checkoutSectionsEl, payPalEl, payPalStandardEl, testOrderEl, explainedOrderEmailsEl, ordersGridEl, processDobaOrderEl, processCjOrderEl, sentGuidesProcessingEl, exportingProductsEl, updatingProdEl, unavailableProdEl, sentGuidesUpdatingEl, stripeEl, variantsEl, googleAnalyticsEl, updatingNewProdEl, processRealOrderEl, modifyVariantsEl, applicationProcessEl, dropshipDatabaseEl, submittedApplicationEl, assistedApplicationEl, followUpEmailEl];

function setWorkedOn() {
  payPalStandardReasonEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      payPalStandardReasonText = '';
    } else {
      payPalStandardReasonText = ` - ${event.target.value}`;
    }
    updateWorkedOn();
    updateHtmlNotes();
  });

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
  canLogInText = canLogInEl && canLogInEl.checked ? `\n <li>Checked that client can log into warhead and teachable</li>` : '';
  discussedSuppliersText = discussedSuppliersEl && discussedSuppliersEl.checked ? `\n <li>Discussed future suppliers</li>` : '';
  discussedRegistrationText = discussedRegistrationEl && discussedRegistrationEl.checked ? `\n <li>Discussed business registration</li>` : '';
  downloadChromeText = downloadChromeEl && downloadChromeEl.checked ? `\n <li>Downloaded Chrome</li>` : '';
  createGmailText = createGmailEl && createGmailEl.checked ? `\n <li>Created Gmail account</li>` : '';
  createFavFolderText = createFavFolderEl && createFavFolderEl.checked ? `\n <li>Created favorites folder</li>` : '';
  linkedBingText = linkedBingEl && linkedBingEl.checked ? `\n <li>Linked Bing account</li>` : '';
  ciasText = ciasEl && ciasEl.checked ? `\n <li>Made and sent CAIS</li>` : '';
  googleVoiceText = googleVoiceEl && googleVoiceEl.checked ? `\n <li>Completed Google Voice</li>` : '';
  googleSignatureText = googleSignatureEl && googleSignatureEl.checked ? `\n <li>Completed Google Signature</li>` : '';
  completePinterestText = completePinterestEl && completePinterestEl.checked ? `\n <li>Completed Pinterest</li>` : '';
  completeYoutubeText = completeYoutubeEl && completeYoutubeEl.checked ? `\n <li>Completed YouTube</li>` : '';
  completeTwitterText = completeTwitterEl && completeTwitterEl.checked ? `\n <li>Completed Twitter</li>` : '';
  logInWhText = logInWhEl && logInWhEl.checked ? `\n <li>Logged into Warhead</li>` : '';
  createdTeachableText = createdTeachableEl && createdTeachableEl.checked ? `\n <li>Created Teachable account registered for warhead videos</li>` : '';
  obCompletedQuestionnaireText = obCompletedQuestionnaireEl && obCompletedQuestionnaireEl.checked ? `\n <li>Completed Design Questionnaire</li>` : '';
  completeStripeText = completeStripeEl && completeStripeEl.checked ? `\n <li>Completed Stripe</li>` : '';
  completePaypalText = completePaypalEl && completePaypalEl.checked ? `\n <li>Completed PayPal</li>` : '';
  dobaSignupText = dobaSignupEl && dobaSignupEl.checked ? `\n <li>Completed Doba signup</li>` : '';
  dobaInventoryText = dobaInventoryEl && dobaInventoryEl.checked ? `\n <li>Completed Doba inventory</li>` : '';
  cjSignupText = cjSignupEl && cjSignupEl.checked ? `\n <li>Completed Cj signup & Linked Ebay</li>` : '';
  cjCategoryText = cjCategoryEl && cjCategoryEl.checked ? `\n <li>Completed Cj category selection</li>` : '';

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
  payPalStandardText = payPalStandardEl && payPalStandardEl.checked ? `\n <li>Linked PayPal Standard Checkout${payPalStandardReasonText}</li>` : '';
  testOrderText = testOrderEl && testOrderEl.checked ? `\n <li>Creating a Test Order</li>` : '';
  explainedOrderEmailsText = explainedOrderEmailsEl && explainedOrderEmailsEl.checked ? `\n <li>Explained order emails</li>` : '';
  ordersGridText = ordersGridEl && ordersGridEl.checked ? `\n <li>Orders grid</li>` : '';
  processDobaOrderText = processDobaOrderEl && processDobaOrderEl.checked ? `\n <li>Processed Doba test order</li>` : '';
  processCjOrderText = processCjOrderEl && processCjOrderEl.checked ? `\n <li>Processed CJ test order</li>` : '';
  sentGuidesProcessingText = sentGuidesProcessingEl && sentGuidesProcessingEl.checked ? `\n <li>Sent client order processing guide(s)</li>` : '';
  exportingProductsText = exportingProductsEl && exportingProductsEl.checked ? `\n <li>Exporting product spreadsheet from Warhead</li>` : '';
  updatingProdText = updatingProdEl && updatingProdEl.checked ? `\n <li>Updating Doba Products</li>` : '';
  unavailableProdText = unavailableProdEl && unavailableProdEl.checked ? `\n <li>Managing Unavailable Products</li>` : '';
  sentGuidesUpdatingText = sentGuidesUpdatingEl && sentGuidesUpdatingEl.checked ? `\n <li>Sent client product updating guide(s)</li>` : '';

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
<ul>${canLogInText}${discussedSuppliersText}${discussedRegistrationText}${downloadChromeText}${createGmailText}${createFavFolderText}${linkedBingText}${ciasText}${googleVoiceText}${googleSignatureText}${completePinterestText}${completeYoutubeText}${completeTwitterText}${logInWhText}${createdTeachableText}${obCompletedQuestionnaireText}${completeStripeText}${completePaypalText}${dobaSignupText}${dobaInventoryText}${cjSignupText}${cjCategoryText}${dashNavText}${extraPageText}${createCatText}${organizeCatText}${createProdText}${prodGridText}${catProdText}${discountsText}${checkoutSectionsText}${payPalText}${payPalStandardText}${testOrderText}${explainedOrderEmailsText}${ordersGridText}${processDobaOrderText}${processCjOrderText}${sentGuidesProcessingText}${exportingProductsText}${updatingProdText}${unavailableProdText}${sentGuidesUpdatingText}${stripeText}${variantsText}${googleAnalyticsText}${unavailableCjProdText}${updatingNewProdText}${processRealOrderText}${modifyVariantsText}${applicationProcessText}${dropshipDatabaseText}${submittedApplicationText}${assistedApplicationText}${followUpEmailText}${customWorkedonText}
</ul>
`;
  } else {
    workedOnText = '';
  }
}

// "Assigned HW" String Handlers

var assignedHwElements = [googleVoiceHwEl, googleSignatureHwEl, createPinterestHwEl, createYoutubeHwEl, createTwitterHwEl, createStripeHwEl, createPaypalHwEl, stripeLinkBankEl, paypalLinkBankEl, complete2dEl, createCjHwEl, cjCategoryHwEl, createDobaHwEl, dobaInventoryHwEl, whVideosHwEl, registerBusinessHwEl, firstApptFinishVidEl, reviewExtraPagesEl, removeProdEl, practiceCatProdEl, practiceCreateCatdEl, registerBusinessEl, secondApptFinishVidEl, practiceDiscountsEl, practiceOrdersEl, continueVidEl, thirdApptFinishVidEl, practiceUpdateEl, allVidEl, applyAndEmailEl, contApplyAndEmailEl, watchCanvaEl, createCanvaTemplateEl, contCanvaTemplatedEl, planFbIgPostsEl, contFbIgPostsEl, saveTwentyPinsEl, createFivePinsEl, threeFiveTwitterPostsEl, quoteThreeTwitterPostsEl];

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
  googleVoiceHwText = googleVoiceHwEl && googleVoiceHwEl.checked ? `\n <li>Create Google Voice</li>` : ``;
  googleSignatureHwText = googleSignatureHwEl && googleSignatureHwEl.checked ? `\n <li>Create Google Signature</li>` : ``;
  createPinterestHwText = createPinterestHwEl && createPinterestHwEl.checked ? `\n <li>Create Pinterest account</li>` : ``;
  createYoutubeHwText = createYoutubeHwEl && createYoutubeHwEl.checked ? `\n <li>Create YouTube account</li>` : ``;
  createTwitterHwText = createTwitterHwEl && createTwitterHwEl.checked ? `\n <li>Create Twitter account</li>` : ``;
  createStripeHwText = createStripeHwEl && createStripeHwEl.checked ? `\n <li>Create Stripe account</li>` : ``;
  createPaypalHwText = createPaypalHwEl && createPaypalHwEl.checked ? `\n <li>Create PayPal account</li>` : ``;
  stripeLinkBankText = stripeLinkBankEl && stripeLinkBankEl.checked ? `\n <li>Link bank to Stripe</li>` : ``;
  paypalLinkBankText = paypalLinkBankEl && paypalLinkBankEl.checked ? `\n <li>Link bank to PayPal</li>` : ``;
  complete2dText = complete2dEl && complete2dEl.checked ? `\n <li>Complete 2d</li>` : ``;
  createCjHwText = createCjHwEl && createCjHwEl.checked ? `\n <li>Create CJ Dropshipping account & link Ebay</li>` : ``;
  cjCategoryHwText = cjCategoryHwEl && cjCategoryHwEl.checked ? `\n <li>Select CJ categories</li>` : ``;
  createDobaHwText = createDobaHwEl && createDobaHwEl.checked ? `\n <li>Create Doba account</li>` : ``;
  dobaInventoryHwText = dobaInventoryHwEl && dobaInventoryHwEl.checked ? `\n <li>Select Doba inventory</li>` : ``;
  whVideosHwText = whVideosHwEl && whVideosHwEl.checked ? `\n <li>Watch Warhead training videos</li>` : ``;
  registerBusinessHwText = registerBusinessHwEl && registerBusinessHwEl.checked ? `\n <li>Work on business registration</li>` : ``;

  firstApptFinishVidText = firstApptFinishVidEl && firstApptFinishVidEl.checked ? `\n <li>Finish 1st appointment teachable videos</li>` : ``;
  reviewExtraPagesText = reviewExtraPagesEl && reviewExtraPagesEl.checked ? `\n <li>Review Extra Pages</li>` : ``;
  removeProdText = removeProdEl && removeProdEl.checked ? `\n <li>Remove unrelated products</li>` : '';
  practiceCatProdText = practiceCatProdEl && practiceCatProdEl.checked ? `\n <li>Practice categorizing products using guide</li>` : '';
  practiceCreateCatdText = practiceCreateCatdEl && practiceCreateCatdEl.checked ? `\n <li>Practice creating categories</li>` : '';
  registerBusinessText = registerBusinessEl && registerBusinessEl.checked ? `\n <li>Register business</li>` : '';

  secondApptFinishVidText = secondApptFinishVidEl && secondApptFinishVidEl.checked ? `\n <li>Finish 2nd appointment teachable videos</li>` : ``;
  practiceDiscountsText = practiceDiscountsEl && practiceDiscountsEl.checked ? `\n <li>Practice creating discounts</li>` : ``;
  practiceOrdersText = practiceOrdersEl && practiceOrdersEl.checked ? `\n <li>Practice making & processing test orders using guides</li>` : '';
  continueVidText = continueVidEl && continueVidEl.checked ? `\n <li>Continue watching teachable videos</li>` : '';

  thirdApptFinishVidText = thirdApptFinishVidEl && thirdApptFinishVidEl.checked ? `\n <li>Finish 3rd appointment teachable videos</li>` : '';
  practiceUpdateText = practiceUpdateEl && practiceUpdateEl.checked ? `\n <li>Practice updating products using guides</li>` : '';
  allVidText = allVidEl && allVidEl.checked ? `\n <li>Complete all videos</li>` : '';

  applyAndEmailText = applyAndEmailEl && applyAndEmailEl.checked ? `\n <li>Apply to a minimum of 2 new suppliers and send follow-up emails every 2-3 days before the next appointment</li>` : '';
  contApplyAndEmailText = contApplyAndEmailEl && contApplyAndEmailEl.checked ? `\n <li>Continue working on sending applications and follow up emails</li>` : '';

  watchCanvaText = watchCanvaEl && watchCanvaEl.checked ? `\n <li>Watch Canva video</li>` : '';
  createCanvaTemplateText = createCanvaTemplateEl && createCanvaTemplateEl.checked ? `\n <li>Create 7-10 Canva templates to be posted on next appointment</li>` : '';
  contCanvaTemplatedText = contCanvaTemplatedEl && contCanvaTemplatedEl.checked ? `\n <li>Continue creating Canva templates</li>` : '';
  planFbIgPostsText = planFbIgPostsEl && planFbIgPostsEl.checked ? `\n <li>plan 7-10 FB/Insta posts each week</li>` : '';
  contFbIgPostsText = contFbIgPostsEl && contFbIgPostsEl.checked ? `\n <li>Continue posting 7-10 times on FB/Insta each week</li>` : '';
  saveTwentyPinsText = saveTwentyPinsEl && saveTwentyPinsEl.checked ? `\n <li>Save 20 pins in Pinterest each week</li>` : '';
  createFivePinsText = createFivePinsEl && createFivePinsEl.checked ? `\n <li>Create 5 product pins each week</li>` : '';
  threeFiveTwitterPostsText = threeFiveTwitterPostsEl && threeFiveTwitterPostsEl.checked ? `\n <li>Create 3-5 Twitter posts each week</li>` : '';
  quoteThreeTwitterPostsText = quoteThreeTwitterPostsEl && quoteThreeTwitterPostsEl.checked ? `\n <li>Quote 3 Twitter posts each week</li>` : '';

  var isAnythingChecked = assignedHwElements.some(function (el) {
    return el && el.checked;
  });

  if (isAnythingChecked || customAssignedHwText !== '') {
    assignedHwText = `Assigned homework: 
<ul>${googleVoiceHwText}${googleSignatureHwText}${createPinterestHwText}${createYoutubeHwText}${createTwitterHwText}${createStripeHwText}${createPaypalHwText}${stripeLinkBankText}${paypalLinkBankText}${complete2dText}${createCjHwText}${cjCategoryHwText}${createDobaHwText}${dobaInventoryHwText}${whVideosHwText}${registerBusinessHwText}${firstApptFinishVidText}${reviewExtraPagesText}${removeProdText}${practiceCatProdText}${practiceCreateCatdText}${registerBusinessText}${secondApptFinishVidText}${practiceDiscountsText}${practiceOrdersText}${continueVidText}${thirdApptFinishVidText}${practiceUpdateText}${allVidText}${applyAndEmailText}${contApplyAndEmailText}${watchCanvaText}${createCanvaTemplateText}${contCanvaTemplatedText}${planFbIgPostsText}${contFbIgPostsText}${saveTwentyPinsText}${createFivePinsText}${threeFiveTwitterPostsText}${quoteThreeTwitterPostsText}${customAssignedHwText}
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
    setVisibility(element, false);
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
      customNoVmReasonTextEl.value = '';

      if (firstAttemptRadioEl.checked) {
        attemptText = `<b>1st attempt</b>`;
        setVisibility(phoneNumberPromptEl, true);
        setVisibility(secondaryPhoneNumberPromptEl, true);
        setVisibility(leftVmPromptEl, true);
        setVisibility(noVmReasonPromptEl, false);
        setVisibility(emailSentPromptEl, true);
        setVisibility(sentMissedEmailPromptEl, false);
        setVisibility(markedPodioPromptEl, false);
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
        customNoVmReasonRadioEl.checked = false;
        customNoVmReasonTextEl.value = '';
      } else if (secondAttemptRadioEl.checked) {
        attemptText = `<b>2nd attempt</b>`;
        setVisibility(phoneNumberPromptEl, false);
        setVisibility(secondaryPhoneNumberPromptEl, false);
        setVisibility(leftVmPromptEl, true);
        setVisibility(noVmReasonPromptEl, false);
        setVisibility(emailSentPromptEl, true);
        setVisibility(sentMissedEmailPromptEl, false);
        setVisibility(markedPodioPromptEl, false);
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
        customNoVmReasonRadioEl.checked = false;
        customNoVmReasonTextEl.value = '';
      } else if (thirdAttemptRadioEl.checked) {
        attemptText = `<b>3rd attempt</b>`;
        setVisibility(phoneNumberPromptEl, false);
        setVisibility(secondaryPhoneNumberPromptEl, false);
        setVisibility(leftVmPromptEl, true);
        setVisibility(noVmReasonPromptEl, false);
        setVisibility(emailSentPromptEl, false);
        setVisibility(sentMissedEmailPromptEl, true);
        setVisibility(markedPodioPromptEl, true);
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
        customNoVmReasonRadioEl.checked = false;
        customNoVmReasonTextEl.value = '';
      } else {
        attemptText = ``;
        setVisibility(phoneNumberPromptEl, false);
        setVisibility(secondaryPhoneNumberPromptEl, false);
        setVisibility(leftVmPromptEl, false);
        setVisibility(noVmReasonPromptEl, false);
        setVisibility(emailSentPromptEl, false);
        setVisibility(sentMissedEmailPromptEl, false);
        setVisibility(markedPodioPromptEl, false);
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
        customNoVmReasonRadioEl.checked = false;
        customNoVmReasonTextEl.value = '';
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
        setVisibility(noVmReasonPromptEl, true);
      } else if (vmYesEl.checked) {
        leftVmText = `Left voicemail`;
        setVisibility(noVmReasonPromptEl, false);
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
        customNoVmReasonRadioEl.checked = false;
        customNoVmReasonTextEl.value = '';
      } else if (vmNoneEl.checked) {
        leftVmText = ``;
        setVisibility(noVmReasonPromptEl, false);
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
        customNoVmReasonRadioEl.checked = false;
        customNoVmReasonTextEl.value = '';
      } else {
        leftVmText = ``;
        vmBoxFullEl.checked = false;
        vmNotSetupEl.checked = false;
        customNoVmReasonRadioEl.checked = false;
        customNoVmReasonTextEl.value = '';
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

  customNoVmReasonTextEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      customNoVmReasonText = '';
    } else {
      customNoVmReasonText = event.target.value;
    }

    if (customNoVmReasonRadioEl.checked) {
      noVmReasonText = customNoVmReasonText;
    }
    updateVmText();
    updateHtmlNotes();
  });

  customNoVmReasonRadioEl.addEventListener('change', function () {
    if (!customNoVmReasonRadioEl.checked) {
      noVmReasonText = '';
    } else if (customNoVmReasonRadioEl.checked) {
      noVmReasonText = customNoVmReasonText;
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
    setVisibility(element, false);
  });

  var messageTypeRadioElements = [messageTypeNoneRadioEl, messageTypeVoicemailRadioEl, messageTypeEmailRadioEl, messageTypeTextRadioEl];

  messageTypeRadioElements.forEach(function (element) {
    var currentMsgType = element.value;

    element.addEventListener('change', function () {
      returnContactText = '';
      advisedClientText = '';
      additionalNotesText = '';
      advisedClientEl.value = '';
      additionalNotesEl.value = '';
      if (messageTypeNoneRadioEl.checked) {
        contactedByClientText = `<p>
  Contacted by client.
</p>
`;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        setVisibility(contactedEmailSentPromptEl, false);
        contactedPrompts.forEach(function (element) {
          setVisibility(element, false);
        });
      } else if (messageTypeVoicemailRadioEl.checked || messageTypeEmailRadioEl.checked || messageTypeTextRadioEl.checked) {
        contactedByClientText = `<p>
  <b>Contacted by client via ${currentMsgType}</b>
</p>
`;
        setVisibility(successfulContactPromptEl, true);
        setVisibility(contactedPhoneNumberPromptEl, false);
        setVisibility(contactedSecondaryPhoneNumberPromptEl, false);
        setVisibility(contactedLeftVmPromptEl, false);
        setVisibility(contactedNoVmReasonPromptEl, false);
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
        setVisibility(contactedPhoneNumberPromptEl, true);
        setVisibility(contactedSecondaryPhoneNumberPromptEl, true);
        setVisibility(contactedLeftVmPromptEl, true);
      } else if (successfulContactYesEl.checked) {
        successfulContactText = `Successfully contacted client.`;
        setVisibility(contactedPhoneNumberPromptEl, false);
        setVisibility(contactedSecondaryPhoneNumberPromptEl, false);
        setVisibility(contactedLeftVmPromptEl, false);
        setVisibility(contactedNoVmReasonPromptEl, false);
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        contactedCustomNoVmReasonRadioEl.checked = false;
        contactedCustomNoVmReasonTextEl.value = '';
      } else if (successfulContactNoneEl.checked) {
        successfulContactText = '';
        setVisibility(contactedPhoneNumberPromptEl, false);
        setVisibility(contactedSecondaryPhoneNumberPromptEl, false);
        setVisibility(contactedLeftVmPromptEl, false);
        setVisibility(contactedNoVmReasonPromptEl, false);
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        contactedCustomNoVmReasonRadioEl.checked = false;
        contactedCustomNoVmReasonTextEl.value = '';
      } else {
        successfulContactText = '';
        setVisibility(contactedPhoneNumberPromptEl, false);
        setVisibility(contactedSecondaryPhoneNumberPromptEl, false);
        setVisibility(contactedLeftVmPromptEl, false);
        setVisibility(contactedNoVmReasonPromptEl, false);
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        contactedCustomNoVmReasonRadioEl.checked = false;
        contactedCustomNoVmReasonTextEl.value = '';
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
        setVisibility(contactedNoVmReasonPromptEl, true);
        contactedLeftVmText = `Did not leave voicemail`;
      } else if (contactedVmYesEl.checked) {
        setVisibility(contactedNoVmReasonPromptEl, false);
        contactedLeftVmText = `Left voicemail`;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        contactedCustomNoVmReasonRadioEl.checked = false;
        contactedCustomNoVmReasonTextEl.value = '';
      } else if (contactedVmNoneEl.checked) {
        setVisibility(contactedNoVmReasonPromptEl, false);
        contactedLeftVmText = ``;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        contactedCustomNoVmReasonRadioEl.checked = false;
        contactedCustomNoVmReasonTextEl.value = '';
      } else {
        setVisibility(contactedNoVmReasonPromptEl, false);
        contactedLeftVmText = ``;
        contactedVmBoxFullEl.checked = false;
        contactedVmNotSetupEl.checked = false;
        contactedCustomNoVmReasonRadioEl.checked = false;
        contactedCustomNoVmReasonTextEl.value = '';
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

  contactedCustomNoVmReasonTextEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      contactedCustomNoVmReasonText = '';
    } else {
      contactedCustomNoVmReasonText = event.target.value;
    }

    if (contactedCustomNoVmReasonRadioEl.checked) {
      contactedNoVmReasonText = contactedCustomNoVmReasonText;
    }
    updateContactedVmText();
    updateHtmlNotes();
  });

  contactedCustomNoVmReasonRadioEl.addEventListener('change', function () {
    if (!contactedCustomNoVmReasonRadioEl.checked) {
      contactedNoVmReasonText = '';
    } else if (contactedCustomNoVmReasonRadioEl.checked) {
      contactedNoVmReasonText = contactedCustomNoVmReasonText;
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
  ${event.target.value}
</p>
`;
    }
    updateHtmlNotes();
  });

  needsRescheduledEl.addEventListener('change', function () {
    if (needsRescheduledEl.checked) {
      setVisibility(contactedRescheduleDatePromptEl, true);
    } else if (!needsRescheduledEl.checked) {
      setVisibility(contactedRescheduleDatePromptEl, false);
      contactedRescheduleDateText = '';
      contactedRescheduleDateEl.value = '';
    } else {
      setVisibility(contactedRescheduleDatePromptEl, false);
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
      generalContactPurposeText = `<p>
  <b>${event.target.value}</b>
</p>
`;
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
    var displayDeptName = deptLabels[currentDeptValue] || currentDeptValue;

    if (!newRescheduleDateStr) {
      rescheduleDateText = '';
    } else {
      rescheduleDateText = `<p>
  Rescheduled ${displayDeptName} appointment to ${newRescheduleDateStr}.
</p>
`;
    }
    updateHtmlNotes();
  });
}

// Edit Note String Handler

function setEditNote() {
  noteNumberEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      noteNumberText = '';
    } else {
      noteNumberText = `<p>
  <b>Edit to Note #${event.target.value}</b>
</p>
`;
    }
    updateHtmlNotes();
  });

  editNoteTextEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      editNoteText = '';
    } else {
      editNoteText = `<p>
  ${event.target.value}
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

// *ONBOARDING SPECIFIC STRING HANDLERS

function setNicheStrings() {
  setVisibility(nicheSelectionPromptEl, false);

  var nicheCompletedRadioElements = [nicheCompletedNoEl, nicheCompletedNoneEl, nicheCompletedYesEl];

  nicheCompletedRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (nicheCompletedYesEl.checked) {
        nicheCompletedText = 'Niche has been completed.';
        setVisibility(nicheSelectionPromptEl, true);
      } else if (nicheCompletedNoEl.checked) {
        nicheCompletedText = 'Niche has not been completed.';
        nicheSelectionEl.value = '';
        nicheSelectionText = '';
        setVisibility(nicheSelectionPromptEl, false);
      } else if (nicheCompletedNoneEl.checked) {
        nicheCompletedText = '';
        nicheSelectionEl.value = '';
        nicheSelectionText = '';
        setVisibility(nicheSelectionPromptEl, false);
      } else {
        nicheCompletedText = '';
        nicheSelectionEl.value = '';
        nicheSelectionText = '';
        setVisibility(nicheSelectionPromptEl, false);
      }
      updateNicheString();
      updateHtmlNotes();
    });
  });

  nicheSelectionEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      nicheSelectionText = '';
    } else {
      nicheSelectionText = `Client has selected <b>${event.target.value}</b> for their niche(s).`;
    }
    updateNicheString();
    updateHtmlNotes();
  });
}

function updateNicheString() {
  if (nicheCompletedText || nicheSelectionText) {
    updatedNicheText = `<p>
  ${nicheCompletedText} ${nicheSelectionText}
</p>
`;
  } else {
    updatedNicheText = '';
  }
}

function setDomainStrings() {
  setVisibility(domainPromptEl, false);

  var domainCompletedRadioElements = [domainCompletedNoEl, domainCompletedNoneEl, domainCompletedYesEl];

  domainCompletedRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (domainCompletedYesEl.checked) {
        domainCompletedText = 'Domain has been completed.';
        setVisibility(domainPromptEl, true);
      } else if (domainCompletedNoEl.checked) {
        domainCompletedText = 'Domain has not been completed.';
        domainEl.value = '';
        domainText = '';
        setVisibility(domainPromptEl, false);
      } else if (domainCompletedNoneEl.checked) {
        domainCompletedText = '';
        domainEl.value = '';
        domainText = '';
        setVisibility(domainPromptEl, false);
      } else {
        domainCompletedText = '';
        domainEl.value = '';
        domainText = '';
        setVisibility(domainPromptEl, false);
      }
      updateDomainString();
      updateHtmlNotes();
    });
  });

  domainEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      domainText = '';
    } else {
      domainText = `Client's domain: <b>${event.target.value}</b>`;
    }
    updateDomainString();
    updateHtmlNotes();
  });
}

function updateDomainString() {
  if (domainCompletedText || domainText) {
    updatedDomainText = `<p>
  ${domainCompletedText} ${domainText}
</p>
`;
  } else {
    updatedDomainText = '';
  }
}

function setOnboardingComplete() {
  obCompleteEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      obCompleteText = '';
    } else {
      obCompleteText = `<p>
  Client has completed Onboarding
</p>
`;
    }
    updateHtmlNotes();
  });
}

// *WARHEAD SPECIFIC STRING HANDLERS

function setScreenShare() {
  setVisibility(screenShareOtherPromptEl, false);

  screenShareEl.addEventListener('change', function (event) {
    currentScreenShareValue = event.target.value;

    if (currentScreenShareValue === 'default' || currentScreenShareValue === 'Other') {
      screenShareText = '';
    } else {
      screenShareText = `Used ${currentScreenShareValue}.`;
    }

    if (currentScreenShareValue === 'Other') {
      setVisibility(screenShareOtherPromptEl, true);
    } else if (currentScreenShareValue !== 'Other') {
      setVisibility(screenShareOtherPromptEl, false);
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

function setStartedRegistering() {
  var startedRegRadioElements = [startedRegNoEl, startedRegNoneEl, startedRegYesEl];

  startedRegRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (startedRegYesEl.checked) {
        startedRegText = `<p>
  Client <b>has</b> started registering business.
</p>
`;
      } else if (startedRegNoEl.checked) {
        startedRegText = `<p>
  Client <b>has not</b> started registering business.
</p>
`;
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
  setVisibility(whyNotSignedPromptEl, false);

  completionFormSentEl.addEventListener('change', function () {
    if (completionFormSentEl.checked) {
      completionFormSentText = `Sent & explained completion form.`;
    } else {
      setVisibility(whyNotSignedPromptEl, false);
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
      if (cfSignedElYes.checked) {
        setVisibility(whyNotSignedPromptEl, false);
        completionFormSignedText = ` Client has <b>signed</b> completion form.`;
      } else if (cfSignedElNo.checked) {
        setVisibility(whyNotSignedPromptEl, true);
        completionFormSignedText = ` Client has <b>not signed</b> completion form.`;
      } else if (cfSignedElNone.checked) {
        setVisibility(whyNotSignedPromptEl, false);
        completionFormSignedText = '';
      } else {
        completionFormSignedText = '';
      }
      updateCompletionForm();
      updateHtmlNotes();
    });
  });

  whyNotSignedEl.addEventListener('input', function (event) {
    if (!event.target.value) {
      whyNotSignedText = '';
    } else {
      whyNotSignedText = event.target.value;
    }

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
  sentSmGuideEl.addEventListener('change', function () {
    if (sentSmGuideEl.checked) {
      sentSmGuideText = `Sent client SM How to Guide PDF.`;
    } else {
      sentSmGuideText = '';
    }

    updateSupplierManagement();
    updateHtmlNotes();
  });

  enrolledSmEl.addEventListener('change', function () {
    if (enrolledSmEl.checked) {
      enrolledSmText = `Enrolled client in SM Appointment Training course.`;
    } else {
      enrolledSmText = '';
    }

    updateSupplierManagement();
    updateHtmlNotes();
  });
}

function updateSupplierManagement() {
  smText = `<p>
  ${sentSmGuideText} ${enrolledSmText} Booked SM Appointment with ${smTechText} on ${smDateText}.
<p>
`;
}

function setWhCompleted() {
  whCompletedEl.addEventListener('change', function () {
    if (!whCompletedEl.checked) {
      whCompletedText = '';
    } else if (whCompletedEl.checked) {
      whCompletedText = `<p>
  Client has <b>completed Warhead Training</b>.
</p>
`;
    }
    updateHtmlNotes();
  });
}

function setNoFurtherWhAssistance() {
  noFurtherWhAssistanceEl.addEventListener('change', function () {
    if (!noFurtherWhAssistanceEl.checked) {
      noFurtherWhAssistanceText = '';
    } else if (noFurtherWhAssistanceEl.checked) {
      noFurtherWhAssistanceText = `<p>
  No further WH Assistance appointments scheduled with me at this time.
</p>
`;
    }
    updateHtmlNotes();
  });
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

// *SOCIAL MEDIA SPECIFIC STRING HANDLERS

var socmReviewedElements = [completedDesignQuestionareEl, accessAllSocialMediaEl, updatedBiosEl, createdFbIgEl, grammarlyEl, createdCanvaEl, createdChatgptEl, howCreateCanvaTemplatesEl, useMbsEl, mbsRefresherEl, mbsStoriesEl, pinterestBoardsEl, pinPinterestPostsEl, pinterestRefresherEl, productPinsEl, createTwitterPostsEl, quoteTwitterPostsEl, twitterFollowEl, joinFbGroupsEl, fbFollowAccountsEl, reactCommentShareFbEl, inviteToLikeFbEl, followPinterestBoardsEl, reactCommentShareTwitterEl, mbsTrackEl, mbsAnalyticsEl, performanceContentOverviewsEl, viewsReachEl];

function setSocmReviewed() {
  socmReviewedElements.forEach(function (element) {
    if (element) {
      element.addEventListener('change', function () {
        updateSocmReviewed();
        updateHtmlNotes();
      });
    }
  });
}

function initDynamicSocmReviewed() {
  var container = document.getElementById('custom-socm-reviewed-container');
  if (!container) return;

  container.addEventListener('input', function (event) {
    var row = event.target.closest('.custom-socm-reviewed-row');
    if (!row) return;

    var checkbox = row.querySelector('.custom-checkbox');
    var textInput = row.querySelector('.custom-text');

    if (event.target.classList.contains('custom-checkbox') && !checkbox.checked) {
      if (container.children.length > 1 && row !== container.lastElementChild) {
        row.remove();
        refreshAllCustomSocmReviewed();
        return;
      }
    }

    if (row === container.lastElementChild) {
      if (checkbox.checked || textInput.value.trim() !== '') {
        addNewSocmReviewedRow(container);
      }
    }

    refreshAllCustomSocmReviewed();
  });
}

function refreshAllCustomSocmReviewed() {
  var combinedHtml = '';

  var rows = document.querySelectorAll('.custom-socm-reviewed-row');

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

  customSocmReviewedText = combinedHtml;

  if (typeof updateSocmReviewed === 'function') updateSocmReviewed();
  if (typeof updateHtmlNotes === 'function') updateHtmlNotes();
}

function updateSocmReviewed() {
  completedDesignQuestionareText = completedDesignQuestionareEl && completedDesignQuestionareEl.checked ? `\n <li>Completed Design Questionnaire</li>` : '';
  accessAllSocialMediaText = accessAllSocialMediaEl && accessAllSocialMediaEl.checked ? `\n <li>Ensured client can access all existing social media accounts (Pinterest, Twitter, Youtube)</li>` : '';
  updatedBiosText = updatedBiosEl && updatedBiosEl.checked ? `\n <li>Completed Design Questionnaire</li>` : '';
  createdFbIgText = createdFbIgEl && createdFbIgEl.checked ? `\n <li>Created Facebook and Instagram pages and linked those together/li>` : '';
  grammarlyText = grammarlyEl && grammarlyEl.checked ? `\n <li>Installed Grammarly</li>` : '';
  createdCanvaText = createdCanvaEl && createdCanvaEl.checked ? `\n <li>Created Canva account</li>` : '';
  createdChatgptText = createdChatgptEl && createdChatgptEl.checked ? `\n <li>Created Chatgpt account</li>` : '';
  howCreateCanvaTemplatesText = howCreateCanvaTemplatesEl && howCreateCanvaTemplatesEl.checked ? `\n <li>Showed client how to create Canva templates</li>` : '';
  useMbsText = useMbsEl && useMbsEl.checked ? `\n <li>Showed client how to use Meta Business Suite planner to schedule posts</li>` : '';
  mbsRefresherText = mbsRefresherEl && mbsRefresherEl.checked ? `\n <li>Gave the client a refresher on creating standard posts using MBS</li>` : '';
  mbsStoriesText = mbsStoriesEl && mbsStoriesEl.checked ? `\n <li>Showed client how to use MBS planner to schedule stories</li>` : '';
  pinterestBoardsText = pinterestBoardsEl && pinterestBoardsEl.checked ? `\n <li>Showed client how to create Pinterest boards</li>` : '';
  pinPinterestPostsText = pinPinterestPostsEl && pinPinterestPostsEl.checked ? `\n <li>Showed client how to pin existing posts in Pinterest</li>` : '';
  pinterestRefresherText = pinterestRefresherEl && pinterestRefresherEl.checked ? `\n <li>Gave a refresher on creating boards & saving pins in Pinterest</li>` : '';
  productPinsText = productPinsEl && productPinsEl.checked ? `\n <li>Showed client how to create product pins</li>` : '';
  createTwitterPostsText = createTwitterPostsEl && createTwitterPostsEl.checked ? `\n <li>Showed client how to create Twitter posts</li>` : '';
  quoteTwitterPostsText = quoteTwitterPostsEl && quoteTwitterPostsEl.checked ? `\n <li>Showed client how to quote existing Twitter posts</li>` : '';
  twitterFollowText = twitterFollowEl && twitterFollowEl.checked ? `\n <li>Showed client how to follow other Twitter accounts</li>` : '';
  joinFbGroupsText = joinFbGroupsEl && joinFbGroupsEl.checked ? `\n <li>Showed client how to join & vet FB groups</li>` : '';
  fbFollowAccountsText = fbFollowAccountsEl && fbFollowAccountsEl.checked ? `\n <li>Showed client how to follow other FB accounts</li>` : '';
  reactCommentShareFbText = reactCommentShareFbEl && reactCommentShareFbEl.checked ? `\n <li>Showed client how to react, comment, and share existing FB posts</li>` : '';
  inviteToLikeFbText = inviteToLikeFbEl && inviteToLikeFbEl.checked ? `\n <li>Showed client how to invite FB friends to like the page</li>` : '';
  followPinterestBoardsText = followPinterestBoardsEl && followPinterestBoardsEl.checked ? `\n <li>Showed client how to follow Pinterest accounts & boards</li>` : '';
  reactCommentShareTwitterText = reactCommentShareTwitterEl && reactCommentShareTwitterEl.checked ? `\n <li>Showed client how to react, comment, and repost on Twitter</li>` : '';
  mbsTrackText = mbsTrackEl && mbsTrackEl.checked ? `\n <li>Showed client how to use MBS to track reactions, comments, and shares</li>` : '';
  mbsAnalyticsText = mbsAnalyticsEl && mbsAnalyticsEl.checked ? `\n <li>Showed client how to read and navigate Meta Business Suite analytics</li>` : '';
  performanceContentOverviewsText = performanceContentOverviewsEl && performanceContentOverviewsEl.checked ? `\n <li>Discussed performance and content overviews</li>` : '';
  viewsReachText = viewsReachEl && viewsReachEl.checked ? `\n <li>Discussed which posts are gaining the most views and reach, suggested creating more posts that use similar designs, verbiage, and hashtags as those</li>` : '';

  var isAnythingChecked = socmReviewedElements.some(function (el) {
    return el && el.checked;
  });

  if (isAnythingChecked || customSocmReviewedText !== '') {
    socmReviewedText = `Reviewed the following during our appointment:
<ul>${completedDesignQuestionareText}${accessAllSocialMediaText}${updatedBiosText}${createdFbIgText}${grammarlyText}${createdCanvaText}${createdChatgptText}${howCreateCanvaTemplatesText}${useMbsText}${mbsRefresherText}${mbsStoriesText}${pinterestBoardsText}${pinPinterestPostsText}${pinterestRefresherText}${productPinsText}${createTwitterPostsText}${quoteTwitterPostsText}${twitterFollowText}${joinFbGroupsText}${fbFollowAccountsText}${reactCommentShareFbText}${inviteToLikeFbText}${followPinterestBoardsText}${reactCommentShareTwitterText}${mbsTrackText}${mbsAnalyticsText}${performanceContentOverviewsText}${viewsReachText}${customSocmReviewedText}
</ul>
`;
  } else {
    socmReviewedText = '';
  }
}

function setSocmCompleted() {
  socmCompletedRadioElements = [socmCompletedNoEl, socmCompletedNoneEl, socmCompletedYesEl];

  socmCompletedRadioElements.forEach(function (element) {
    element.addEventListener('change', function () {
      if (socmCompletedNoEl.checked) {
        setVisibility(nextApptDatePromptEl, true);
        socmCompletedText = `<p>
  Follow up needed.
</p>
`;
      } else if (socmCompletedYesEl.checked) {
        setVisibility(nextApptDatePromptEl, false);
        socmCompletedText = `<p>
  No follow ups booked as client has completed the process.
</p>
`;
      } else if (socmCompletedNoneEl.checked) {
        setVisibility(nextApptDatePromptEl, true);
        socmCompletedText = '';
      }
      updateHtmlNotes();
    });
  });
}

// *INITIALIZATION (DOM CONTENT LOADED)

document.addEventListener('DOMContentLoaded', () => {
  setVisibility(resaleCertPromptEl, false);

  if (initialsText === '') {
    htmlNotesEl.classList.remove('can-be-active');
  } else {
    htmlNotesEl.classList.add('can-be-active');
  }

  showAllDeptInputsEl.checked = false;

  htmlNotesEl.value = '';

  var allForms = document.querySelectorAll('form');

  allForms.forEach(function (form) {
    form.reset();
  });

  copyHtmlNotes();
  clearInputs();
  handleShowAllInputs();
  setShowAllWorkedOn();
  setShowAllAssignedHw();
  setShowAllSocmReviewed();
  setSavedDepartment();
  handleDeptSelection();
  handleApptSelection();

  setNicheStrings();
  setDomainStrings();
  setOnboardingComplete();

  setContAppt();
  setMovedUp();
  setScreenShare();
  setHwCompleted();
  setHwPercent();
  updateHw();

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
  setWhCompleted();
  setNoFurtherWhAssistance();
  setNextAppointment();
  setOtherAppointment();
  setNextTopic();

  setHowManyProducts();
  setHowManySuppliers();
  setRemoveNonNiche();
  setCompletedSm();
  setCompletedMarketing();
  setMarketingAppt();
  setMarketingReviewed();

  setSocmReviewed();
  initDynamicSocmReviewed();
  setSocmCompleted();

  setMissedAppointment();
  setContactedByClient();
  setReschedule();
  setGeneralContact();
  setEditNote();
  setPodioLink();
  setInitials();
});

setThemeToggle();
