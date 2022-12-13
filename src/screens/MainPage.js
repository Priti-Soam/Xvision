import React from 'react';
import { Image, View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Styles } from '../common';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useDispatch, useSelector } from 'react-redux'
import { addItemToLike, addItemToDisLike } from '../redux/ProfileAction';

export default function MainPage() {
  const { profile } = useSelector(state => state.profile);
  console.log(profile)
  const dispatch = useDispatch()

  const scrollRef = React.useRef(profile.id);
  const onFabPress = () => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }, 1)

  }
  const handleLike = () => {
    dispatch(addItemToLike(profile));
    onFabPress();
  };

  const handleDisLike = () => {
    dispatch(addItemToDisLike(profile));
    onFabPress();
  };
  return (
    <ScrollView style={Styles.firstContainer} ref={scrollRef}>
      <View style={Styles.mainContainer}>
        <View style={Styles.container}>
          <Text style={Styles.avtarText}>Avtar</Text>
        </View>
        <View style={Styles.profileContainer} >
          <View style={{ flex: .7 }}>
            <Text style={Styles.name}>{profile.name}</Text>
            <Text style={Styles.rest}>{profile.age}</Text>
            <Text style={Styles.rest}>{profile.distance}</Text>
          </View>
          <View style={Styles.profilePic}>
            <Text style={Styles.profileText}>Profile{`\n`}Picture</Text>
          </View>
        </View>
      </View>
      <View style={Styles.round} >
        <AnimatedCircularProgress
          size={51}
          width={8}
          fill={profile.profileScore}
          rotation={0}
          tintColor="#04C1D5"
          backgroundColor="#DDDDDD">
          {(fill) => <Text style={{ color: 'black', fontWeight: 'bold' }}>{profile.profileScore}</Text>}
        </AnimatedCircularProgress>
      </View>
      <FlatList data={profile.interests}
        renderItem={renderItem}
      />
      <View style={{ flexDirection: 'row', margin: 30, justifyContent: 'space-around', paddingHorizontal: 80 }} >
        <TouchableOpacity onPress={handleDisLike} style={Styles.action}>
          <Image source={require('../assets/cross.png')} style={{ alignSelf: 'center', }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLike} style={Styles.action} >
          <Image source={require('../assets/sign.png')} style={{ alignSelf: 'center', }} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function renderItem({ item, index }) {
  return (
    <>
      <View style={Styles.profileContainer} key={index} >
        {index % 2 == 0 ?
          <>
            <View style={[Styles.profilePic, { backgroundColor: '#FFFFFF', }]}>
              <Image style={{ alignSelf: 'center' }} source={item.image} />
            </View>
            <View style={{ flex: .7, paddingLeft: 20 }}>
              <Text style={Styles.nameL}>{item.name}</Text>
              <Text style={Styles.restL}>{item.paragraph}</Text>
            </View>
          </>
          :
          <>
            <View style={{ flex: .7, paddingRight: 20 }}>
              <Text style={Styles.nameR}>{item.name}</Text>
              <Text style={Styles.restR}>{item.paragraph}</Text>
            </View>
            <View style={[Styles.profilePic, { backgroundColor: '#FFFFFF', }]}>
              <Image style={{ alignSelf: 'center' }} source={item.image} />
            </View>
          </>
        }
      </View>
      {(index % 2 === 1) ?
        <View style={Styles.mainContainer}>
          <Text style={Styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoddddsdadadd</Text>
          <View style={Styles.container}>
            <Text style={{ textAlign: 'center' }}>User Media #1</Text>
          </View>
        </View>
        : null
      }
    </>
  );
}
