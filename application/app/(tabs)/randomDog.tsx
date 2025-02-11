import {Text,View,Button,Image,StyleSheet} from 'react-native';
import {useState,useEffect} from 'react';


const RandomDog = () => {
    const [image,setImage] = useState(null);
    
    const fetchDogImage = async () => {
        try{
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if(!response.ok){
                throw new Error('Something Went Wrong!');
            }

            const data = await response.json();

            setImage(data);
        } catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchDogImage();
    },[])
    
    return(
        <View>
            <Text>Random Dog:</Text>
            {image ? (
                <Image source={{ uri:image }}/>
            ) : (
                <Text>Loading...</Text>
            )}

            <Button title="Fetch New Dog" onPress={fetchDogImage}/>
        </View>
    )
}

export default RandomDog;