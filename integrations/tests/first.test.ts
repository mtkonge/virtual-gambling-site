async function stuff() {
    return "stuff";
}

describe("scenario", () => {
    test("succeeding", async () => {
        expect(await stuff()).toBe("stuff");
    });

    // test("failing", async () => {
    //     expect(await stuff()).not.toBe("stuff");
    // });
});
