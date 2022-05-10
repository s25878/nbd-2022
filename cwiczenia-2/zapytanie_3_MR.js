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