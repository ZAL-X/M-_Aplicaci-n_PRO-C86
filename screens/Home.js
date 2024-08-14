import { NavigationRouteContext } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';
import { back } from 'react-native/Libraries/Animated/src/Easing';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.driodSafeArea}/>
                <ImageBackground source={require('../assets/GrassMC.png')} style={styles.backgroundImage}>

                    <View style={styles.titlebar}>
                        <Image source={require('../assets/Creeper.png')} style={styles.icon}></Image>   
                        <Text style={styles.titleText}>Guía de los Modos de Minecraft</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("Naves espaciales")
                    }>
                        <Image source={require('../assets/GrassMC.png')} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Modo Creativo</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("Mapa estelar")
                    }>
                        <Image source={require('../assets/heartMC.png')} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Modo Supervivencia</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("Imágenes diarias")
                    }>
                        <Image source={require('../assets/PickaxeMC.png')} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Modo Aventura</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#D0E6F0"
    },
    driodSafeArea:{
        marginTop: Platform.OS==="android" ? StatusBar.currentHeight:0
    },
    routeCard:{
        justifyContent:"center",
        alignItems:"center",
        margin:30,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"#5a3e29"
    },
    titleBar:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"black",
        marginLeft:400,
        margin:40,
    },
    routeText:{
        fontSize:25,
        fontWeight:"bold",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"#5a3e29"
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    routeImage:{
        position:'absolute',
        top:-20,
        right:-15,
        height:100,
        width:100,
        resizeMode:'contain',
    },
    icon:{
        width:150,
        height:150,
        justifyContent:"center",
        alignContent:"center",
        marginLeft:570,
    }
})