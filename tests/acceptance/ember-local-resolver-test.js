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
import { $hook, hook } from 'ember-hook'

describe('Acceptance: EmberLocalResolver', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  describe('Structure: Classic', function () {
    it('can resolve a global component / helper', function () {
      visit('/classic-global-only')

      andThen(function () {
        expect($hook('classic_global_classic-x-global')).to.have.length(1)
      })
    })

    it('can resolve a local component / helper', function () {
      visit('/classic-local-only')

      andThen(function () {
        expect($hook('classic_local_classic-x-local')).to.have.length(1)
      })
    })

    it('resolves a local component / helper before a global component / helper', function () {
      visit('/classic-local-wins')

      andThen(function () {
        expect($hook('classic_local_classic-x-both')).to.have.length(1)
      })
    })

    it('resolves a global component inside a local component', function () {
      visit('/classic-local-wins')

      andThen(function () {
        expect($hook('classic_local_classic-x-both')).to.have.length(1)
        expect($hook('classic_local_classic-x-both').find(
          hook('classic_global_classic-x-both')
        )).to.have.length(1)
      })
    })
  })

  describe('Structure: Pods', function () {
    it('can resolve a global component', function () {
      visit('/pods-global-only')

      andThen(function () {
        expect($hook('pods_global_pods-x-global')).to.have.length(1)
      })
    })

    it('can resolve a local component', function () {
      visit('/pods-local-only')

      andThen(function () {
        expect($hook('pods_local_pods-x-local')).to.have.length(1)
      })
    })

    it('resolves a local component / helper before a global component / helper', function () {
      visit('/pods-local-wins')

      andThen(function () {
        expect($hook('pods_local_pods-x-both')).to.have.length(1)
      })
    })

    it('resolves a global component inside a local component', function () {
      visit('/pods-local-wins')

      andThen(function () {
        expect($hook('pods_local_pods-x-both')).to.have.length(1)
        expect($hook('pods_local_pods-x-both').find(
          hook('pods_global_pods-x-both')
        )).to.have.length(1)
      })
    })
  })
})
