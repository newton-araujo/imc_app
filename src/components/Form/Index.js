import React, { useState } from "react";
import {
    TextInput, 
    View,
    Text, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import ResultIMC from "./ResultImc"; 
import styles from './style';

export default function Form() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [messageImc, setMessageImc] = useState("");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [erroMessage, setErroMessage] = useState("");
    const [imcList, setImcList] = useState([]);

    function verificationImc() {
        if (!height || !weight) {
            Vibration.vibrate();
            setErroMessage("Campo obrigatório*");
            return false;
        }
        setErroMessage("");
        return true;
    }

    function ImcCalculator() {
        let heightNum = parseFloat(height.replace(",", "."));
        let weightNum = parseFloat(weight);

        if (!isNaN(heightNum) && !isNaN(weightNum) && heightNum > 0) {
            let totalImc = (weightNum / (heightNum * heightNum)).toFixed(2);
            setImcList((arr) => [{ id: new Date().getTime().toString(), resImc: totalImc }, ...arr]);
            setImc(totalImc);
        } else {
            setImc(null);
            setErroMessage("Valores inválidos!");
        }
    }

    function validationIMC() {
        if (verificationImc()) {
            ImcCalculator();
            setHeight("");
            setWeight("");
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
            {imc == null ? (
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMsg}>{!height && erroMessage}</Text>
                    <TextInput
                        placeholder="Ex: 1.67"
                        onChangeText={setHeight}
                        value={height}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMsg}>{!weight && erroMessage}</Text>
                    <TextInput
                        placeholder="Ex: 68"
                        onChangeText={setWeight}
                        value={weight}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity onPress={validationIMC} style={styles.buttonCalculcar}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            ) : (
                <View style={styles.ShowResultImc}>
                    <ResultIMC messageResultImc={messageImc} result={imc} />
                    <TouchableOpacity onPress={validationIMC} style={styles.buttonCalculcar}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            )}

            <FlatList
                style={styles.listImcs}
                data={imcList}
                renderItem={({ item }) => (
                    <Text>Resultado IMC: {item.resImc}</Text>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
