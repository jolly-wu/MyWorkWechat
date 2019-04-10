let gLocation = null

export class LocationStorage {
  save (location) {
    gLocation = location
  }
  getLocation () {
    return gLocation
  }
}
