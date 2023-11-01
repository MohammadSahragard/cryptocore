// Number formatter (separator three to tree : 2000 => 2,000)
const separatorThreeToThree = (number, minimumFractionDigits) => new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits
}).format (number);


// Get time frame for fetch coin chart data (e.g 24h, 7d, 14d)
const getTimeFrame = selection => {
    switch (selection) {
        case 'one_day':
            return '1';
        case 'one_week':
            return '7';
        case 'two_week':
            return '14';
        case 'one_month':
            return '30';
        case 'twoH_days':
            return '200';
        case 'max':
            return 'max';
    };
};


// Get percentage time frame specially for chart colors (result > 0 ? red : green)
const getPercentageTimeFrame = selection => {
    switch (selection) {
        case 'one_day':
            return 'price_change_percentage_24h_in_currency';
        case 'one_week':
            return 'price_change_percentage_7d_in_currency';
        case 'two_week':
            return 'price_change_percentage_14d_in_currency';
        case 'one_month':
            return 'price_change_percentage_30d_in_currency';
        case 'twoH_days':
            return 'price_change_percentage_200d_in_currency';
    };
};


// Get main section of URLs (www.google.com => google.com)
const getMainLink = link => {
    if (link) {
        const linkSections = (new URL(link).hostname).split ('.');
        const getMain = linkSections.filter (section => section !== 'www');
        
        return getMain.join ('.');
    } else {
        return 'no named';
    };
};


// n Formatter for numbers (2000 => 2 thousand, 2000000 => 2 million)
const nFormatter = (num) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "Thousand" },
      { value: 1e6, symbol: "Millions" },
      { value: 1e9, symbol: "Billion" },
      { value: 1e12, symbol: "Trillion" },
      { value: 1e15, symbol: "Quadrillion" },
      { value: 1e18, symbol: "Quintillion" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(0).replace(rx, "$1") + ' ' + item.symbol : "0";
}


// Convert description coins to JSX
const convertStringToHTML = htmlString => {
    const paragraphs = htmlString?.split ('\r\n\r\n');

    return paragraphs;
};


// Make a unique key for map element in jsx
const keyElemMaker = () => {
    const key = Math.random () * (Math.random () * 2);

    return key;
};





export { 
    separatorThreeToThree, 
    getTimeFrame, 
    getPercentageTimeFrame, 
    getMainLink, 
    nFormatter,
    convertStringToHTML,
    keyElemMaker
};