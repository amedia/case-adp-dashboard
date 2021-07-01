
# Legacy Event

```
https://www.adplogger.no/json-schema/event-legacy
```

Event emitted by the legacy adplogger

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
  "schemaName": "event-legacy",
  "payload": {
    "deltaTimestamp": 504,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "WebPageElement",
    "type": "legacy",
    "data": [
      {
        "name": "classfied-company-id",
        "value": "42"
      },
      {
        "name": "a_brws_prf_fmpi",
        "value": "2433"
      }
    ]
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-legacy`
- Allowed values: event-legacy


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | required | Type of event
[data](#data) | array | required | An dictionary with legacy data points- Type: object
- is required


payload has the following properties:


`type`

Type of event

- Type: string
- is required
- Allowed values: legacy

`data`

An dictionary with legacy data points

- Type: array
- is required


data is an array of:


`name`

Name of the legacy property

- Type: string
- is required

`value`

Legacy events are http parameters and therefore strings (or comma separated lists of strings)

- Type: string
- is required

