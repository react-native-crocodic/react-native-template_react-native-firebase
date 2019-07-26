import React from 'react';
import {
    Alert,
    Platform,
    StatusBar,
} from 'react-native';

import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';

import Menu from './Menu';
import GetFirebaseTokenModule from './GetFirebaseTokenModule';

import {
    GetPermissionSuccess,
    ListeningMessage,
} from '../helpers/ReactNativeFirebase';

const AppContainer = createAppContainer(createStackNavigator(
    {
        Menu,
        GetFirebaseTokenModule,
    },
    {
        initialRouteName: "Menu",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "rgb(40, 40, 40)",
            },
            headerTintColor: "white",
        },
        transitionConfig: () => ({screenInterpolator: sceneProps => StackViewStyleInterpolator.forHorizontal(sceneProps)}),
    }
))

export default class App extends React.Component {
    messageListener = null

    async componentDidMount() {
        if(Platform.OS == "android") {
            StatusBar.setBackgroundColor("rgb(40,40,40)")
        }
        
        StatusBar.setBarStyle("light-content")

        let permitted = await GetPermissionSuccess()

        if(permitted) {
            this.messageListener = ListeningMessage()

            Alert.alert("React-Native-Firebase", "Initialized and listening to your notifications")
        }
    }

    render() {
        return (
            <AppContainer />
        )
    }

    componentWillUnmount() {
        if(this.messageListener != null) {
            this.messageListener()
        }
    }
}