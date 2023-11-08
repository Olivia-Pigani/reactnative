import { StyleSheet, Text, View,FlatList} from 'react-native'
import React, {useState} from 'react'

export default function Display() {

const [articlesData,setArticlesData] = useState([{
  id:1,
  titre:"lampe"
},
{
  id:2,
  titre:"gobelet"
}])


  return (
    <View >
      <Text style={styles.fontHandling}>blahblah</Text>
      <FlatList style={styles.fontHandling} data={articlesData} renderItem={(itemData) => {
        return(
          <View>
            <Text item={itemData.item.titre}></Text>
            </View>
        )
      }
      } keyExtractor={(item,index)=> {
        return index 
      }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  fontHandling:{
    color:"black"
  }
})