import { Property } from "../../models/property";

export const cleanUpDb = async () => {
    await Property.deleteMany({})
}
