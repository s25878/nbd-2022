printjson(
    db.people.aggregate([
        {
            $project: {
                nationality: 1,
                bmi: {
                    $divide: [
                        "$weight",
                        {
                            $multiply: [
                                { $divide: [ "$height", 100 ] },
                                { $divide: [ "$height", 100 ] }
                            ]
                        }
                    ]
                }
            }
        },
        {
            $group: {
                _id: "$nationality",
                minBmi: { "$min": "$bmi" },
                maxBmi: { "$max": "$bmi" },
                avgBmi: { "$avg": "$bmi" }
            }
        }
    ]).toArray()
)