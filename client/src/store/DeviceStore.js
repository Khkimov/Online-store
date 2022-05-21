import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Ленточный фундамент'},
      {id: 2, name: 'Монолитная плита'},
      {id: 3, name: 'Цокольный этаж'},
      {id: 4, name: 'УШП футдамент'},
      {id: 5, name: 'Свайно-ростверковый'},
      {id: 6, name: 'Свайно-забивной'},
      {id: 7, name: 'Свайно-винтовой'}
    ] 
    this._brands = [
      {id: 1, name: 'Размер, ширина/глубина'},
      {id: 2, name: '400мм/600мм'},
      {id: 3, name: '400мм/1200мм'},
      {id: 3, name: '400мм/1400мм'},
      {id: 3, name: '400мм/1600мм'},
    ]
    this._devices = [
      {id: 1, name: "watch", price: 12341324, rating: 0, img: 'http://localhost:3000/d604e459-0d11-46e2-ba20-95fa3a3cd079.jpg'},
      {id: 2, name: "12 pro", price: 100000, rating: 0, img: 'http://localhost:3000/f21c6d21-6a2e-439b-bfb6-f5870a84179c.jpg'},
      {id: 3, name: "watch", price: 12341324, rating: 0, img: 'http://localhost:3000/d604e459-0d11-46e2-ba20-95fa3a3cd079.jpg'},
      {id: 4, name: "12 pro", price: 100000, rating: 0, img: 'http://localhost:3000/f21c6d21-6a2e-439b-bfb6-f5870a84179c.jpg'},
      {id: 5, name: "watch", price: 12341324, rating: 0, img: 'http://localhost:3000/d604e459-0d11-46e2-ba20-95fa3a3cd079.jpg'},
      {id: 6, name: "12 pro", price: 100000, rating: 0, img: 'http://localhost:3000/f21c6d21-6a2e-439b-bfb6-f5870a84179c.jpg'},
      {id: 7, name: "watch", price: 12341324, rating: 0, img: 'http://localhost:3000/d604e459-0d11-46e2-ba20-95fa3a3cd079.jpg'},
      {id: 8, name: "12 pro", price: 100000, rating: 0, img: 'http://localhost:3000/f21c6d21-6a2e-439b-bfb6-f5870a84179c.jpg'}
    ]
    this._selectedType = {}
    this._selectedBrand = {}
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
  setSelectedType(type) {
    this._selectedType= type
  }
  setSelectedBrand(brand) {
    this._selectedBrand= brand
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
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
