
# WebPage

```
https://www.adplogger.no/json-schema/meta-web-page
```

Description of the web page / page view

Extends: [Meta element](./meta-element.md)

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
  "schemaName": "meta-web-page",
  "payload": {
    "id": "a3dfbcab-c345-42dc-8ee9-9f6d2732b452",
    "position": 0,
    "type": "WebPage",
    "name": "Hadeland",
    "referrer": "http://www.google.com",
    "previousIdentifier": "09abc642-de33-4b1b-a280-601e9049965a",
    "lastDomainVisitDate": "2019-12-01T12:10:07.000Z",
    "plattformAndVersion": "maelstrom:1.2.13",
    "adpLoggerVersion": "1.2.3",
    "siteKey": "hadela",
    "adblockDetected": false,
    "initialDocumentHeight": 5436,
    "pageModel": "homepage",
    "isFrontPage": "true",
    "dataModel": "optimus"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-web-page",
  "payload": {
    "id": "a3dfbcab-c345-42dc-8ee9-9f6d2732b452",
    "name": "Hadeland"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `meta-web-page`
- Allowed values: meta-web-page


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | optional | Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.
[name](#name) | string | optional | The name of the web page
[referrer](#referrer) | string | optional | Referrer to the page
[previousIdentifier](#previousIdentifier) | string | optional | Reference to the referrer identifier
[lastDomainVisitDate](#lastDomainVisitDate) | string | optional | Last browser session visit on the domain
[plattformAndVersion](#plattformAndVersion) | string | optional | Appname Semver version of the app returning the page
[adpLoggerVersion](#adpLoggerVersion) | string | optional | Semver Adplogger version
[siteKey](#siteKey) | string | optional | Sitekey from site config
[adblockDetected](#adblockDetected) | boolean | optional | Flag to indicate that the user has adblock activated
[initialDocumentHeight](#initialDocumentHeight) | integer | optional | initial document height in pixels
[pageModel](#pageModel) | string | optional | Indicates pageType (homepage, indexpage, other)
[isFrontPage](#isFrontPage) | string | optional | Indicates if frontpage or not
[dataModel](#dataModel) | string | optional | name of template used by maelstrom to generate the page- Type: object
- is required


payload has the following properties:


`type`

Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.

- Type: string
- is optional
- Deafult: `WebPageElement`
- Allowed values: WebPage

`name`

The name of the web page

- Type: string
- is optional

`referrer`

Referrer to the page

- Type: string
- is optional

`previousIdentifier`

Reference to the referrer identifier

- Type: string
- is optional
- Pattern: `/^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/`

`lastDomainVisitDate`

Last browser session visit on the domain

- Type: string
- is optional

`plattformAndVersion`

Appname Semver version of the app returning the page

- Type: string
- is optional
- Pattern: `/\w+:(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/`

`adpLoggerVersion`

Semver Adplogger version

- Type: string
- is optional
- Pattern: `/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/`

`siteKey`

Sitekey from site config

- Type: string
- is optional
- Pattern: `/^[a-z0-9_]{6}$/`

`adblockDetected`

Flag to indicate that the user has adblock activated

- Type: boolean
- is optional

`initialDocumentHeight`

initial document height in pixels

- Type: integer
- is optional
- Min: 0

`pageModel`

Indicates pageType (homepage, indexpage, other)

- Type: string
- is optional

`isFrontPage`

Indicates if frontpage or not

- Type: string
- is optional
- Allowed values: true, false

`dataModel`

name of template used by maelstrom to generate the page

- Type: string
- is optional

