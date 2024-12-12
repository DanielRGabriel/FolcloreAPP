import React from 'react';
import { ScrollView, Text, ImageBackground, View } from 'react-native';
import { styles } from './styles'; // Importe os estilos
import CustomButton from '../../components/CustomButton'; // Caminho correto para o CustomButton

const goBack = (navigation) => {
  navigation.goBack(); // Volta para a tela anterior
};

export default function DiaDoFolcloreScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/dia_folclore.jpg')}
      resizeMode="stretch" // Ajusta a imagem para cobrir a tela
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContent} // Centralizando o conteúdo
      >
        {/* Caixa translúcida */}
        <View style={styles.translucentBox}>
          <Text style={styles.dateTitle}>22 de agosto – Dia do Folclore</Text>
          <Text style={styles.text}>
            O Dia do Folclore é comemorado em 22 de agosto, data escolhida em
            virtude do criador do termo original (folklore), William John Thoms,
            arqueólogo britânico que manifestou oficialmente o cunho da palavra
            em 22 de agosto de 1846, em uma publicação. Desse modo, o folclore é
            entendido como um conjunto de práticas e saberes de determinado
            povo. Esse conjunto tem transmissão geracional e abarca danças,
            canções, personagens, comidas típicas, narrativas tradicionais etc.
            {'\n\n'}
            No Brasil, comemora-se o Dia do Folclore, assim como em diversos
            lugares do mundo, e tem-se como personagens famosos do folclore
            nacional: o saci, o curupira, a mula sem cabeça, a iara etc. Nas
            festas e danças, temos o frevo, o bumba meu boi, as festas juninas,
            a catira, entre outras manifestações. Dois dos principais
            folcloristas brasileiros foram Mário de Andrade e Câmara Cascudo. A
            celebração brasileira do Dia do Folclore foi oficializada em 1965
            por meio de um decreto federal. {'\n\n'}
            Resumo sobre o Dia do Folclore {'\n\n'}O Dia do Folclore é
            comemorado em 22 de agosto. A origem da data é relacionada com o
            criador do termo original (folklore), William John Thoms. O
            pesquisador britânico enviou pela primeira vez a ideia do termo para
            uma revista em 22 de agosto de 1846. {'\n\n'}O folclore é um
            conjunto de crenças, sabedorias, tradições, festas, comidas, danças,
            vestimentas, lendas etc. de determinado local. É transmitido de
            geração a geração, originalmente de forma oral, mas atualmente de
            diversas outras formas, como por livros e filmes. {'\n\n'}O folclore
            brasileiro tem um rico arcabouço cultural, com festas como o bumba
            meu boi e as festas juninas; com lendas como as do corpo seco e da
            vitória-régia; com danças como o frevo e a catira, entre outras
            tantas manifestações. {'\n\n'}
            Câmara Cascudo e Mário de Andrade foram dois pioneiros no registro
            folclórico nacional. {'\n\n'}
            Fonte:{'\n'}
            https://www.todamateria.com.br/dia-do-saci/{'\n'}
            Márcia Fernandes Professora de Língua Portuguesa e Literatura
          </Text>
        </View>

        {/* Botão Voltar */}
        <CustomButton title="Voltar" onPress={() => goBack(navigation)} />
      </ScrollView>
    </ImageBackground>
  );
}
