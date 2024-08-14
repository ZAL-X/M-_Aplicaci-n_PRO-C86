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
                        <Image source={require('../assets/PickaxeMC.png')} style={styles.icon}></Image>   
                        <Text style={styles.titleText}>Modo Aventura</Text>
                    </View>
                    <Text style={styles.titleText2}>El modo aventura es similar al modo supervivencia en los hechos de que los jugadores reciben daños de su entorno, es posible morir y los jugadores deben controlar el hambre. Sin embargo, también es diferente en muchos aspectos; por ejemplo, en este modo solo puedes romper bloques con su respectiva herramienta.</Text>
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
        backgroundColor:'#6bc8bb'
    },
    titleText2:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        marginLeft:150,
        margin:40,
        backgroundColor:'#6bc8bb'
    },
})