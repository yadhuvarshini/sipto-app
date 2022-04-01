/* eslint-disable prettier/prettier */
import React, { useState, useRef } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";

import styles from "./style";
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Phonenumber = ({ navigation }) => {
  const [ value, setValue ] = useState("");
  const [ formattedValue, setFormattedValue ] = useState("");

  return (
    <View>
      <OTPInputView
      style={styles.Otpborderstyle}
      pinCount={4}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={(code=> {console.log('you are good to go!')})}
      />
      <Text>fbghjbfb</Text>
    </View>
  );
};

export default Phonenumber;
