import * as React from 'react';
import{StatusBar}from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PayButton from './src/components/PayButton';


import Home from './src/Home';
import Carteira from './src/Carteira';
import Pagar from './src/Pagar';
import Notificacoes from './src/Notificacoes';
import Ajustes from './src/Ajustes';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  
        screenOptions={({ route, navigation, focused }) => ({
          tabBarIcon: ({ color, size }) => {
          let iconName;

          if(route.name === 'Home'){
            iconName='ios-home'
            return <Ionicons name={iconName} size={size} color={color} />
          } 
          else if(route.name === 'Carteira'){

            iconName='credit-card'
            return <MaterialIcons name={iconName} size={size} color={color} /> 
          }
          else if(route.name === 'Pagar'){
            return (
              <PayButton
                onPress = {() =>navigation.navigate('Pagar')}
                focused={focused}
              />
            )
          }

          else if(route.name === 'Notificacoes'){
            iconName='ios-notifications'
            return <Ionicons name={iconName} size={size} color={color} />
          }
          else{
            iconName='ios-settings'
            return <Ionicons name={iconName} size={size} color={color} />
          }
          
        },
    })}
    tabBarOptions={{
        activeTintColor: '#FCFFFC',
        inactiveTintColor: '#92929c',
        style:{
          backgroundColor:'#06050B',
          borderTopColor:'rgba(255,255,255,0.2)'
        },
      }
    }>
        <Tab.Screen 
        name="Home"
        component={Home}
        options ={{
          title:'Inicio',
        }}

        />
        <Tab.Screen 
        name="Carteira" 
        component={Carteira} 
        options ={{
          title:'Carteira',
        }}
        />
        <Tab.Screen 
        name='Pagar' 
        component={Pagar}
        options ={{
          title:'',
        }}
        />
        <Tab.Screen 
        name="Notificacoes" 
        component={Notificacoes}
        options={{
          title:'Notificações'
        }}
        />
        <Tab.Screen 
        name="Ajustes" 
        component={Ajustes}
        options={{
          title:'Ajustes'
        }}
        />
      </Tab.Navigator>
  </NavigationContainer>
  );
}