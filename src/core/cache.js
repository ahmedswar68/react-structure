export default {
    /**
     * set data into storage engine
     */
    storage: localStorage,
    set(key, value) {
        this.storage.setItem(key, JSON.stringify({ data: value }));
    },
    /**
     * get value from storage engine
     * @param {*} key 
     */
    get(key) {
        let value = this.storage.getItem(key);

        return value ? JSON.parse(value).data : null
    },
    /**
     * remove value from storage engine
     * @param {*} key 
     */
    remove(key) {
        this.storage.removeItem(key);
    }
}