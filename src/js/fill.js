// @ts-check
/** 
 * @class Fill
 */
export class Fill {
    /**
     * @constructor
     * @param {string} portfolioId
     * @param {import("./TTApi").Operation} item 
     */
    constructor(portfolioId, item) {
        /** @type {string} идентификатор портфеля */
        this.portfolioId = portfolioId

        /** @type {string} идентификатор сделки */
        this.id = item.id;

        /** @type {string} идентификатор инструмента */
        this.figi = item.figi;

        /** @type {string} дата и время в ISO8601, например "2021-02-10T11:18:27.276+03:00" */
        this.date = item.date;

        /** @type {string} тип операции, например "Buy" */
        this.operationType = item.operationType;

        /** @type {number} стоимость одного лота, например 100.21 */
        this.price = item.price;

        /** @type {number?} количество лотов в заявке */
        this.quantity = item.quantity;

        /** @type {number?} количество исполненных лотов */
        this.quantityExecuted = item.quantityExecuted;

        /** @type {number} сумма платежа */
        this.payment = item.payment;

        /** @type {number?} комиссия, например {currency: "USD", value: -0.07} */
        this.commission = item.commission?.value;

        /** @type {Array} */
        this.trades = item.trades

        // Расчётные накопительные параметры:

        /** @type {number?} средняя цена */
        this.averagePrice = undefined;

        /** @type {number?} средняя цена с учётом комиссии */
        this.averagePriceCorrected = undefined;

        /** @type {number?} текущее количество в позиции */
        this.currentQuantity = undefined;

        /** @type {number?} зафиксированная прибыль */
        this.fixedPnL = undefined;

        // Признак ручного редактирования
        /** @type {boolean?} true, если запись изменена вручную */
        this.manual = undefined;
    }

    /**
     * @param {Fill} fill
     * @returns {Date?}
     */
    static getLastTradeDate(fill) {
        if (fill.trades?.length > 0) {
            return new Date(fill.trades[fill.trades.length - 1].date)
        }
    }
}
