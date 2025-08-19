/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s"], // acha arquivos *.test.ts ou *.spec.ts
};
