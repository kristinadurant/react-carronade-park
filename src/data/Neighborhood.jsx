const maps = 
    {
        Shopping: {
            url: 'https://www.google.com/maps/d/u/3/embed?mid=1NAFDSzbhsuHVlLAzrg11jUB1R7kwWfWs',
            markers: [
                { 
                    name: 'Target',
                    description: 'Target Corporation is an American retail corporation offering home goods, clothing, electronics & more, plus exclusive designer collections.',
                    distance: '2.1 miles',
                    bike: '10 min',
                    car: '7 min'
                },
                { 
                    name: 'Kohls',
                    description: "Kohl's is an American chain department store offering a wide selection of brand-name clothing, accessories & homewares.",
                    distance: '1.1 miles',
                    bike: '6 min',
                    car: '5 min'
                },
                { 
                    name: 'Hobby Lobby',
                    description: 'Hobby Lobby offers over 70,000 items featuring home decor, seasonal decor, tableware, floral, art supplies, craft supplies, yarn, fabric, jewelry making, hobbies and much more.',
                    distance: '1.5 miles',
                    bike: '7 min',
                    car: '6 min'
                },
                { 
                    name: 'The Towne Center At Levis Commons',
                    description: 'The Town Center at Levis Commons includes premier retail, lifestyle, office, restaurants and entertainment uses in an open-air, traditional Main Street environment.',
                    distance: '3.9 miles',
                    bike: '21 min',
                    car: '11 min'
                },
                { 
                    name: 'Shoppes At Riverplace',
                    description: 'The Shoppes at RiverPlace is your one-stop destination. Unparalleled quality shopping, dining, health, style, travel, spirits, licensing, entertainment, financial services and more.',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '10 min'
                }
            ]
        },
        Groceries: {
            url: 'https://www.google.com/maps/d/embed?mid=1-Q3xkJ7sBxsxTRAgJnHprjMG_IX7wtp9&hl',
            markers: [
                { 
                    name: 'Kroger',
                    description: 'Large supermarket chain with deli & bakery departments, plus health & beauty aids, passport photos.',
                    distance: '0.7 miles',
                    walk: '14 min',
                    bike: '3 min',
                    car: '4 min'
                },
                { 
                    name: 'Meijer',
                    description: "Chain retailer featuring groceries, apparel, electronics and more.",
                    distance: '1.4 miles',
                    walk: '29min',
                    bike: '7 min',
                    car: '7 min'
                },
                { 
                    name: 'Aldi',
                    description: 'Grocery store',
                    distance: '1.7 miles',
                    walk: '36min',
                    bike: '7 min',
                    car: '6 min'
                },
                { 
                    name: 'Walmart',
                    description: 'Department store',
                    distance: '1.5 miles',
                    walk: '31 min',
                    bike: '6 min',
                    car: '5 min'
                },
                { 
                    name: "Kazmaier's Market",
                    description: 'Fresh Market Grocery Store',
                    distance: '2.7 miles',
                    bike:  '18 min',
                    car: '8 min'
                },
                { 
                    name: "Walt Churchill's Market",
                    description: 'Grocery store',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '9 min'
                }
            ]
        },
        Dining: {
            url: 'https://www.google.com/maps/d/u/3/embed?mid=1JekBgppuo-Npnjmu_r91HxAgbtnLqX13',
            markers: [
                { 
                    name: 'Target',
                    description: 'Target Corporation is an American retail corporation offering home goods, clothing, electronics & more, plus exclusive designer collections.',
                    distance: '2.1 miles',
                    bike: '10 min',
                    car: '7 min'
                },
                { 
                    name: 'Kohls',
                    description: "Kohl's is an American chain department store offering a wide selection of brand-name clothing, accessories & homewares.",
                    distance: '1.1 miles',
                    bike: '6 min',
                    car: '5 min'
                },
                { 
                    name: 'Hobby Lobby',
                    description: 'Hobby Lobby offers over 70,000 items featuring home decor, seasonal decor, tableware, floral, art supplies, craft supplies, yarn, fabric, jewelry making, hobbies and much more.',
                    distance: '1.5 miles',
                    bike: '7 min',
                    car: '6 min'
                },
                { 
                    name: 'The Towne Center At Levis Commons',
                    description: 'The Town Center at Levis Commons includes premier retail, lifestyle, office, restaurants and entertainment uses in an open-air, traditional Main Street environment.',
                    distance: '3.9 miles',
                    bike: '21 min',
                    car: '11 min'
                },
                { 
                    name: 'Shoppes At Riverplace',
                    description: 'The Shoppes at RiverPlace is your one-stop destination. Unparalleled quality shopping, dining, health, style, travel, spirits, licensing, entertainment, financial services and more.',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '10 min'
                }
            ]
        },
        Entertainment: {
            url: 'https://www.google.com/maps/d/embed?mid=1feP7F1CaZdDAcI9iqPjgYZ9P6fADYoIR&hl',
            markers: [
                { 
                    name: 'Target',
                    description: 'Target Corporation is an American retail corporation offering home goods, clothing, electronics & more, plus exclusive designer collections.',
                    distance: '2.1 miles',
                    bike: '10 min',
                    car: '7 min'
                },
                { 
                    name: 'Kohls',
                    description: "Kohl's is an American chain department store offering a wide selection of brand-name clothing, accessories & homewares.",
                    distance: '1.1 miles',
                    bike: '6 min',
                    car: '5 min'
                },
                { 
                    name: 'Hobby Lobby',
                    description: 'Hobby Lobby offers over 70,000 items featuring home decor, seasonal decor, tableware, floral, art supplies, craft supplies, yarn, fabric, jewelry making, hobbies and much more.',
                    distance: '1.5 miles',
                    bike: '7 min',
                    car: '6 min'
                },
                { 
                    name: 'The Towne Center At Levis Commons',
                    description: 'The Town Center at Levis Commons includes premier retail, lifestyle, office, restaurants and entertainment uses in an open-air, traditional Main Street environment.',
                    distance: '3.9 miles',
                    bike: '21 min',
                    car: '11 min'
                },
                { 
                    name: 'Shoppes At Riverplace',
                    description: 'The Shoppes at RiverPlace is your one-stop destination. Unparalleled quality shopping, dining, health, style, travel, spirits, licensing, entertainment, financial services and more.',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '10 min'
                }
            ]
        },
        Wellness: {   
            name: 'Wellness',
            url: 'https://www.google.com/maps/d/embed?mid=1f9QRTzDOBcA4BExN8zXT0iDAH0JbnpUD&hl',
            markers: [
                { 
                    name: 'Target',
                    description: 'Target Corporation is an American retail corporation offering home goods, clothing, electronics & more, plus exclusive designer collections.',
                    distance: '2.1 miles',
                    bike: '10 min',
                    car: '7 min'
                },
                { 
                    name: 'Kohls',
                    description: "Kohl's is an American chain department store offering a wide selection of brand-name clothing, accessories & homewares.",
                    distance: '1.1 miles',
                    bike: '6 min',
                    car: '5 min'
                },
                { 
                    name: 'Hobby Lobby',
                    description: 'Hobby Lobby offers over 70,000 items featuring home decor, seasonal decor, tableware, floral, art supplies, craft supplies, yarn, fabric, jewelry making, hobbies and much more.',
                    distance: '1.5 miles',
                    bike: '7 min',
                    car: '6 min'
                },
                { 
                    name: 'The Towne Center At Levis Commons',
                    description: 'The Town Center at Levis Commons includes premier retail, lifestyle, office, restaurants and entertainment uses in an open-air, traditional Main Street environment.',
                    distance: '3.9 miles',
                    bike: '21 min',
                    car: '11 min'
                },
                { 
                    name: 'Shoppes At Riverplace',
                    description: 'The Shoppes at RiverPlace is your one-stop destination. Unparalleled quality shopping, dining, health, style, travel, spirits, licensing, entertainment, financial services and more.',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '10 min'
                }
            ]
        },        
        Education: {
            url: 'https://www.google.com/maps/d/embed?mid=1Wpi-R7SX-VSyYj3ReU96prduYoyd-_6e&hl=en',
            markers: [
                { 
                    name: 'Target',
                    description: 'Target Corporation is an American retail corporation offering home goods, clothing, electronics & more, plus exclusive designer collections.',
                    distance: '2.1 miles',
                    bike: '10 min',
                    car: '7 min'
                },
                { 
                    name: 'Kohls',
                    description: "Kohl's is an American chain department store offering a wide selection of brand-name clothing, accessories & homewares.",
                    distance: '1.1 miles',
                    bike: '6 min',
                    car: '5 min'
                },
                { 
                    name: 'Hobby Lobby',
                    description: 'Hobby Lobby offers over 70,000 items featuring home decor, seasonal decor, tableware, floral, art supplies, craft supplies, yarn, fabric, jewelry making, hobbies and much more.',
                    distance: '1.5 miles',
                    bike: '7 min',
                    car: '6 min'
                },
                { 
                    name: 'The Towne Center At Levis Commons',
                    description: 'The Town Center at Levis Commons includes premier retail, lifestyle, office, restaurants and entertainment uses in an open-air, traditional Main Street environment.',
                    distance: '3.9 miles',
                    bike: '21 min',
                    car: '11 min'
                },
                { 
                    name: 'Shoppes At Riverplace',
                    description: 'The Shoppes at RiverPlace is your one-stop destination. Unparalleled quality shopping, dining, health, style, travel, spirits, licensing, entertainment, financial services and more.',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '10 min'
                }
            ]
        }
    }

export default maps;