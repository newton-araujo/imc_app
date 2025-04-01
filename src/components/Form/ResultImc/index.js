import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from './style';

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu imc é: " + props.result
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style= {styles.numberResult}>{props.result}</Text>
            <View style={styles.boxShareButton}>
                <TouchableOpacity style={styles.btnShared} onPress={onShare}>
                    <Text style={styles.txtBtnShared}>Share</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
}
