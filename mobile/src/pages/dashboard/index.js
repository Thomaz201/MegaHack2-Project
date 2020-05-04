import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import backgroundimage from '../../assets/man.png';
import quadro from '../../assets/quadrogastos.png';
import metapc from '../../assets/metapc.png';
import home from '../../assets/home.png';
import metas from '../../assets/metas.png';
import friends from '../../assets/friends.png';
import bell from '../../assets/bell.png';
import user from '../../assets/user.png';


export default function Dashboard() {

  const navigation = useNavigation();

  function navigateToExtract() {
    navigation.navigate('Extract');
  }

  const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <ImageBackground source={backgroundimage} style={styles.backimage} >
            <View style={styles.intelContainer}>
              <Text style={styles.present}>Valor gasto no mês</Text>
              <Text style={styles.money}>R$ 260,15</Text>
              <View style={styles.bar}></View>
              <Text style={styles.present}>Você ainda possui <B>14 dias</B> até o fim do mês</Text>
            </View>
          </ImageBackground>
          <View style={styles.body}>
            <Text style={styles.normalText}>Veja como foram seus gastos nesse mês</Text>
            <TouchableOpacity style={styles.quadroGastos} activeOpacity={0.6}>
              <Image source={quadro} style={styles.quadro} />
            </TouchableOpacity>
          </View>
          <Text style={styles.presentGoals}>Veja suas metas</Text>
          <ScrollView style={styles.goalList} horizontal={true}>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={metapc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={metapc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={metapc} />
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
        {/* Menu de navegação */}
        <View style={styles.menu}>
          <View style={styles.menuObject}>
            <TouchableOpacity style={styles.menuButton} activeOpacity={0.6}>
              <Image source={home} style={styles.menuIcon}></Image>
              <Text style={styles.menuText}>Início</Text>
            </TouchableOpacity>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.6}>
                <Image source={metas} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Metas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.6}>
                <Image source={friends} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Amigos</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.6}>
                <Image source={bell} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Notificações</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.6}>
                <Image source={user} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Fim Menu navegação*/}
      </SafeAreaView>
    </>
  )
}
