import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';

export default function Home() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#70A9' />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            O Problema da(o) Andy!
        </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
