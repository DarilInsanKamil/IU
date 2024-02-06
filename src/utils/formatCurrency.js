export function formatCurrencyUSD(amount) {
    // Check if the amount is a valid number
    if (isNaN(amount)) {
        return "Invalid amount";
    }
  
    // Format the currency using the local convention for US
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
  
    return formattedAmount;
  }
  