// Classe Produit
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe ShoppingCartItem
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de l'article
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Classe Panier
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Méthode pour obtenir le total des articles dans le panier
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Méthode pour ajouter des articles
    addItem(product, quantity) {
        // Vérifie si l'article existe déjà dans le panier
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Méthode pour supprimer des articles
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les articles du panier
    displayItems() {
        if (this.items.length === 0) {
            console.log("Le panier est vide.");
        } else {
            this.items.forEach(item => {
                console.log(`Produit: ${item.product.name}, Quantité: ${item.quantity}, Prix total: ${item.getTotalPrice()}`);
            });
        }
    }

    // Méthode pour obtenir le prix total du panier
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Tests des fonctionnalités

// Création de produits
const product1 = new Product(1, 'Pomme', 1.5);
const product2 = new Product(2, 'Banane', 2.0);
const product3 = new Product(3, 'Orange', 1.2);

// Création d'un panier
const cart = new ShoppingCart();

// Ajout d'articles au panier
cart.addItem(product1, 3);
cart.addItem(product2, 2);
cart.addItem(product3, 5);

// Affichage des articles du panier
cart.displayItems();

// Affichage du total des articles dans le panier
console.log(`Total des articles dans le panier : ${cart.getTotalItems()}`);

// Affichage du prix total du panier
console.log(`Prix total du panier : ${cart.getTotalPrice()}`);

// Suppression d'un article du panier
cart.removeItem(product2.id);

// Affichage du panier après suppression d'un article
cart.displayItems();

// Affichage du total des articles dans le panier après suppression
console.log(`Total des articles dans le panier : ${cart.getTotalItems()}`);

// Affichage du prix total du panier après suppression
console.log(`Prix total du panier : ${cart.getTotalPrice()}`);
