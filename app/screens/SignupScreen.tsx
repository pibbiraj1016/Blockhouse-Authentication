import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image
} from 'react-native';

// Utility functions for validation
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? '' : 'Enter a valid email address';
};

const validatePassword = (password: string) => {
  if (password.length < 6) {
    return 'Password must be at least 6 characters long';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number';
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must contain at least one special character';
  }
  return '';
};

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignup = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const confirmPasswordError = password !== confirmPassword ? 'Passwords do not match' : '';

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);
    setConfirmPasswordError(confirmPasswordError);

    if (!emailValidationError && !passwordValidationError && !confirmPasswordError) {
      // Show success alert
      Alert.alert(
        'Signup Successful',
        'Your account has been created successfully.',
        [
          {
            text: 'OK',
            onPress: () => navigation.replace('Login'), // Navigate to Login
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Image source={require('../../assets/images/blockhouse-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Signup</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => {
            setEmail(value);
            setEmailError(validateEmail(value));
          }}
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(value) => {
            setPassword(value);
            setPasswordError(validatePassword(value));
          }}
          placeholderTextColor="#aaa"
          autoCapitalize="none"
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(value) => {
            setConfirmPassword(value);
            setConfirmPasswordError(password !== value ? 'Passwords do not match' : '');
          }}
          placeholderTextColor="#aaa"
          autoCapitalize="none"
        />
        {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
      </View>

      <View style={styles.actionGroup}>
        <TouchableOpacity
          style={[styles.button, !(email && password && confirmPassword) && styles.buttonDisabled]}
          onPress={handleSignup}
          disabled={!!(emailError || passwordError || confirmPasswordError)}
          accessible
          accessibilityLabel="Signup button"
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('Login')}
          accessible
          accessibilityLabel="Navigate to Login"
        >
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 250, 
    height: 75, 
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  formGroup: {
    width: '100%',
    gap: 20,
    alignItems: 'center',
  },
  actionGroup: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#4CAF50',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});
