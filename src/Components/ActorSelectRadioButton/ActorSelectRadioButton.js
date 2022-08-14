import React,{useState} from 'react';
import { View, Text ,Pressable,StyleSheet,Image} from 'react-native';

export default function ActorSelectRadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (value) => {
      onSelect(value);
      setUserOption(value);
    };
    return (
      <View style={styles.radioContainer}>
        {data.map((item) => {
          return (

                <Pressable
                    style={
                    item.value === userOption ? styles.selected : styles.unselected
                    }
                       
                    onPress={() => selectHandler(item.value)}>
              
                    <Text> {item.value}</Text>
                    <Image
                        style={styles.img}
                        source={item.url}
                    />               
  
                </Pressable>
          );
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
    radioContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 1,
        marginVertical: 10
      },
      unselected: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:120,
        height:120,
        borderRadius:10,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
        
    },
    selected: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#32BBC3',
        borderRadius: 10,
        width:120,
        height:120,
        
    },
    img: {
        height: 90,
        width: 90,
    },
  });