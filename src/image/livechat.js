const countryObjet = window.LIVECHAT_VARIABLES;
const country = window.location.pathname.split('/')[1].split('_')[1]

const pushDataLayer = function () {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'live_chat',
  });
};

const addChatHandlers = function (isAgentAvailable, button) {
  if (button) {
    if (isAgentAvailable) {
      button.classList.remove('disabled');
      button.classList.remove('Mui-disabled');
      button.classList.remove('MuiButton-disableElevation');
      button.removeAttribute('disabled');
      button.addEventListener('click', function () {
        pushDataLayer()
        embedded_svc.inviteAPI.inviteButton.acceptInvite();
      }); // use this API call to start chat from invitations
      document.addEventListener('keyup', function (event) {
        if (event.keyCode === 27) {
          embedded_svc.inviteAPI.inviteButton.rejectInvite();
        }
      });
    } else  {
      button.classList.add('disabled');
      button.classList.add('Mui-disabled');
      button.classList.add('MuiButton-disableElevation');
      button.setAttribute('disabled', '');
    }
  }
};

const initESW = function (gslbBaseURL) {
  embedded_svc.settings.extraPrechatFormDetails = [
    {
      label: 'Locale',
      value: countryObjet["localeSite"].replace('{{country}}', country),
      transcriptFields: ['Website_Locale__c'],
      displayToAgent: false,
    },
    {
      label: 'UrlInitial',
      value: window.location.href,
      transcriptFields: ['Urls__c'],
      displayToAgent: false,
    },
    {
      label: 'CaseOrigin',
      value: 'Live Chat',
      transcriptFields: [],
      displayToAgent: false,
    },
  ];

  embedded_svc.settings.extraPrechatInfo = [
    {
      entityFieldMaps: [
        {
          doCreate: false,
          doFind: false,
          fieldName: 'LastName',
          isExactMatch: false,
          label: 'Last Name',
        },
        {
          doCreate: false,
          doFind: false,
          fieldName: 'FirstName',
          isExactMatch: false,
          label: 'First Name',
        },
        {
          doCreate: false,
          doFind: true,
          fieldName: 'Email',
          isExactMatch: true,
          label: 'Email',
        },
      ],
      entityName: 'Contact',
      saveToTranscript: 'Contact',
      showOnCreate: false,
    },
    {
      entityFieldMaps: [
        {
          doCreate: true,
          doFind: false,
          fieldName: 'Origin',
          isExactMatch: false,
          label: 'CaseOrigin',
        },
        {
          doCreate: true,
          doFind: false,
          fieldName: 'WebformLocale__c',
          isExactMatch: false,
          label: 'Locale',
        },
      ],
      entityName: 'Case',
      saveToTranscript: 'Case',
      showOnCreate: true,
    },
  ];

  embedded_svc.settings.displayHelpButton =
    countryObjet['embedded_svc.settings.displayHelpButton']; // hide the button because of iAdvize (the fixed button will display it)
  embedded_svc.settings.language =
    countryObjet['embedded_svc.settings.language']; // localeSite.toLowerCase();// //For example, enter 'en' or 'en-US'

  embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
  embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

  //embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
  //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

  // Settings for Chat
  //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
  // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
  // Returns a valid button ID.
  //};
  //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
  //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
  embedded_svc.settings.offlineSupportMinimizedText = '&nbsp;'; //(Defaults to Contact Us)

  embedded_svc.settings.enabledFeatures = ['LiveAgent'];
  embedded_svc.settings.entryFeature = 'LiveAgent';

  const chatFixedContainer = document.getElementById('acceptInvite')
  const chatFixedButton = chatFixedContainer ? chatFixedContainer.querySelector('button') : null;

  embedded_svc.addEventHandler("onHelpButtonClick", function() {
    pushDataLayer()
  });

  embedded_svc.addEventHandler('onSettingsCallCompleted', function (data) {
    addChatHandlers(data.isAgentAvailable, chatFixedButton)
  });

  embedded_svc.addEventHandler('onAvailability', function (data) {
    addChatHandlers(data.isAgentAvailable, chatFixedButton)
  });

  embedded_svc.init(
    countryObjet['embedded_svc.init Param1'],
    countryObjet['embedded_svc.init Param2'],
    gslbBaseURL,
    countryObjet['embedded_svc.init Param4'],
    countryObjet['embedded_svc.init Param5'],
    {
      baseLiveAgentContentURL: countryObjet['baseLiveAgentContentURL'],
      deploymentId: countryObjet['deploymentId'],
      buttonId: countryObjet['buttonId'],
      baseLiveAgentURL: countryObjet['baseLiveAgentURL'],
      eswLiveAgentDevName: countryObjet['eswLiveAgentDevName'],
      isOfflineSupportEnabled: countryObjet['isOfflineSupportEnabled'],
    },
  );
};

if (!window.embedded_svc) {
  const s = document.createElement('script');
  s.setAttribute('src', countryObjet['script_attribute2']);
  s.onload = function () {
    initESW(null);
  };
  document.body.appendChild(s);
} else {
  initESW('https://service.force.com');
}
