import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import ScrollableTabs from '../Components/ScrollableTabs'

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Toolbar 
                    title="Semana 05/08 à 09/08" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={true}
                    iconLeft={false}
                    onPressRight={() => this.props.navigation.navigate('SearchLocations')}
                    onPressTitle={() => this.props.navigation.navigate('Weeks')}
                /> 
                <ScrollableTabs/>
                <Tabbar
                    active="Home"
                />
            </Container>
        );
    }
}