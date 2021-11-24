# Create a new react native project
1. npx react-native init MyReactNativeApp

# Create a new react native project with version
npx react-native init AwesomeProject --version X.XX.X

# Create a new react native project with custom React Native template,  like TypeScript, with --template argument
npx react-native init AwesomeTSProject --template react-native-template-typescript

# Setting up the development environment (Android & iOS)
  https://reactnative.dev/docs/environment-setup
  
## Running your React Native application
# Step 1: Start Metro
  npx react-native start

# Step 2: Start your application (For Android)
  npx react-native run-android

# Step 2: Start your application (For iOS)
  npx react-native run-ios

# Make local.properties file and set SDK path
1. Make local.properties file in android folder
2. Set Android SDK path.

# Unable to load script from assets index.android.bundle on windows
1. mkdir android/app/src/main/assets
2. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3. react-native run-android

# Refer some good links
1. https://github.com/bithoven-dev/ReactNavigationAuthenticationFlowsWithHooks
2. https://www.youtube.com/watch?v=-ybtIniLPPM&list=PLgp11Hu-N4DTLp48x2fDQGEdCEJfDWddI
3. https://www.youtube.com/watch?v=6kM1Z5dDF-Q

# Project Structure

 |--- _tests_
 |--- .vscode
 |--- android/
 |--- iOS/
 |--- native-base-theme/          --------->  Define native base component's theme as per requirement 
 |--- node_modules
 |--- src
 |---   components
           AccountTypeSlider.js
           context.js
           DatePicker.js
           FixedDeposit.js
           Footer.js
           Header.js
           HomeAccountBalance.js
           HomeMenus.js
           Loader.js
           RecentTransfer.js
           Sliderscreen.js
           TransactionForm.js
           TransactionAccordianType.js
           UpcomingBillerCard.js
 |---   containers
           context/  ------------------------>  Implementation done for Auth & n/w check.
           data/  --------------------------->  API MockData
           Login/ --------------------------->  Handled BiometricAuthentication & login view form
           Navigation/ ---------------------->  Handled Auth & app navigations  
           Registration/ -------------------->  Handled Registration form
           Screens/Home      ---------------->  Handled home screen view & action dispatch for getting
                                                mock data and pass data to all sub components.
           Styles/      --------------------->  Managed main pages styles
           Welcome/      -------------------->  App onBoarding screens
 |---   images/ ----------------------------->  App all images handled in this folder
 |---   services/ --------------------------->  Implementation done for all api calls and handled push 
                                                notification service.
 |---   store     --------------------------->  Store contains global state for app
 |---   theme     --------------------------->  Dynamic design update for app 
 |---   translations ------------------------>  Handled multiple language here and all static
                                                text getting from this folder 
 |---   url_constants ----------------------->  URL constants 
 |---   utils         ----------------------->  util constant files handled
 |---   App.js        ----------------------->  Handled Auth guard, providers, app navigations
 |---   CustomDrawerContent.js
 |---   CustomHeader.js
 |---   drawerItemsMain.js
 |---   app.json
 |---   index.js
 |---   metro.config.js
 |---   package.json
 |---   README.md
 
 # Features

  1. Login service with authguard
  2. Navigation
  3. Standard HTML/CSS Layouts, stylesheets, themes
  4. i18N Implementation
  5. Mock backend api
  6. Exception handling
  7. Loading indicator on API call
  8. Biometric Authentication
  9. Push Notification
 10. Firebase integration
 11. Secure storage service
 12. Logger service
 13. Network Check
 14. Splash screen
 15. Documentation 