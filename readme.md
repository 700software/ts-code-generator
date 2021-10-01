TsCodeGenerator
===============

[![Build Status](https://travis-ci.org/dsherret/ts-code-generator.svg)](https://travis-ci.org/dsherret/ts-code-generator)
[![Coverage Status](https://coveralls.io/repos/dsherret/ts-code-generator/badge.svg?branch=master&service=github)](https://coveralls.io/github/dsherret/ts-code-generator?branch=master)
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This library separates out the code generation side of [ts-type-info](http://github.com/dsherret/ts-type-info) and doesn't have a dependency on the typescript compiler.
It will be the future base of ts-type-info.

Still needs a major refactoring. Not intended for use yet.

## Example

```typescript
import {createFile} from "ts-code-generator";

// create whatever you like at the start
const file = createFile({
    classes: [{
        name: "MyClass",
        methods: [{
            name: "myMethod",
            parameters: [{ name: "myParam", type: "string" }],
            onBeforeWrite: writer => writer.write("// myMethod is here"),
            onWriteFunctionBody: writer => {
                writer.write(`if (myParam != null && myParam.length > 40)`).block(() => {
                    writer.write("alert(myParam)");
                });
                writer.newLine().write("return myParam;");
            }
        }]
    }]
});

// add to it later
const myClass = file.getClass("MyClass");
myClass.isAbstract = true;
myClass.addDecorator({
    name: "MyDecorator"
});

myClass.addProperty({
    name: "myProperty1",
    type: "string"
});
myClass.addProperty({
    name: "myProperty2",
    type: "number",
    defaultExpression: "4"
});

// write it out
console.log(file.write());
```

Outputs:

```typeScript
@MyDecorator
abstract class MyClass {
    myProperty1: string;
    myProperty2 = 4;

    // myMethod is here
    myMethod(myParam: string) {
        if (myParam != null && myParam.length > 40) {
            alert(myParam);
        }

        return myParam;
    }
}
```
