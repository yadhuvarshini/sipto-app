/* eslint-disable prettier/prettier */
import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Modal,
  SafeAreaView,
  Linking,
  ScrollView,
  useColorScheme,
  Appearance,
} from "react-native";

import styles from "./style";

import CheckBox from "@react-native-community/checkbox";

export default function Register({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View styles={styles.maincontainer}>
      <View>
        <Text style={styles.info}>
          Bharat-Indx will send a verification code by SMS to your mobile
          number.Carrier charges may apply
        </Text>
        <Text style={styles.info2}>
          Please enter your country and enter your mobile number.
        </Text>
      </View>

      <View style={styles.bottomView}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeNumber={onChangeNumber}
            value={number}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Enter your Country Name"
            placeholderTextColor="grey"
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Enter your Phone Number"
            placeholderTextColor="grey"
            onChangeText={onChangeText}
            value={text}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Enter your Password"
            placeholderTextColor="grey"
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Enter your Password again"
            placeholderTextColor="grey"
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View>
    </View>
  );
}
