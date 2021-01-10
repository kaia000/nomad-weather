import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#E6DADA","#274046"],
        title:"Haze",
        subtitle:"Wow, it's little bit hazy. Be careful for driving (T^T)"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#536976","#292E49","#799F0C"],
        title:"Thunderstorm!",
        subtitle:"Warning!! Hurry Up!! Go To Your Room and Lock All the Windows!!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    }, 
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#7F7FD5","#86A8E7","#91EAE4"],
        title:"",
        subtitle:""
    }, 
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#D3CCE3","#E9E4F0"],
        title:"",
        subtitle:""
    },
    Atmosphere: {
        iconName: "weather-windy",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fc4a1a","#f7b733"],
        title:"",
        subtitle:""
    }, 
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title:"Cloudy",
        subtitle:"It's little bit cold outside, I guess you don't want to go out~"
    }, 
    Dust: {
        iconName: "weather-windy",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    },  
    Mist: {
        iconName: "weather-fog",
        gradient: ["#659999","#f4791f"],
        title:"",
        subtitle:""
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Sand: {
        iconName: "weather-windy",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Ash: {
        iconName: "weather-windy",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Squall: {
        iconName: "weather-tornado",
        gradient: ["",""],
        title:"",
        subtitle:""
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["",""],
        title:"",
        subtitle:""
    }
}

export default function Weather({temp, condition}){
    return ( 
          <LinearGradient
                colors={weatherOptions["Haze"].gradient}
                style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                    name={weatherOptions["Haze"].iconName}
                    //name={weatherOptions[condition].iconName}이럼 작동 안됨

                    size={96} 
                    color="white" 
                    />
                    <Text style={styles.temp}>{temp}º</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions["Haze"].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions["Haze"].subtitle}</Text>
                </View>
          </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
    // .isRequired 바로 위에 이거 써야되는데 쓰면 에러남
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 30
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 20    

    }
});