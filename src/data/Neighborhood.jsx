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
                    car: '7 min',
                    coordinates: [-83.57995, 41.5434],
                    address: '9666 US-20, Rossford, OH 43460',
                    url: 'www.target.com',
                    google_url: 'https://maps.google.com/?cid=12420465835593851015'
                },
                { 
                    name: 'Kohls',
                    description: "Kohl's is an American chain department store offering a wide selection of brand-name clothing, accessories & homewares.",
                    distance: '1.1 miles',
                    bike: '6 min',
                    car: '5 min',
                    coordinates: [-83.59375, 41.5441],
                    address: '10323 Fremont Pike, Perrysburg, OH 43551',
                    url: 'www.kohls.com',
                    google_url: 'https://maps.google.com/?cid=16315988737927791103'
                },
                { 
                    name: 'Hobby Lobby',
                    description: 'Hobby Lobby offers over 70,000 items featuring home decor, seasonal decor, tableware, floral, art supplies, craft supplies, yarn, fabric, jewelry making, hobbies and much more.',
                    distance: '1.5 miles',
                    bike: '7 min',
                    car: '6 min',
                    coordinates: [-83.58918, 41.54157],
                    address: '10019 Fremont Pike, Perrysburg, OH 43551',
                    url: 'https://www.hobbylobby.com/',
                    google_url: 'https://maps.google.com/?cid=8546671478576671893'
                },
                { 
                    name: 'The Towne Center At Levis Commons',
                    description: 'The Town Center at Levis Commons includes premier retail, lifestyle, office, restaurants and entertainment uses in an open-air, traditional Main Street environment.',
                    distance: '3.9 miles',
                    bike: '21 min',
                    car: '11 min',
                    coordinates: [-83.63891, 41.52716],
                    address: '3201 Levis Commons Blvd, Perrysburg, OH 43551',
                    url: 'https://www.shopleviscommons.com/',
                    google_url: 'https://maps.google.com/?cid=6612353488419154848'
                },
                { 
                    name: 'Shoppes At Riverplace',
                    description: 'The Shoppes at RiverPlace is your one-stop destination. Unparalleled quality shopping, dining, health, style, travel, spirits, licensing, entertainment, financial services and more.',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '10 min',
                    coordinates: [-83.63657, 41.53803],
                    address: '26611 N Dixie Hwy, Perrysburg, OH 43551',
                    url: 'http://shoppesatriverplace.com/',
                    google_url: 'https://maps.google.com/?cid=10775506736018560041'
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
                    car: '4 min',
                    coordinates: [-83.59818, 41.54542],
                    address: '27322 Carronade Dr, Perrysburg, OH 43551',
                    url: 'https://www.kroger.com/stores/details/016/00548?cid=loc_01600548_gmb',
                    google_url: 'https://maps.google.com/?cid=13611087061256487020'
                },
                { 
                    name: 'Meijer',
                    description: "Chain retailer featuring groceries, apparel, electronics and more.",
                    distance: '1.4 miles',
                    walk: '29min',
                    bike: '7 min',
                    car: '7 min',
                    coordinates: [-83.58944, 41.54683],
                    address: '10055 US-20, Rossford, OH 43460',
                    url: 'https://www.meijer.com/shop/en/store/211/?cmpid=OLA:040319:GoogleGrocery',
                    google_url: 'https://maps.google.com/?cid=5767109147491965425'
                },
                { 
                    name: 'Aldi',
                    description: 'Grocery store',
                    distance: '1.7 miles',
                    walk: '36min',
                    bike: '7 min',
                    car: '6 min',
                    coordinates: [-83.5844, 41.54822],
                    address: '9806 S Compass Dr, Rossford, OH 43460',
                    url: 'https://www.aldi.us/en/weekly-specials/our-weekly-ads/?pk_campaign=Corporate&pk_source=WebClick&pk_medium=local_listing',
                    google_url: 'https://maps.google.com/?cid=2307304953058631692'
                },
                { 
                    name: 'Walmart',
                    description: 'Department store',
                    distance: '1.5 miles',
                    walk: '31 min',
                    bike: '6 min',
                    car: '5 min',
                    coordinates: [-83.59326, 41.55036],
                    address: '10392 Fremont Pike, Perrysburg, OH 43551',
                    url: 'https://www.walmart.com/store/4479-perrysburg-oh',
                    google_url: 'https://maps.google.com/?cid=1000689245601466120'
                },
                { 
                    name: "Kazmaier's Market",
                    description: 'Fresh Market Grocery Store',
                    distance: '2.7 miles',
                    bike:  '18 min',
                    car: '8 min',
                    coordinates: [-83.62786, 41.56011],
                    address: '127 E 2nd St, Perrysburg, OH 43551',
                    url: 'http://www.kazmaiermarkets.com/',
                    google_url: 'https://maps.google.com/?cid=1057087468634385064'
                },
                { 
                    name: "Walt Churchill's Market",
                    description: 'Grocery store',
                    distance: '3.2 miles',
                    bike:  '17 min',
                    car: '9 min',
                    coordinates: [-83.63561, 41.53906],
                    address: '26625 N Dixie Hwy, Perrysburg, OH 43551',
                    url: 'http://www.waltchurchillsmarket.com/',
                    google_url: 'https://maps.google.com/?cid=16126635613944550728'
                }
            ]
        },
        Dining: {
            url: 'https://www.google.com/maps/d/u/3/embed?mid=1JekBgppuo-Npnjmu_r91HxAgbtnLqX13',
            markers: [
                { 
                    name: "Chili's Grill & Bar",
                    description: 'Family-friendly chain serving classic Tex-Mex & American fare in a Southwestern-style setting.',
                    distance: '2.0 miles',
                    bike: '9 min',
                    car: '7 min',
                    coordinates: [-83.58501, 41.54335],
                    address: '9886 Old, US-20, Rossford, OH 43460',
                    url: 'https://www.chilis.com/locations/us/oh/rossford/rossford/?utm_source=gpo&utm_medium=local&utm_campaign=gmb',
                    google_url: 'https://maps.google.com/?cid=12240538417553585558'
                },
                { 
                    name: '5th Street Pub',
                    description: "Colorful pub with a separate dining room specializing in Neapolitan pizza & meatball dishes.",
                    distance: '3.2 miles',
                    bike: '16 min',
                    car: '9 min',
                    coordinates: [-83.6279, 41.55613],
                    address: '105 W 5th St, Perrysburg, OH 43551',
                    url: 'http://5thstreetpub.com/',
                    google_url: 'https://maps.google.com/?cid=10370649435848078325'
                },
                { 
                    name: "Stella's Restaurant",
                    description: 'Upscale American destination in a 2-story space decorated with red-oak paneling & glass sculptures.',
                    distance: '3.5 miles',
                    bike: '19 min',
                    car: '8 min',
                    coordinates: [-83.63022, 41.56012],
                    address: '104 Louisiana Ave, Perrysburg, OH 43551',
                    url: 'http://www.stellasrestaurantandbar.com/',
                    google_url: 'https://maps.google.com/?cid=5932480206349924681'
                },
                { 
                    name: "Zingo's",
                    description: 'Cozy spot for Mediterranean fare from pitas to salads & housemade desserts, with vegetarian options.',
                    distance: '3.3 miles',
                    bike: '17 min',
                    car: '8 min',
                    coordinates: [-83.63015, 41.56003],
                    address: '106 Louisiana Ave, Perrysburg, OH 43551',
                    url: 'http://www.eatzingos.com/',
                    google_url: 'https://maps.google.com/?cid=9200225309315532575'
                },
                { 
                    name: 'Chipotle',
                    description: 'Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.',
                    distance: '0.7 miles',
                    walk: '14 min',
                    bike:  '3 min',
                    car: '4 min',
                    coordinates: [-83.60068, 41.54849],
                    address: '10711 Fremont Pike, Perrysburg, OH 43551',
                    url: 'locations.chipotle.com',
                    google_url: 'https://maps.google.com/?cid=10252285687574521714'
                },
                { 
                    name: 'Cocina De Carlos',
                    description: 'Specialist in familiar Mexican dishes & drinks offering a daily lunch buffet in an informal setup.',
                    distance: '0.6 miles',
                    walk: '12 min',
                    bike:  '3 min',
                    car: '4 min',
                    coordinates: [-83.5994, 41.54438],
                    address: '27072 Carronade Dr, Perrysburg, OH 43551',
                    url: 'https://cocinadecarlos.com/',
                    google_url: 'https://maps.google.com/?cid=8305542264195701214'
                },
                { 
                    name: 'Chick-fil-A',
                    description: 'Fast-food chain serving chicken sandwiches, strips & nuggets along with salads & sides.',
                    distance: '1.2 miles',
                    walk: '23 min',
                    bike:  '5 min',
                    car: '5 min',
                    coordinates: [-83.59267, 41.54508],
                    address: '10315 Fremont Pike, Perrysburg, OH 43551',
                    url: 'https://www.chick-fil-a.com/perrysburgplaza',
                    google_url: 'https://maps.google.com/?cid=8037743124632122425'
                },
                { 
                    name: 'Tropical Smoothie Cafe',
                    description: 'Casual, health-conscious chain cafe featuring custom smoothies, sandwiches & wraps.',
                    distance: '1.5 miles',
                    walk: '30 min',
                    bike:  '7 min',
                    car: '6 min',
                    coordinates: [-83.58879, 41.54484],
                    address: '10090 Old, US-20, Rossford, OH 43460',
                    url: 'https://locations.tropicalsmoothiecafe.com/oh/rossford/10090-old-us-20',
                    google_url: 'https://maps.google.com/?cid=8496780553578626641'
                }
            ]
        },
        Entertainment: {
            url: 'https://www.google.com/maps/d/embed?mid=1feP7F1CaZdDAcI9iqPjgYZ9P6fADYoIR&hl',
            markers: [
                { 
                    name: 'Three Meadows Pond and Park',
                    description: 'Green space with ponds, fishing & boating, plus a picnic shelter, playground & seasonal ice skating.',
                    distance: '2.2 miles',
                    bike: '13 min',
                    car: '7 min',
                    coordinates: [-83.59697, 41.55762],
                    address: '300 Three Meadows Dr, Perrysburg, OH 43551',
                    url: 'http://ci.perrysburg.oh.us/index.php/parks-recreation/parks/three-meadows-park',
                    google_url: 'https://maps.google.com/?cid=10461788424635810274'
                },
                { 
                    name: 'Woodlands Park',
                    description: "Large park housing a disc-golf course, Fort Imagination (a community-funded playground) & more.",
                    distance: '2.3 miles',
                    bike: '14 min',
                    car: '8 min',
                    coordinates: [-83.61279, 41.56147],
                    address: '429 E Boundary St, Perrysburg, OH 43551',
                    url: 'http://ci.perrysburg.oh.us/index.php/parks-recreation/parks/woodlands-park',
                    google_url: 'https://maps.google.com/?cid=2776640112706809946'
                },
                { 
                    name: 'Side Cut Metropark',
                    description: 'Riverfront park with picnic areas, historic locks & flat rocks that enable spring walleye fishing.',
                    distance: '5.5 miles',
                    car: '15 min',
                    coordinates: [-83.66888, 41.55414],
                    address: '1025 W River Rd, Maumee, OH 43537',
                    url: 'https://metroparkstoledo.com/explore-your-parks/side-cut/',
                    google_url: 'https://maps.google.com/?cid=15463817590654309113'
                },
                { 
                    name: 'Funny Bone Comedy Club',
                    description: 'This cabaret-style club for ages 21 & over features comedy acts a Southern-style dinner menu.',
                    distance: '5.2 miles',
                    car: '12 min',
                    coordinates: [-83.6449, 41.52726],
                    address: '6140 Levis Commons Blvd, Perrysburg, OH 43551',
                    url: 'http://toledo.funnybone.com/',
                    google_url: 'https://maps.google.com/?cid=12963645110563678257'
                },
                { 
                    name: 'Axe 419',
                    description: 'Axe throwing is great for all ages, all levels of skill and is a perfect night out for any event.',
                    distance: '2.1 miles',
                    car: '8 min',
                    coordinates: [-83.58501, 41.54908],
                    address: '9851 Meridian Ct #2, Perrysburg, OH 43551',
                    url: 'http://www.axe419.com/',
                    google_url: 'https://maps.google.com/?cid=11659578942482703083'
                }
            ]
        },
        Wellness: {   
            name: 'Wellness',
            url: 'https://www.google.com/maps/d/embed?mid=1f9QRTzDOBcA4BExN8zXT0iDAH0JbnpUD&hl',
            markers: [
                { 
                    name: 'Total Sports Complex',
                    description: 'Wide variety of field sports including soccer, baseball, softball, lacrosse and football.',
                    distance: '1.5 miles',
                    bike: '6 min',
                    car: '7 min',
                    coordinates: [-83.58779, 41.54889],
                    address: '10020 S Compass Dr, Rossford, OH 43460',
                    url: 'http://totalsportscomplex.com/',
                    google_url: 'https://maps.google.com/?cid=11990351073881618040'
                },
                { 
                    name: 'Planet Fitness',
                    description: "Gym, Tanning, HydroMassage beds and other amenities.",
                    distance: '2.1 miles',
                    bike: '11 min',
                    car: '8 min',
                    coordinates: [-83.61766, 41.54485],
                    address: '144 E South Boundary St, Perrysburg, OH 43551',
                    url: 'https://www.planetfitness.com/gyms/perrysburg-oh',
                    google_url: 'https://maps.google.com/?cid=16915197675072637962'
                },
                { 
                    name: 'Pure Barre',
                    description: 'Pure Barre features group class formats that deliver an effective total body barre workout.',
                    distance: '3.2 miles',
                    bike: '17 min',
                    car: '8 min',
                    coordinates: [-83.62971, 41.55945],
                    address: '128 Louisiana Ave, Perrysburg, OH 43551',
                    url: 'https://www.purebarre.com/location/perrysburg-oh',
                    google_url: 'https://maps.google.com/?cid=15456824354501855387'
                },
                { 
                    name: 'TRV Fit',
                    description: 'High intensity, challenging group classes and individual classes with personal trainers.',
                    distance: '3.3 miles',
                    bike: '18 min',
                    car: '10 min',
                    coordinates: [-83.62873, 41.55983],
                    address: '117 E 2nd St, Perrysburg, OH 43551',
                    url: 'http://vaulthealth.fit/',
                    google_url: 'https://maps.google.com/?cid=965131971766114223'
                },
                { 
                    name: 'Jazzercise Perrysburg',
                    description: 'Jazzercise is the original dance party workout. Blending dance with Pilates, yoga, kickboxing and strength training.',
                    distance: '2.2 miles',
                    bike:  '12 min',
                    car: '7 min',
                    coordinates: [-83.6207, 41.5443],
                    address: '120 W South Boundary St, Perrysburg, OH 43551',
                    url: 'http://local.jazzercise.com/jazzercise-perrysburg-fitness-center/Perrysburg-OH/',
                    google_url: 'https://maps.google.com/?cid=4720327439988988798'
                },
                { 
                    name: 'Mercy Health - Perrysburg Hospital',
                    description: 'Hospital',
                    distance: '3.2 miles',
                    car: '10 min',
                    coordinates: [-83.63752, 41.53538],
                    address: '12623 Eckel Junction Rd, Perrysburg, OH 43551',
                    url: 'https://www.mercy.com/locations/hospitals/toledo/mercy-health-perrysburg-hospital?utm_source=local-listings&utm_medium=organic&utm_content=website_link',
                    google_url: 'https://maps.google.com/?cid=9990596631851581497'
                }
            ]
        },        
        Education: {
            url: 'https://www.google.com/maps/d/embed?mid=1Wpi-R7SX-VSyYj3ReU96prduYoyd-_6e&hl=en',
            markers: [
                { 
                    name: 'Perrysburg Junior High School',
                    description: 'High School',
                    distance: '1.6 miles',
                    bike: '12 min',
                    car: '7 min',
                    coordinates: [-83.60966, 41.54851],
                    address: '550 E South Boundary St, Perrysburg, OH 43551',
                    url: 'http://www.perrysburgschools.net/perrysburgjuniorhigh_home.aspx',
                    google_url: 'https://maps.google.com/?cid=10455720657313354650'
                },
                { 
                    name: 'Frank Elementary School',
                    description: "Elementary School",
                    distance: '2.3 miles',
                    bike: '14 min',
                    car: '11 min',
                    coordinates: [-83.62797, 41.54369],
                    address: '401 W South Boundary St, Perrysburg, OH 43551',
                    url: 'http://www.perrysburgschools.net/frankelementary_home.aspx',
                    google_url: 'https://maps.google.com/?cid=13462637706438582907'
                },
                { 
                    name: 'Toth Elementary School',
                    description: 'Elementary School',
                    distance: '2.3 miles',
                    bike: '15 min',
                    car: '10 min',
                    coordinates: [-83.62184, 41.55408],
                    address: '200 E 7th St, Perrysburg, OH 43551',
                    url: 'http://www.perrysburgschools.net/tothelementary_home.aspx',
                    google_url: 'https://maps.google.com/?cid=11201245757043285747'
                },
                { 
                    name: 'Woodland Elementary School',
                    description: 'Elementary School',
                    distance: '2.2 miles',
                    bike: '13 min',
                    car: '10 min',
                    coordinates: [-83.60818, 41.55999],
                    address: '27979 White Rd, Perrysburg, OH 43551',
                    url: 'http://perrysburgschools.net/woodlandelementary_home.aspx',
                    google_url: 'https://maps.google.com/?cid=2428095611344284978'
                },
                { 
                    name: 'Perrysburg High School',
                    description: 'High School',
                    distance: '5.2 miles',
                    bike:  '27 min',
                    car: '14 min',
                    coordinates: [-83.65323, 41.51898],
                    address: '13385 Roachton Rd, Perrysburg, OH 43551',
                    url: 'http://www.perrysburgschools.net/perrysburghighschool_home.aspx',
                    google_url: 'https://maps.google.com/?cid=2459158768588391002'
                }
            ]
        }
    }

export default maps;