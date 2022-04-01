/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  maincontainer: {
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
    linkbackground: {
      backgroundColor: 'grey',
      padding: 19,
      margin: 25,
    },
    link: {
      fontSize: 16,
      color: 'black',
      textAlign: 'center',
    },
    text: {
      color: '#000',
      margin: 20,
    },
    text2: {
      color: '#000',
      margin: 15,
    },
    bottomView: {
      marginLeft: 37,
      marginBottom:5,
      paddingTop: 5,
    },
    inputView: {
      height: 60,
      borderRadius: 10,
      backgroundColor: 'grey',
      marginTop: 10,
      marginLeft: 35,
      marginRight: 30,
      marginBottom:10,
    },
    input: {
      height: 60,
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
      color: 'white',
    },
    Policylink : {
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
    font: {
      color: 'black',
    },
    borderStyleBase: {
      width: 30,
      height: 45
    },

    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },

    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
    Phonecontainer: {
      backgroundColor: "aliceblue",
    },
    Otpwelcome: {
       color:"black",
       padding: 20,
    },
    Otpwrapper: {
      justifyContent: "center",
      alignItems: "center",
    },

    phonenumberbutton: {
      marginTop: 20,
      height: 50,
      width: 300,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#7CDB8A",
      shadowColor: "rgba(0,0,0,0.4)",
      shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },

    PhonenumberbuttonText: {
      color: "white",
      fontSize: 14,
    },
    status: {
      padding: 20,
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "flex-start",
      color: "gray",
    },
    OtpinputView: {
      height: 60,
      borderColor: "orange",
      borderBottomWidth:2,
      margin:10,
    },
    Otpinput: {
      height: 60,
      fontFamily: 'SourceSansProRegular',
      fontSize: 16,
      color: '#000',
    },
    Otpinputflex: {
      flexDirection: 'row',
      marginTop:50,
      marginLeft: 50,
    },
    Otpborderstyle: {
      width: 30,
      height: 45,
    },
  });

export default styles;
