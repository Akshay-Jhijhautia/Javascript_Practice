const items = [{
    name: 'Orange',
    available: true,
    contains: "Vitamin C",
}, {
    name: 'Mango',
    available: true,
    contains: "Vitamin K, Vitamin C",
}, {
    name: 'Pineapple',
    available: true,
    contains: "Vitamin A",
}, {
    name: 'Raspberry',
    available: false,
    contains: "Vitamin B, Vitamin A",

}, {
    name: 'Grapes',
    contains: "Vitamin D",
    available: false,
}];

module.exports = items;
/*

    1. Get all items that are available 
    2. Get all items containing only Vitamin C.
    3. Get all items containing Vitamin A.
    4. Group items based on the Vitamins that they contain in the following format:
        {
            "Vitamin C": ["Orange", "Mango"],
            "Vitamin K": ["Mango"],
        }
        
        and so on for all items and all Vitamins.
    5. Sort items based on number of Vitamins they contain.

    NOTE: Do not change the name of this file

*/ 
