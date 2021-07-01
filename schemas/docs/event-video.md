
# Video Event

```
https://www.adplogger.no/json-schema/event-video
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
  "schemaName": "event-video",
  "payload": {
    "type": "video",
    "adpType": "pause",
    "deltaTimestamp": 2400,
    "concernsMeta": "9273aeb1-1efe-42c7-9ed4-929a076ca474",
    "metaType": "Video",
    "currentTime": 3500,
    "watchTime": 2800,
    "voulme": 80,
    "playbackRate": 1,
    "volume": 50
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `event-video`
- Allowed values: event-video


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[adpType](#adpType) | string | optional | Timestamp events for various (player events)[https://flowplayer.com/developers/player/player-api#events]. This property identifies the type and `deltaTimestamp` set the timestamp
[currentTime](#currentTime) | number | optional | Current position in videoplayback
[watchTime](#watchTime) | number | optional | Time spent watching the video
[volume](#volume) | integer | optional | Current volume level
[playbackRate](#playbackRate) | integer | optional | The speed of the playback with this property. A value larger than 1 will fast forward. A positive value smaller than 1 will play the video in slowmotion
[type](#type) | string | required | Type of event- Type: object
- is required


payload has the following properties:


`adpType`

Timestamp events for various (player events)[https://flowplayer.com/developers/player/player-api#events]. This property identifies the type and `deltaTimestamp` set the timestamp

- Type: string
- is optional
- Allowed values: fullscreenenter, fullscreenexit, muted, ended, pause, playing, loadstart, loadeddata, loadedmetadata, resize, seeking, seeked, volumechange, cuepointstart, cuepointend, timeupdate

`currentTime`

Current position in videoplayback

- Type: number
- is optional
- Min: 0

`watchTime`

Time spent watching the video

- Type: number
- is optional
- Min: 0

`volume`

Current volume level

- Type: integer
- is optional
- Min: 0
- Max: 100

`playbackRate`

The speed of the playback with this property. A value larger than 1 will fast forward. A positive value smaller than 1 will play the video in slowmotion

- Type: integer
- is optional

`type`

Type of event

- Type: string
- is required
- Allowed values: video

