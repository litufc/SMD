import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Card, Text } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import TextInput from '../Components/Inputs/TextInput';
import ButtonStatusResource from '../Components/Inputs/ButtonStatusResource';
import ButtonPrimary from '../Components/Inputs/ButtonPrimary';

export default class SearchLocations extends Component {
    constructor(props){
        super(props);
        this.state = {
            freeState: false,
            blockState: false
        }
    }

    freeHandle = () => {
        const aux = !this.state.freeState;
        this.setState({freeState: aux});
    }

    blockHundle = () => {
        const aux = !this.state.blockState;
        this.setState({blockState: aux});
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

                        <Text style={styles.subtitle}>Estado da Sala</Text>

                        <View style={{flexDirection: 'row', marginBottom: 16}}>
                            {this.state.freeState ?
                                <ButtonStatusResource label="Livre" status={true} onClick={this.freeHandle}/>
                            :
                                <ButtonStatusResource label="Livre" status={false} onClick={this.freeHandle}/>
                            }

                            {this.state.blockState ?
                                <ButtonStatusResource label="Ocupada" status={true} onClick={this.blockHundle}/>
                            :
                                <ButtonStatusResource label="Ocupada" status={false} onClick={this.blockHundle}/>
                            }
                        </View>

                        <ButtonPrimary onPress={()=>alert("clicou")}>Concluir</ButtonPrimary>

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
    },
    subtitle: {
        fontFamily: 'FontBold',
        fontSize: 16,
        color: AppStyles.colour.text,
        marginTop: 16,
        marginBottom: 5
    }
});