import { AccountProvider } from './../account/account.provider'
import { Injectable } from '@angular/core'
import { resolve } from 'url'

declare let chrome
declare let window

@Injectable()
export class WebExtensionProvider {
  constructor(public accountProvider: AccountProvider) {
    this.accountProvider.refreshPageSubject.subscribe(() => {
      if (this.isWebExtension()) {
        this.refreshWindow()
      }
    })
  }

  isWebExtension() {
    if (window.chrome && chrome.runtime && chrome.runtime.id) {
      // Code running in a Chrome extension (content script, background page, etc.)
      return true
    }
  }

  refreshWindow() {
    chrome.tabs.getSelected(null, function(tab) {
      const code = 'window.location.reload()'
      chrome.tabs.executeScript(tab.id, { code: code })
    })
  }

  // aeternity aepps
  postToContent(data) {
    return new Promise(resolve => {
      chrome.tabs.query({}, async function(tabs) {
        // TODO think about direct communication with tab
        const message = { method: 'pageMessage', data }
        await Promise.all(
          tabs.map(async ({ id }) => {
            const waitingToExecute = await chrome.tabs.sendMessage(id, message)
          })
        )
        resolve()
      })
    })
  }

  // aeternity aepps
  confirmWalletShare() {
    chrome.tabs.query({}, function(tabs) {
      // TODO think about direct communication with tab
      const message = { method: 'confirmWalletShare' }
      tabs.forEach(({ id }) => chrome.tabs.sendMessage(id, message)) // Send message to all tabs
    })
  }
}
