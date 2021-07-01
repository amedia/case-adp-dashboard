
# Video Ad Event

```
https://www.adplogger.no/json-schema/event-video-ad
```

User interacts with a video.

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
  "schemaName": "event-video-ad",
  "payload": {
    "type": "video-ad",
    "adpType": "ad-started",
    "adType": "annoying",
    "deltaTimestamp": 2400,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "Video",
    "currentTime": 3500,
    "duration": 28000
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-video-ad`
- Allowed values: event-video-ad


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[adpType](#adpType) | string | optional | Video ad events
[adType](#adType) | string | optional | Type of video ad
[adId](#adId) | string | optional | Ad identifier
[currentTime](#currentTime) | number | optional | Current position in videoplayback
[duration](#duration) | number | optional | Video ad duration in ms
[type](#type) | string | required | Type of event- Type: object
- is required


payload has the following properties:


`adpType`

Video ad events

- Type: string
- is optional
- Allowed values: ad-started, ad-skipped, ad-blocked, ad-completed

`adType`

Type of video ad

- Type: string
- is optional

`adId`

Ad identifier

- Type: string
- is optional

`currentTime`

Current position in videoplayback

- Type: number
- is optional
- Min: 0

`duration`

Video ad duration in ms

- Type: number
- is optional
- Min: 0

`type`

Type of event

- Type: string
- is required
- Allowed values: video-ad

