import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Icon, Accordion, Text, View, Grid, Col, Badge, Card } from 'native-base';
import AppStyles from '../../global.js';

export default class AccordionClassroom extends Component {

  state = {
    dataArray : [
      { title: "Sala 01", schedules: 
        [
          {start: "15:30:01", end: "17:00:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
          {start: "18:00:01", end: "18:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
          {start: "22:00:00", end: "22:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"}
        ]
      },
      { title: "Sala 02", schedules: 
        [
          {start: "15:30:00", end: "17:00:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
          {start: "18:00:00", end: "18:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
          {start: "18:30:00", end: "20:00:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
          {start: "20:00:00", end: "21:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"},
          {start: "22:00:00", end: "22:30:00", description: "Introdução à Sistemas e Mídias Digitais", responsible: "Ticiana Linhares"}
        ]
      }
    ]
  }

  _renderHeader(item, expanded) { //cabeçalho do accordion
    let hours = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    let isBusy = false;
    let actual;

    //verifica se tem algo acontecendo na sala no momento atual
    for(var i = 0; i < item.schedules.length; i++)
      if(Date.parse('01/01/2011 '+item.schedules[i].start) <= Date.parse('01/01/2011 '+hours) && Date.parse('01/01/2011 '+hours) < Date.parse('01/01/2011 '+item.schedules[i].end)){
        isBusy = true;
        actual = i;
      }
      
    return (
      <Card style={styles.card}>
          <Grid style={{alignItems: 'center'}}>
            <Col style={{width:'60%'}}>
                <Text style={styles.textCard} numberOfLines={1}>{item.title}</Text>
            </Col>
            <Col style={{flexDirection: 'row-reverse'}}>
                {expanded
                  ? <Icon style={styles.iconExpanded} name="remove-circle" />
                  : <Icon style={styles.iconExpanded} name="add-circle" />}

                {isBusy ?
                    <Badge style={styles.badgeBusy}>
                        <Text style={styles.textBadge}>Ocupada</Text>
                    </Badge>
                  :
                    <Badge style={styles.badgeFree}>
                        <Text style={styles.textBadge}>Livre</Text>
                    </Badge>
                }
            </Col>
          </Grid>

          {/* Subtítulo */}
          {!expanded && 
            <>
              {isBusy &&
                <Text style={styles.textFocus}>{item.schedules[actual].start.split(":")[0] + ":" + item.schedules[actual].start.split(":")[1] + " às " + item.schedules[actual].end.split(":")[0] + ":" + item.schedules[actual].end.split(":")[1] + " - " + item.schedules[actual].description + " - " + item.schedules[actual].responsible}</Text>
              }
            </>
          }
      </Card>
    );
  }
  _renderContent(item) {
    let hours = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(); 
    return (
      <View style={styles.content}>
        {item.schedules.map((id, index) => 
          <>
            {Date.parse('01/01/2011 '+id.start) <= Date.parse('01/01/2011 '+hours) && Date.parse('01/01/2011 '+hours) < Date.parse('01/01/2011 '+id.end) ? (
              <Text style={styles.descriptionFocus}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
            ):(
              <>
                {Date.parse('01/01/2011 '+id.end) <= Date.parse('01/01/2011 '+hours) ?
                    <Text style={styles.descriptionDisable}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
                  :
                    <Text style={styles.description}>{id.start.split(":")[0] + ":" + id.start.split(":")[1] + " às " + id.end.split(":")[0] + ":" + id.end.split(":")[1] + " - " + id.description + " - " + id.responsible}</Text>
                }
              </>
            )}
          </>
        )}
      </View>
    );
  }
  render() {
    return (
      <Container>
        <Content padder style={{ backgroundColor: AppStyles.colour.background }}>
          <Accordion
            dataArray={this.state.dataArray}
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
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 10
  },
  textCard: {
      fontFamily: 'FontBold',
      fontSize: 20,
      color: AppStyles.colour.primaryColor
  },
  badgeBusy:{
      backgroundColor: AppStyles.colour.alertColor,
      marginRight: 8,
      width: 90
  },
  badgeFree:{
      backgroundColor: AppStyles.colour.secundaryColor,
      marginRight: 8,
      width: 90
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
  content:{
      backgroundColor: '#FFF',
      padding: 12,
      paddingTop: 0,
      marginBottom: 10
  },
  textFocus: {
      color: AppStyles.colour.secundaryColor,
      fontSize: 16,
      marginTop: 5
  },
  description:{
      color: AppStyles.colour.text,
      fontSize: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: AppStyles.colour.text
  },
  descriptionFocus:{
      color: AppStyles.colour.secundaryColor,
      fontSize: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: AppStyles.colour.secundaryColor
  },
  descriptionDisable:{
      color: '#D1D1D1',
      fontSize: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#D1D1D1'
  },
});