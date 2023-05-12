export function getDataCalls(_, res) {
    res.send([{
        "province": "Málaga",
         "month": "january",
         "phone_call_activation_organization": 3520,
         "telematic_activation_organization": 4826,
         "emergency_call": 3786,
         "year": 1234
 }])
}

export function findByprovince(_, res) {
    res.send({
        "province": "Málaga",
         "month": "january",
         "phone_call_activation_organization": 3520,
         "telematic_activation_organization": 4826,
         "emergency_call": 3786,
         "year": 1234
 })
}



