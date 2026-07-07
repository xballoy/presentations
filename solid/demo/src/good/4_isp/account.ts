import type {AccountOperation,} from './cart.operations';

export class UserAccount implements AccountOperation {
  public changeDefaultCarrier(carrier: string) {
    console.log(`Changed default carrier to ${carrier}`);
  }
}
