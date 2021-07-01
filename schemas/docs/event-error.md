
# Error Event

```
https://www.adplogger.no/json-schema/event-error
```

Error logging event

Extends: [Adp Event](./event.md)

## Properties

Name | Type | Required | Description
---- | ---- | -------- | -----------
[schemaName](#schemaName) | string | optional | undefined
[payload](#payload) | object | required | undefined

## Example

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "event-error",
  "payload": {
    "deltaTimestamp": 504,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "WebPageElement",
    "type": "error",
    "level": "fatal",
    "message": "Object is not an object",
    "stacktrace": [
      {
        "columnNumber": 29,
        "lineNumber": 26,
        "fileName": "/app/index.js",
        "source": "    at /app/index.js:26:29"
      },
      {
        "columnNumber": 12,
        "lineNumber": 831,
        "fileName": "internal/modules/cjs/loader.js",
        "functionName": "Function.Module.runMain",
        "source": "    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)"
      },
      {
        "columnNumber": 19,
        "lineNumber": 283,
        "fileName": "internal/bootstrap/node.js",
        "functionName": "startup",
        "source": "    at startup (internal/bootstrap/node.js:283:19)"
      },
      {
        "isConstructor": false,
        "isEval": false,
        "isNative": true,
        "isToplevel": false,
        "columnNumber": 3,
        "lineNumber": 623,
        "fileName": "internal/bootstrap/node.js",
        "functionName": "bootstrapNodeJSCore",
        "source": "    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)"
      }
    ],
    "source": "Amedia Explorer 6"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-error`
- Allowed values: event-error


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | required | Type of event
[level](#level) | string | required | Log level for error message
[message](#message) | string | required | Error message
[stacktrace](#stacktrace) | array | optional | Stack trace from the error as a list of stack frames
[source](#source) | string | optional | Which component/application triggered the error- Type: object
- is required


payload has the following properties:


`type`

Type of event

- Type: string
- is required
- Allowed values: error

`level`

Log level for error message

- Type: string
- is required
- Allowed values: fatal, error, warning, info, debug

`message`

Error message

- Type: string
- is required

`stacktrace`

Stack trace from the error as a list of stack frames

- Type: array
- is optional


stacktrace is an array of:


`isConstructor`

Whether the call is a construct call

- Type: boolean
- is optional

`isEval`

If the current function was created using eval

- Type: boolean
- is optional

`isNative`

If a stack frame is within the js engine

- Type: boolean
- is optional

`isToplevel`

Is this a top-level invocation, that is, is this the global object

- Type: boolean
- is optional

`columnNumber`

The column number for the function that triggers the error

- Type: integer
- is optional

`lineNumber`

The line number for the function that triggers the error

- Type: integer
- is optional

`fileName`

The file name if the function wasa defined in a script/module

- Type: string
- is optional

`functionName`

The name of the function that generated the error, if the error not originated from a global scope

- Type: string
- is optional

`source`

The current location within the source

- Type: string
- is optional

`source`

Which component/application triggered the error

- Type: string
- is optional

