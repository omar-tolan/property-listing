import request from "supertest";
import { Property } from "../../models/property";
import { Types } from "mongoose";

describe("Listings API", () => {
    test("Get All Listings", async () => {
        const response = await request("http://localhost:3333").get("/listings/all");
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(response.body.data.length).toBeGreaterThan(0);
    })

    test("Get Listing By ID", async () => {
        const testListing = new Property({
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
        })

        await testListing.save()
        const response = await request("http://localhost:3333").get(`/listings/${testListing._id}`);
        expect(response.status).toBe(200);
        expect(response.body._id.toString()).toBe((testListing._id as Types.ObjectId).toString());
    })

    test("Get NotFound Error", async () => {
        const response = await request("http://localhost:3333").get(`/listings/123456789012345678901234`);
        expect(response.status).toBe(404);
    })

    test("Get BadRequest Error", async () => {
        const response = await request("http://localhost:3333").get(`/listings/agsd`);
        expect(response.status).toBe(400);
    })

    test("Add Listing", async () => {
        const reqBody = {
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
        }
        const response = await request("http://localhost:3333").post("/listings").send(reqBody);
        expect(response.status).toBe(201);
    })

    test("Add Invalid Listing", async () => {
        const response = await request("http://localhost:3333").post("/listings").send({});
        expect(response.status).toBe(400);
    })
})