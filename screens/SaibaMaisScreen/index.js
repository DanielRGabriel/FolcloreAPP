import React from 'react';
import {
  ScrollView,
  Text,
  ImageBackground,
  Button,
  View,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar o hook
import { styles } from './styles';

export default function SaibaMaisScreen() {
  const navigation = useNavigation(); // Usando o hook useNavigation

  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  // Função para abrir o link
  const openLink = () => {
    Linking.openURL(
      'https://www.gov.br/iphan/pt-br/unidades-especiais/centro-nacional-de-folclore-e-cultura-popular'
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/fundo_saibaMais.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>O Folclore Brasileiro</Text>
        <Text style={styles.text}>
          O termo folclore tem origem inglesa (*folklore*), em que *folk*
          significa povo e *lore* conhecimento. Desde o fim do século XVIII, o
          termo passou a nomear o conjunto de costumes e sabedorias populares,
          em oposição ao conhecimento erudito. {'\n\n'}
          No Brasil, de Norte a Sul, o folclore foi transmitido através de
          gerações por meio da oralidade, com a narração de lendas, além de
          outras manifestações artísticas materiais e imateriais, como festas
          populares temáticas, esculturas, danças, ritmos e músicas que ajudam a
          manter vivo no imaginário popular personagens e costumes locais.
          Muitas lendas tiveram origem entre povos indígenas e africanos e se
          espalharam nas zonas rurais, até que chegassem às cidades, com algumas
          modificações. {'\n\n'}
          Historicamente, apesar da imposição da fé católica, nosso país sempre
          conviveu com um intenso sincretismo religioso, fazendo com que
          diversas crendices e costumes fossem amplamente difundidos em nosso
          povo. Vale ainda destacar a importância da medicina popular trazida
          por africanos e povos indígenas, que se popularizou com o uso de ervas
          para curar diversos problemas de saúde. {'\n\n'}
          No Estado do Rio de Janeiro, destaca-se o{' '}
          <Text style={styles.link} onPress={openLink}>
            Museu de Folclore Edison Carneiro
          </Text>
          , localizado no bairro Catete, Rio de Janeiro - RJ. O espaço é um
          importante local de preservação e divulgação da cultura popular
          nacional, contando com um valioso acervo bibliográfico sobre o
          folclore nacional em sua biblioteca, além de expor telas, esculturas,
          máscaras, instrumentos musicais, literatura de cordel e outras artes
          que representam diversos personagens e costumes de nosso folclore.{' '}
          {'\n\n'}O ambiente conta ainda com vídeos e sonoplastia que
          proporcionam uma experiência de imersão nos ambientes que dão vida a
          essas personagens. Para os pequenos, uma sala interativa com mesas,
          papéis e lápis de cor dá liberdade criativa para que esses visitantes
          se divirtam e contribuam com o museu, já que seus desenhos ficam
          fixados na parede dessa sala. {'\n\n'}
          Portanto, o Museu de Folclore se revela ainda um precioso espaço de
          educação não formal, para além das salas de aula, e permite que novas
          gerações possam conhecer cada vez mais a cultura nacional e difundi-la
          nos mais diversos meios sociais que circulem. {'\n\n'}
          Referências bibliográficas: {'\n\n'}
          FUNARTE. Instituto Nacional do Folclore. Museu de Folclore Edison
          Carneiro. Rio de Janeiro, 1981. {'\n\n'}
          LIRA, Amanda. “A importância do folclore para a construção da cultura
          brasileira”. Disponível em:
          ensinoelite.com.br/folclore-e-cultura-popular-brasileira/. Acesso em
          28/11/2024. {'\n\n'}
          XAVIER, Marcelo. *Festas: o folclore do mestre André*. Belo Horizonte:
          Formato Editorial, 2000.{'\n\n'}
          Colabou para esse texto: {'\n\n'}
          Mathauss Godinho, professor História formado pela UERJ.
        </Text>
        <View style={styles.backButtonContainer}>
          <Button title="Voltar à Página Inicial" onPress={goToHome} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
