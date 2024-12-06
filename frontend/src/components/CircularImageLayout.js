import React from 'react'
import { View, Text,  } from 'react-native'

export default function CircularImageLayout() {
  return (
    <View style={{alignItems:'center',marginTop:-70 }}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>Choose Your Preferences</Text>
      <Text style={{textAlign:"center",fontWeight:"500", fontSize:12, color:"#6C6C6C", marginTop:10}}>Get personalized project ideas based on your{"\n"}skills and interests.</Text>
    </View>
    
  )
}
