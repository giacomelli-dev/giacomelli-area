import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import React from 'react';


export default function TabTwoScreen() {
  const [lado, setLado] = useState("");
  const [area, setArea] = useState(0);
  const handleCalcularArea = () =>{
    const ladoValor = parseFloat(lado)
    const areaCalculada = ladoValor * ladoValor;

    setArea(areaCalculada);
  }
  const handleGerarAleatorio = () =>{
    const aleatorio = Math.random();
    const aleatorioMultiplicado = aleatorio * 100;
    const aleatorioInteiro = Math.floor(aleatorioMultiplicado)

    setLado(aleatorioInteiro.toString());
  }
  const handleLimpar = () =>{
    setLado("0");
    setArea(0);
  }
  const [base, setBase] = useState ("");
  const [altura, setAltura] = useState ("");
  const [areaTri, setAreaTri] = useState (0);

  const handleCalcular = () =>{
    const baseValor = parseFloat(base);
    const alturaValor = parseFloat(altura);

    const areaTriangulo = (baseValor * alturaValor) / 2;

    setAreaTri (areaTriangulo);
  }
  const handleAleatorio = () =>{
    const aleatorioAltTri = Math.random();
    const aleatorioAltMult = aleatorioAltTri * 10;
    const aleatorioAltTriInt = Math.floor(aleatorioAltMult);

    const aleatorioBaseTri = Math.random();
    const aleatorioBaseMult = aleatorioBaseTri * 10;
    const aleatorioBaseTriInt = Math.floor(aleatorioBaseMult);

    setAltura(aleatorioAltTriInt.toString());
    setBase(aleatorioBaseTriInt.toString());
  }
  const handleLimparTri = () =>{
    setBase("");
    setAltura("");
    setAreaTri(0);

  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Área do quadrado</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <TextInput placeholder='Insira o lado' keyboardType='numeric' value={lado} onChangeText={setLado} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button title="Calcular" onPress={handleCalcularArea} />
        <Button title="Aleatório" onPress={handleGerarAleatorio}/>
        <Button title="Limpar" onPress={handleLimpar} />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Resultado da área: <ThemedText type="defaultSemiBold">{area}</ThemedText>;
        </ThemedText>
      </ThemedView><ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Área do triângulo:</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <TextInput placeholder='Insira a base:' keyboardType='numeric' value={base} onChangeText={setBase} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput placeholder='Insira a altura:' keyboardType='numeric' value={altura} onChangeText={setAltura} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button title="Calcular" onPress={handleCalcular} />
        <Button title="Aleatório" onPress={handleAleatorio}/>
        <Button title="Limpar" onPress={handleLimparTri} />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Resultado da área: <ThemedText type="defaultSemiBold">{areaTri}</ThemedText>;
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  stepContainer:{
    gap:8,

  }
});