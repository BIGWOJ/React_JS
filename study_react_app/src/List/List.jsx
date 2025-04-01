import styles from './List.module.css';

export default function List({ category = "Category", items = [] }) {
    // const item_list = items;
    // const list_items = item_list.map(fruit => <li key={fruit.id}> {fruit.name} - {fruit.calories}</li>)

    // return (<>
    //     <h3 className={styles.list_category}>{category}</h3><ol className={styles.list_items}>{list_items}</ol>
    // </>);

    // const fruits = [
    // {id: 1, name:'apple', calories: 95}, 
        // {id: 2, name:'banana', calories: 105}, 
        // {id: 3, name:'orange', calories:50}, 
        // {id: 4, name:'coconut', calories: 160}, 
        // {id: 5, name:'kiwi', calories: 42}
        // ];

    // Alphabetical ascending order
    // fruits.sort((a, b) => a.name.localeCompare(b.name))

    // Alphabetical descending order
    // fruits.sort((a, b) => b.name.localeCompare(a.name))

    //Numeric ascending order
    // fruits.sort((a, b) => a.calories - b.calories)

    // Numeric descending order
    // fruits.sort((a, b) => b.calories - a.calories)

    // const low_cal_fruits = fruits.filter(fruit => fruit.calories < 100)

    // const list_items = low_cal_fruits.map(fruit => <li key={fruit.id}> {fruit.name} - {fruit.calories}</li>)


    // Key is for React to identify each element in the list, can be anything unique
    // const list_items = fruits.map(fruit => <li key={fruit.id}> {fruit.name} - {fruit.calories}</li>)

    // return (<ol>{list_items}</ol>);

}