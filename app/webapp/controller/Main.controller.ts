import type Calendar from "sap/m/SinglePlanningCalendar";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "../model/formatter";
import BaseController from "./BaseController";


/**
 * @namespace dev.vf.controller
 */
export default class Main extends BaseController {

	private _calendar: Calendar;

	public onInit(): void {
		this.getRouter().getRoute("main").attachPatternMatched( () => this._onRouteMatched() );
	}

	private _onRouteMatched(): void {
		this._calendar  = this.getView().byId("calendar") as Calendar;
		this._syncCalendar();
	}

	private _syncCalendar(): void {
		
		// Execute calls to external services

		// Update the model
		
		// Update the calendar
		const aTransactions = [
			{
			start : new Date("2024-05-30T00:00:01Z"),
			end : new Date("2024-05-30T00:00:00Z"),
			type : "BIL",
			amount : 4000,
			currency : "EUR"
			},
			{
			start : new Date("2024-05-31T00:00:01Z"),
			end : new Date("2024-05-31T00:00:00Z"),
			type : "BIL",
			amount : 2300,
			currency : "€"
			},
			{
			start : new Date("2024-05-30T00:00:01Z"),
			end : new Date("2024-05-30T00:00:00Z"),
			type : "WISE",
			amount : 250,
			currency : "€"
			},
			{
			start : new Date("2024-05-30T00:00:01Z"),
			end : new Date("2024-05-30T00:00:00Z"),
			type : "COIN",
			amount : 12250,
			currency : "$"
			}
		];

		const oModel = new JSONModel({
			appointments: aTransactions.map( (oTransaction) => {
				return {
					startDate: oTransaction.start,
					endDate: oTransaction.end,
					tentative : true,
					icon: formatter.iconConversion(oTransaction.type),
					color: formatter.colorConversion(oTransaction.type),
					title: `${oTransaction.amount} ${oTransaction.currency}`
				}
			})	
		});
		console.log(oModel);

		this._calendar.setModel(oModel);
	}

}
