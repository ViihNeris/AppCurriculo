import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Photo from './assets/photo.png';

const img = {
  uri: 'https://i.pinimg.com/564x/77/f9/8c/77f98cf8cd2d312c71438f5b3a150f0c.jpg',
};

const MainPurple = 'rgba(128, 0, 128, 0.418)';
const MainWhite = 'rgba(255, 255, 255, 0.63)';

const App = () => {
  function handleSocialMedia(social_media) {
    switch (social_media) {
      case 'linkedin':
        Alert.alert(
          'Confira meu LinkedIn! Acesse: ',
          'https://www.linkedin.com/in/vitoria-neris-1b3284203/',
        );
        break;
      case 'github':
        Alert.alert(
          'Confira meu GitHub! Acesse: ',
          'https://github.com/ViihNeris/',
        );
        break;
      case 'instagram':
        Alert.alert(
          'Confira meu Instagram! Acesse:',
          'https://www.instagram.com/viih.neris_/',
        );
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <ImageBackground
          resizeMode="cover"
          source={img}
          style={style.wallpaper}>
          <View style={style.header}>
            <Image style={style.photo} source={Photo} />
            <Text style={style.name}>VITORIA NERIS</Text>
            <Text style={style.current}>Desenvolvedora Front-End</Text>
            <View style={style.social_media}>
              <TouchableOpacity onPress={() => handleSocialMedia('github')}>
                <Icon name="github" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSocialMedia('instagram')}>
                <Icon name="instagram" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
                <Icon name="linkedin" size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>
                  Experiência Profissional
                </Text>
              </View>
              <View style={style.card_content}>
                <Text style={{fontSize: 17, marginBottom: 5}}>
                  • São Paulo, SP.{' '}
                </Text>
                <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 5}}>
                  Fev/2022 à Jun/2022.
                </Text>
                <Text
                  style={{fontSize: 17, marginLeft: 10, fontWeight: 'bold'}}>
                  Estagiária de T.I.
                </Text>
              </View>
            </View>
          </View>
          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>
                  FORMAÇÃO
                </Text>
              </View>
              <View style={style.card_content}>
                <Text style={{fontSize: 17, marginBottom: 5}}>
                  • São Paulo, SP.{' '}
                </Text>
                <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 5}}>
                  Fev/2019 à Dez/2021.
                </Text>
                <Text
                  style={{fontSize: 17, marginLeft: 10, fontWeight: 'bold'}}>
                  ETEC - 4º Lugar.
                </Text>

                <Text style={{fontSize: 17, marginBottom: 5, marginTop: 20}}>
                  • São Paulo, SP.{' '}
                </Text>
                <Text style={{fontSize: 17, marginLeft: 10, marginBottom: 5}}>
                  Fev/2022 à Dez/2023.
                </Text>
                <Text
                  style={{fontSize: 17, marginLeft: 10, fontWeight: 'bold'}}>
                  Universidade Cidade de São Paulo.
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    flex: 1,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  photo: {
    width: 200,
    height: 205,
    borderRadius: 125,
  },

  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  current: {
    color: '#333',
    marginBottom: 13,
    fontSize: 16,
    fontStyle: 'italic',
  },

  social_media: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: MainPurple,
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
  wallpaper: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  card: {
    width: '80%',
    borderRadius: 5,
    borderWidth: 2,
    borderBottomColor: MainPurple,
    borderTopColor: MainWhite,
    borderLeftColor: MainWhite,
    borderRightColor: MainWhite,
    borderSize: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingBottom: 10,
    backgroundColor: MainWhite,
  },

  card_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
});
export default App;
