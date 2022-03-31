import {ScrollView, StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native'
import Logo from '../../../assets/img/Logo.png';
import React from 'react'

const Login = () => {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box1}>
          <Image 
            source={Logo} 
            style={{width: 350, height: 350}} 
            resizableMode="contain"
          />
        </View>

        <View style={styles.box2}>
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
            onPress={() => Alert.alert('Button with adjusted color pressed')}
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
    padding: 15,
    backgroundColor: '#FFD4CA'
  },
  box1: {
    alignItems: 'center',
    flex: 1,
  },
  box2: {
    alignItems: 'center',
    flex: 1,
  },
  input: {
    borderBottomColor: '#6F4339',
    borderBottomWidth: 1,
    height: 50,
    width: 300,
    margin: 15,
    padding: 10,
  },
  text: {
    padding: 15,
    fontWeight: 'bold',
  },
  button:{
    width: 300,
    height: 60,
    padding: 10,
  }
})

export default Login