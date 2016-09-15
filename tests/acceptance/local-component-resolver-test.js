/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { $hook } from 'ember-hook'

describe('Acceptance: LocalComponentResolver', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  describe('Structure: Classic', function () {
    it('can resolve a global component', function () {
      visit('/global-only')

      andThen(function () {
        // Caveat - pods takes precedence over classic
        // So this ends up being the x-global from the pods directory
        expect($hook('pods_x-global')).to.have.length(1)
      })
    })

    it('can resolve a local only component', function () {
      visit('/local-only')

      andThen(function () {
        expect($hook('classic_local-only_x-local')).to.have.length(1)
      })
    })

    it('resolves a local only component before a global component', function () {
      visit('/local-wins')

      andThen(function () {
        expect($hook('classic_local-wins_x-both')).to.have.length(1)
      })
    })
  })

  describe('Structure: Pods', function () {
    it('can resolve a global component', function () {
      visit('/pods-global-only')

      andThen(function () {
        expect($hook('pods_x-global')).to.have.length(1)
      })
    })

    it('can resolve a local only component', function () {
      visit('/pods-local-only')

      andThen(function () {
        expect($hook('pods_local-only_x-local')).to.have.length(1)
      })
    })

    it('resolves a local only component before a global component', function () {
      visit('/pods-local-wins')

      andThen(function () {
        expect($hook('pods_local-wins_x-both')).to.have.length(1)
      })
    })
  })
})
