printjson(
    db.people.updateMany(
        {
            "location.city": "Moscow"
        },
        [
            {
                $set: {
                    "location.city": {
                        $replaceOne: {
                            input: "$location.city",
                            find: "Moscow",
                            replacement: "Moskwa"
                        }
                    }
                }
            }
        ]
    )
)