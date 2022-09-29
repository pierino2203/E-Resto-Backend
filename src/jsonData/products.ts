const products : object[]= [
    {
        "name": "Tortilla de papas",
        "description": "Tortilla de papas",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/2018151-1618507927746.jpg?e=webp&d=800x800&q=80",
        "category": "Acompañamientos"
        
    },
    {
        "name": "Papas fritas",
        "description": "Porcion de papas fritas para 2 personas",
        "price": 1000,
        "stock": 100,
        "rating": 4,
        "img": "https://images.rappi.com.ar/products/2018149-1619199424915.jpg?e=webp&d=800x800&q=80",
        "category": "Acompañamientos"
        
    },
    {
        "name": "Papas Cerveceras",
        "description": "Papas fritas con cheddar, panceta y verdeo",
        "price": 1300,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/2018148-1618508286190.png?e=webp&d=800x800&q=80",
        "category": "Acompañamientos"
    },
    {
        "name": "Pepsi Regular 354 ml",
        "description": "Gaseosa",
        "price": 200,
        "stock": 100,
        "rating": 3,
        "img": "https://images.rappi.com.ar/products/9698b85c-3e59-4524-a40a-ddd03d3c1e64-1628272541947.png?e=webp&d=800x800&q=80",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "Pepsi Regular 354 ml",
        "description": "Gaseosa",
        "price": 200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/9698b85c-3e59-4524-a40a-ddd03d3c1e64-1628272541947.png?e=webp&d=800x800&q=80",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "7Up Lima Limón 354 ml",
        "description": "Gaseosa",
        "price": 200,
        "stock": 100,
        "rating": 4,
        "img": "https://images.rappi.com.ar/products/e39991c4-3185-4d2b-a2ab-e1ec3661bbb5-1628272573706.png?e=webp&d=800x800&q=80",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "Pepsi Black 354 ml",
        "description": "Gaseosa",
        "price": 200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/b67b4f63-412c-4866-92a1-2fe4366764f3-1628272584783.png?e=webp&d=800x800&q=80",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "Villavicencio 500 ml",
        "description": "Agua",
        "price": 200,
        "stock": 100,
        "rating": 3,
        "img": "https://http2.mlstatic.com/D_NQ_NP_777853-MLA44632277984_012021-O.webp",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "Cerveza Heineken lata",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 5,
        "img": "https://http2.mlstatic.com/D_NQ_NP_637542-MLA49976820839_052022-O.webp",
        "category": "Cervezas"
    },
    {
        "name": "Schneider Lager 473 ml",
        "description": "Cerveza",
        "price": 350,
        "stock": 100,
        "rating": 4,
        "img": "https://images.rappi.com.ar/products/1139196-1588023044528.png?e=webp&d=800x800&q=80",
        "category": "Cervezas"
    },
    {
        "name": "Stella Artois 473 ml",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 5,
        "img": "https://http2.mlstatic.com/D_NQ_NP_759447-MLA43740133080_102020-O.webp0",
        "category": "Cervezas"
    },
    {
        "name": "Andes Roja 473 ml",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 5,
        "img": "https://http2.mlstatic.com/D_NQ_NP_736046-MLA48522001422_122021-O.webp",
        "category": "Cervezas"
    },
    {
        "name": "Imperial Ipa 43 ml",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 4,
        "img": "https://http2.mlstatic.com/D_NQ_NP_855362-MLA46569073008_062021-O.webp",
        "category": "Cervezas"
    },
    {
        "name": "Ensalada Cesar",
        "description": "Pollo, lechuga, parmesano, croutones y salsa especial.",
        "price": 1100,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/2018269-1619199424925.jpg?e=webp&d=800x800&q=80",
        "category": "Ensaladas"
    },
    {
        "name": "Ensalada Serrana",
        "description": "Rúcula, jamón crudo, tomate cherry y parmesano.",
        "price": 1100,
        "stock": 100,
        "rating": 3,
        "img": "https://images.rappi.com.ar/products/2018268-1619199424922.jpg?e=webp&d=800x800&q=80",
        "category": "Ensaladas"
    },
    {
        "name": "Ensalada Completa",
        "description": "Lechuga, tomate, cebolla, zanahoria, morrón, jamón y queso.",
        "price": 1100,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/2018270-1619199424926.jpg?e=webp&d=800x800&q=80",
        "category": "Ensaladas"
    },
    {
        "name": "Cheese & Bacon",
        "description": "Cheddar/Bacon/Cebolla caramelizada/BBQ.",
        "price": 1050,
        "stock": 100,
        "rating": 4,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603815618.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Cheese Burger",
        "description": "Cheddar/Mayonesa.",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603829943.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Nairobi",
        "description": "100% carne de ternera 180 grs, tomate confitado, aceite de albahaca y queso tybo",
        "price": 1000,
        "stock": 100,
        "rating": 3,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603620254.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Berlin",
        "description": "100% carne de ternera 180 grs, provoleta, rúcula, morrón asado, cebolla caramelizada y mayonesa de chimichurri",
        "price": 1050,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603857338.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Moscú",
        "description": "100% carne de ternera 180 grs, jamón cocido, queso tybo, lechuga y tomate",
        "price": 1150,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603857338.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Oslo",
        "description": "100% pollo 180 grs, tomate confitado, rúcula, queso tybo, aros de cebolla rebozados, barbacoa",
        "price": 1050,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603870000.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Tokio",
        "description": "100% carne de ternera 180 grs , queso cheddar, panceta, tomate confitado, cebolla caramelizada,",
        "price": 1150,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603870000.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Churrinche",
        "description": "100% carne de ternera 180 grs, jamón cocido, muzzarella, tomate, salsa criolla",
        "price": 1150,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603870000.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Veggie Burger",
        "description": "Falafel/Cheddar/Lechuga/Tomate/Mayonesa.",
        "price": 950,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603870000.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Tetra cheese burger",
        "description": "Cuadruple carne / Extra cheddar / Mayonesa.",
        "price": 1250,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603870000.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Pulled Pork",
        "description": "Cheddar/Bacon/Pulled pork/BBQ.",
        "price": 1250,
        "stock": 100,
        "rating": 5,
        "img": "https://admin.pency.app/api/image/production.pency.images/copebernal/1647603870000.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Mila Napolitana",
        "description": "Milanesa con salsa de tomate, queso muzzarella y jamón",
        "price": 1500,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1579602-1619199408414.jpg?e=webp&d=800x800&q=80",
        "category": "Milanesas"
    },
    {
        "name": "Mila Completa",
        "description": "Milanesa con huevos fritos",
        "price": 1350,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464154-1597089380193.png?e=webp&d=800x800&q=80",
        "category": "Milanesas"
     }
,
    {
        "name": "Mila BBQ",
        "description": "Milanesa con salsa barbacoa, panceta crocante y huevos fritos ",
        "price": 1550,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464164-1597089419402.png?e=webp&d=800x800&q=80",
        "category": "Milanesas"
    },
    {
        "name": "Mila Guacamole",
        "description": "Milanesa, queso crema, guacamole, salsa criolla y nachos",
        "price": 1600,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/2029677-1619199424928.jpg?e=webp&d=800x800&q=80",
        "category": "Milanesas"
    },
    {
        "name": "Sorrentinos de Jamón & Queso",
        "description": "Sorrentinos de jamón y queso, con queso rallado y pan",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464118-1597089007997.png?e=webp&d=800x800&q=80",
        "category": "Pastas"
    },
    {
        "name": "Ravioles de Pollo & Verdura",
        "description": "Ravioles de pollo, verdura, con queso rallado y pan.",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464099-1597088997641.png?e=webp&d=800x800&q=80",
        "category": "Pastas"
    },
    {
        "name": "Tagliatelle Al Huevo",
        "description": "Tagliatelle al huevo, con queso rallado y pan",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464097-1597088965309.png?e=webp&d=800x800&q=80",
        "category": "Pastas"
    },
    {
        "name": "Ñoquis",
        "description": "Ñoquis de papa, con queso rallado y pan",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/2286703-1622486406840.png?e=webp&d=800x800&q=80",
        "category": "Pastas"
    },
    {
        "name": "Pizza Muzzarella",
        "description": "Pizza de salsa de tomate, muzzarella, aceitunas verdes, orégano",
        "price": 950,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464083-1597088848483.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Napolitana",
        "description": "Pizza de salsa de tomate, muzzarella, rodajas de tomate natural, aceitunas verdes, orégano.",
        "price": 1100,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464083-1597088848483.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Napolitana",
        "description": "Pizza de salsa de tomate, muzzarella, rodajas de tomate natural, aceitunas verdes, orégano.",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464087-1597088917972.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza de Verdura",
        "description": "Pizza de salsa de tomate, espinaca, salsa blanca, provolone rallado, aceitunas verdes, orégano.",
        "price": 700,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464085-1597088866624.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Fugazza",
        "description": "Pizza de muzzarella, cebolla, aceite de oliva, orégano.",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464092-1597088937864.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza de Jamón",
        "description": "Pizza de salsa de tomate, jamón cocido, muzzarella, aceitunas verdes, orégano.",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464088-1597088919174.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Jamón & Morrones",
        "description": "Pizza de salsa de tomate, muzzarella, jamón, aceitunas verdes, orégano.",
        "price": 1100,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464089-1597088919255.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza de Palmitos",
        "description": "Pizza de salsa de tomate, muzzarella, jamón, palmitos, salsa golf, aceitunas verdes, orégano.",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464090-1597088920629.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Calabresa",
        "description": "Salsa de tomate, muzzarella, longaniza, morrones, orégano y aceitunas.",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/8c66b7e2-d295-4fe4-89a5-3e18de6e1f0b-1648672984903.png?e=webp&d=800x800&q=80",
        "category": "Pizzas"
    },
    {
        "name": "Torta Oreo",
        "description": "Postre de torta con crema Oreo, dulce de leche.",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1494032-1597442233044.png?e=webp&d=800x800&q=80",
        "category": "Postres"
    },
    {
        "name": "Chocotorta",
        "description": "Torta con galletitas, dulce de leche, queso blanco.",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1494031-1597442216533.png?e=webp&d=800x800&q=80",
        "category": "Postres"
    },
    {
        "name": "Mousse de Chocolate",
        "description": "Postre de mousse de chocolate",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/3195e228-08bf-4557-9d02-ab54634cafc2-1635380880184.png?e=webp&d=800x800&q=80",
        "category": "Postres"
    },
    {
        "name": "Cheesecake",
        "description": "Postre de queso con topping de frutos rojos.",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/8f7a357b-3bbf-42e8-8a26-927cabd53b41-1635380924274.png?e=webp&d=800x800&q=80",
        "category": "Postres"
    },
    {
        "name": "Sándwich Mila Full Full",
        "description": "Sándwich de milanesa de ternera, lechuga, tomate, cebolla morada, jamón, queso, huevo a la plancha con papas fritas.",
        "price": 1150,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464147-1597089135792.png?e=webp&d=800x800&q=80",
        "category": "Sandwiches"
    },
    {
        "name": "Sándwich Mila Cheddar",
        "description": "Sándwich de milanesa de ternera, queso cheddar, panceta grillada, cebolla caramelizada",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1976670-1619199408429.jpg?e=webp&d=800x800&q=80",
        "category": "Sandwiches"
    },
    {
        "name": "Sándwich Mila BBQ",
        "description": "Sándwich de milanesa de ternera, barbacoa, panceta grillada, huevo a la plancha",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1976669-1618507651643.jpg?e=webp&d=800x800&q=80",
        "category": "Sandwiches"
    },
    {
        "name": "Sándwich Lomito Full Ful",
        "description": "Sándwich de lomito, lechuga, tomate, cebolla morada, jamón, queso, huevo a la plancha",
        "price": 1400,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1464149-1597089358916.png?e=webp&d=800x800&q=80",
        "category": "Sandwiches"
    },
    {
        "name": "Sandwich Lomito Clásico",
        "description": "Sándwich de lomito, tomate, lechuga",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://images.rappi.com.ar/products/1976666-1619199408419.jpg?e=webp&d=800x800&q=80",
        "category": "Sandwiches"
    }
]

export default products;