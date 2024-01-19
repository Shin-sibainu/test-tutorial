// src/setupTests.js
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
// import { TextEncoder, TextDecoder } from "util";
// import { TextEncoder } from "node:util";
// global.TextEncoder = TextEncoder;

// Object.assign(global, { TextDecoder, TextEncoder });

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
