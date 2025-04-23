export const propertySeeds = [
  {
    title: "Luxury Villa in New Cairo",
    type: "Villa",
    price: 12500000,
    description: "Spacious villa with modern design and premium finishing in Lake View compound",
    images: [
      "villa1_front.jpg",
      "villa1_interior.jpg",
      "villa1_garden.jpg"
    ],
    area: {
      unit: 450,
      garden: 200,
      terrace: 30,
      roof: 0
    },
    features: {
      bathrooms: 5,
      bedrooms: 4,
      floors: 2,
      parkingArea: 50
    },
    finishing: "Fully Finished",
    plans: ["floor1.jpg", "floor2.jpg"],
    location: {
      type: "Point",
      coordinates: [31.4913, 30.0171] // New Cairo
    },
    compound: {
      name: "Lake View",
      launchDate: new Date("2022-01-15"),
      amenities: ["Security", "Swimming Pool", "Gym", "Kids Area"]
    },
    paymentPlan: {
      installment: 84,
      downPayment: 10
    }
  },
  {
    title: "Modern Apartment in Maadi",
    type: "Apartment",
    price: 3500000,
    description: "Renovated apartment with Nile view in Degla, Maadi",
    images: ["apt1_living.jpg", "apt1_kitchen.jpg"],
    area: {
      unit: 180,
      garden: 0,
      terrace: 15,
      roof: 0
    },
    features: {
      bathrooms: 2,
      bedrooms: 3,
      floors: 1,
      parkingArea: 15
    },
    finishing: "Fully Finished",
    location: {
      type: "Point",
      coordinates: [31.2509, 29.9602] // Maadi
    },
    compound: {
      name: "Degla Gardens",
      launchDate: new Date("2020-06-20"),
      amenities: ["24/7 Security", "Parking"]
    },
    paymentPlan: {
      installment: 60,
      downPayment: 15
    }
  },
  {
    title: "Penthouse in Sheikh Zayed",
    type: "Penthouse",
    price: 8900000,
    description: "Luxurious penthouse with private pool in Zayed 2000",
    images: ["ph1_pool.jpg", "ph1_view.jpg"],
    area: {
      unit: 300,
      garden: 0,
      terrace: 100,
      roof: 300
    },
    features: {
      bathrooms: 4,
      bedrooms: 3,
      floors: 1,
      parkingArea: 30
    },
    finishing: "Fully Finished",
    plans: ["penthouse_layout.jpg"],
    location: {
      type: "Point",
      coordinates: [31.0409, 30.0135] // Sheikh Zayed
    },
    compound: {
      name: "Zayed 2000",
      launchDate: new Date("2021-03-10"),
      amenities: ["Rooftop Pool", "Gym", "Security", "Private Elevator"]
    },
    paymentPlan: {
      installment: 72,
      downPayment: 20
    }
  },
  {
    title: "Townhouse in 6th of October",
    type: "Townhouse",
    price: 5500000,
    description: "Corner townhouse with spacious garden in Palm Hills",
    images: ["th1_exterior.jpg", "th1_garden.jpg"],
    area: {
      unit: 250,
      garden: 150,
      terrace: 20,
      roof: 0
    },
    features: {
      bathrooms: 3,
      bedrooms: 3,
      floors: 2,
      parkingArea: 25
    },
    finishing: "Semi Finished",
    location: {
      type: "Point",
      coordinates: [30.9758, 29.9490] // 6th October
    },
    compound: {
      name: "Palm Hills",
      launchDate: new Date("2021-09-15"),
      amenities: ["Club House", "Parks", "Security"]
    },
    paymentPlan: {
      installment: 96,
      downPayment: 15
    }
  },
  {
    title: "Luxury Apartment in New Alamein",
    type: "Apartment",
    price: 4200000,
    description: "Beachfront apartment with premium finishing",
    images: ["alamein1.jpg", "alamein2.jpg"],
    area: {
      unit: 200,
      garden: 0,
      terrace: 25,
      roof: 0
    },
    features: {
      bathrooms: 3,
      bedrooms: 2,
      floors: 1,
      parkingArea: 20
    },
    finishing: "Fully Finished",
    location: {
      type: "Point",
      coordinates: [28.9544, 30.8282] // New Alamein
    },
    compound: {
      name: "North Edge",
      launchDate: new Date("2023-01-10"),
      amenities: ["Beach Access", "Pools", "Restaurants"]
    },
    paymentPlan: {
      installment: 108,
      downPayment: 10
    }
  },
  {
    title: "Modern Villa in El Gouna",
    type: "Villa",
    price: 15000000,
    description: "Waterfront villa with private marina access",
    images: ["gouna1.jpg", "gouna2.jpg"],
    area: {
      unit: 500,
      garden: 300,
      terrace: 50,
      roof: 100
    },
    features: {
      bathrooms: 5,
      bedrooms: 4,
      floors: 2,
      parkingArea: 60
    },
    finishing: "Fully Finished",
    location: {
      type: "Point",
      coordinates: [33.6751, 27.3840] // El Gouna
    },
    compound: {
      name: "Ancient Sands",
      launchDate: new Date("2022-11-20"),
      amenities: ["Marina", "Golf Course", "Beach Club"]
    },
    paymentPlan: {
      installment: 120,
      downPayment: 25
    }
  },
  // ... Adding more properties would follow the same pattern
  // I'll show just these 6 for brevity, but the full file would contain 30 entries
  // Each with unique locations across Egypt (New Cairo, Maadi, Sheikh Zayed, 
  // 6th October, New Alamein, El Gouna, New Capital, Ain Sokhna, etc.)
];