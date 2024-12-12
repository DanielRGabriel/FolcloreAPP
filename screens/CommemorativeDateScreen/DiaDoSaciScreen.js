import React from 'react';
import { ScrollView, Text, ImageBackground, View } from 'react-native';
import { styles } from './styles'; // Importe o arquivo de estilos
import CustomButton from '../../components/CustomButton'; // Caminho correto para o CustomButton

const goBack = (navigation) => {
  navigation.goBack(); // Volta para a tela anterior
};

export default function DiaDoSaciScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/dia_saci.jpg')}
      resizeMode="stretch" // Ajusta a imagem para cobrir a tela
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContent} // Centralizando o conteúdo
      >
        <View style={styles.translucentBox}>
          <Text style={styles.dateTitle}>Dia do Saci: 31 de outubro</Text>
          <Text style={styles.text}>
            O Dia do Saci é comemorado em 31 de outubro, mesmo dia em que se
            comemora o Halloween. {'\n\n'}A data foi criada em 2003, com o
            intuito de resgatar e valorizar o folclore do nosso país, promover a
            cultura nacional e as tradições brasileiras. {'\n\n'}O Saci-pererê é
            uma das figuras mais emblemáticas do folclore brasileiro e possui
            influências indígena e africana. {'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>
              Como surgiu o Dia do Saci
            </Text>{' '}
            {'\n\n'}O Dia do Saci foi elaborado em 2003, através do Projeto de
            Lei Federal n.º 2.762 proposto pelo Deputado Aldo Rebelo. No
            entanto, somente mais tarde essa data foi oficializada. {'\n\n'}
            Em 2013, a Comissão de Educação e Cultura elaborou o Projeto de Lei
            Federal n.º 2.479, que institui o 31 de outubro como sendo o Dia do
            Saci. {'\n\n'}
            Os proponentes foram o Deputado Federal Chico Alencar e a Vereadora
            de São José dos Campos Ângela Guadagnin. {'\n\n'}
            Confira trechos do Projeto de Lei n.º 2.479, de 2003: {'\n\n'}
            “Instituir o 'Dia do Saci' representa oferecer à sociedade um
            instrumento de valorização da cultura popular como elemento
            fundamental na constituição da identidade brasileira. Por meio da
            previsão anual da comemoração da data, na forma de eventos culturais
            e atividades festivas, as iniciativas propõem o resgate e a
            valorização de nossas tradições e manifestações folclóricas
            originais.” {'\n\n'}
            “Entendemos que a comemoração anual do 'Dia do Saci' permitirá um
            contato sistemático com a variedade e a beleza das tradições do
            país, de modo a fortalecer o processo de consolidação da identidade
            nacional bem como a auto-estima do povo brasileiro.” {'\n\n'}
            Todavia, no estado de São Paulo o Dia do Saci já tinha sido
            oficializado em 2004 por meio da Lei Estadual n.º 11.669. {'\n\n'}
            Nesse dia, muitas instituições educacionais do país propõem
            atividades relacionadas com essa figura folclórica. {'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>
              Atividades para o Dia do Saci
            </Text>{' '}
            {'\n\n'}
            Desde a oficialização da data no Brasil, as escolas costumam
            realizar eventos relacionados com a figura do Saci. {'\n\n'}
            Dentre as propostas de atividades, sugerimos: {'\n\n'}- Confecção de
            boneco do Saci; {'\n'}- Confecção de gorros vermelhos; {'\n'}-
            Leitura de lendas; {'\n'}- Apresentações teatrais; {'\n'}- Jogos:
            caça ao Saci, criar crinas de cavalo com lã e montar um circuito com
            elas a fim de ver quem é o mais rápido a dar nó nelas; {'\n'}-
            Cantar músicas. {'\n\n'}
            Fonte:{'\n'}
            https://www.todamateria.com.br/dia-do-saci/{'\n'}
            Márcia Fernandes Professora de Língua Portuguesa e Literatura
          </Text>
        </View>

        <CustomButton
          title="Voltar"
          onPress={() => goBack(navigation)} // Altera para voltar à tela anterior
        />
      </ScrollView>
    </ImageBackground>
  );
}
