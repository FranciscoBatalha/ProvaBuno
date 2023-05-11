import * as React from 'react';
import { View,Text,TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const minhaImagem = require('./assets/puzzle.jpg');
const minhaOutraImagem = require('./assets/cap.png');


const Tela1Route = () => (
  <View style={styles1.container}>
      <Text style={styles1.title}>Sign In</Text>
      <View style={styles1.inputContainer}>
        <Text style={styles1.inputLabel}>STEAM ACCOUNT NAME</Text>
        <TextInput style={[styles1.input, { color: 'white', placeholderTextColor: 'white' }]} placeholder="" />
        <Text style={styles1.inputLabel}>PASSWORD</Text>
        <TextInput style={[styles1.input, { color: 'white', placeholderTextColor: 'white' }]} placeholder="" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles1.button}>
        <Text style={[styles1.buttonText, { color: 'white' }]}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles1.forgotButton}>
        <Text style={styles1.forgotText}>Forgot your account name or password?</Text>
      </TouchableOpacity>
    </View>
  );


const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#131819',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotButton: {
    backgroundColor: 'transparent',
  },
  forgotText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'none',
  },
});

const Tela2Route = () => (
  <View style={styles2.container}>
      <Text style={styles2.title}>Suporte Steam</Text>
      <View style={styles2.inputContainer}>
        <Text style={styles2.inputLabel}>Esqueci o nome de usuario e/ou senha da minha conta</Text>
        <Text style={styles2.inputLabel}>Insira seu e-mail da conta Steam ou seu numero de telefone</Text>
        <TextInput style={[styles2.input, { color: 'white', placeholderTextColor: 'white' }]} placeholder="" />
      </View>
      <TouchableOpacity style={styles2.button}>
        <Text style={[styles2.buttonText, { color: 'white' }]}>Busca</Text>
      </TouchableOpacity>
    </View>
  );


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#131819',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});



const Tela3Route = () => (
  <View style={{ flex: 1, padding: 20, backgroundColor:'#181c24' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, color: 'grey' }}
          placeholder="STEAM"
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Text style={{ color: 'grey' }}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginRight: 20 }}>
          <Text style={{ color: 'grey' }}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ color: 'grey' }}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image source={minhaImagem} style={{ width: 400, height: 200 }} />
        
        <View style={styles.featuredContainer}>
          <Text style={{ fontSize: 20, alignSelf:'flex-start', marginTop: 10, marginLeft:'10', color: '#fff' }}>FEATURED & RECOMMENDED</Text>
          <Image source={minhaOutraImagem} style={{ width: 300, height: 190, marginTop: 10 }} />
        </View>

        <View style={styles3.menuContainer}>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialCommunityIcons name="cash" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles3.menuButton}>
            <MaterialCommunityIcons name="newspaper" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles3.menuButton}>
            <MaterialCommunityIcons name="shield-outline" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles3.menuButton}>
            <MaterialCommunityIcons name="bell-outline" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles3.menuButton}>
            <MaterialCommunityIcons name="settings-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
);
const styles3 = {
  featuredContainer: {
    backgroundColor: '#202c3c',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginTop: 0
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#202c3c',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '100%'
  },
}

const Tela4Route = () => (
  <View style={{ backgroundColor: '#171A21', flex: 1 }}>
      <View style={{ backgroundColor: '#2e2e2e', padding: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="chevron-left" size={20} color="white" />
        <Text style={{ color: 'white', marginLeft: 25, fontSize: 20 }}>NOTIFICATIONS</Text>
        <Image source={require('./assets/leon.jpg')} style={{ width: 30, height: 30, marginLeft: 80 }} />
      </View>
      <View style={{ flex: 1}}>
        <Image source={require('./assets/jack.png')} style={{ width: 400, height: 80 }} />
      </View>
    </View>
  );
 
const styles4 = {
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    backgroundColor: '#2e2e2e'
  },
  menuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 365,
  }
}


const renderTabBar = props => (
  <TabBar
    {...props}
    renderIcon={({ route, focused, color }) => (
      <Icon name="smartphone" size={22} color={color} />
    )}
    tabStyle={{ flexDirection: 'row' }}
    style={{ backgroundColor: '#171A21' }}
  />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Sing In' },
      { key: 'second', title: 'Suporte' },
      { key: 'third', title: 'Loja' },
       { key: 'fourth', title: 'Aviso' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Tela1Route,
          second: Tela2Route,
          third: Tela3Route,
          fourth: Tela4Route,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});




