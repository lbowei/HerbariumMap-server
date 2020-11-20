const app = require("./app");
const request = require("supertest");

describe("get herbarium Record", () => {
  test("It should responde with an array of herbarium", async () => {
    const response = await request(app).get("/herbarium");
    expect(response.statusCode).toBe(200);
    expect(response.body[0].occid).toBe(6167796);
    expect(response.body[0].decimalLatitude).toBe(34.738624);
    expect(response.body[0].decimalLongitude).toBe(-79.054275);
    expect(response.body[0].recordNumber).toBe(3060);
    expect(response.body[0].county).toBe("Robeson");
    expect(response.body[0].Access).not.toBeNull();
  });
});

describe("add herbarium Record", () => {
  test("It should responde with the infomation I put in request", async () => {
    const newData = {
      occid: 6167796,
      catalogNumber: "NCU00145789",
      recordedBy: "Britt, Robert Franklin",
      recordNumber: 3060,
      eventDate: "10/10/64",
      country: "United States",
      stateProvince: "North Carolina",
      county: "Robeson",
      decimalLatitude: 34.738624,
      decimalLongitude: -79.054275,
      Access: [
        {
          accessDate: "10/10/19",
          cnt: 1,
        },
        {
          accessDate: "11/27/19",
          cnt: 1,
        },
      ],
    };
    const response = await request(app).post("/herbarium/add").send(newData);
    expect(response.statusCode).toBe(200);
    expect(response.body.data.occid).toBe(6167796);
    expect(response.body.data.decimalLatitude).toBe(34.738624);
    expect(response.body.data.decimalLongitude).toBe(-79.054275);
    expect(response.body.data.recordNumber).toBe(3060);
    expect(response.body.data.county).toBe("Robeson");
    expect(response.body.data.Access).not.toBeNull();
  });
});

describe("show the access record", () => {
  test("It should responde with an array of access record", async () => {
    const response = await request(app).get("/access");
    expect(response.statusCode).toBe(200);
    expect(response.body[0].HerbariumID).toBe("5f8615d0584ca9640d518454");
    expect(response.body[0].latitude).toBe("38.7827743");
    expect(response.body[0].longitude).toBe("-76.64342");
    expect(response.body[0].date).toBe("2020-01-01");
  });
});

describe("Add a record to access database", () => {
  test("it should show the result i just put in", async () => {
    const newAccessData = {
      HerbariumID: "5f8615d0584ca9640d518454",
      date: "2020-01-01",
      latitude: "38.7827743",
      longitude: "-76.64342",
    };
    const response = await request(app).post("/access/add").send(newAccessData);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Herbarium added");
  });
});

// const response = request(app).get('http://localhost:5000/herbarium/');
// console.log(response)
