import React from 'react';
import { View, Text, StatusBar, Image, TextInput } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';
import backArrow from '../../assets/arrowback.svg'

export default function Register() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <SafeAreaView style={styles.container}>
        <View style={styles.back}>
          <Image source={backArrow} style={styles.backlogo} />
          <Text style={styles.backText}>
            Voltar
        </Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.body}>
          <Text style={styles.text}>Olá, seja bem vindo(a) ao Flourish.</Text>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Como posso te chamar?</Text>
            <TextInput placeholder={'Digite aqui'} keyboardType={'default'} ></TextInput>
          </View>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Qual o seu e-mail?</Text>
            <TextInput placeholder={'flourish@flourish.com'} keyboardType={'email-address'}></TextInput>
          </View>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Senha</Text>
            <TextInput placeholder={'**********'} keyboardType={'default'} secureTextEntry={true} ></TextInput>
            <Text style={styles.passwordsubtitle}>Precisa ter ao menos 8 caracters</Text>
            <Text style={styles.passwordsubtitle}>Precisa ter ao menos 1 número</Text>
            <Text style={styles.passwordsubtitle}>Precisa ter ao menos 1 letra maiúscula</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
