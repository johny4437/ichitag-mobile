import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Logo from '../../Assets/Images/logo.svg';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            <View style={styles.formContainer}>
                <TextInput 
                placeholder="Login ou Email"
                style={styles.formContainerInput}
                />
                <TextInput 
                placeholder="Senha"
                style={styles.formContainerInput}
                />
                <TouchableOpacity
                style={styles.formContainerButton}
                >
                    <Text style={styles.formContainerButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordButton}>
                <TouchableOpacity>
                    <Text 
                    style={styles.forgotPasswordButtonText}
                    >
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.singupContainer}>
                <Text style={styles.singupContainerText}>Novo por aqui?</Text>
                <TouchableOpacity style={styles.singupContainerButton}>
                    <Text style={styles.singupContainerButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    logo:{
        width:100,
        height:80
    },
    formContainer:{
        alignItems:'center',
        marginTop:-50
    },
    formContainerInput:{
        backgroundColor:'#ced6e0',
        borderRadius:15,
        width:350,
        padding:10,
        marginBottom:15
    },
    formContainerButton:{
        backgroundColor:'#e74c3c',
        width:350,
        padding: 10,
        borderRadius:10
    },
    formContainerButtonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    forgotPasswordButton:{
        alignItems:'flex-end',
        marginRight:30,
        marginTop:10
    },
    forgotPasswordButtonText:{
        color:'#bdc3c7',
        fontSize:12
    },
    singupContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    singupContainerText:{
        color:'#bdc3c7',
        fontSize:16,
        marginBottom:15
    },
    singupContainerButton:{
        backgroundColor:'#2980b9',
        width:350,
        padding: 10,
        borderRadius:10
    },
    singupContainerButtonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
});

export default Login;
