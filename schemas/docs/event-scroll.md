
# Scroll Event

```
https://www.adplogger.no/json-schema/event-scroll
```

Event after user has ended scrolling

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
  "schemaName": "event-scroll",
  "payload": {
    "type": "scroll",
    "deltaTimestamp": 3452,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "Teaser",
    "start": 420,
    "stop": 540,
    "duration": 1230,
    "max": 4500
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-scroll`
- Allowed values: event-scroll


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[start](#start) | integer | required | PageYOffset when scrolling start
[stop](#stop) | integer | required | PageYOffset when scrolling stop
[duration](#duration) | integer | required | Duration of scrolling in milliseconds
[max](#max) | integer | required | Max possible pageYOffeset when scoll occurs. Equal docuemnt height - window height
[type](#type) | string | required | Type of event- Type: object
- is required


payload has the following properties:


`start`

PageYOffset when scrolling start

- Type: integer
- is required
- Min: 0

`stop`

PageYOffset when scrolling stop

- Type: integer
- is required
- Min: 0

`duration`

Duration of scrolling in milliseconds

- Type: integer
- is required
- Min: 0

`max`

Max possible pageYOffeset when scoll occurs. Equal docuemnt height - window height

- Type: integer
- is required
- Min: 0

`type`

Type of event

- Type: string
- is required
- Allowed values: scroll

