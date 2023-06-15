import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Мышь'},
            {id: 2, name: 'Клавиатура'},
            {id: 3, name: 'Принтер'},
            {id: 4, name: 'Наушники'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5},
            {id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5},
            {id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5},


        ]
        this._page = 1
        this._totalCount = 0
        this._limit = 3
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
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
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

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }


}