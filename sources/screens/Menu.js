import React from 'react'
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export default class Menu extends React.Component {
    static navigationOptions = {
        title: "React-Native Template",
    }

    render() {
        let navigation = this.props.navigation

        let list = [
            {
                name: "Get Firebase Token",
                onPress: () => navigation.push("GetFirebaseTokenModule"),
            },
        ]

        return (
            <View
                style = {{
                    backgroundColor: "whitesmoke",
                    flex: 1,
                }}
            >
                <FlatList
                    data         = {list}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem   = {({item, index}) => {
                        return (
                            <TouchableOpacity
                                disabled = {item.onPress == null}
                                onPress  = {() => item.onPress()}
                                style       = {{
                                    backgroundColor: "white",
                                    borderBottomWidth: 1.5,
                                    borderColor: "lightgray",
                                    padding: 20,
                                }}
                            >
                                <Text
                                    style = {{
                                        color: "black",
                                        fontSize: 20,
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}