import prisma from "./db";


const typesOfRetailBusinesses = [
    {
        "name": "Clothing and Apparel",
        "description": "Retailers that specialize in selling clothing and accessories.",
        "examples": ["Boutiques", "Department Stores", "Online Retailers"],
        "target_audience": ["Fashion enthusiasts", "General consumers interested in clothing"]
    },
    {
        "name": "Electronics and Technology",
        "description": "Retailers selling electronic devices, gadgets, and technology-related products.",
        "examples": ["Electronics Superstores", "Specialty Electronics Stores", "Online Electronics Retailers"],
        "target_audience": ["Tech enthusiasts", "General consumers interested in gadgets"]
    },
    {
        "name": "Grocery and Supermarkets",
        "description": "Stores selling food and household items.",
        "examples": ["Chain Supermarkets", "Local Grocery Stores", "Online Grocery Retailers"],
        "target_audience": ["General consumers", "Households"]
    },
    {
        "name": "Home and Furniture",
        "description": "Retailers selling furniture, home decor, and household goods.",
        "examples": ["Furniture Showrooms", "Home Improvement Stores", "Online Home Goods Retailers"],
        "target_audience": ["Homeowners", "Interior decorators", "General consumers"]
    },
    {
        "name": "Health and Beauty",
        "description": "Retailers offering personal care products, cosmetics, and health-related items.",
        "examples": ["Drugstores", "Beauty Specialty Stores", "Online Health and Beauty Retailers"],
        "target_audience": ["Beauty enthusiasts", "Health-conscious consumers"]
    },
    {
        "name": "Automotive",
        "description": "Stores selling automotive parts, accessories, and vehicles.",
        "examples": ["Auto Parts Retailers", "Car Dealerships", "Online Automotive Retailers"],
        "target_audience": ["Car owners", "Auto enthusiasts", "Vehicle owners"]
    },
    {
        "name": "Sporting Goods",
        "description": "Retailers specializing in sports equipment, apparel, and accessories.",
        "examples": ["Sporting Goods Stores", "Athletic Apparel Retailers", "Online Sports Retailers"],
        "target_audience": ["Athletes", "Sports enthusiasts", "Fitness-conscious consumers"]
    },
    {
        "name": "Books and Media",
        "description": "Retailers selling books, magazines, music, movies, and other media products.",
        "examples": ["Bookstores", "Music Stores", "Online Book Retailers"],
        "target_audience": ["Book lovers", "Music enthusiasts", "Media consumers"]
    },
    {
        "name": "Jewelry",
        "description": "Retailers specializing in selling jewelry and accessories.",
        "examples": ["Jewelry Boutiques", "Chain Jewelry Stores", "Online Jewelry Retailers"],
        "target_audience": ["Jewelry enthusiasts", "Gift shoppers", "Fashion-conscious consumers"]
    },
    {
        "name": "Toys and Games",
        "description": "Retailers offering a variety of toys, games, and hobby-related products.",
        "examples": ["Toy Stores", "Game Shops", "Online Toy Retailers"],
        "target_audience": ["Children", "Parents", "Collectors"]
    },
    {
        "name": "Pet Supplies",
        "description": "Retailers selling pet food, accessories, and supplies for various pets.",
        "examples": ["Pet Superstores", "Local Pet Shops", "Online Pet Retailers"],
        "target_audience": ["Pet owners", "Animal lovers", "Pet enthusiasts"]
    },
    {
        "name": "Art and Craft Supplies",
        "description": "Retailers offering art supplies, craft materials, and DIY products.",
        "examples": ["Art Supply Stores", "Craft Retailers", "Online Art and Craft Retailers"],
        "target_audience": ["Artists", "Crafters", "DIY enthusiasts"]
    }
]

async function main() {
    for (const business of typesOfRetailBusinesses) {
        await prisma.businessType.create({
            data: {
                name: business.name,
                description: business.description,
                examples: business.examples,
                targetAudience: business.target_audience
            },
        });
    }
}

main()