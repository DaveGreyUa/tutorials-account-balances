import {SubstrateExtrinsic,SubstrateEvent,SubstrateBlock} from "@subql/types";
import {Account} from "../types";
import {Balance} from "@polkadot/types/interfaces";

export async function handleEvent(event: SubstrateEvent): Promise<void> {
    const {event: {data: [account, balance]}} = event;
    //Retrieve the record by its ID
    let record = new
    Account(event.extrinsic.block.block.header.hash.toString());
    record.account = account.toString();
    //Big integer type Balance of a transfer event
    record.balance = (balance as Balance).toBigInt();
    await record.save();
}


