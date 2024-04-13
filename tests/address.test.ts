import supertest from "supertest";
import { AddressTest, ContactTest, UserTest } from "./test-util";
import { web } from "../src/app/web";
import { logger } from "../src/app/logging";

describe('POST /api/contacts/:contactId/addresses', () => {

    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create();
    });

    afterEach(async () => {
        await AddressTest.deleteAll();
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it('should be able to create address', async () => {
        const contact = await ContactTest.get();
        const response = await supertest(web)
            .post(`/api/contacts/${contact.id}/addresses`)
            .set("X-API-TOKEN", "test")
            .send({
                street: "123 Main St",
                city: "Springfield",
                province: "IL",
                country: "USA",
                postal_code: "62701"
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.street).toBe("123 Main St");
        expect(response.body.data.city).toBe("Springfield");
        expect(response.body.data.province).toBe("IL");
        expect(response.body.data.country).toBe("USA");
        expect(response.body.data.postal_code).toBe("62701");
    });


    it('should be reject create new address if request is invalid', async () => {
        const contact = await ContactTest.get();
        const response = await supertest(web)
            .post(`/api/contacts/${contact.id}/addresses`)
            .set("X-API-TOKEN", "test")
            .send({
                street: "123 Main St",
                city: "Springfield",
                province: "IL",
                country: "",
                postal_code: ""
            });

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });

    it('should be reject create new address if contact does not exist', async () => {
        const response = await supertest(web)
            .post(`/api/contacts/999/addresses`)
            .set("X-API-TOKEN", "test")
            .send({
                street: "123 Main St",
                city: "Springfield",
                province: "IL",
                country: "USA",
                postal_code: "62701"
            });

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });
});

describe('GET /api/contacts/:contactId/addresses/:addressId', () => {

    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create();
        await AddressTest.create();
    });

    afterEach(async () => {
        await AddressTest.deleteAll();
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it('should be able to get address', async () => {

        const contact = await ContactTest.get();
        const address = await AddressTest.get();

        const response = await supertest(web)
            .get(`/api/contacts/${contact.id}/addresses/${address.id}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(address.id);
        expect(response.body.data.street).toBe(address.street);
        expect(response.body.data.city).toBe(address.city);
        expect(response.body.data.province).toBe(address.province);
        expect(response.body.data.country).toBe(address.country);
        expect(response.body.data.postal_code).toBe(address.postal_code);

    });

    it('should be reject get address if contact does not exist', async () => {
        const address = await AddressTest.get();
        const response = await supertest(web)
            .get(`/api/contacts/999/addresses/${address.id}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });

    it('should be reject get address if address does not exist', async () => {
        const contact = await ContactTest.get();
        const response = await supertest(web)
            .get(`/api/contacts/${contact.id}/addresses/999`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });

});

describe('PUT /api/contacts/:contactId/addresses/:addressId', () => {

    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create();
        await AddressTest.create();
    });

    afterEach(async () => {
        await AddressTest.deleteAll();
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it('should be able to update address', async () => {

        const contact = await ContactTest.get();
        const address = await AddressTest.get();

        const response = await supertest(web)
            .put(`/api/contacts/${contact.id}/addresses/${address.id}`)
            .set("X-API-TOKEN", "test")
            .send({
                street: "456 Main St",
                city: "Springfield",
                province: "IL",
                country: "USA",
                postal_code: "62701"
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(address.id);
        expect(response.body.data.street).toBe("456 Main St");
        expect(response.body.data.city).toBe("Springfield");
        expect(response.body.data.province).toBe("IL");
        expect(response.body.data.country).toBe("USA");
        expect(response.body.data.postal_code).toBe("62701");
    });

    it('should be reject update address if request is invalid', async () => {

        const contact = await ContactTest.get();
        const address = await AddressTest.get();

        const response = await supertest(web)
            .put(`/api/contacts/${contact.id}/addresses/${address.id}`)
            .set("X-API-TOKEN", "test")
            .send({
                street: "456 Main St",
                city: "Springfield",
                province: "IL",
                country: "",
                postal_code: ""
            });

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });

    it('should be reject update address if contact does not exist', async () => {

        const address = await AddressTest.get();

        const response = await supertest(web)
            .put(`/api/contacts/999/addresses/${address.id}`)
            .set("X-API-TOKEN", "test")
            .send({
                street: "456 Main St",
                city: "Springfield",
                province: "IL",
                country: "USA",
                postal_code: "62701"
            });

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });

    it('should be reject update address if address does not exist', async () => {

        const contact = await ContactTest.get();

        const response = await supertest(web)
            .put(`/api/contacts/${contact.id}/addresses/999`)
            .set("X-API-TOKEN", "test")
            .send({
                street: "456 Main St",
                city: "Springfield",
                province: "IL",
                country: "USA",
                postal_code: "62701"
            });

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });
});

describe('DELETE /api/contacts/:contactId/addresses/:addressId', () => {

    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create();
        await AddressTest.create();
    });

    afterEach(async () => {
        await AddressTest.deleteAll();
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it('should be able to remove address', async () => {

        const contact = await ContactTest.get();
        const address = await AddressTest.get();

        const response = await supertest(web)
            .delete(`/api/contacts/${contact.id}/addresses/${address.id}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data).toBe("OK");
    });

    it('should be reject remove address if contact does not exist', async () => {

        const address = await AddressTest.get();

        const response = await supertest(web)
            .delete(`/api/contacts/999/addresses/${address.id}`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });

    it('should be reject remove address if address does not exist', async () => {

        const contact = await ContactTest.get();

        const response = await supertest(web)
            .delete(`/api/contacts/${contact.id}/addresses/999`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });
});

describe('GET /api/contacts/:contactId/addresses', () => {

    beforeEach(async () => {
        await UserTest.create();
        await ContactTest.create();
        await AddressTest.create();
    });

    afterEach(async () => {
        await AddressTest.deleteAll();
        await ContactTest.deleteAll();
        await UserTest.delete();
    });

    it('should be able to list addresses', async () => {

        const contact = await ContactTest.get();
        const response = await supertest(web)
            .get(`/api/contacts/${contact.id}/addresses`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.length).toBe(1);
    });

    it('should be reject list addresses if contact does not exist', async () => {

        const response = await supertest(web)
            .get(`/api/contacts/999/addresses`)
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    });

});
