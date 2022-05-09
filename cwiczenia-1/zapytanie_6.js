printjson(
    db.people.insertOne(
        {
            "sex" : "Male",
            "first_name" : "Jakub",
            "last_name" : "Markiewicz",
            "job" : "Student",
            "email" : "s25878@pjwstk.edu.pl",
            "location" : {
                "city" : "Warsaw",
                "address" : {
                    "streetname" : "Koszykowa",
                    "streetnumber" : "86"
                }
            },
            "description" : "lorem ipsum",
            "height" : 187.21,
            "weight" : 76.23,
            "birth_date" : ISODate("1997-12-25"),
            "nationality" : "Poland",
            "credit" : [
                {
                    "type" : "mastercard",
                    "number" : "123652321802",
                    "currency" : "PLN",
                    "balance" : 50123.12
                }
            ]
        }
    )
)