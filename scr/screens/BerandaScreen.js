import React from 'react'
import { View,Image, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import Navigation from '../navigation/navigation'

export default function BerandaScreen({navigation}) {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ccdffc'}}>
            <View style={{flex:1.3}}>
                <Image style={styles.image} source={require('../picture/logo.jpg')}></Image>
                <Text style={styles.NameApp}>MyVikings</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.teks1}>Pelabuhan Awal</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Pelabuhan Awal"/> 
                </View>
                <Text style={styles.teks1}>Pelabuhan Tujuan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Pelabuhan Tujuan"/> 
                </View>
                <Text style={styles.teks1}>Kelas Layanan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Layanan"/> 
                </View>
                <Text style={styles.teks1}>Tanggal Masuk Pelabuhan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Tanggal Keberangkatan"/> 
                </View>
                <Text style={styles.teks1}>Jam Masuk Pelabuhan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Jam Masuk"/> 
                </View>
                <TouchableOpacity style = { styles.Btn } onPress={()=>navigation.navigate('DetailPesanan')}>
                    <Text style = { styles.SubmitTeks }>Pesan Tiket</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius:100,
        alignItems: 'Center',
        marginBottom: 5,
    },
    NameApp: {
        fontSize:17,
        fontWeight:'bold',
        fontFamily: 'cursive',
        marginBottom:15,
    },
    form: {
        flex:5,
        width: "90%",
        backgroundColor:'white',
        flexDirection:'colom',
        justifyContent: 'Center',
        borderRadius:50,
        marginBottom:5,
    },
    teks1: {
        fontSize:13,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        marginLeft:55,
    },
    inputView: {
        backgroundColor: "#ccdffc",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 15,
        alignItems: "center",
        marginLeft:50,
    },
    TextInput: {
        height: 50,
        width: "90%" ,
        flex: 1,
        padding: 10,
    },
    Btn: {
        width: 100,
        borderRadius:25,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#54bfb3",
        marginLeft:50,
    },
    SubmitTeks: {
        color: "#FFFFFF",
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'monospace',
    },
});