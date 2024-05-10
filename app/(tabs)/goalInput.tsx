import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native';
export default function GoalInput(props: any) {
    const [text, settext] = useState('');

    const goalInputHandler = (text: any) => {
        settext(text);

    }

    const addgoalhandler = () => {
        props.onAddGoal(text)
        props.onclose()
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputcontainer}>
                <Image style={styles.image} source={require('../../assets/images/Goal.png')} />
                <TextInput placeholder='Type your goal' style={styles.textInput} onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <Button color='blue' title='Add Goal' onPress={addgoalhandler} />
                    <View style={styles.button}>
                        <Button color='red' title='Cancel' onPress={props.onclose} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({

    inputcontainer:
    {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 24,
        borderBottomColor: 'purple',
        flex: 1,
        backgroundColor: 'white'
    },
    textInput:
    {
        borderWidth: 1,
        borderColor: "green",
        width: '80%',
        padding: 8
    },
    buttonContainer:
    {
        flexDirection: 'row',
        marginTop: 16,


    },
    button:
    {
        width: '30%',
        marginHorizontal: 8
    },
    image:
    {
        width: 150,
        height: 150,
        margin: 20
    }
})
