import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import FixedTabs from '../Components/FixedTabs';
import CardResource from '../Components/Cards/CardResource';

export default class Keys extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Lista com todos as chaves da secretaria e suas respectivas disponibilidades
            tabOne: [
                {title: "Sala 01", status: false},
                {title: "Sala 02", status: true},
                {title: "Sala 03", status: false},
                {title: "Laboratório 01", status: true},
                {title: "Laboratório 02", status: true},
                {title: "Laboratório P&D 01", status: false},
                {title: "Laboratório P&D 02", status: true}
            ],
            //Lista com todos as chaves da recepção e suas respectivas disponibilidades
            tabTwo: [
                {title: "Sala 01", status: true},
                {title: "Sala 02", status: true},
                {title: "Sala 03", status: true},
                {title: "Laboratório 01", status: false},
                {title: "Laboratório 02", status: true},
                {title: "Laboratório P&D 01", status: false},
                {title: "Laboratório P&D 02", status: false}
            ]
        }
    }

    render(){
        const _renderTab1 = 
            <>
                {this.state.tabOne.map((card) => 
                    <CardResource
                        title={card.title}
                        status={card.status}
                    />
                )}
            </>

        const _renderTab2 = 
            <>
                {this.state.tabTwo.map((card) => 
                    <CardResource
                        title={card.title}
                        status={card.status}
                    />
                )}
            </>
            
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
                
                <FixedTabs
                    tabs={{tab1: "Secretaria", tab2: "Recepção"}}
                    contentTabOne={_renderTab1}
                    contentTabTwo={_renderTab2}
                />

                <Tabbar
                    active="Keys"
                />
            </Container>
        );
    }
}