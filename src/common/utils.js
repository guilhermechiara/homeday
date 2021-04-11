export const transformToDataStore = (array, identifier) => {
    return array.reduce((previous, object) => ({
        ...previous,
        [object[identifier]]: object
    }), {});
}