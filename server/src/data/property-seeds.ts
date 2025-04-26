import { Property } from "../models/property";
const propertySeeds = [
  {
    title: "Luxury Villa in New Cairo",
    type: "Villa",
    price: 12500000,
    description:
      "Spacious villa with modern design and premium finishing in Lake View compound",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 450,
      garden: 200,
      terrace: 30,
      roof: 0,
    },
    features: {
      bathrooms: 5,
      bedrooms: 4,
      floors: 2,
      parkingArea: 50,
    },
    finishing: "Fully Finished",
    plans: ["floor1.jpg", "floor2.jpg"],
    location: {
      title: "New Cairo",
      type: "Point",
      coordinates: [31.4913, 30.0171],
    },
    compound: {
      name: "Lake View",
      launchDate: new Date("2022-01-15"),
      amenities: ["Security", "Swimming Pool", "Gym", "Kids Area"],
    },
    paymentPlan: {
      installment: 84,
      downPayment: 10,
    },
  },
  {
    title: "Modern Apartment in Maadi",
    type: "Apartment",
    price: 3500000,
    description: "Renovated apartment with Nile view in Degla, Maadi",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 180,
      garden: 0,
      terrace: 15,
      roof: 0,
    },
    features: {
      bathrooms: 2,
      bedrooms: 3,
      floors: 1,
    },
    finishing: "Fully Finished",
    location: {
      title: "Maadi",
      type: "Point",
      coordinates: [31.2509, 29.9602],
    },
    compound: {
      name: "Degla Gardens",
      launchDate: new Date("2020-06-20"),
      amenities: ["24/7 Security", "Parking"],
    },
    paymentPlan: {
      installment: 60,
      downPayment: 15,
    },
  },
  {
    title: "Penthouse in Sheikh Zayed",
    type: "Penthouse",
    price: 8900000,
    description: "Luxurious penthouse with private pool in Zayed 2000",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 300,
      garden: 0,
      terrace: 100,
      roof: 300,
    },
    features: {
      bathrooms: 4,
      bedrooms: 3,
      floors: 1,
    },
    finishing: "Fully Finished",
    plans: ["penthouse_layout.jpg"],
    location: {
      title: "Sheikh Zayed",
      type: "Point",
      coordinates: [31.0409, 30.0135],
    },
    compound: {
      name: "Zayed 2000",
      launchDate: new Date("2021-03-10"),
      amenities: ["Rooftop Pool", "Gym", "Security", "Private Elevator"],
    },
    paymentPlan: {
      installment: 72,
      downPayment: 20,
    },
  },
  {
    title: "Townhouse in 6th of October",
    type: "Townhouse",
    price: 5500000,
    description: "Corner townhouse with spacious garden in Palm Hills",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 250,
      garden: 150,
      terrace: 20,
      roof: 0,
    },
    features: {
      bathrooms: 3,
      bedrooms: 3,
      floors: 2,
    },
    finishing: "Semi Finished",
    location: {
      title: "6th of October",
      type: "Point",
      coordinates: [30.9758, 29.949],
    },
    compound: {
      name: "Palm Hills",
      launchDate: new Date("2021-09-15"),
      amenities: ["Club House", "Parks", "Security"],
    },
    paymentPlan: {
      installment: 96,
      downPayment: 15,
    },
  },
  {
    title: "Luxury Apartment in New Alamein",
    type: "Apartment",
    price: 4200000,
    description: "Beachfront apartment with premium finishing",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 200,
      garden: 0,
      terrace: 25,
      roof: 0,
    },
    features: {
      bathrooms: 3,
      bedrooms: 2,
      floors: 1,
    },
    finishing: "Fully Finished",
    location: {
      title: "New Alamein",
      type: "Point",
      coordinates: [28.9544, 30.8282],
    },
    compound: {
      name: "North Edge",
      launchDate: new Date("2023-01-10"),
      amenities: ["Beach Access", "Pools", "Restaurants"],
    },
    paymentPlan: {
      installment: 108,
      downPayment: 10,
    },
  },
  {
    title: "Modern Villa in El Gouna",
    type: "Villa",
    price: 15000000,
    description: "Waterfront villa with private marina access",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 500,
      garden: 300,
      terrace: 50,
      roof: 100,
    },
    features: {
      bathrooms: 5,
      bedrooms: 4,
      floors: 2,
    },
    finishing: "Fully Finished",
    location: {
      title: "El Gouna",
      type: "Point",
      coordinates: [33.6751, 27.384],
    },
    compound: {
      name: "Ancient Sands",
      launchDate: new Date("2022-11-20"),
      amenities: ["Marina", "Golf Course", "Beach Club"],
    },
    paymentPlan: {
      installment: 120,
      downPayment: 25,
    },
  },
  {
    title: "Classic Villa in Katameya Heights",
    type: "Villa",
    price: 18000000,
    description: "Elegant villa with golf course view and large private garden",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 600,
      garden: 350,
      terrace: 60,
      roof: 100,
    },
    features: {
      bathrooms: 6,
      bedrooms: 5,
      floors: 2,
      parkingArea: 100,
    },
    finishing: "Fully Finished",
    plans: ["katameya1.jpg"],
    location: {
      title: "Katameya Heights",
      type: "Point",
      coordinates: [31.4679, 29.9985],
    },
    compound: {
      name: "Katameya Heights",
      launchDate: new Date("2019-05-10"),
      amenities: ["Golf Course", "Tennis Court", "Club House"],
    },
    paymentPlan: {
      installment: 96,
      downPayment: 20,
    },
  },
  {
    title: "Sea View Apartment in North Coast",
    type: "Apartment",
    price: 3800000,
    description: "Charming apartment directly facing the Mediterranean",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 160,
      garden: 0,
      terrace: 20,
      roof: 0,
    },
    features: {
      bathrooms: 2,
      bedrooms: 2,
      floors: 1,
    },
    finishing: "Fully Finished",
    location: {
      title: "North Coast",
      type: "Point",
      coordinates: [28.5091, 30.7375],
    },
    compound: {
      name: "Marassi",
      launchDate: new Date("2020-07-01"),
      amenities: ["Beach Access", "Swimming Pool", "Security"],
    },
    paymentPlan: {
      installment: 72,
      downPayment: 10,
    },
  },
  {
    title: "Contemporary Townhouse in Mivida",
    type: "Townhouse",
    price: 6200000,
    description: "Triple-storey townhouse in a gated family-friendly community",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 230,
      garden: 120,
      terrace: 25,
      roof: 0,
    },
    features: {
      bathrooms: 3,
      bedrooms: 4,
      floors: 3,
    },
    finishing: "Semi Finished",
    location: {
      title: "New Cairo",
      type: "Point",
      coordinates: [31.4725, 30.0321],
    },
    compound: {
      name: "Mivida",
      launchDate: new Date("2021-01-10"),
      amenities: ["Green Parks", "Community Center", "Security"],
    },
    paymentPlan: {
      installment: 96,
      downPayment: 15,
    },
  },
  {
    title: "Luxury Penthouse in Heliopolis",
    type: "Penthouse",
    price: 9700000,
    description: "Stylish penthouse with city view and modern layout",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 310,
      garden: 0,
      terrace: 80,
      roof: 280,
    },
    features: {
      bathrooms: 4,
      bedrooms: 4,
      floors: 1,
    },
    finishing: "Fully Finished",
    plans: ["heliopent.jpg"],
    location: {
      title: "Heliopolis",
      type: "Point",
      coordinates: [31.3281, 30.0835],
    },
    compound: {
      name: "City View Heights",
      launchDate: new Date("2022-04-15"),
      amenities: ["Elevator", "Underground Parking", "Gym"],
    },
    paymentPlan: {
      installment: 84,
      downPayment: 20,
    },
  },
  {
    title: "Beach Villa in Ain Sokhna",
    type: "Villa",
    price: 13500000,
    description: "Villa with panoramic sea view and private beach access",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 520,
      garden: 280,
      terrace: 45,
      roof: 90,
    },
    features: {
      bathrooms: 5,
      bedrooms: 5,
      floors: 2,
    },
    finishing: "Fully Finished",
    location: {
      title: "Ain Sokhna",
      type: "Point",
      coordinates: [32.3522, 29.6115],
    },
    compound: {
      name: "La Vista",
      launchDate: new Date("2021-08-20"),
      amenities: ["Private Beach", "Cafe", "Security", "Pool"],
    },
    paymentPlan: {
      installment: 108,
      downPayment: 25,
    },
  },
  {
    title: "Modern Apartment in Zamalek",
    type: "Apartment",
    price: 7200000,
    description: "Renovated spacious apartment in central Cairo with Nile view",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 240,
      garden: 0,
      terrace: 10,
      roof: 0,
    },
    features: {
      bathrooms: 3,
      bedrooms: 3,
      floors: 1,
    },
    finishing: "Fully Finished",
    location: {
      title: "Zamalek",
      type: "Point",
      coordinates: [31.224, 30.057],
    },
    compound: {
      name: "Nile Residence",
      launchDate: new Date("2018-09-01"),
      amenities: ["Concierge", "Elevator", "Security"],
    },
    paymentPlan: {
      installment: 60,
      downPayment: 25,
    },
  },
  {
    title: "Green Townhouse in Hyde Park",
    type: "Townhouse",
    price: 6100000,
    description: "Eco-friendly smart home in a lush green compound",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 240,
      garden: 140,
      terrace: 30,
      roof: 0,
    },
    features: {
      bathrooms: 3,
      bedrooms: 3,
      floors: 2,
    },
    finishing: "Semi Finished",
    location: {
      title: "New Cairo",
      type: "Point",
      coordinates: [31.4755, 30.0421],
    },
    compound: {
      name: "Hyde Park",
      launchDate: new Date("2020-11-01"),
      amenities: ["Smart Home", "Clubhouse", "Security"],
    },
    paymentPlan: {
      installment: 84,
      downPayment: 15,
    },
  },
  {
    title: "Penthouse in New Capital",
    type: "Penthouse",
    price: 9900000,
    description: "Modern penthouse with skyline views and infinity pool",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 330,
      garden: 0,
      terrace: 120,
      roof: 310,
    },
    features: {
      bathrooms: 4,
      bedrooms: 3,
      floors: 1,
    },
    finishing: "Fully Finished",
    location: {
      title: "New Capital",
      type: "Point",
      coordinates: [31.6167, 29.9925],
    },
    compound: {
      name: "Skyline Residences",
      launchDate: new Date("2022-10-01"),
      amenities: ["Infinity Pool", "Gym", "Underground Parking"],
    },
    paymentPlan: {
      installment: 108,
      downPayment: 10,
    },
  },
  {
    title: "Family Apartment in Shorouk City",
    type: "Apartment",
    price: 2800000,
    description:
      "Affordable family apartment in a quiet suburb with easy access",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 140,
      garden: 0,
      terrace: 10,
      roof: 0,
    },
    features: {
      bathrooms: 2,
      bedrooms: 3,
      floors: 1,
    },
    finishing: "Semi Finished",
    location: {
      title: "Shorouk City",
      type: "Point",
      coordinates: [31.6405, 30.1412],
    },
    compound: {
      name: "Shorouk Residences",
      launchDate: new Date("2019-06-15"),
      amenities: ["Playground", "Parking", "Security"],
    },
    paymentPlan: {
      installment: 60,
      downPayment: 10,
    },
  },
  {
    title: "Hillside Villa in Mokattam",
    type: "Villa",
    price: 11200000,
    description: "Hillside luxury villa with panoramic views of Cairo",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg",
    ],
    area: {
      unit: 400,
      garden: 200,
      terrace: 40,
      roof: 100,
    },
    features: {
      bathrooms: 4,
      bedrooms: 4,
      floors: 2,
    },
    finishing: "Fully Finished",
    location: {
      title: "Mokattam",
      type: "Point",
      coordinates: [31.2844, 30.0122],
    },
    compound: {
      name: "Hillside Retreat",
      launchDate: new Date("2020-02-20"),
      amenities: ["Viewpoint", "Community Garden", "Security"],
    },
    paymentPlan: {
      installment: 96,
      downPayment: 15,
    },
  },
];

export const seedProperties = async () => {
  try {
    console.log("Checking if properties already exist...");
    const properties = await Property.find();

    if (properties.length > 0) {
      console.log(
        `Found ${properties.length} existing properties, skipping seed.`
      );
      return;
    }

    console.log(`Inserting ${propertySeeds.length} properties...`);
    await Property.insertMany(propertySeeds);
    console.log("Properties inserted successfully");
  } catch (error) {
    console.error("Error seeding properties:", error);
    throw error; // Re-throw to be caught by the caller
  }
};
