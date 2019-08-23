import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View, Grid, Col, Badge, Card, CardItem } from 'native-base';
import AppStyles from '../../global.js';

const dataArray = [
  { title: "Sala 01", schedules: [
                              {start: 8, end: 10, description: ""},
                              {start: 10, end: 12, description: "Introdução à Sistemas e Mídias Digitais - Prof. Levi Bayde Ribeiro"},
                              {start: 12, end: 14, description: "Introdução à Sistemas e Mídias Digitais - Prof. Levi Bayde Ribeiro"},
                              {start: 20, end: 22, description: "Hellooooo"},
                              {start: 22, end: 24, description: "Hellooooo"}
                            ]}
];

export default class AccordionClassroom extends Component {
  _renderHeader(item, expanded) { //cabeçalho do accordion
    let hours = new Date().getHours(); 
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
                
                {item.schedules.map((id) => 
                  <>
                    {id.start <= hours && hours < id.end &&
                      <>
                        {id.description !== "" &&
                          <Badge style={styles.badge}>
                              <Text style={styles.textBadge}>Ocupada</Text>
                          </Badge>
                        }
                      </>
                    }
                  </>
                )}
            </Col>
          </Grid>

          {/* Subtítulo */}
          {!expanded && 
            <>
              {item.schedules.map((id) => 
                <>
                  {id.start <= hours && hours < id.end &&
                    <>
                      {id.description === "" ?
                        <Text style={styles.textFocus}>{id.start + ":00 às " + id.end + ":00 - N/A"}</Text>
                      :
                        <Text style={styles.textFocus}>{id.start + ":00 às " + id.end + ":00 - " + id.description}</Text>
                      }
                    </>
                    
                  }
                </>
              )}
            </>
          }
          {/* Conteúdo */}
          {expanded && 
            <>
              {item.schedules.map((id) => 
                <>
                  {id.start <= hours && hours < id.end ? (
                    <>
                      {id.description === "" ?
                        <Text style={styles.descriptionFocus}>{id.start + ":00 às " + id.end + ":00 - N/A"}</Text>
                      :
                        <Text style={styles.descriptionFocus}>{id.start + ":00 às " + id.end + ":00 - " + id.description}</Text>
                      }                    
                    </>
                  ):(
                    <>
                      {id.end <= hours ?
                        <>
                          {id.description === "" ?
                            <Text style={styles.descriptionDisable}>{id.start + ":00 às " + id.end + ":00 - N/A"}</Text>
                          :
                            <Text style={styles.descriptionDisable}>{id.start + ":00 às " + id.end + ":00 - " + id.description}</Text>
                          }
                        </>
                        :
                        <>
                          {id.description === "" ?
                            <Text style={styles.description}>{id.start + ":00 às " + id.end + ":00 - N/A"}</Text>
                          :
                            <Text style={styles.description}>{id.start + ":00 às " + id.end + ":00 - " + id.description}</Text>
                          }
                        </>
                      }
                    </>
                  )}
                </>
              )}
            </>
          }
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
      fontSize: 16,
      marginTop: 5,
      fontFamily: 'FontBold'
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
      fontFamily: 'FontBold',
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