
# Custom Event

```
https://www.adplogger.no/json-schema/event-custom
```

Custom data. Should only be used in time boxed circumstances. If we see a custom event as permanent, we should create an new event type

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
  "schemaName": "event-custom",
  "payload": {
    "deltaTimestamp": 3504,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "WebPageElement",
    "type": "custom",
    "data": [
      {
        "name": "descriptive-name-1",
        "value": false
      },
      {
        "name": "descriptive-name-2",
        "value": "foo"
      },
      {
        "name": "descriptive-name-3",
        "value": 12
      }
    ]
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-custom`
- Allowed values: event-custom


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | required | Type of event
[data](#data) | array | optional | An dictionary with custom data points- Type: object
- is required


payload has the following properties:


`type`

Type of event

- Type: string
- is required
- Allowed values: custom

`data`

An dictionary with custom data points

- Type: array
- is optional


data is an array of:


`name`

Name of the custom property

- Type: string
- is required

`value`

Custom events accepts one or more additional properties but only in primitive formats

- Type: string,number,boolean
- is required

