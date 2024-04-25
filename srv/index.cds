using { my.personal.budget as my  }  from '../db';


service BudgetService {
    @readonly entity Transactions as projection on my.Transactions;
}
    