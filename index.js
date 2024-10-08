// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
        let codeMenu = document.getElementById('menu');
    // Loop through each category and its items in the menu object
        for (let category in menu) { 
        // Create an element to represent the category
            let categoryElement = document.createElement('h3'); // CREATES AN H3 IN THE DOM
        // Set the text content of the category element to the category name
            categoryElement.textContent = category;        
        // Append the category element to the menu container
            codeMenu.appendChild(categoryElement);
        // Create an element to represent a list of items
            let itemList = document.createElement('ul'); // CREATES AN UNORDERED LIST
        // Append a list of items element to the menu container
            // IT WONT WORK IF I PUT IT HERE
        // Loop through the items in the category and create list items
            menu[category].forEach(item => {
            // Create a list item element
                let listItem = document.createElement('li'); //  CREATES THE ITEMS IN THE LIST
            // Set the text content of the list item element to the item name
                listItem.textContent = item;
            // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener('click', function() { 
                    addToOrder(item);
                });
                itemList.appendChild(listItem);
        })
            // Append the list item to the list of items
            codeMenu.appendChild(itemList);
    }
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    let orderItems = document.getElementById('order-items');
    let orderTotal = document.getElementById('order-total');
    // Create a list item for the order
    let orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItems.appendChild(orderItem);
    // Calculate and update the total price
    let currentTotal = parseFloat(orderTotal.textContent);
    currentTotal += 50; //ASSUME EACH ITEM IS R50
    // Update the text content of the order total element with the new total
    orderTotal.textContent = currentTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
