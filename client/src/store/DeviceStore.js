import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Fridges'},
      {id: 2, name: 'Smartphones'}
    ] 
    this._brands = [
      {id: 1, name: 'Sumsung'},
      {id: 2, name: 'Apple'}
    ]
    this._devices = [
      {id: 1, name: "watch", price: 12341324, rating: 0, img: 'http://localhost:3000/d604e459-0d11-46e2-ba20-95fa3a3cd079.jpg'},
      {id: 2, name: "12 pro", price: 100000, rating: 0, img: 'http://localhost:3000/f21c6d21-6a2e-439b-bfb6-f5870a84179c.jpg'}
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
}
