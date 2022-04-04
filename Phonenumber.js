/* eslint-disable prettier/prettier */
import React, { useState, useRef } from "react";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";

import styles from './style';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Clipboard from '@react-native-clipboard/clipboard';
import { color } from "react-native-elements/dist/helpers";

const Phonenumber = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <View>
      <View style={styles.Otpborderstyle}>
        <OTPInputView
          pinCount={5}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code => { console.log('you are good to go!') })}
        />
        <Text style={{ color: "blue",}}>Change Mobile Number ?</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          style={styles.CountdownCircleTimer}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 40 }}>
              {remainingTime}
            </Text>
          )}
        </CountdownCircleTimer>
        <View  style={styles.Button_otp}>
        <Button title="Resend OTP" onPress={() => setIsPlaying(prev => !prev)} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Phonenumber;
