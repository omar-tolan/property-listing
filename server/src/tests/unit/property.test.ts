import { Property } from "../../models/property";

describe("Property Model Validation Test", () => {
    test("Valid Property", async () => {
        try{
            const property = new Property({
                title: "Test Property",
                type: "Apartment",
                price: 1000000,
                description: "This is a test property",
                images: ["image1.jpg", "image2.jpg"],
                area: {
                    unit: 100,
                    garden: 0,
                    terrace: 0,
                    roof: 0
                },
                features: {
                    bathrooms: 2,
                    bedrooms: 3,
                    floors: 1,
                    parkingArea: 10
                },
                finishing: "Fully Finished",
                location: {
                    type: "Point",
                    coordinates: [30.0, 30.0]
                },
                compound: {
                    name: "Test Compound",
                    launchDate: new Date(),
                    amenities: ["Pool", "Gym"]
                },
                paymentPlan: {
                    installment: 12,
                    downPayment: 10
                }
            });
        } catch(error){
            expect(error).toBeUndefined();
        }
    });

    test("Invalid Property", async () => {
        try{
            const property = new Property({});
        } catch(error){
            expect(error).toBeDefined();
        }
    });
})