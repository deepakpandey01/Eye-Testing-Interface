import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function ShowNumber(){
    return (
        <View>
            <Text>Your eye no is 6/6. </Text>
            <TouchableOpacity onPress={() => {
                if(modalVisible==null){
                    navigate('Mcq')
                }else if(modalVisible=="Data 7"){
                    navigate('Show Number')
                }
                else{
                    console.log(modalVisible);
                    navigate("Show Number")
                }
            }}>
            <Text style={styles.textStyle}>Start Testing</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      width: 155,
      alignSelf: 'center',
      marginTop: 25
      // paddingBottom: 20
    },
    // logo: {
    //     width: '75%',
    //     height: '50%',
    //     borderRadius: 20,
    //     alignContent: 'center',
    //     alignSelf: 'center',
    //     marginTop: 80
    //   }

});

export default ShowNumber;