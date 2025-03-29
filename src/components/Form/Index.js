import React, { useState } from "react";
import { TextInput, View, Text, Button, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultImc"; 
import styles from './style';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function ImcCalculator() {
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

        if (!isNaN(heightNum) && !isNaN(weightNum) && heightNum > 0) {
            setImc((weightNum / (heightNum * heightNum)).toFixed(2));
        } else {
            setImc(null);
        }
    }

    function validationIMC() {
        if (weight && height) {
            ImcCalculator();
            setMessageImc("Seu IMC é:");
            setTextButton("Calcular novamente");
        } else {
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o campo peso e altura");
        }
    }

    return (
        <View style={styles.FormContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    placeholder="Ex: 1.67"
                    onChangeText={setHeight}
                    value={height}
                    style={styles.input}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    placeholder="Ex: 68"
                    onChangeText={setWeight}
                    value={weight}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => { validationIMC()}} style={styles.buttonCalculcar}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
            </View>

            <ResultIMC messageResultImc={messageImc} result={imc} />
        </View>
    );
}
