printjson(db.people.find(
    {
        "weight": {
            $lt: 71.5,
            $gte: 68
        }
    }
).toArray())