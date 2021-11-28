import store from "../store/index";

export const addCity = () => {
    let cities = store.getters.cities;
    const payload = {
        title: "qweqwe",
        joint: 23423,
        actual: 12,
        child: [],
    };
    cities.push(payload)
    store.dispatch('addCity', cities)
};


export const editCity = () => {
    let cities = store.getters.cities;
    const payload = {
        title: "qweqwe",
        joint: 23423,
        actual: 12,
        child: [],
    };
    cities.push(payload)
    store.dispatch('addCity', cities)
};


export const deleteCity = () => {
    let cities = store.getters.cities;
    const payload = {
        title: "qweqwe",
        joint: 23423,
        actual: 12,
        child: [],
    };
    cities.push(payload)
    store.dispatch('addCity', cities)
};