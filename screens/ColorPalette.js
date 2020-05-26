import React from 'react';
import { View, FlatList, StyleSheet, Text, } from 'react-native';
import ColorBox from '../components/colorBox';

const ColorPalette = ({ route, navigation }) => {
  const { colors, paletteName } = route.params;
  return (
      <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
        ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
      />
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'white',
    },
  
    safeArea: {
      flex: 2,
    },
  
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },

    heading: {
        paddingLeft: 10,
        fontWeight: 'bold',
    }
  });

export default ColorPalette;