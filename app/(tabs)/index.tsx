import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";

export default function Index(){
    const router = useRouter();
    return(
        <View style={styles.container}>
            <Text style= {styles.title}> Index do Tabs</Text>
        <TouchableOpacity 
        style={styles.botao}
        onPress={()=>router.push("/contatos")}>
            <Text> Ir para contatos</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#6ccfe5',
},
  title:{
    fontSize: 24,
    fontWeight: "bold",
},
botao:{
  backgroundColor:'#bc1a1a',
  paddingHorizontal: 20,
  paddingVertical:10,
  justifyContent:'center',
  alignItems:'center',
  borderRadius: 10
}
});