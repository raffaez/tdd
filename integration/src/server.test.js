import { expect } from "chai";
import sinon from "sinon";
import request from "supertest";
import db from "./db";
import { app } from "./server";

describe("GET /users/:username", () => {
  it("returns the correct user when given a valid username", async () => {
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

    const stub = sinon.stub(db, "getUserByUsername").resolves(fakeData);

    await request(app)
      .get("/users/abc")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(fakeData);

    expect(stub.getCall(0).args[0]).to.equal("abc");

    stub.restore();
  });

  it("returns the correct response when there is an error", async () => {
    const fakeError = { message: "Something went wrong!" };
    const stub = sinon.stub(db, "getUserByUsername").throws(fakeError);

    await request(app)
      .get("/users/abc")
      .expect(500)
      .expect("Content-Type", /json/)
      .expect(fakeError);

    stub.restore();
  });
});
