/* eslint-disable prettier/prettier */
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from './style';
import PhoneInput from 'react-native-phone-number-input';


export default function Register() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [complianceModal, setComplianceModal] = useState(true);
    const [text, onChangeText] = React.useState();

    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const phoneInput = useRef(PhoneInput);

    return (
        <View styles={styles.maincontainer}>
        <View>
          <Text style={styles.text}>
            Sipto will send a verification code by SMS to your mobile
            number.Carrier charges may apply
          </Text>
        </View>


        <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Enter your Name"
              placeholderTextColor="lightgrey"
              onChangeText={onChangeText}
              value={text}
            />
         </View>

      <View style={styles.bottomView}>
        <PhoneInput
           style={styles.phonebox}
           containerStyle={{height:70,backgroundColor:'grey',}}
           textContainerStyle={{backgroundColor:'grey'}}
           textInputStyle={{fontSize:16,padding:0,color:'black',fontWeight:'500',}}
           ref={phoneInput}
           defaultValue={value}
           autoFormate={'true'}
           defaultCode="IN"
           layout="first"
           onChangeText={(text) => {
             setValue(text);
           }}
           onChangeFormattedText={(text) => {
             setFormattedValue(text);
           }}
           countryPickerProps={{ withAlphaFilter: true }}
           withShadow
           autoFocus

         />
        </View>

         <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Enter your Password"
              placeholderTextColor="lightgrey"
              onChangeText={onChangeText}
              value={text}
            />
         </View>

        </View>
  );
}
