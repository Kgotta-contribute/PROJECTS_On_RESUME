import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "react-native-elements";
import { auth } from "../firebase";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back To Login",
        });
    }, [navigation]);

    const register = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
            displayName: name, 
            photoURL: 
            imageUrl || 
            "https://media.licdn.com/dms/image/D5616AQHutDGmA1E9aA/profile-displaybackgroundimage-shrink_200_800/0/1689995933533?e=2147483647&v=beta&t=egwxCBydf0AXOxh2uLLvn-8cINLvaLRbQ1cjQcbKK6I",
            });
        })
        .catch((error) => alert(error.message));
    };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="light"/>
      <Text h2 style={{ marginBottom: 50 }}>
         Create a signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Full Name" 
            autoFocus 
            type='text' 
            value={name} 
            onChangeText={(text) => setName(text)}
        />
        <Input placeholder="Email"  
            type='email' 
            value={email} 
            onChangeText={(text) => setEmail(text)}
        />
        <Input placeholder="Password" 
            type='password' 
            secureTextEntry
            value={password} 
            onChangeText={(text) => setPassword(text)}
        />
        <Input placeholder="Profile Picture URL (optional)" 
            type='text' 
            value={imageUrl} 
            onChangeText={(text) => setImageUrl(text)}
            onSubmitEditing={register}
        />
      </View>

      <Button 
        containerStyle={styles.button}
        raised 
        onPress={register} 
        title="Register"
    />
  <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "white",
            },
            button: {
                width: 200,
                marginTop: 10,
            },
            inputContainer: {
                width: 300,
            },
});




// import React, { useLayoutEffect, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { KeyboardAvoidingView } from "react-native";
// import { Button, Input, Text } from "react-native-elements";
// import { StatusBar } from "expo-status-bar";
// import { auth } from "../firebase";
// import { createStackNavigator } from '@react-navigation/stack';
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import { SimpleLineIcons } from '@expo/vector-icons';

// const RegisterScreen = ({navigation}) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [imageUrl, setImageUrl] = useState("");

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerBackTitle: "Back To Login",
//         });
//     }, [navigation]);

//     const register = () => {
//         auth
//         .createUserWithEmailAndPassword(email, password)
//         .then((authUser) => {
//             authUser.user.updateProfile({
//                 displayName: name, 
//                 photoURL: 
//                     imageUrl || 
//                     "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
//             });
//         })
//         .catch((error) => alert(error.message));
//     };

//     return (
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
//         <StatusBar style="light"/>
//       <Text h3 style={{ marginBottom: 50 }}>
//         Create a signal account
//       </Text>

//       <View style={styles.inputContainer}>
//         <Input placeholder="Full Name" 
//             autoFocus 
//             type='text' 
//             value={name} 
//             onChangeText={(text) => setName(text)}
//         />
//         <Input placeholder="Email"  
//             type='email' 
//             value={email} 
//             onChangeText={(text) => setEmail(text)}
//         />
//         <Input placeholder="Password" 
//             type='password' 
//             secureTextEntry
//             value={password} 
//             onChangeText={(text) => setPassword(text)}
//         />
//         <Input placeholder="Profile Picture URL (optional)" 
//             type='text' 
//             value={imageUrl} 
//             onChangeText={(text) => setImageUrl(text)}
//             onSubmitEditing={register}
//         />
//       </View>

//       <Button 
//         containerStyle={styles.button}
//         raised 
//         onPress={register} 
//         title="Register"
//     />
//         <View style={{ height: 100 }} />
//     </KeyboardAvoidingView>
//   );
// };

// export default RegisterScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 10,
//         backgroundColor: "white",
//     },
//     button: {
//         width: 200,
//         marginTop: 10,
//     },
//     inputContainer: {
//         width: 300,
//     },
// });