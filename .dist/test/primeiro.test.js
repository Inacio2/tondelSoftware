"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCompany_1 = __importDefault(require("../src/aplication/usecases/company/CreateCompany"));
test("should enter in the park", function () {
    const createCompany = new CreateCompany_1.default();
    const company = createCompany.run();
    expect(company.name).toBe("tondel");
});
