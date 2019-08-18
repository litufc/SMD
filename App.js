import React from 'react';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container } from 'native-base';
import { StyleSheet } from 'react-native';

import Routes from './src/routes';

export default class App extends React.Component{
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require("native-base/Fonts/Roboto.ttf"),
            'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
            'FontBold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render(){
        return(
            <Container style={styles.container}>
                {this.state.fontLoaded ? (
                    <Routes/>
                ) : null }
            </Container>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})