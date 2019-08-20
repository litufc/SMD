import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import FixedTabs from '../Components/FixedTabs'

export default class Keys extends Component {
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
                />
                
                <Content>
                <FixedTabs
                    tabs={{tab1: "Secretaria", tab2: "Recepção"}}
                />
                </Content>
                {/* <ScrollView style={styles.container}>

                </ScrollView> */}
                <Tabbar
                    active="Keys"
                />
            </Container>
        );
    }
}