const enhancer = require('./enhancer.js');

const items = [
    {
        name: "Iron Sword",
        durability: 89,
        enhancement: 2,
    }
];

describe("test enhancer", () => {
    it('should repair item', () => {
        expect(enhancer.repair(items[0]).durability).toBe(100);
    });

    it('should add a level of enhancement', () => {
        expect(enhancer.succeed(items[0]).enhancement).toBe(3)
    })

    it('should lose 5 durability and 0 enhancement', () => {
        expect(enhancer.fail(items[0])).toMatchObject({
            ...items[0],
            durability: 84
        })
    })

    // * Stretch
    it('should add enhancement to name', () => {
        expect(enhancer.get(items[0]).name).toBe("[+2] Iron Sword");
    })
})