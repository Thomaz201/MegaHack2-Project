import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backgroundimage from '../../assets/man.png';
import logo from '../../assets/logo-g.png';

export default function FirstPage() {

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  function navigateToLogin() {
    navigation.navigate('login');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundimage} style={styles.backimage} >
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headerText}>
              Seu assistente
        </Text>
            <Text style={styles.headerTextBold}>
              financeiro
        </Text>
          </View>
        </ImageBackground>
        <View style={styles.body}>
          <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateToRegister()}>
            <Text style={styles.buttonText}>Sou novo(a)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => navigateToLogin()}>
            <Text style={styles.loginText}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
