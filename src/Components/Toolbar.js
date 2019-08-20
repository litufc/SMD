import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Body, Title, Left, Right, Icon } from 'native-base';

const Toolbar = ({ title, textColor, background, iconColor, iconLeft, iconRight, onPress }) => {
    const styles = StyleSheet.create({
        titleHeader: {
            fontFamily: 'FontBold',
            color: textColor,
            fontSize: 20
        },
        header: {
            backgroundColor: background,
            elevation: 5,
            height: 56
        },
        containerTitle: {
            alignItems: "center",
        },
        leftContainer: {
            flex: 0,
            paddingLeft: 10,
            width: 50
        },
        rightContainer: {
            flex: 0,
            paddingRight: 10,
            width: 50
        },
        iconBack: {
            color: iconColor,
            fontSize: 20
        }
    });
    return(
        <Header style={styles.header}>
            <Left style={styles.leftContainer}>
                {iconLeft &&
                    <TouchableOpacity onPress={onPress}>
                        <Icon type="FontAwesome" name="arrow-left" style={styles.iconBack} />
                    </TouchableOpacity>
                }
            </Left>
            <Body style={styles.containerTitle}>
                <Title style={styles.titleHeader}>{title}</Title>
            </Body>
            <Right style={styles.rightContainer}>
                {iconRight &&
                    <TouchableOpacity>
                        <Icon type="FontAwesome" name="search" style={styles.iconBack} />
                    </TouchableOpacity>
                }
            </Right>
        </Header>
    )
}

export default Toolbar;