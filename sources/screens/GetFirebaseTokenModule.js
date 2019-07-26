import React from 'react';
import {
    ActivityIndicator,
    Alert,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    GetToken,
} from  '../helpers/ReactNativeFirebase';

export default class GetFirebaseTokenModule extends React.Component {
    static navigationOptions = {
        title: "Get Firebase Token",
    }

    state = {
        getTokenOnProgress: false,
    }

    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    backgroundColor: "white",
                    flex: 1,
                    justifyContent: "center"
                }}
            >
                <TouchableOpacity
                    disabled = {this.state.getTokenOnProgress}
                    onPress = {() => this.GetToken()}
                    style = {{
                        backgroundColor: "mediumseagreen",
                        borderRadius: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: 275,
                    }}
                >
                    {this.state.getTokenOnProgress ?
                        <ActivityIndicator
                            color = "white"
                            size = "large"
                        />
                        :
                        <Text
                            style = {{
                                color: "white",
                                fontSize: 25.5,
                                fontWeight: "400",
                                textAlign: "center",
                            }}
                        >
                            Get Token
                        </Text>
                    }
                </TouchableOpacity>
            </View>
        )
    }

    async GetToken() {
        this.setState({getTokenOnProgress: true})

        let token = await GetToken()
        
        this.setState({getTokenOnProgress: false})

        Alert.alert("Token Retrieved", token)
    }
}