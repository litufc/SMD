import React, { Component } from 'react';
import { Tab, Tabs, Text, ScrollableTab, StyleProvider, Content } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import AccordionClassroom from './Cards/AccordionClassroom';

export default class ScrollableTabs extends Component {

    state = {
        dataArray : [
            { title: "Sala 01", schedules: 
              [
                {date: "05/09/2019", start: "15:30:01", end: "17:00:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
                {date: "05/09/2019", start: "18:00:01", end: "18:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
                {date: "05/09/2019", start: "22:00:00", end: "22:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"}
              ]
            },
            { title: "Sala 02", schedules: 
              [
                {date: "05/09/2019", start: "15:30:00", end: "17:00:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
                {date: "05/09/2019", start: "18:00:00", end: "18:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
                {date: "05/09/2019", start: "18:30:00", end: "20:00:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
                {date: "05/09/2019", start: "20:00:00", end: "21:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
                {date: "05/09/2019", start: "22:00:00", end: "22:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"}
              ]
            }
          ],
        activeTab : 0
    }   

    render() {
        let day = new Date().getDay();
        if(day == 0 || day == 6){
            day = 1;
        }
        day -= 1;
        setTimeout(() => {
            this.setState({ activeTab: day });
        }, 0);
        
        return (
            <StyleProvider style={getTheme(material)}>
                <Content>
                    <Tabs renderTabBar={()=> <ScrollableTab />} >
                        <Tab heading="2ª Feira">
                            <AccordionClassroom data={this.state.dataArray}/>
                        </Tab>
                        <Tab heading="3ª Feira">
                            <AccordionClassroom data={this.state.dataArray}/>
                        </Tab>
                        <Tab heading="4ª Feira">
                            <AccordionClassroom data={this.state.dataArray}/>
                        </Tab>
                        <Tab heading="5ª Feira">
                            <AccordionClassroom data={this.state.dataArray}/>
                        </Tab>
                        <Tab heading="6ª Feira">
                            <AccordionClassroom data={this.state.dataArray}/>
                        </Tab>
                    </Tabs>
                </Content>
            </StyleProvider>
        );
  }
}
