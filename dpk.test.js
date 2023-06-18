const { deterministicPartitionKey, hashData } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given an undefined event", () => {
    const trivialKey = deterministicPartitionKey(undefined);
    expect(trivialKey).toBe("0");
  })


  it("should hash the stringified event if event.partitionKey is undefined", () => {
    const event = {
      someProperty: "value",
    };
    const hashedKey = hashData(JSON.stringify(event));
    const result = deterministicPartitionKey(event);
    expect(result).toEqual(hashedKey);
  });

  it("should hash the partition key if it exceeds the maximum length", () => {
    const longKey = "a".repeat(350);
    const event = {
      partitionKey: longKey,
    };
    const hashedKey = hashData(longKey);
    const result = deterministicPartitionKey(event);
    expect(result).toEqual(hashedKey);
  });

  it("should return the partition key if it is already a string", () => {
    const event = {
      partitionKey: "abc",
    };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("abc");
  });
  

});
