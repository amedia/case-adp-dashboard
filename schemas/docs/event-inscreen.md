
# Inscreen Event

```
https://www.adplogger.no/json-schema/event-inscreen
```

Event for when an meta element enters the viewport and is considered viewed by the user. 50% of the element must be in viewport for at least 1 second if the element is smaller than the viewport. If the element is larger than the viewport it must cover at least 50% of the viewport for at least 1 second.

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
  "schemaName": "event-inscreen",
  "payload": {
    "type": "inscreen",
    "deltaTimestamp": 5011,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "Article",
    "duration": 432,
    "area": 75
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-inscreen`
- Allowed values: event-inscreen


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | required | Type of event
[duration](#duration) | integer | required | Time in milliseconds the element has been visible to the user in active mode.
[area](#area) | integer | optional | How much of the element has been visible in the viewport in percent
[deltaTimestamp](#deltaTimestamp) | integer | required | Delta time in milliseconds from first meaningfull paint. the time the element entered the viewport can be derived from `deltaTimeStamp - duration`- Type: object
- is required


payload has the following properties:


`type`

Type of event

- Type: string
- is required
- Allowed values: inscreen

`duration`

Time in milliseconds the element has been visible to the user in active mode.

- Type: integer
- is required

`area`

How much of the element has been visible in the viewport in percent

- Type: integer
- is optional
- Min: 0
- Max: 100

`deltaTimestamp`

Delta time in milliseconds from first meaningfull paint. the time the element entered the viewport can be derived from `deltaTimeStamp - duration`

- Type: integer
- is required

