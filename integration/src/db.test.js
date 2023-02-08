import { expect } from "chai";
import { getUserByUsername } from "./db";
import {
  resetDatabase,
  setDatabaseData,
  getDatabaseData,
} from "./test-helpers";

describe("getUserByUsername", () => {
  afterEach("reset database", async () => {
    await resetDatabase();
  });

  it("get the correct user from the database given a username", async () => {
    const fakeData = [
      {
        id: "123",
        username: "abc",
        email: "abc@email.com",
      },
      {
        id: "124",
        username: "wrong",
        email: "wrong@email.com",
      },
    ];

    await setDatabaseData("users", fakeData);

    const actual = await getUserByUsername("wrong");
    const finalDbState = await getDatabaseData("users");

    const expected = {
      id: "124",
      username: "wrong",
      email: "wrong@email.com",
    };

    expect(actual).excludingEvery("_id").to.deep.equal(expected);
    expect(finalDbState).excludingEvery("_id").to.deep.equal(fakeData);
  });
});
