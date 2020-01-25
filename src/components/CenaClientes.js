import React, {Component} from 'react';
import {StatusBar, View, Image, StyleSheet, Text} from 'react-native';

//importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
      return (
              <View>
          <StatusBar 
            //hidden
            backgroundColor='#CCC'
          />
  
          <BarraNavegacao />
  
          <View style={styles.cabecalho}>
            <Image source={detalheClientes} />
            <Text style={styles.txtTitulo}>Nossos Clientes</Text>
          </View>
  
  
          <View style={styles.detalheCliente}>
            <Image source={cliente1} />
            <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
          </View>
  
          <View style={styles.detalheCliente}>
            <Image source={cliente2} />
            <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
          </View>
  
        </View>
      );
    }
  }
  
const styles = StyleSheet.create({
    cabecalho:{
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo:{
        color: '#B9C941',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente:{
        padding: 20,
        marginTop: 10
    },
    txtDetalhe:{
        fontSize: 18,
        marginLeft: 20
    }
});
