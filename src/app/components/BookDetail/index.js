import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import  defaultImage from '../../assets/img_book6.png';


function BookDetail({title, author, imageSource, year, type}) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={imageSource||defaultImage}></Image>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{author}</Text>
                    <Text style={styles.text}>{year}</Text>
                    <Text style={styles.text}>{type}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.addToWishList}><Text>Add to wishlist</Text></TouchableOpacity>
                <TouchableOpacity style={styles.rent}><Text>Rent</Text></TouchableOpacity>
            </View>
        </View>
    )
};

