//  FROM CHAT GPT BELOW: 
import { StyleSheet, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
// // import firebase from "firebase/app";
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import { SimpleLineIcons } from '@expo/vector-icons';

// Destructure navigation
const AddChatScreen = ({ navigation }) => { 

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats",
        });
    }, [navigation]);

    const createChat = async () => {
        try {
            await firebase.firestore().collection("chats").add({
                chatName: input,
            });
            navigation.goBack();
        } 
        catch (error) {
            alert(error);
        }
    };

    return (

        <View style={styles.container}>
            <Input
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon name="wechat" type="antdesign" size={24} color="black" />
                }
            />
            <Button disabled={!input} onPress={createChat} title='Create new Chat' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
})

export default AddChatScreen;











// import { StyleSheet, Text, View } from 'react-native';
// import React, { useLayoutEffect, useState } from 'react';
// import { Button, Input } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { createStackNavigator } from '@react-navigation/stack';
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import { SimpleLineIcons } from '@expo/vector-icons';


// const AddChatScreen = (navigation) => {

//     const [input, setInput] = useState("");

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             title: "Add a new Chat",
//             headerBackTitle: "Chats",
//         });
//     }, [navigation]);

//     const createChat = async () => {
//         await sb 
//             .collection("chats")
//             .add({
//                 chatName: input,
//             })
//             .then(() => {
//                 navigation.goBack();
//             })
//             .catch((error) => alert(error));
//     };

//   return (
//     <View style={styles.container}>
//         <Input
//             placeholder="Enter a chat name"
//             value={input}
//             onChangeText={(text) => setInput(text)}
//             onSubmitEditing = {createChat}
//             leftIcon={
//                 <Icon name="wechat" type="antdesign" size={24} color="black" />
//             }
//         />
//         <Button disabled={!input} onPress={createChat} title='Create new Chat'/>
//     </View>
//   )
// }

// export default AddChatScreen;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "white",
//         padding: 30,
//         height: "100%",
//     },
// })