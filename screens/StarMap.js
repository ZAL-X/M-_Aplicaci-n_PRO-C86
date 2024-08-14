import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <ImageBackground source={require('../assets/GrassMC.png')} style={styles.backgroundImage}>
                <View style={styles.titlebar}>
                        <Image source={require('../assets/heartMC.png')} style={styles.icon}></Image>   
                        <Text style={styles.titleText}>Modo Supervivencia</Text>
                    </View>
                    <Text style={styles.titleText2}>En supervivencia un jugador puede recibir daño de otras entidades y de su propio entorno. Si se recibe suficiente daño, el jugador muere y reaparece en su punto de reaparición.</Text>
                </ImageBackground>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
        width:1300,
        height:700,
    },
    icon:{
        width:150,
        height:150,
        justifyContent:"center",
        alignContent:"center",
        marginLeft:570,
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"black",
        marginLeft:500,
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        marginRight:500,
        borderRadius:100,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#d50000',
    },
    titleText2:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        marginLeft:150,
        margin:40,
        backgroundColor:'#d50000'
    },
})