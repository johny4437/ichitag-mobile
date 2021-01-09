import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

    const Menu = ({props,navigation}) =>{
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity 
                    style={styles.headerAvatar}
                    onPress={()=>navigation.navigate('Profile')}
                    >
                        <Image 
                        source={require('../../Assets/Images/img1.jpg')}
                        style={styles.headerAvatarImage}
                        />
                        <Text style={styles.headerAvatarText}>Suicide Girl</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.closeDrawer()}>
                        <Icon name="close" size={25} color="#747d8c"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuContainerButton}>
                            <Icon name="home" size={30} color="#747d8c"/>
                            <Text style={styles.menuContainerButtonText}>Home</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.menuContainerButton}>
                            <Icon name="search" size={30} color="#747d8c"/>
                            <Text style={styles.menuContainerButtonText}>Buscar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainerButton}>
                            <Icon name="bookmarks" size={30} color="#747d8c"/>
                            <Text style={styles.menuContainerButtonText} >Tags Favoritas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainerButton}>
                            <Icon name="history" size={30} color="#747d8c"/>
                            <Text style={styles.menuContainerButtonText} >Histórico</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainerButton}>
                            <Icon name="settings" size={30} color="#747d8c"/>
                            <Text style={styles.menuContainerButtonText} >Configurações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.menuContainerButton}
                        >
                            <Icon name="power-settings-new" size={30} color="#747d8c"/>
                            <Text style={styles.menuContainerButtonText} >Sair</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    };

    const styles = StyleSheet.create({
        container:{

        },
        header:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:8,
            paddingHorizontal:5
        },
        headerAvatar:{
            flexDirection:'row',
            alignItems:'center'
        },
        headerAvatarImage:{
            width:50,
            height:50, 
            borderRadius:150
        },
        headerAvatarText:{
            fontSize:20,
            fontWeight:'bold',
            marginLeft:30
        },

        headerText:{
            fontSize:16,
            color:'#a4b0be',
        },
        menuContainer:{
            marginTop:20,
            paddingHorizontal:10
        },
        menuContainerButton:{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:15
        },
        menuContainerButtonText:{
            fontSize:18,
            color:'#a4b0be',
            marginLeft:10
        }

    })
    export default Menu;
