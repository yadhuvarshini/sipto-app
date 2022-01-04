/* eslint-disable prettier/prettier */
import React , {useState,Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Modal,
  Image,
  SafeAreaView,
  Linking,
  ScrollView,
  useColorScheme,
  Appearance 
} from "react-native";

//navigation

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
//

//stylesheet
import styles from './style';
//

//components
import Login  from './Login';
import Register from './Register';
import Verification from './Verification';
//

//packages
import CheckBox from '@react-native-community/checkbox';
//


function LoginScreen( {navigation} ) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);
  return (
    <View style={styles.backgroundcolor_full_app}>
    <View style={styles.accountlinkbackground}>
      <Text style={styles.accountlink}>No account ? <Text style={styles.link1} onPress={()=>navigation.navigate(Register)}> Create your Account!</Text></Text>
    </View>
    <Login />
    <SafeAreaView style={styles.footer}>
          <View style={styles.checkboxContainer}>
            <CheckBox 
            style={styles.checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColors={{ true: 'green', false: 'black' }}
             />


            <Text style={styles.agmt}>I agree to <Text style = {styles.link1}
            onPress={() => Linking.openURL('https://yadhuvarshini.wordpress.com')}>Terms and Condition</Text>  and  <Text style = {styles.link1}
            onPress={() => Linking.openURL('https://yadhuvarshini.wordpress.com')}>Privacy policy</Text></Text>
          </View>

      <TouchableOpacity
        style={[styles.btn, {backgroundColor: toggleCheckBox ? 'dodgerblue' : 'grey'}]}
        disabled={!toggleCheckBox}
        onPress={() => setComplianceModal(false)}
        >
          <Text style={styles.btntext} 
          onPress={() => navigation.navigate(Verification)}>Login</Text>
      </TouchableOpacity>

        </SafeAreaView>
    </View>
  );
}

function RegisterScreen( {navigation} ) {

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);
  return (
     <View style={styles.backgroundcolor_full_app}>
        <View style={styles.accountlinkbackground}>
          <Text style={styles.accountlink}>Already have an account ? <Text style={{color:'blue'}} onPress={()=>navigation.navigate(Login)}>Sign In</Text></Text>
        </View>

       <Register />

       <SafeAreaView style={styles.footer}>
          <View style={styles.checkboxContainer}>
      
          <CheckBox 
            style={styles.checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColors={{ true: 'green', false: 'black' }}
             />

          <Text style={styles.agmt}>I agree to <Text style = {styles.link1}
            onPress={() => Linking.openURL('https://yadhuvarshini.wordpress.com')}>Terms and Condition</Text>  and  <Text style = {styles.link1}
            onPress={() => Linking.openURL('https://yadhuvarshini.wordpress.com')}>Privacy policy</Text></Text>
          </View>

          <TouchableOpacity
        
        style={[styles.btn, {backgroundColor: toggleCheckBox ? 'dodgerblue' : 'grey'}
        ]}
        disabled={!toggleCheckBox}
        onPress={() => setComplianceModal(false)}
        >
        <Text style={styles.btntext} onPress={() => navigation.navigate(Verification)}>Register</Text>
        </TouchableOpacity>

        </SafeAreaView>
     </View>
  );
}

function VerificationScreen() {
  return (
      <View style={styles.backgroundcolor_full_app}>
      <View>
        <Text>JKNGJKBGN</Text>

        <Verification />
        </View>
      </View>
      
  );
}

const Stack = createNativeStackNavigator();

 function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Verification" component={VerificationScreen} />
 
          </Stack.Navigator>
        </NavigationContainer>      
  );
}

export default App;