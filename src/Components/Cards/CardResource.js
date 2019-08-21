import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text, Badge, Grid, Col } from 'native-base';
import AppStyles from '../../global.js'

const CardResource = ( { title, status } ) => {
    return(
        <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
                <Body>
                    {status ? (
                        <Text style={styles.textCard} numberOfLines={1}>{title}</Text>
                    ):(
                        <Grid>
                            <Col style={{width:'70%'}}>
                                <Text style={styles.textCardBlocked} numberOfLines={1}>{title}</Text>
                            </Col>
                            <Col>
                                <Badge style={{ backgroundColor: AppStyles.colour.alertColor, alignSelf: 'flex-end'}}>
                                    <Text style={styles.textBadge}>Ocupada</Text>
                                </Badge>
                            </Col>
                        </Grid>
                    )}
                    
                </Body>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        borderRadius: 10
    },
    cardItem: {
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 10
    },
    textCard: {
        fontFamily: 'FontBold',
        fontSize: 20,
        color: AppStyles.colour.primaryColor
    },
    textCardBlocked:{
        fontFamily: 'FontBold',
        fontSize: 20,
        color: AppStyles.colour.primaryOpacity
    },
    textBadge:{
        color: '#fff',
        fontFamily: 'FontBold',
        fontSize: 12
    }
});

export default CardResource;