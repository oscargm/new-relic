# New Relic Apdex Board - Code challenge

## Object oriented code

Two view models have been created to suit data needs.

- [App](./src/model/app.ts)
- [Host](./src/model/host.ts)

and an API model to retrieve data from service

- [App](./src/api/app.ts)

The model conversion is performed with [mappers](./src/mappers.ts)

## Mandatory methods implementation

In the challenge three methods where asked to be included.

- getTopAppsByHost
- addAppToHost
- removeAppFromHosts

This methods can be found [here](./src/index.ts)

## UI implementation

A components approach have been made, using typescript classes. If frameworks had been allowed React, vue, svelte or web-components would have been used. Each class has a method render that returns a string with the html.

Due to IE support a `justify-content: space-evenly` can't be used, so I added extra elements to get the same result

## No dependices challenge

To perform http requests I would usually use fetch (with a [polyfill](https://github.com/github/fetch)) or axios (as a dependence to include on the bundle), but due to the dependency limitation, I used the old XMLHttpRequest because of Internet Explorer. A performance fall has been noticed but it worked so I left for one of the lasts things to worry.

## Testing

Jest has been added to the project and a [test sample](./src/mappers.spec.ts) has been done.
Next thing should be:

- Cover all the logic with tests
- Unit testing of the components rendering them with enzyme or integration test with cypress
