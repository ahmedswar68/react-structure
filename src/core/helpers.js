/**
 * Map the Given object into an array
 * @param {object} object
 * @param {function} callback 
 * @returns {Array}
 */
export function mapObject(object, callback) {
    return Object.keys(object).map(key => {
        return callback(key, object[key])
    })
}