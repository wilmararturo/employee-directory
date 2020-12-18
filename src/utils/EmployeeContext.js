import { createContext } from "react";

const EmployeeContext = createContext({
  gender: "",
  name: { title: "", first: "", last: "" },
  location: {
    street: { number: 0, name: "" },
    city: "",
    state: "",
    country: "",
    postcode: 0,
    coordinates: { latitude: "", longitude: "" },
    timezone: {
      offset: "",
      description: "",
    },
  },
  email: "",
  login: {
    uuid: "",
    username: "",
    password: "",
    salt: "",
    md5: "",
    sha1: "",
    sha256: "",
  },
  dob: { date: "1", age: 0 },
  registered: { date: "", age: 0 },
  phone: "",
  cell: "",
  id: { name: "", value: "" },
  picture: {
    large: "",
    medium: "",
    thumbnail: "",
  },
  nat: "US",
});

export default EmployeeContext;
