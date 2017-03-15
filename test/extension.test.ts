import * as assert from 'assert';
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

const jsonObj = `
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "snake-case": true,
    "properties": {
        "id": {
            "description": "The unique identifier for a product",
            "type": "integer"
        },
        "name": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
        }
    },
    "required": ["id", "name", "price"]
}
`;

const jsObj = `
{
    $schema: "http://json-schema.org/draft-04/schema#",
    title: "Product",
    description: "A product from Acme's catalog",
    type: "object",
    snakeCase: true,
    properties: {
        id: {
            description: "The unique identifier for a product",
            type: "integer"
        },
        name: {
            description: "Name of the product",
            type: "string"
        },
        price: {
            type: "number",
            minimum: 0,
            exclusiveMinimum: true
        }
    },
    required: ["id", "name", "price"]
}
`;

suite("Extension Tests", () => {
    test("Replaces a JSON Object succesfully", () => {
        assert.equal(myExtension.convert(jsonObj), jsObj);
    });
});
