printjson(
    db.people.mapReduce(
        function() {
            this.credit.forEach(({ currency, balance }) => {
                emit(currency, balance)
            })
        },
        function(key, data) {
            return Array.sum(data);
        },
        {
            out: {
                inline: 1
            }
        }
    )
)