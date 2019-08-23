import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Card, Text } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import TextInput from '../Components/Inputs/TextInput';

export default class SearchLocations extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Toolbar 
                    title="Busca de Local" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={false}
                    iconLeft={true}
                    onPressLeft={() => this.props.navigation.navigate('Home')}
                />

                <Content style={{backgroundColor: AppStyles.colour.background}}>
                    <View style={styles.toolbarExtend}></View>
                    <Card style={styles.card}>
                        <Text style={styles.title}>Filtros de busca</Text>
                        <TextInput
                            label="Nome do professor"
                            textColor={AppStyles.colour.primaryColor}
                            type="text"
                        />
                        <TextInput
                            label="Nome da disciplina"
                            textColor={AppStyles.colour.primaryColor}
                            type="text"
                        />
                        <TextInput
                            label="Nome da sala"
                            textColor={AppStyles.colour.primaryColor}
                            type="text"
                        />
                    </Card>
                    
                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    toolbarExtend:{
        height: 40,
        backgroundColor: AppStyles.colour.primaryColor
    },
    card:{
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: -40,
        borderRadius: 10,
        padding: 16
    },
    title:{
        fontFamily: 'FontBold',
        fontSize: 20, 
        color: AppStyles.colour.primaryColor,
        textAlign: 'center'
    }
});