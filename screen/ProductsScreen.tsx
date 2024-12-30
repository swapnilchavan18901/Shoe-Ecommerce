import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import products from '../constants/data';

const ProductsScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={item => (
          <View style={styles.ImageContainer}>
            <Image
              source={{
                uri: item.item.image,
              }}
              style={styles.image}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  ImageContainer: {
    width: '50%',
    padding: 1,
  },
});
