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
                        <Image source={require('../assets/GrassMC.png')} style={styles.icon}></Image>   
                        <Text style={styles.titleText}>Modo Creativo</Text>
                    </View>
                    <Text style={styles.titleText2}>El modo creativo es uno de los modos de juego principales de Minecraft. El modo creativo deja a un lado los aspectos de supervivencia de Minecraft y permite a los jugadores construir y destruir estructuras y mecanismos fácilmente.</Text>
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
        margin:20,
        justifyContent:"center",
        alignItems:"center",
        marginRight:500,
        borderRadius:100,
        padding:10,
        backgroundColor:'#5fa243',
    },
    titleText2:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        marginLeft:150,
        margin:40,
        backgroundColor:'#5fa243'
    },
})