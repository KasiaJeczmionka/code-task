import { makeAutoObservable } from "mobx";
import axios from "axios";

export class AppStorage {
    apiData = [];

    constructor() {
        makeAutoObservable(this);

        axios
            .get('Api.json')
            .then(res => this.apiData = res.data.response.data)
    }
}