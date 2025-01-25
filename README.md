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

# Documentation for Managing and Extending the CI/CD Pipeline

## Overview
This workflow automates the CI/CD process for the project. It performs the following steps:
1. **Linting and Testing**: Ensures code quality and passes all tests.
2. **Building the App**: Prebuilds the Expo app and generates build artifacts for Android and iOS.
3. **Deploying the App**: Publishes the app to Expo and sends notifications upon success.

## Key Components
1. **Triggers**:
  - Runs on `push` events to `main` branches.
  - Runs on `pull_request` events targeting the `main` branch.

## How to Extend

1. **Add Notifications**:
   - Add more notification steps in the `deploy` job for platforms like Teams, Discord, or email.
   - Example for Discord:
     ```yaml
     - name: Notify Discord
       run: |
         curl -X POST -H 'Content-Type: application/json' \
           -d '{"content": "✅ Build and deployment successful!"}' ${{ secrets.DISCORD_WEBHOOK_URL }}
     ```

2. **Add Deployment Steps for App Stores**:
   - Use third-party actions to deploy to the Google Play Store or Apple App Store.
   - Example for Google Play Store:
     ```yaml
     - name: Deploy to Google Play
       uses: r0adkll/upload-google-play@v1
       with:
         serviceAccountJson: ${{ secrets.GOOGLE_PLAY_SERVICE_ACCOUNT }}
         packageName: com.example.app
         releaseFiles: build/android/app-release.aab
     ```

## How to Manage the Workflow
1. **Update Dependencies**:
   - Regularly update Node.js, npm, and Expo CLI versions in the workflow.

2. **Monitor and Debug Failures**:
   - Use the GitHub Actions logs to troubleshoot failures in any step.

3. **Secure Secrets**:
   - Manage secrets in GitHub under **Settings > Secrets and variables**.
   - Rotate credentials periodically to enhance security.

4. **Add New Branches**:
   - Update the `on.push.branches` section to include additional branches.
   - Example:
     ```yaml
     on:
       push:
         branches:
           - main
           - staging
     ```

## Conclusion
This CI/CD pipeline is flexible and can be easily extended to meet additional requirements. By following the provided guidelines, you can enhance its functionality and adapt it to various project needs.

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
