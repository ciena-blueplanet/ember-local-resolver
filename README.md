[ci-img]: https://img.shields.io/travis/ciena-frost/ember-local-resolver.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-local-resolver

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-local-resolver.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-local-resolver

[npm-img]: https://img.shields.io/npm/v/ember-local-resolver.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-local-resolver

[ember-observer-badge]: http://emberobserver.com/badges/ember-local-resolver.svg "Ember Observer score"
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-local-resolver

[ember-img]: https://img.shields.io/badge/ember-2.0.0+-orange.svg "Ember 2.0.0+"

[bithound-img]: https://www.bithound.io/github/ciena-blueplanet/ember-local-resolver/badges/score.svg "bitHound"
[bithound-url]: https://www.bithound.io/github/ciena-blueplanet/ember-local-resolver

# ember-local-resolver

Resolve component paths locally then globally to avoid the need for absolute paths

###### Dependencies

![Ember][ember-img] TODO
[![NPM][npm-img]][npm-url] TODO

###### Health

[![Travis][ci-img]][ci-url]
[![Coveralls][cov-img]][cov-url]

###### Security

[![bitHound][bithound-img]][bithound-url]

###### Ember Observer score
[![EmberObserver][ember-observer-badge]][ember-observer-badge-url]

## Installation
```
ember install ember-local-resolver
```

## Usage

Change the resolver import in app/resolver.js from `'ember-resolver'` to `'ember-local-resolver'`

This addon makes the most sense in a pods structure.  If you want to have components that are effectively
"private" to a route simply add a `-components` directory to your route and add any local components in a
pod format within that directory.

For example, given a route `user-accounts` if you want to have a local `user-avatar` component then your
pods structure would look something like:

```
user-accounts/
user-accounts/route.js
user-accounts/template.hbs
user-accounts/-components/
user-accounts/-components/user-avatar/
user-accounts/-components/user-avatar/component.js
user-accounts/-components/user-avatar/template.hbs
```

Normally you would have to reference a component nested in a route using a full path:

`{{user-accounts/-components/user-avatar}}`

But with this resolver these local components can be referenced simply as:

`{{user-avatar}}`

when within the `user-accounts` template

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-local-resolver.git
cd ember-local-resolver
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-local-resolver/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
