printjson(
    db.people.aggregate([
        {
            $unwind: "$credit"
        },
        {
            $group: {
                _id: "$credit.currency",
                value: { $sum: "$credit.balance" }
            }
        }
    ]).toArray()
)