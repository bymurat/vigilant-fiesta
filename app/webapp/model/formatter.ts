export default {
	formatValue: (value: string) => {
		return value?.toUpperCase();
	},
	colorConversion : (sType: string) => {
		switch (sType) {
			case "BIL":
				return "#983fb3";
			case "WISE":
				return "#9fe870";
			case "COIN":
				return "#578bfa";
			default:
				return "Type04";
		}
	},
	iconConversion : (sType: string) => {
		switch (sType) {
			case "BIL":
				return "https://www.bil.com/PublishingImages/favicon/apple-icon-57x57.png";
			case "WISE":
				return "https://wise.com/public-resources/assets/icons/wise-personal/favicon.png";
			case "COIN":
				return "https://login.coinbase.com/static/870e5855c3e936869acf.png";
			default:
				return "sap-icon://money-bills";
		}
	}
};
