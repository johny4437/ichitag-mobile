import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Header from '../../Components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Profile = ({navigation}) => {
    const goBack = ()=>{
        navigation.navigate('TimeLine');
        //console.log('na PAges Profile')
    }
    return (
        <View style={styles.container}>
            <Header 
            iconName="keyboard-backspace"
            navigation={goBack}
            />
            <View style={styles.profilePicture}>
                <Image 
                source={require('../../Assets/Images/img1.jpg')}
                style={styles.profilePictureImage}
                />
            </View>
            <View style={styles.profileInformation}>
                <View style={styles.profileInformationText}> 
                    <Text style={styles.profileInformationTextName}>Suicide Girl</Text>
                    <Text style={styles.profileInformationTextLocation}>Espirito Santo, BR</Text>
                </View>
                <TouchableOpacity>
                    <Icon  name="more-vert" size={30} color="#a4b0be"/>
                </TouchableOpacity>
            </View>
            <View style={styles.conquers}>
                <Text style={styles.conquersText}>Conquistas</Text>
            </View>
            <View style={styles.badges}>
                <Text style={styles.badgesText}>Badges</Text>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        flex:1
    },
    profilePicture:{
        height:150,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        marginTop:30
    }, 
    profilePictureImage:{
        width:150, 
        height:150,
        borderRadius:150
    },
    profileInformation:{
        flexDirection:'row',
        marginTop:20,
        paddingHorizontal:8,
        justifyContent:'space-between'
    },
    profileInformationText:{
        marginLeft:8
    },
    profileInformationTextName:{
        fontSize:22,
        fontWeight:'bold'
    },
    profileInformationTextLocation:{
        fontSize:18,
        color:'#a4b0be'
    },
    conquers:{
        marginTop:20
    },
    conquersText:{
        fontSize:24,
        fontWeight:'900',
        marginLeft:20
    },
    badges:{
        marginTop:50
    },
    badgesText:{
        fontSize:24,
        fontWeight:'900',
        marginLeft:20
    }
})

export default Profile;
