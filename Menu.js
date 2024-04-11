const foodItems = [
    { name: 'Pizza', description: 'Delicious pizza with various toppings.', price: '$10' },
    { name: 'Burger', description: 'Juicy burger with cheese and vegetables.', price: '$8' },
    { name: 'Salad', description: 'Fresh salad with greens and dressing.', price: '$6' },
    { name: 'BBQ Ribs', description: 'Tender, slow-cooked pork ribs glazed with smoky barbecue sauce.', price: '$18' },
    { name: 'Chocolate Brownie Sundae', description: 'Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate syrup.', price: '$7' },
    { name: 'Chicken Caesar Salad', description: ' Fresh romaine lettuce, grilled chicken breast, parmesan cheese, croutons, and Caesar dressing.', price: '$9' }
];

function displayfooditem(){
    const fooditemcontainer = document.getElementById('FoodItem');
    fooditemcontainer.innerHTML = '';
    foodItems.forEach((item, index) => {
        var food = document.createElement('div');
        food.classList.add('food-item');
        food.textContent = item.name;
        food.setAttribute('data-index', index);
        fooditemcontainer.appendChild(food);
    })
}

function displayfooddetails(index){
    const fooddetailscontainer = document.getElementById('FoodDetails');
    const item = foodItems[index];
    if (item) {
        fooddetailscontainer.innerHTML = `
            <h2>${item.name}</h2>
            <p>Description: ${item.description}</p>
            <p>Price: ${item.price}</p>
        `;
    } else {
        fooddetailscontainer.innerHTML = '<p>No details available.</p>';
    }
}

document.getElementById('FoodItem').addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index');
    displayfooddetails(index);
});
displayfooditem();
