namespace me.personal.budget;

entity BudgetRecord {
    key ID: Integer;
    category: String;
    amount: Decimal(10, 2);
    date: Date;
}