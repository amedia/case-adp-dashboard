
# Comment Event

```
https://www.adplogger.no/json-schema/event-comment
```

Event for user comments.

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
  "schemaName": "event-comment",
  "payload": {
    "deltaTimestamp": 3504,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "WebPageElement",
    "type": "comment",
    "action": "created",
    "messageId": "5de224829859114fda6c0333"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-comment`
- Allowed values: event-comment


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | required | Type of event
[action](#action) | string | required | what action was performed
[messageId](#messageId) | string | required | Id of the comment message- Type: object
- is required


payload has the following properties:


`type`

Type of event

- Type: string
- is required
- Allowed values: comment

`action`

what action was performed

- Type: string
- is required
- Allowed values: created, edited, deleted

`messageId`

Id of the comment message

- Type: string
- is required

