# QR Counter App

An application for scanning QR code to open the web version of the app, add the value of the counter to the one in the mobile app and store(persist) it using React Native - Redux - TypeScript.

## Main functionality

- User can scan QR code through the scanning tool that is integrated with the app.
- User will be navigated (after scanning the QR code containing web app version URL) to the web app version of the app and will see a screen with two buttons one for increasing and the other one for decrementing the counter value.
- User can add the value of the counter(on the web app) when he / she closes the app to the counter value in the mobile app (starts with zero).
- App will persist the last value of the counter and user can change it again when he / she changes the counter in the web app and closes it.

## Important Note

Please run the app in a **real device** simulator or emulator for better testing of the app functionalities as virtual simulators or emulators may causes unusual behaviors that are occurred only when run the app on them.

You [check resources section down below](https://github.com/asamiz/qr-counter#resources) for useful resources to run the apps on different platforms using real device as simulator or emulator.

## Prerequisites

React Native CLI to be installed. You can install it by running the command:

```bash
npm install -g react-native-cli
```

`Nodejs` and its version must be **>=12**

[You can find the latest version here](https://nodejs.org/en/)

**For iOS:**

You need to install `cocopods` to install app ios dependencies, you can install using `Homebrew` it by running the following command:

```bash
brew install cocoapods
```

Simulator or emulator **(real devices)** to run the app on.

## Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

```bash
git clone https://github.com/asamiz/qr-counter.git
```

Change the directory to the qr-counter app directory:

```bash
cd qr-counter
```

Second run the following command to install project dependencies:

```bash
yarn
```

**IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

```bash
cd ios && pod install && cd ..
```

or using `npx` in the project directory:

```bash
npx pod-install
```

### Run on Android Device

Run the following command on project directory:

```bash
yarn run android
```

### Run on iOS Device

Run the following command on project directory:

```bash
yarn run ios
```

### Run Unit Test

Run the following command to execute all unit test suites.

```bash
yarn run test
```

or to watch for any edit and run the tests automatically

```bash
yarn run test:watch
```

## Web Version

You can access web app live demo and web app repo from below links:

[Live Demo](https://asamiz.github.io/simple-counter-app/#/)

[Web App Repo](https://github.com/asamiz/simple-counter-app)

Or use our app QR code scanning tool to scan this QR code and will open it automatically. 😉

![QRCode](QRCode.png)

## Resources

[Android: Run apps on a hardware device](https://developer.android.com/studio/run/device)

[iOS: Running Your App in the Simulator or on a Device](https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device)
