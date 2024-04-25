namespace my.personal.budget;

using { cuid, Currency } from '@sap/cds/common';

entity Transactions : cuid {
    category: TransactionType;
    primaryAmount: Decimal(10, 2);
    secondaryAmount: Decimal(10, 2);
    // currency: Currency;
    currency: String(3);
    title: String;
    status: String; 
    createdOn: DateTime;
}

type TransactionType : String enum {
    ACQUIRING_PAYMENT;
    AUTO_CONVERSION;
    BALANCE_ADJUSTMENT;
    BALANCE_ASSET_FEE;
    BALANCE_CASHBACK;
    BALANCE_DEPOSIT;
    BALANCE_HOLD_FEE;
    BALANCE_INTEREST;
    BANK_DETAILS_ORDER;
    BATCH_TRANSFER;
    CARD_CASHBACK;
    CARD_CHECK;
    CARD_ORDER;
    CARD_PAYMENT;
    CASH_WITHDRAWAL;
    CLAIMABLE_SEND_ORDER;
    DIRECT_DEBIT_TRANSACTION;
    EXCESS_REFUND;
    FEE_REFUND;
    INCORPORATION_ORDER;
    INTERBALANCE;
    PAYMENT_REQUEST;
    PREFUNDING_TRANSFER;
    REWARD;
    SCHEDULED_SEND_ORDER;
    TRANSFER;
}