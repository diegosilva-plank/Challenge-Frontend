/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    preset: "ts-jest",
    clearMocks: true,
    coverageProvider: "v8",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverageFrom: [
        "src/components/__tests__/*.tsx", 
    ],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
    }
};