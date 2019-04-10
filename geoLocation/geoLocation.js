import RNLocation from 'react-native-location'
import RNReverseGeocode from '@kiwicom/react-native-reverse-geocode'

export class GeoLocation {
  requestPermission = () => {
    return RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse'
      }
    })
  }

  getLatestLocation = timeout => {
    return RNLocation.getLatestLocation({
      timeout
    })
  }

  searchForLocations = region => {
    const inputRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
    return new Promise((resolve, reject) => {
      RNReverseGeocode.searchForLocations(
        region.text,
        inputRegion,
        (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        }
      )
    })
  }

  /*
    react-native-geocoding
    https://github.com/marlove/react-native-geocoding
    TODO: 待补充地理位置正向编码实现，使用Google的api
  */
  geoCodding = location => {}
}
