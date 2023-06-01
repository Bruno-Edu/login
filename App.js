import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth"; // Login com Email e Senha
import { auth } from "./src/firebase.config"; // chamando a instância que foi baixada lá na API

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para autenticar
    //console.log('username:',username);
    //console.log('Password:',password);
    //alert ('Função OK!');
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => { //Se o que digitou estiver CERTO, faça isso
        const user = userCredential.user;
        alert("Login Realizado");
        console.log(user);
      })
      .catch((error) => { //Se o que digitou estiver ERRADO, faça isso
        const errorCode = error.code;
        alert("Login Incorreto");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
