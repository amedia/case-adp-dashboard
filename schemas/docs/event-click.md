
# Click Event

```
https://www.adplogger.no/json-schema/event-click
```

User click on an element

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
  "schemaName": "event-click",
  "payload": {
    "deltaTimestamp": 3504,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "Article",
    "type": "click",
    "link": "https://www.hadeland.no/vis/dodsannonser",
    "cssSelector": "#abc a",
    "coordinateX": 239,
    "coordinateY": 4212
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-click`
- Allowed values: event-click


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[link](#link) | string | optional | URL of clicked link
[cssSelector](#cssSelector) | string | required | Path to target element. NEED DEFINITION
[coordinateX](#coordinateX) | integer | required | Mouse or touch X-coordinate relative to document
[coordinateY](#coordinateY) | integer | required | Mouse or touch Y-coordinate relative to document
[type](#type) | string | required | Type of event- Type: object
- is required


payload has the following properties:


`link`

URL of clicked link

- Type: string
- is optional

`cssSelector`

Path to target element. NEED DEFINITION

- Type: string
- is required

`coordinateX`

Mouse or touch X-coordinate relative to document

- Type: integer
- is required
- Min: 0

`coordinateY`

Mouse or touch Y-coordinate relative to document

- Type: integer
- is required
- Min: 0

`type`

Type of event

- Type: string
- is required
- Allowed values: click

