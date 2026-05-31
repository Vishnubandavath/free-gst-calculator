export interface GSTResult {
  netAmount: number;
  gstAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalAmount: number;
}

export const calculateGST = (
  amount: number,
  rate: number,
  type: 'inclusive' | 'exclusive' = 'exclusive',
  isInterState: boolean = false
): GSTResult => {
  let netAmount: number;
  let gstAmount: number;
  let totalAmount: number;

  if (type === 'exclusive') {
    netAmount = amount;
    gstAmount = (amount * rate) / 100;
    totalAmount = netAmount + gstAmount;
  } else {
    totalAmount = amount;
    netAmount = (amount * 100) / (100 + rate);
    gstAmount = totalAmount - netAmount;
  }

  const gstAmountRounded = Number(gstAmount.toFixed(2));
  const cgst = isInterState ? 0 : Number((gstAmountRounded / 2).toFixed(2));
  const sgst = isInterState ? 0 : Number((gstAmountRounded - cgst).toFixed(2));
  const igst = isInterState ? gstAmountRounded : 0;

  return {
    netAmount: Number(netAmount.toFixed(2)),
    gstAmount: gstAmountRounded,
    cgst,
    sgst,
    igst,
    totalAmount: Number(totalAmount.toFixed(2)),
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
  }).format(num);
};
