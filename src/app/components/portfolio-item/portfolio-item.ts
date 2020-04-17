import { Component, Input } from '@angular/core'
import { AirGapMarketWallet, ICoinDelegateProtocol } from 'airgap-coin-lib'
import { Observable, Subscription } from 'rxjs'

import { AccountProvider } from '../../services/account/account.provider'
import { OperationsProvider } from '../../services/operations/operations'
import { ProtocolSymbols } from '../../services/protocols/protocols'
import { WebExtensionProvider } from '../../services/web-extension/web-extension'
import { supportsDelegation } from 'src/app/helpers/delegation'

@Component({
  selector: 'portfolio-item',
  templateUrl: 'portfolio-item.html',
  styleUrls: ['./portfolio-item.scss']
})
export class PortfolioItemComponent {
  public isActive: boolean = false

  @Input()
  public wallet: AirGapMarketWallet

  @Input()
  public maxDigits: number = 0

  @Input()
  public showBalances: boolean = true

  @Input()
  public isExpendable: boolean = false

  @Input()
  public isExtended: boolean = false

  @Input()
  public hideFiatAmounts: boolean = false

  @Input()
  public hideDelegationBadge: boolean = false

  @Input()
  public isToken: boolean = false

  @Input()
  public isDelegated: Observable<boolean>

  private readonly walletChanged: Subscription

  constructor(
    private readonly operationsProvider: OperationsProvider,
    public webExtensionProvider: WebExtensionProvider,
    public accountProvider: AccountProvider
  ) {
    this.walletChanged = this.accountProvider.walledChangedObservable.subscribe(async () => {
      this.updateDelegationStatus()
    })
  }

  public ngOnInit(): void {
    if (this.webExtensionProvider.isWebExtension()) {
      this.accountProvider.activeAccountSubject.subscribe(activeAccount => {
        if (this.wallet && activeAccount) {
          this.isActive = this.accountProvider.isSameWallet(this.wallet, activeAccount)
        }
      })
    }
  }

  private async updateDelegationStatus() {
    if (
      this.wallet !== undefined &&
      this.wallet.receivingPublicAddress !== undefined &&
      (this.wallet.protocolIdentifier === ProtocolSymbols.COSMOS || supportsDelegation(this.wallet.coinProtocol))
    ) {
      this.isDelegated = await this.operationsProvider.getDelegationStatusObservableOfAddress(
        this.wallet.coinProtocol as ICoinDelegateProtocol,
        this.wallet.receivingPublicAddress
      )
    }
  }

  public ngOnDestroy(): void {
    this.walletChanged.unsubscribe()
  }
}
