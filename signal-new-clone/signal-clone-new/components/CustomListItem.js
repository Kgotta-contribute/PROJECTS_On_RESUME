import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../firebase";

const CustomListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection('chats')
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => 
                setChatMessages(snapshot.docs.map((doc) => doc.data()))
            );

        return () => unsubscribe(); // Invoke the unsubscribe function
    }, [id]);

    return (
        <ListItem
            onPress={() => enterChat(id, chatName)}
            bottomDivider
        >
            <Avatar
                rounded
                source={{
                    uri: 
                    chatMessages?.[0]?.photoURL ||
                    "https://www.freepik.com/premium-ai-image/cartoon-character-beautiful-girl_60366931.htm#page=2&query=girl%20avatar%203d&position=36&from_view=search&track=ais"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                    ABC
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}

export default CustomListItem;

const styles = StyleSheet.create({});













// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { ListItem, Avatar } from "react-native-elements";

// const CustomListItem = ({ id, chatName, enterChat }) => {
//   return (
//     <ListItem>
//       <Avatar
//             rounded
//             source={{
//                 uri: chatMessages?.[0]?.photoURL ||
//                     "https://www.freepik.com/premium-ai-image/cartoon-character-beautiful-girl_60366931.htm#page=2&query=girl%20avatar%203d&position=36&from_view=search&track=ais",

//             }}
//         />
//     <ListItem.Content>
//              <ListItem.Title style={{ fontWeight: "800" }}>
//                  {chatName}
//              </ListItem.Title>
//              <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
//                  {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
//                  ABC
//              </ListItem.Subtitle>
//          </ListItem.Content>
//      </ListItem>
//   )
// }

// export default CustomListItem

// const styles = StyleSheet.create({})

