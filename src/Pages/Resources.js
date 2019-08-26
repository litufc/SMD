import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import CardResource from '../Components/Cards/CardResource';

export default class Resoucers extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Lista com todos os recursos e suas respectivas disponibilidades
            cards: [
                {title: "Projetor 1", status: false},
                {title: "Projetor 2", status: true},
                {title: "Projetor 3", status: false},
                {title: "Máquina fotográfica", status: true},
                {title: "Mesa digitalizadora", status: true},
                {title: "Cabo USB 1", status: false},
                {title: "Cabo USB 2", status: true}
            ]
        }
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
                
                <Content style={{backgroundColor: AppStyles.colour.background}}>
                    {this.state.cards.map((card) =>
                        <CardResource
                            title={card.title}
                            status={card.status}
                        />
                    )}
                </Content>

                <Tabbar
                    active="Resources"
                />
            </Container>
        );
    }
}