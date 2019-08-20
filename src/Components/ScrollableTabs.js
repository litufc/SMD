import React, { Component } from 'react';
import { Tab, Tabs, Text, ScrollableTab, StyleProvider, Content } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class ScrollableTabs extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(material)}>
            <Content>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="2ª Feira">
                        <Text>1</Text>
                    </Tab>
                    <Tab heading="3ª Feira">
                        <Text>2</Text>
                    </Tab>
                    <Tab heading="4ª Feira">
                        <Text>3</Text>
                    </Tab>
                    <Tab heading="5ª Feira">
                        <Text>4</Text>
                    </Tab>
                    <Tab heading="6ª Feira">
                        <Text>5</Text>
                    </Tab>
                </Tabs>
            </Content>
        </StyleProvider>
    );
  }
}
