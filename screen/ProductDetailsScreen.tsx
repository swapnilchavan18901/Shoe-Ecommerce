import {
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import products from '../constants/data';

const ProductDetailsScreen = () => {
  const product = products[0];
  const {width} = useWindowDimensions();
  const handleAddToCart = () => {
    console.log('Add to cart');
  };
  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              style={{width: width, aspectRatio: 1}}
            />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <View style={{padding: 20}}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={handleAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    marginVertical: 10,
    fontWeight: '500',
  },
  description: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 10,
    lineHeight: 30,
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
