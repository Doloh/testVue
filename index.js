// verifier que la fonction Vue.js est bien chargée
console.log(Vue);
mesData = {
    restaurantName: 'Bonjour Sushii',
    adresse: '18 avenue du Beurre, Paris, France',
    email: 'hello@cafewithavue.bakery',
    tel: '01 99 99 99 99',
    simpleMenu: [
        {
            name: "Croissant",
            image: {
                source: "./images/croissant.jpg",
                alt: "Un croissant"
            },
            inStock: true,
            quantity: 1
        },
        {
            name: "Baguette de pain",
            image: {
                source: "./images/french-baguette.jpg",
                alt: "Quatre baguettes de pain"
            },
            inStock: true,
            quantity: 1
        },
        {
            name: "Éclair",
            image: {
                source: "./images/eclair.jpg",
                alt: "Éclair au chocolat"
            },
            inStock: false,
            quantity: 1
        }
    ],
    nbAAjouterAuPanier: 1,
    nbArticlePanier: 0
}


//Chargement de la configuration Vue, on indique que Vue sera utilisé pour la div ayant l'id "app"
const app = new Vue({
    el: '#app',
    //on fournit les data utilisable dans la zone specifié 
    data: mesData,
    //computed est une propriété calculée, PAS UNE METHODE
    computed: {
    //la fonction displayCopyright s'appelle comme une variable dans le html {{ displayCopyright }}
        displayCopyright() { 
            return 'Copyright ' + this.restaurantName + ' ' + new Date().getFullYear();
        }
    },
    //Les methodes utilisés
    //importance des THIS pour parler de l'instance courante
    methods: {
        addToShoppingCart(quantity) {
            this.nbArticlePanier += parseInt(quantity);
            console.log(this.nbArticlePanier);
        }
    }
});

