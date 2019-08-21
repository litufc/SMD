import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View, Grid, Col, Badge, Card, CardItem } from 'native-base';
import AppStyles from '../../global.js';

const dataArray = [
  { title: "Sala 01", content: "Conteudo do accordion", focus: "14:00 às 16:00 - Introdução à Sistemas e Mídias Digitais - Prof. Levi Bayde Ribeiro" },
  { title: "Sala 02", content: "Conteudo do accordion", focus: "14:00 às 16:00 - Introdução à Sistemas e Mídias Digitais - Prof. Levi Bayde Ribeiro" },
  { title: "Sala 03", content: "Conteudo do accordion", focus: "14:00 às 16:00 - Introdução à Sistemas e Mídias Digitais - Prof. Levi Bayde Ribeiro" }
];

export default class AccordionClassroom extends Component {
  _renderHeader(item, expanded) { //cabeçalho do accordion
    return (
      <Card style={styles.card}>
          <Grid style={{alignItems: 'center'}}>
            <Col style={{width:'60%'}}>
                <Text style={styles.textCardBlocked} numberOfLines={1}>{item.title}</Text>
            </Col>
            <Col style={{flexDirection: 'row-reverse'}}>
                {expanded
                  ? <Icon style={styles.iconExpanded} name="remove-circle" />
                  : <Icon style={styles.iconExpanded} name="add-circle" />}

                <Badge style={styles.badge}>
                    <Text style={styles.textBadge}>Ocupada</Text>
                </Badge>
            </Col>
          </Grid>

          {/* Subtítulo */}
          {!expanded && 
            <Text style={styles.textFocus}>{item.focus}</Text>}

          {/* Conteúdo */}
          {expanded && <Text>askldjasdljadkladjaskldjasdlkjsdkladjlaskfjaskldjasdlkasjdklasfjaskldajsdklasjdaklsdjasldkjadklasjdlkasjdlaksdjasldkjasdlkjasdkljasdklasjdalksdjaskldjasdklasjdklasdjaskldjasdl</Text>}
      </Card>
    );
  }
  _renderContent(item) {
    return (<></>);
  }
  render() {
    return (
      <Container>
        <Content padder style={{ backgroundColor: "#fff" }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            style={{borderWeight: 0}}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card:{
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginBottom: 10
  },
  textCard: {
      fontFamily: 'FontBold',
      fontSize: 20,
      color: AppStyles.colour.primaryColor
  },
  textCardBlocked:{
      fontFamily: 'FontBold',
      fontSize: 20,
      color: AppStyles.colour.primaryColor
  },
  badge:{
      backgroundColor: AppStyles.colour.alertColor,
      marginRight: 8
  },
  textBadge:{
      color: '#fff',
      fontFamily: 'FontBold',
      fontSize: 12
  },
  iconExpanded:{
      fontSize: 25, 
      alignSelf: 'center',
      color: AppStyles.colour.secundaryColor
  },
  textFocus: {
      color: AppStyles.colour.secundaryColor,
      fontSize: 14,
      marginTop: 5
  }
});