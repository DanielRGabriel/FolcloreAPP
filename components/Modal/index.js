import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import { styles } from './styles'; // Importando os estilos do modal

const PersonagemModal = ({
  modalVisible,
  setModalVisible,
  personagemSelecionado,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <ImageBackground
        source={require('../../assets/fundo_modal.jpg')}
        style={styles.modalBackground} // Estilos do fundo do modal
        resizeMode="cover"
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>História do Personagem</Text>
          <Text style={styles.modalDescription}>
            {personagemSelecionado?.historia}
          </Text>

          {/* Imagem do personagem no modal */}
          <Image
            source={personagemSelecionado?.foto}
            style={styles.modalImage}
            resizeMode="contain"
          />

          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default PersonagemModal;
