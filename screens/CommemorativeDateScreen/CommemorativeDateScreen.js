import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { styles } from './styles'; // Importe o arquivo de estilos
import CustomButton from '../../components/CustomButton'; // Componente CustomButton

const goToHome = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  });
};

export default function CommemorativeDatesScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/datas_comemorativas.jpg')}
      resizeMode="stretch" // Caminho para a imagem de fundo
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false} // Esconde o scroll visual
      >
        <View style={styles.translucentBackground}>
          <Text style={styles.title}>Datas Comemorativas</Text>

          {/* Botões */}
          <CustomButton
            title="Dia do Folclore"
            onPress={() => navigation.navigate('DiaDoFolcloreScreen')}
          />
          <CustomButton
            title="Dia do Saci"
            onPress={() => navigation.navigate('DiaDoSaciScreen')}
          />
          <CustomButton
            title="Voltar à Página Inicial"
            onPress={() => goToHome(navigation)}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
