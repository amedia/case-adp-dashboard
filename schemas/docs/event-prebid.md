
# Prebid Event

```
https://www.adplogger.no/json-schema/event-prebid
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
  "schemaName": "event-prebid",
  "payload": {
    "type": "prebid",
    "deltaTimestamp": 5011,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "WebPageElement",
    "bidder": "rubicon",
    "adUnitCode": "ad-midtbanner-2",
    "adType": "banner",
    "cpm": 3.338788,
    "won": false,
    "timeToRespond": 122
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-prebid`
- Allowed values: event-prebid


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[bidder](#bidder) | string | required | Name of bidder
[adUnitCode](#adUnitCode) | string | required | Ad unit Code
[adType](#adType) | string | optional | Prebid ad type
[cpm](#cpm) | number | required | Cost per thousand views
[won](#won) | boolean | required | Won or lost status for the bid
[timeToRespond](#timeToRespond) | integer | required | Time in milliseconds for a prebid request
[type](#type) | string | required | Type of event- Type: object
- is required


payload has the following properties:


`bidder`

Name of bidder

- Type: string
- is required

`adUnitCode`

Ad unit Code

- Type: string
- is required

`adType`

Prebid ad type

- Type: string
- is optional
- Allowed values: banner, native

`cpm`

Cost per thousand views

- Type: number
- is required

`won`

Won or lost status for the bid

- Type: boolean
- is required

`timeToRespond`

Time in milliseconds for a prebid request

- Type: integer
- is required

`type`

Type of event

- Type: string
- is required
- Allowed values: prebid

