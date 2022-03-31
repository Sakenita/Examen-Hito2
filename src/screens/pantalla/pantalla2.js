import { View, Text, Image, StyleSheet,  } from 'react-native'
import React from 'react'
import Icon from '../../../assets/img/Icon.png';
import Msg from '../../../assets/img/Msg.png';

const Pantalla2 = () => {
  return (
    <View style={styles.card}>
      <View style={[styles.box, styles.box1]}>
        <Image 
            source={Icon} 
            style={{width: '100%', height: '25%'}} 
            resizableMode="stretch"
        />
      </View>

      <View style={[styles.box, styles.box2]}>
        <View>
            <Text style={styles.text}>
                Titulo, prueba 1
                prueba prueba miau miau
            </Text>
        </View>

        <View>
            <Text >
                Subtítulo
            </Text>
        </View>

        <View style={[styles.label]}>
            <Text style={styles.text2}>
                LABEL 1
            </Text>
            
            <Text style={styles.text2}>
                LABEL 2
            </Text>
        </View>

        <View style={[styles.label]}>
            <Image 
                source={Msg} 
                style={{width: '15%', height: '100%'}} 
                resizableMode="stretch"
            />
            <Text style={[styles.text3]}>
                Comentarios
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 200,
        borderBottomWidth: 1,
    },
    box:{
        flex:1,
        AlignItems: 'center',
    },
    box1:{
        flex: 7,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    box2:{
        flex: 8,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 5,
        margin: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5
    },
    text2:{
        padding: 5,
        margin: 5,
        backgroundColor: '#a2a9b3',
        borderRadius: 3,
        color: '#FFFF'
    },
    text3:{
        paddingLeft: 5,
        color: '#b0b6bf'
    },
    label:{
        flexDirection: 'row',
        paddingTop: 15,
    }
})

export default Pantalla2