// Menu items data
const menuItems = [
    { name: "Ladoos", price: "$5", image: "ladoos.jpg" },
    { name: "Chaklis", price: "$7", image: "chaklis.jpg" },
    { name: "Chipdas", price: "$6", image: "chipdas.jpg" },
    { name: "Modak", price: "$8", image: "modak.jpg" },
    { name: "Chocolate", price: "$4", image: "chocolate.jpg" },
    // Add more menu items as needed
  ];
  
  // Function to generate menu items dynamically
  function generateMenuItems() {
    const menuContainer = document.querySelector('.menu-items');
  
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      `;
      menuContainer.appendChild(menuItem);
    });
  }
  
  // Call the function to generate menu items
  generateMenuItems();
  