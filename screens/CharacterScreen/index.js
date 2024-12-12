import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  ImageBackground,
} from 'react-native';
import { styles } from './styles'; // Importe o arquivo de estilos
import PersonagemModal from '../../components/Modal'; // Modal que já existe

export default function CharactersScreen({ route, navigation }) {
  const { personagens } = route.params; // Pegando a lista de personagens passada pela HomeScreen

  const [modalVisible, setModalVisible] = React.useState(false);
  const [personagemSelecionado, setPersonagemSelecionado] =
    React.useState(null);

  // Função para abrir o modal com o personagem selecionado
  const abrirModal = (personagem) => {
    setPersonagemSelecionado(personagem);
    setModalVisible(true);
  };
  const goToHome = () => {
    navigation.navigate('Home'); // Navega de volta à HomeScreen
  };

  return (
    <ImageBackground
      source={require('../../assets/fundo_personagens.jpg')}
      style={styles.background}
      resizeMode="stretch"
    >
      {/* View para aplicar o fundo translúcido */}
      <View style={styles.overlay}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.folcloreTitle}>Personagens</Text>

          <View style={styles.menu}>
            {personagens.map((personagem, index) => (
              <TouchableOpacity
                key={index}
                style={styles.characterButton}
                onPress={() => abrirModal(personagem)}
              >
                <Text style={styles.characterButtonText}>
                  {personagem.nome}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.backButtonContainer}>
            <Button title="Voltar à Página Inicial" onPress={goToHome} />
          </View>

          <PersonagemModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            personagemSelecionado={personagemSelecionado}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
