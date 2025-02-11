import {Text,View,FlatList} from 'react-native';
import {useState,useEffect} from 'react';
const Home = () => {
  const [Dog,setDog] = useState([]);
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/list/all').then(res=>{
      return res.json();
    }).then(ans=>{
      setDog(ans.message);
    })
  },[])
  return(
    <FlatList
      data={Dog}
      renderItem={({item})=>{
        return(
          <View>
            <Text>{item}</Text>
          </View>
        )
      }}
    />
  )
 
}

export default Home;