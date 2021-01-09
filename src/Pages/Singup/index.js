import React from 'react'
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../Assets/Images/logo.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Singup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={25} color="#a4b0be"/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.logoContainer}>
                <Logo style={styles.logo}/>
            </View>
            <View style={styles.formContainer}>
            <TextInput 
                placeholder="Nome Completo"
                style={styles.formContainerInput}
                />
                <TextInput 
                placeholder="Email"
                style={styles.formContainerInput}
                />
                 <TextInput 
                placeholder=" Repita o Email"
                style={styles.formContainerInput}
                />
                <TextInput 
                placeholder="Senha"
                style={styles.formContainerInput}
                />
                 <TextInput 
                placeholder="Repita a senha"
                style={styles.formContainerInput}
                />
                <TextInput 
                placeholder="País"
                style={styles.formContainerInput}
                />
                <TouchableOpacity style={styles.formContainerButton}>
                    <Text style={styles.formContainerButtonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    iconContainer:{
        marginTop:5,
        marginLeft:5
    },

    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:-45
        
    },
    logo:{
        width:40,
        height:30
    },
    formContainer:{
        marginTop:-50,
        alignItems:'center'
    },

    formContainerInput:{
        backgroundColor:'#ced6e0',
        borderRadius:15,
        width:300,
        height:45,
        padding:10,
        marginBottom:15
        
    },
    formContainerButton:{
        backgroundColor:'#2ed573',
        width:300,
        padding: 10,
        borderRadius:10
    },
    formContainerButtonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }

})
export default Singup;
