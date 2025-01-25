# README

## Project Overview

# React Native Authentication App

This is a React Native application built using the **Expo framework**. It includes a simple authentication flow with **Login** and **Signup** screens, and is integrated with a **GitHub Actions CI/CD pipeline** to automate testing, building, and deployment.

---

## **Features**

- **Authentication**:
  - Login and Signup screens with form validation.
  - Password validation includes strength checks (length, uppercase, numbers, special characters).
- **State Management**: Redux is used to manage authentication state.
- **Navigation**: React Navigation handles screen transitions.
- **Branding**: Includes a logo prominently displayed across the app.
- **CI/CD Pipeline**: Automates linting, testing, building, and deployment processes.

---

## Prerequisites

1. **Node.js**: Install [Node.js](https://nodejs.org/) (version 18 or later).
2. **Expo CLI**: Install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```
3. **Git**: Ensure Git is installed for cloning the repository.
4. **Dependencies**: Install project dependencies by running `npm install` in the project directory.
## Install the Expo Go App

To get started, download the **Expo Go** app:

- [Expo Go on Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [Expo Go on Apple App Store](https://apps.apple.com/app/expo-go/id982107779)

## Dependencies

The project uses the following major dependencies:

- `react-native`: Mobile app framework.
- `expo`: Development tool for React Native apps.
- `redux`: State management library.
- `@react-navigation/native`: For app navigation.
- `@react-navigation/native-stack`: For stack-based navigation.
- `react-redux`: Integration of Redux with React.

## Project Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```
   This command will open a browser window with the Expo Developer Tools. You can scan the QR code to run the app on your physical device or use an emulator.

## Running the App Locally

1. **Android Emulator**:

   - Ensure Android Studio is installed and an emulator is set up.
   - Run the app on the emulator using Expo Developer Tools or the command:
     ```bash
     expo run:android
     ```

2. **iOS Simulator**:

   - Ensure Xcode is installed on macOS.
   - Run the app on the iOS simulator:
     ```bash
     expo run:ios
     ```

3. **Physical Device**:
   - Install the Expo Go app on your device.
   - Scan the QR code from Expo Developer Tools to run the app.

## CI/CD Pipeline

The project includes a GitHub Actions workflow to automate the development pipeline.

### Workflow Summary

1. **Linting and Testing**:

   - Runs `npm run lint` and `npm test` to ensure code quality.

2. **Building the App**:

   - Builds the app for Android and iOS using Expo.
   - Artifacts (APK and IPA files) are uploaded for distribution.

3. **Deployment**:
   - Publishes the app to Expo.
   - Sends a Slack notification upon success.

### Managing Secrets

To manage the pipeline, add the following secrets in your GitHub repository:

- `EXPO_USERNAME`: Your Expo account username.
- `EXPO_PASSWORD`: Your Expo account password.
- `SLACK_WEBHOOK_URL`: Webhook URL for Slack notifications.

## Scripts

- **Start**: Runs the app in development mode.
  ```bash
  npm start
  ```
- **Lint**: Lints the codebase using ESLint.
  ```bash
  npm run lint
  ```
- **Test**: Runs tests using Jest.
  ```bash
  npm test
  ```

## Extending the Project

1. **Adding Features**:

   - Extend the Redux store for more features.
   - Add new screens with React Navigation.

2. **Enhancing the Pipeline**:

   - Add steps for additional testing tools (e.g., TypeScript checks).
   - Deploy to Google Play Store or Apple App Store.

3. **Improving UI**:
   - Customize styles with Tailwind or other libraries.

## License

This project is licensed under the MIT License.

---

For questions or contributions, please create an issue or submit a pull request.
