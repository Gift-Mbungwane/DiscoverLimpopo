import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

<<<<<<< Updated upstream:src/pages/Components/Notification.jsx
export default function Notification({isVisible, color}) {
=======
export default function Notification({isVisible, isMessage, color}) {


>>>>>>> Stashed changes:src/Components/Notification.jsx
    const [modalVisible, setModalVisible] = useState(isVisible);
    const [colorChange, setColor] = useState(color);

<<<<<<< Updated upstream:src/pages/Components/Notification.jsx
    useEffect(() => {
        setTimeout(() => {
         setModalVisible(false);
        }, 3000);

        
    }, [modalVisible])
=======


    // useEffect(() => {
       
    // }, [modalVisible])
>>>>>>> Stashed changes:src/Components/Notification.jsx

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
        <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: colorChange,
      }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>        
      </View>
  )
}
<<<<<<< Updated upstream:src/pages/Components/Notification.jsx

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
=======
>>>>>>> Stashed changes:src/Components/Notification.jsx
