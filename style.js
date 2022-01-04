/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    backgroundcolor_full_app: {
    backgroundColor: "#ffff",
        flex: 1,
    },
    background: {
      backgroundColor: 'dodgerblue',
      height: 60,
      padding: 17,
      fontSize: 17,
      color: 'white',
    },
    backgroundColor: {
      backgroundColor: 'dodgerblue',
    },
    accountlinkbackground: {
      backgroundColor: 'aliceblue',
      padding: 19,
      margin: 25,
    },
    accountlink: {
      fontSize: 16,
      color: 'black',
      textAlign: 'center',
    },
    info: {
      color: '#000',
      margin: 20,
    },
    info2: {
      color: '#000',
      margin: 15,
    },
    bottomView: {
      paddingHorizontal: 20,
    },
    inputView: {
      height: 40,
      borderRadius: 10,
      backgroundColor: 'aliceblue',
      marginTop: 10,
    },
    input: {
      height: 40,
      fontFamily: 'SourceSansProRegular',
      fontSize: 16,
      color: '#000',
    },
    checkboxContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
      marginRight:30,
      marginLeft:20,
    },
    checkbox: {
      width: 30,
      height: 30,
      margin: 10,
   },
    link1: {
      color: 'blue',
    },
    agmt: {
      marginVertical: 15,
      color:'black',
    },
    btn: {
      borderRadius: 15,
      height: 45,
      width: 150,
      marginRight:30,
      marginLeft:100,
    },
    btntext: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 7,
    },
    Otp_header_img: {
       width: 220,
       height: 100,
       resizeMode: 'contain',
    },
    font: {
      color: 'black',
    },
  });
export default styles;
