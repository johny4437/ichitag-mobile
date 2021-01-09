import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TimeLine from './Pages/TimeLine';
import PostDetails from './Pages/PostDetails';
import Menu from './Components/Menu';
import Profile from './Pages/Profile';
const Drawer =  createDrawerNavigator();

const Routes = ()=>{
    return(
    <Drawer.Navigator drawerContent={props => <Menu {...props} /> } initialRouteName="Profile">
            <Drawer.Screen name="TimeLine" component={TimeLine}/>
            <Drawer.Screen name="PostDetails" component={PostDetails}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
}
export default Routes;