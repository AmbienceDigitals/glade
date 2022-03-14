import axios from 'axios';

    const Bank = {
        "action":"initiate",
        "paymentType":"card",
        "user": {
            "firstname":"John",
            "lastname":"Doe",
            "email":"hello@example.com",
            "ip":"192.168.33.10",
            "fingerprint": "cccvxbxbxb"
        },
        "card":{
            "card_no":"5438898014560229",
            "expiry_month":"09",
            "expiry_year":"19",
            "ccv":"789",
            "pin":"3310"
        },
        "amount":"10000",
        "country": "NG",
        "currency": "NGN",
    }

    const bankCharge = {
        "action":"charge",
        "paymentType":"card",
        "user": {
            "firstname":"John",
            "lastname":"Doe",
            "email":"hello@example.com",
            "ip":"192.168.33.10",
            "fingerprint": "cccvxbxbxb"
        },
        "card":{
            "card_no":"5438898014560229",
            "expiry_month":"09",
            "expiry_year":"19",
            "ccv":"789",
            "pin":"3310"
        },
        "amount":"10000",
        "country": "NG",
        "currency": "NGN",
        "txnRef":"GP8720656L",
        "auth_type":"PIN"
    }

    const account = {
    "action":"charge",
    "paymentType":"account",
    "user": {
        "firstname":"John",
        "lastname":"Doe",
        "email":"hello@example.com",
        "ip":"192.168.33.10",
        "fingerprint": "ddsdschhdghgshghdgshghcx"
    },
    "account":{
        "accountnumber":"0690000007",
        "bankcode":"044"
    },
    "amount":"10000"
    }

const ussd = {
    "action":"charge",
    "paymentType":"ussd",
    "bank": "zenith",
    "phonenumber": "0902620185",
    "accountnumber": "0691008392",
    "user": {
        "firstname":"John",
        "lastname":"Doe",
        "email":"hello@example.com",
        "ip":"192.168.33.10",
        "fingerprint": "ddsdschhdghgshghdgshghcx"
    },
    "amount":"10"
}

const phone = {
    "action":"charge",
    "paymentType":"phone",
    "user": {
        "firstname":"John",
        "lastname":"Doe",
        "email":"hello@example.com",
        "ip":"192.168.33.10",
        "fingerprint": "cccvxbxbxb"
    },
    "phonenumber":"08131",
    "amount":"15"
}

const bank = () => {
    axios.put('demo.api.glade.ng/payment', 
        {data: bank},
        {config: 'none'}
    )
}