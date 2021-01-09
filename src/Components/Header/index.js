import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../Assets/Images/lg.svg';
const Header = ({navigation, iconName}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={navigation}
                >
                    <Icon 
                    name={iconName}
                    size={30} 
                    color="#2f3542" 
                    style={{marginLeft:8, marginTop:-10}}
                    />
                </TouchableOpacity>
                
                <View style={styles.logo}>
                    <Logo height={80} width={90}/>
                </View>
                <View style={styles.likeButtonContainer}>
                        <View style={styles.likeButton}>
                            <Icon 
                            name="favorite" 
                            size={20} 
                            color="#ff4757"
                            style={{marginBottom:5}}
                            />
                            <Text>995</Text>
                        </View>
                        <View style={styles.scheduleContainer}>
                            <Icon name="schedule" size={15} color="#a4b0be"/>
                            <Text>2h35min</Text>
                        </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{

    },
    header:{
        flexDirection:'row',
        alignItems:'center'
    },
    logo:{
        marginLeft:80,
        marginRight:120
    },
    likeButtonContainer:{
        alignItems:'center'
    },
    likeButton:{
        flexDirection:'row',
        alignItems:'center'
    },
    scheduleContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default Header
