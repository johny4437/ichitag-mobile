import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Post from '../../Components/Post';
import Header from '../../Components/Header';

const TimeLine = ({navigation}) => {
    const openDrawer = () =>{
        navigation.openDrawer();
    }
    const posts =[
        {
            id:1,
            source:require('../../Assets/Images/img1.jpg')
        },
        {
            id:2,
            source:require('../../Assets/Images/img2.jpg')
        },
        {
            id:3,
            source:require('../../Assets/Images/img3.jpg')
        },

    ]

    return (
        <View style={styles.conatiner}>
            <Header navigation={openDrawer} iconName="menu"/>
            <View style={styles.bodyPost}>
                <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <Post source={item.source}/>
                )}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner:{
        flex:1,
    }
})
export default TimeLine;
