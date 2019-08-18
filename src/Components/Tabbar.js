import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Text, Icon, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import AppStyles from '../global';

const Tabbar = ({ active }) => {
    return(
        <StyleProvider style={getTheme(material)}>
            <Footer>
                <FooterTab>
                    <Button vertical active>
                        <Icon active type="FontAwesome5" name="map-marker-alt" style={styles.icon} />
                        <Text style={styles.text}>Locais</Text>
                    </Button>
                    <Button vertical>
                        <Icon type="FontAwesome5" name="key" style={styles.icon} />
                        <Text style={styles.text}>Recursos</Text>
                    </Button>
                    <Button vertical>
                        <Icon type="FontAwesome5" name="user-alt" style={styles.icon} />
                        <Text style={styles.text}>Perfil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    icon:{
        fontSize: 24,
        marginBottom: 3
    },
    text:{
        fontFamily: 'FontBold',
        fontSize: 16
    }
});

export default Tabbar;