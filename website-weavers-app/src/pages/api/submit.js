/* eslint-disable */
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method not allowed. Received a ${req.method} instead of POST request` });
  }

  try {
    // Config variables
    const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

    // Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
    const serviceAccountAuth = new JWT({
      // see "Authentication" section in docs for more info
      email: CLIENT_EMAIL,
      key: PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
   
    const appendSpreadsheet = async (row) => {
      try {
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);
      } catch (e) {
        console.error('Error: ', e);
      }
    };
    const { name, email, message } = req.body;
    const date = new Date();
    const now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds());

    const date_now = new Date(now_utc);
    await appendSpreadsheet({ Date: date_now.toUTCString(), Name: name, Email: email, Message: message });
    return res.status(200).json({ message: 'Enquiry saved successfully' });

  } catch (error) {
    return res.status(500).json({ message: error.message || 'An error occurred while sending the enquiry' });
  }
}