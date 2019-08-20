import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Text, Icon, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { withNavigation } from 'react-navigation';

import AppStyles from '../global';

class Tabbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { active } = this.props;
        return(
            <StyleProvider style={getTheme(material)}>
                <Footer>
                    <FooterTab>
                        {active === "Home" ? (
                            <Button vertical active>
                                <Icon active type="FontAwesome5" name="map-marker-alt" style={styles.icon} />
                                <Text style={styles.text}>Locais</Text>
                            </Button>
                        ):(
                            <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon active type="FontAwesome5" name="map-marker-alt" style={styles.icon} />
                                <Text style={styles.text}>Locais</Text>
                            </Button>
                        )
                        }
                        
                        {active === "Keys" ? (
                            <Button vertical active>
                                <Icon type="FontAwesome5" name="key" style={styles.icon} />
                                <Text style={styles.text}>Chaves</Text>
                            </Button>
                        ) :(
                            <Button vertical onPress={() => this.props.navigation.navigate('Keys')}>
                                <Icon type="FontAwesome5" name="key" style={styles.icon} />
                                <Text style={styles.text}>Chaves</Text>
                            </Button>
                        )}
                        
                        {active === "Resources" ? (
                            <Button vertical active>
                                <Icon type="FontAwesome5" name="camera-retro" style={styles.icon} />
                                <Text style={styles.text}>Recursos</Text>
                            </Button>
                        ) : (
                            <Button vertical onPress={() => this.props.navigation.navigate('Resources')}>
                                <Icon type="FontAwesome5" name="camera-retro" style={styles.icon} />
                                <Text style={styles.text}>Recursos</Text>
                            </Button>
                        )}

                        {active === "Profile" ? (
                            <Button vertical active>
                                <Icon type="FontAwesome5" name="user-alt" style={styles.icon} />
                                <Text style={styles.text}>Perfil</Text>
                            </Button>
                        ) : (
                            <Button vertical onPress={() => this.props.navigation.navigate('Profile')}>
                                <Icon type="FontAwesome5" name="user-alt" style={styles.icon} />
                                <Text style={styles.text}>Perfil</Text>
                            </Button>
                        )}
                    </FooterTab>
                </Footer>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        fontSize: 24,
        marginBottom: 3
    },
    text:{
        fontFamily: 'FontBold',
        fontSize: 11
    }
});

export default withNavigation(Tabbar);