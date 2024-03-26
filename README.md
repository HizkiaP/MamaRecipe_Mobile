This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

<br />

# Mama Recipe Mobile Application

Mama Recipe is a mobile application used to share information about food recipes and browse food recipes from other users. The website comes with features for adding recipes, viewing recipes from other users, and viewing cooking video tutorials. This website is also equipped with notifications of new recipes uploaded by other users and can upload images from storage or the user's camera.

<br />

## Features

- Users can add recipes, and video cooking tutorial, and also view video from other users.
- Users can edit their profile.
- Users can edit or delete their existing recipes.
- Users get a notification of new recipes from other users
- Users can upload images from their storage or take picture from camera

<br />

## Built With

- React Native

<br />

## Package dependencies

- axios
- native-base
- react-native
- react-native-dotenv
- react-native-image-picker
- react-native-onesignal
- react-native-safe-area-context
- react-native-screens
- react-native-svg
- async-storage

<br />

## Environment Variables

bash
API_KEY=
ONESIGNAL_API_ID=

<br />

## Installation

Clone the project

bash
  git clone https://github.com/HizkiaP/MamaRecipe_Mobile.git my-project


Go to the project directory

bash
  cd my-project


Install dependencies

bash
  npm install


Start the project

bash
  npm start

<br />

## Screenshot
| Login Page | Register Page |
|------------|---------------|
|<img src="https://drive.google.com/uc?export=view&id=1klDU4AbkwK1GUgKJhozQQnl_ML3JDB1f" width=400/> | <img src="https://drive.google.com/uc?export=view&id=1uUdrutecGDyJ5K8YRSU8Tdl1hIVtZQ84" width=400/>|

| Home Page | Search Page |
|------------|---------------|
|<img src="https://drive.google.com/uc?export=view&id=1dav4BE0l1L_uUsQlQjZj_MFw1iQHiNy7" width=400/> | <img src="https://drive.google.com/uc?export=view&id=1wsXkptEiIa9j-qRK_JE4BZRfhA1_cb1n" width=400/>|

| Profile Page | Edit Page |
|------------|---------------|
|<img src="https://drive.google.com/uc?export=view&id=1Klg9t-vQLOcC2Y9rkcYIcZQQgsnPh_Ns" width=400/> | <img src="https://drive.google.com/uc?export=view&id=195F1YR9WZAG2V335si38mIzjqjOFML5g" width=400/>|

| Video Step Page | Ingredients Page |
|------------|---------------|
|<img src="https://drive.google.com/uc?export=view&id=1qMSkqSbOe-lJh_xXc73N3RS3Xhr5fPdz" width=400/> | <img src="https://drive.google.com/uc?export=view&id=1IOb591wdjLY2ci30ZjrYjjm_kkNs59-r" width=400/>|

| Add Recipe Page | Detail Video Page |
|------------| ---------------|
|<img src="https://drive.google.com/uc?export=view&id=1aAOsx93o0kehBL5qDXjKyDXL1ilwdD-_" width=400/>| <img src="https://drive.google.com/uc?export=view&id=1OnU2oVUa2AgPjlqPl0RfMMZnrmXNMJUs" width=400/>|

<br />

## Authors

💻 [Hizkia Panjaitan](https://github.com/HizkiaP) as Fullstack Developer

<br />

## Related Project

⚡[Backend Mama Recipe](https://github.com/HizkiaP/Intermediate_Backend-Kia)⚡

⚡[Mama Recipe Web App](https://github.com/HizkiaP/MamaRecipe_FrontEnd)⚡

