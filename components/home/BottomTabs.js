import React, {useState} from 'react'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/doodle/48/undefined/person-at-home.png',
    inactive: 'https://img.icons8.com/ultraviolet/40/undefined/dog-house.png'
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/undefined/external-Search-gift-color-line-others-cattaleeya-thongsriphong.png',
    inactive: 'https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/undefined/external-Search-gift-blue-others-cattaleeya-thongsriphong.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/color/48/undefined/photo-reel.png',
    inactive: 'https://img.icons8.com/fluency/48/undefined/photo-reel.png',
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/undefined/external-shop-sales-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
    inactive: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/undefined/external-shop-sales-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
  },
  {
    name: 'Profile',
    active: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/undefined/external-user-shopping-mall-xnimrodx-lineal-color-xnimrodx.png',
    inactive: 'https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/undefined/external-user-shopping-mall-xnimrodx-lineal-gradient-xnimrodx.png',
  }
]

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image 
            source={{uri: activeTab===icon.name ? icon.active : icon.inactive }} 
            style={[
                    styles.icon, //all icons styles
                    icon.name === 'Profile' ? styles.profilePic() : null, //gets the styles for profile
                    activeTab === 'Profile' && icon.name === activeTab 
                      ? styles.profilePic(activeTab) 
                      : null //gets the styles of profile when clicked
                  ]}
        />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
        <View style={styles.container}>
          {icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 999,
    backgroundColor: '#000'
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 30,
    height: 30,
  },

  //dynamic styling
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff',
  }),
})

export default BottomTabs