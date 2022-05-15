/*a work around SafeAreaView tag that only works in IOS and not available for Android
* SafeAreaView renders nested content and automatically applies padding to reflect the 
* portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views
*/

import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});