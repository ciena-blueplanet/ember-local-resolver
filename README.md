[ci-img]: https://img.shields.io/travis/ciena-frost/ember-local-resolver.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-local-resolver

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-local-resolver.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-local-resolver

[ember-observer-badge]: http://emberobserver.com/badges/ember-local-resolver.svg "Ember Observer score"
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-local-resolver

[ember-img]: https://img.shields.io/badge/ember-2.0.0+-orange.svg "Ember 2.0.0+"

[bithound-img]: https://www.bithound.io/github/ciena-blueplanet/ember-local-resolver/badges/score.svg "bitHound"
[bithound-url]: https://www.bithound.io/github/ciena-blueplanet/ember-local-resolver

# ember-local-resolver

Put local components / helpers where they belong

###### Dependencies

![Ember][ember-img]

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

## Purpose

Rather than clutter your global components and helpers directories with components/helpers that are
only used in a specific case, wouldn't it be nice to locate them alongside the consuming template?  

*"That would great"*

**You've come to the right place!**

## Usage

This addon makes the most sense in a pods structure (although classic is supported).

The standard Ember resolver looks up components and helpers from root directories

```
app/components
app/helpers
```

This works fine most of the time, but for complex apps you'll often want to create a number of
components / helpers that are really only relevant to a particular route.  

Unfortunately with the current resolver those components / helpers either have to live in the root 
directories or you need to provide a nested path with `/` that both looks ugly and won't be supported 
when angle-bracket components land.

The module unification RFC solves this issue using the concept of [private collections](https://github.com/dgeb/rfcs/blob/module-unification/text/0000-module-unification.md#private-collections)
which allows `-components` / `-helpers` in a feature pod to provide locally scoped private modules.

_Why wait_

This addon enables these capabilities today, so you can use a structure like:


```
app/user-account/route.js
app/user-account/controller.js
app/user-account/template.hbs
app/user-account/-components/user-avatar/component.js
app/user-account/-components/user-avatar/template.hbs
app/user-account/-helpers/generate-moniker/helper.js
```

And use them within your `user-account` template as

```
{{user-avatar}}
{{generate-moniker}}
```

That's it, now get out there and go have some _fun_!

Oh yeah, there is a demo [here](http://ciena-blueplanet.github.io/ember-local-resolver/), just in case you care
if - you know - _this actually works._

## Order of resolution

In the event that a local and global component / helper share a name, the local version wins when
in the local template.

You can also reference the global component / helper from within the local component's template,
but please...for the sake of everyone's sanity...just rename one of them.

## Generators

Unfortunately, we don't have a fancy generator to make new local components / helpers _(cough...PRs welcome...)_
so the easiest way to handle this is to just move a generated directory into your local `-components` / 
`-helpers` path.

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
