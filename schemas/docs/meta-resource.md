
# Resource

```
https://www.adplogger.no/json-schema/meta-resource
```

Resource metrics and data

Extends: [Common](./common.md)

## Properties

Name | Type | Required | Description
---- | ---- | -------- | -----------
[schemaName](#schemaName) | string | required | undefined
[payload](#payload) | object | required | Payload of the adplogger object

## Example

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-resource",
  "payload": {
    "type": "navigation",
    "firstMeaningfulPaint": 638,
    "cachedContent": true,
    "url": "https://example.com",
    "a_brws_prf_connectend": 0,
    "a_brws_prf_connectstart": 0,
    "a_brws_prf_domainlookupend": 0,
    "a_brws_prf_domainlookupstart": 0,
    "a_brws_prf_domcomplete": 3246,
    "a_brws_prf_domcontentloadedeventend": 327,
    "a_brws_prf_domcontentloadedeventstart": 326,
    "a_brws_prf_dominteractive": 301,
    "a_brws_prf_domloading": 32,
    "a_brws_prf_fcp": 370,
    "a_brws_prf_fmp_i": 638,
    "a_brws_prf_fp": 370,
    "a_brws_prf_loadeventend": 3252,
    "a_brws_prf_loadeventstart": 3246,
    "a_brws_prf_requeststart": 0,
    "a_brws_prf_responseend": 132,
    "a_brws_prf_responsestart": 25,
    "initiatorType": "navigation",
    "nextHopProtocol": "http/1.1"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-resource",
  "payload": {
    "type": "resource",
    "cachedContent": true,
    "initiatorType": "img",
    "nextHopProtocol": "h2"
  }
}
```





### schemaName

- Type: string
- is required
- Deafult: `meta-resource`
- Allowed values: meta-resource


### payload

Payload of the adplogger object

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | required | undefined
[firstMeaningfulPaint](#firstMeaningfulPaint) | integer | optional | Number of milliseconds before the resource is usable. For a pge this will be when the main content is available to the user.
[cachedContent](#cachedContent) | boolean | optional | Flag to indicate if the recieved content is from browser cache
[url](#url) | string | optional | Page URL. Includes all of url, including hash. For workers this should be the location of the worker
[nextHopProtocol](#nextHopProtocol) | string | optional | A string representing the network protocol used to fetch the resource, as identified by the ALPN Protocol ID (RFC7301).
[initiatorType](#initiatorType) | string | optional | The initiatorType read-only property is a string that represents the type of resource that initiated the performance event.- Type: object
- is required


payload has the following properties:


`type`

- Type: string
- is required
- Allowed values: navigation, resource

`firstMeaningfulPaint`

Number of milliseconds before the resource is usable. For a pge this will be when the main content is available to the user.

- Type: integer
- is optional
- Min: 0

`cachedContent`

Flag to indicate if the recieved content is from browser cache

- Type: boolean
- is optional

`url`

Page URL. Includes all of url, including hash. For workers this should be the location of the worker

- Type: string
- is optional

`nextHopProtocol`

A string representing the network protocol used to fetch the resource, as identified by the ALPN Protocol ID (RFC7301).

- Type: string
- is optional

`initiatorType`

The initiatorType read-only property is a string that represents the type of resource that initiated the performance event.

- Type: string
- is optional

