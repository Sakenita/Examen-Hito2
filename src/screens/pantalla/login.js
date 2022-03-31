import {ScrollView, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native'
import Logo from '../../../assets/img/Logo.png';
import React from 'react'

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.box, styles.box1]}>
          <Image 
            source={Logo} 
            style={{width: 350, height: 350}} 
            resizableMode="contain"
          />
        </View>

        <View style={[styles.box, styles.box2]}>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Usuario"
          />
          
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Contraseña"
            secureTextEntry
          />

          <Text style={styles.text}>
            Olvidaste tu contraseña?
          </Text>

          <Button 
            style={styles.button}
            title="Ingresar"
            color="#E36F56"
            onPress={() => navigation.navigate('Pantalla2')}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFD4CA'
  },
  box:{
    flex:1,
    AlignItems: 'center',
  },
  box1: {
    padding: 5,
    paddingTop: 5,
    paddingBottom: 10,
    margin: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  box2: {
    padding: 5,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    borderBottomColor: '#6F4339',
    borderBottomWidth: 1,
    height: 50,
    width: 300,
    margin: 10,
    padding: 10,
  },
  text: {
    padding: 15,
    fontWeight: 'bold'
  },
  button:{
    width: '100%',
    height: '50%',
    padding: 10,
    margin: 10
  }
})

export default Login