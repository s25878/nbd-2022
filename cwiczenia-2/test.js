// printjson(
//     db.people.find().toArray()
// )

// 1 mr
// printjson(
//     db.people.mapReduce(
//         function() {
//             emit(this.sex, { weight: this.weight, height: this.height })
//         },
//         function(sex, data) {
//             const result = {
//                 weight: 0,
//                 height: 0
//             }

//             data.forEach(({ weight, height }) => {
//                 result.weight += weight;
//                 result.height += height;
//             })

//             result.weight = result.weight / data.length;
//             result.height = result.height / data.length;

//             return result;
//         },
//         {
//             out: {
//                 inline: 1
//             }
//         }
//     )
// )


// 1 a
// printjson(
//     db.people.aggregate([
//         {
//             $group: {
//                 _id: "$sex",
//                 weight: {
//                     $avg: "$weight"
//                 },
//                 height: {
//                     $avg: "$height"
//                 }
//             }
//         }
//     ]).toArray()
// )

// 2 mr
// printjson(
//     db.people.mapReduce(
//         function() {
//             this.credit.forEach(({ currency, balance }) => {
//                 emit(currency, balance)
//             })
//         },
//         function(key, data) {
//             return Array.sum(data);
//         },
//         {
//             out: {
//                 inline: 1
//             }
//         }
//     )
// )

//2 a
// printjson(
//     db.people.aggregate([
//         {
//             $unwind: "$credit"
//         },
//         {
//             $group: {
//                 _id: "$credit.currency",
//                 value: { $sum: "$credit.balance" }
//             }
//         }
//     ]).toArray()
// )

//3 mr
printjson(
    db.people.mapReduce(
        function() {
            emit("Jobs", this.job)
        },
        function(key, data) {
            const result = [];

            data.forEach((value) => {
                if(result.indexOf(value) === -1)
                    result.push(value);
            })

            return result;
        },
        {
            out: {
                inline: 1
            }
        }
    )
)