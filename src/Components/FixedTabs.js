import React from 'react';
import { Tab, Tabs, TabHeading, Text, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import CardResource from '../Components/Cards/CardResource';

const FixedTabs = ( { tabs } ) => {
    return(
        <StyleProvider style={getTheme(material)}>
            <Tabs>
                <Tab heading={<TabHeading><Text>{tabs.tab1}</Text></TabHeading>}>
                    <CardResource
                        title="Sala 01"
                        status={true}
                    />
                    <CardResource
                        title="Laboratório 01"
                        status={false}
                    />
                    <CardResource
                        title="Laboratório 02"
                        status={true}
                    />
                    <CardResource
                        title="Sala 02"
                        status={false}
                    />
                </Tab>
                <Tab heading={<TabHeading><Text>{tabs.tab2}</Text></TabHeading>}>
                    <Text>2</Text>
                </Tab>
            </Tabs>
        </StyleProvider>
    )
}

export default FixedTabs;