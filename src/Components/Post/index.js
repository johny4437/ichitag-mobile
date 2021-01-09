import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
const Post = ({source}) => {
    return (
        <View style={styles.container}>
                <Image 
                style={styles.image}
                source={source}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Icon 
                    name="chat-bubble" 
                    size={30} 
                    color="#747d8c"
                    style={styles.bubbleIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon 
                    name="favorite" 
                    size={30} 
                    color="#ff4757"
                    />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    image:{
        width:width,
        height:450
    },
    buttonContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:"flex-end",
        marginRight:15,
        marginBottom:10
    },
    bubbleIcon:{
        marginRight:8
    }
})

export default Post;
