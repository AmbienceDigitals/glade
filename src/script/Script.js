import axios from 'axios';

// const Bank = {
//         "action":"initiate",
//         "paymentType":"card",
//         "user": {
//             "firstname":values.firstName,
//             "lastname":values.lastName,
//             "email":values.email,
//             "ip":"192.168.33.10",
//             "fingerprint": "cccvxbxbxb"
//         },
//         "card":{
//             "card_no":values.cardNumber,
//             "expiry_month":values.expiryMonth,
//             "expiry_year":values.expiryYear,
//             "ccv":values.cardCvc,
//             "pin":values.pin
//         },
//         "amount": values.amount,
//         "country": "NG",
//         "currency": "NGN",
//     }

// const bankCharge = {
//         "action":"charge",
//         "paymentType":"card",
//         "user": {
//             "firstname":values.firstName,
//             "lastname":values.lastName,
//             "email":values.email,
//             "ip":"192.168.33.10",
//             "fingerprint": "cccvxbxbxb"
//         },
//         "card":{
//             "card_no":values.cardNumber,
//             "expiry_month":values.expiryMonth,
//             "expiry_year":values.expiryYear,
//             "ccv":values.cardCvc,
//             "pin":values.pin
//         },
//         "amount": values.amount,
//         "country": "NG",
//         "currency": "NGN",
//         "txnRef":"GP8720656L",
//         "auth_type":"PIN"
//     }

// const account = {
//     "action":"charge",
//     "paymentType":"account",
//     "user": {
//         "firstname":firstName,
//         "lastname":lastName,
//         "email":email,
//         "ip":"192.168.33.10",
//         "fingerprint": "ddsdschhdghgshghdgshghcx"
//     },
//     "account":{
//         "accountnumber":"0690000007",
//         "bankcode":"044"
//     },
//     "amount": amount
//     }

// const ussd = {
//     "action":"charge",
//     "paymentType":"ussd",
//     "bank": "zenith",
//     "phonenumber": "0902620185",
//     "accountnumber": "0691008392",
//     "user": {
//         "firstname":firstName,
//         "lastname":lastName,
//         "email":email,
//         "ip":"192.168.33.10",
//         "fingerprint": "ddsdschhdghgshghdgshghcx"
//     },
//     "amount": amount
// }

// const phone = {
//     "action":"charge",
//     "paymentType":"phone",
//     "user": {
//         "firstname":firstName,
//         "lastname":lastName,
//         "email":email,
//         "ip":"192.168.33.10",
//         "fingerprint": "cccvxbxbxb"
//     },
//     "phonenumber":"08131",
//     "amount": amount
// }

export const bank = async (firstName, lastName, email, cardNumber, expiryMonth, expiryYear, cardCvc, pin, amount) => {
    const headers = {
        'Content-Type': 'application/json',
        'key': 'GP0000001',
        'mid': '123456789',      
    } 
    const res = await axios.put('http://demo.api.glade.ng/payment', 
       
    {data: {
            "action":"initiate",
            "paymentType":"card",
            "user": {
                "firstname":firstName,
                "lastname":lastName,
                "email":email,
                "ip":"192.168.33.10",
                "fingerprint": "cccvxbxbxb"
            },
            "card":{
                "card_no":cardNumber,
                "expiry_month":expiryMonth,
                "expiry_year":expiryYear,
                "ccv":cardCvc,
                "pin":pin
            },
            "amount": amount,
            "country": "NG",
            "currency": "NGN",
        }},
        {headers}
    )
    console.log(res.response)
}