const Reader = require("./../../lib/utils/reader");

describe("Tests Para Reader", () => {

    test("Requerimiento Test para Json", () => {
        const totalstudents = Reader.readJsonFile("visualpartners.json");
        expect(totalstudents.length).toBe(51);
    });
});
