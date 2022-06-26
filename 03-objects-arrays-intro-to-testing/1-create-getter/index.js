/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const arr = path.split('.')
    return (object) =>  {
        let currentElement = object
        for(let i=0; i < arr.length; i++){
            if(currentElement === undefined) return;
            currentElement = currentElement[arr[i]]
        }
        return currentElement
    }
}