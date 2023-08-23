import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";
// import firebase from "../firebase";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    }, []);

    const signIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error));
    }

  return (
    <KeyboardAvoidingView behaviour='padding' enabled style = {styles.container} >
        <StatusBar style="light"/>
        <Image source={{
          uri: 
            "https://assets.mofoprod.net/network/images/signal_logo.width-250.jpg",
        }}
        style = {{ width:200, height:200 }}
      />
     <View style={styles.inputContainer }>
     <Input placeholder="Email" 
            autoFocus 
            type = "email" 
            value={email} 
            onChangeText = { (text) => setEmail(text)}
             />
        <Input 
            placeholder="Password" 
            secureTextEntry 
            type = "password"
            value={password} 
            onChangeText = { (text) => setPassword(text)} 
            onSubmitEditing={signIn}
            />
     </View>

     <Button containerStyle={styles.button} onPress = {signIn} title="Login"/>
     <Button onPress={() => navigation.navigate('Register') }containerStyle={styles.button} type="outline" title="Register"/>
     <View style={{ height: 100 }} />  
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "white",
            },
            inputContainer: {
                width: 300,
            },
            button: {
                width: 200,
                marginTop: 10,
            },
});











// import React from 'react';
// import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
// import { Button, Input, Image } from "react-native-elements";
// // import { KeyboardAvoidingView } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { auth } from "../firebase";
// import { createStackNavigator } from '@react-navigation/stack';
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import { SimpleLineIcons } from '@expo/vector-icons';

// const LoginScreen = ({ navigation }) => {
//     const [email, setEmail] = useState("");
//     const [password, setpassword] = useState("");

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((authUser) => {
//                 console.log(authUser);
//             if(authUser) {
//                 navigation.replace("Home");
//             }
//         });

//         return unsubscribe;
//     }, []);

//     const signIn = () => {
//         auth
//             .signInWithEmailAndPassword(email, password)
//             .catch((error) => alert(error));
//     }

//   return (
//     <KeyboardAvoidingView behaviour='padding' enabled style = {styles.container} >
//         <StatusBar style="light" />
//       <Image source={{
//           uri: 
//             // "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
//             "https://assets.mofoprod.net/network/images/signal_logo.width-250.jpg",
//         }}
//         style = {{ width:200, height:200 }}
//       />
//       <View style={styles.inputContainer }>
//         <Input placeholder="Email" 
//             autoFocus 
//             type = "Email" 
//             value={email} 
//             onChangeText = { (text) => setEmail(text)} />
//         <Input 
//             placeholder="Password" 
//             secureTextEntry 
//             type = "Password"
//             value={password} 
//             onChangeText = { (text) => setPassword(text)} 
//             onSubmitEditing={signIn}
//             />
//       </View>
//       <Button containerStyle={styles.button} onPress = {signIn} title="Login"></Button>
//       <Button onPress={() => navigation.navigate('Register') }containerStyle={styles.button} type="outline" title="Register"></Button>
//       <View style={{ height: 100 }} /> 
//     </KeyboardAvoidingView>
//   );
// };

// export default LoginScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 10,
//         backgroundColor: "white",
//     },
//     inputContainer: {
//         width: 300,
//     },
//     button: {
//         width: 200,
//         marginTop: 10,
//     },
// });