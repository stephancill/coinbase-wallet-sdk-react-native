import { CoinbaseWalletProviderBase } from './CoinbaseWalletProviderBase';
import { SignerType } from './core/message';
import { ConstructorOptions } from './core/provider/interface';

export class CoinbaseWalletProvider extends CoinbaseWalletProviderBase {
  constructor(options: Readonly<ConstructorOptions>) {
    super(options);
  }

  protected requestSignerSelection(): Promise<SignerType> {
    return Promise.resolve('scw' as SignerType);
  }
}
