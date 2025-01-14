import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Week 2</Text>
        <Text style={styles.header}>Modal Exercise</Text>
      </View>
      <Pressable style={styles.showTextPressable} onPress={toggleModal}>
        {modalVisible &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.casualText}>Modal message</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={toggleModal}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        }
        <Text style={styles.casualText}>Show Modal</Text>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 50, // Sijoittaa koko header-kontainerin ruudun yläreunaan
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    alignContent: 'center',
    textAlignVertical: 'center',
    textDecorationLine: 'underline',
  },
  showTextPressable: {
    padding: 40,
    borderRadius: 20,
    backgroundColor: 'orange',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    paddingBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'rgb(253, 253, 253)',
    borderRadius: 20,
    borderWidth: 1,
    padding: 35,
    alignItems: 'center',
    textAlignVertical: 'center',
    fontSize: 500,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  casualText: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 40,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'light-grey',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
  },
});
