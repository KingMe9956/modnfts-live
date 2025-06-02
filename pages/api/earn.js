
export default function handler(req, res) {
  // Real payment processing would happen here
  console.log(`💸 PAYMENT RECEIVED from ${req.body.wallet}`);
  res.status(200).json({ status: 'MONEY SENT' });
} 
