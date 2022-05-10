printjson(
    db.people.mapReduce(
        function() {
            if(this.nationality == "Poland" && this.sex == "Female")
                this.credit.forEach(({ currency, balance }) => {
                    emit(currency, balance);
                })
        },
        function(key, data) {
            let sum = 0;

            data.forEach(balance => {
                sum += balance;
            })

            const result = {
                sum,
                avg: sum / data.length
            }

            return result;
        },
        {
            out: {
                inline: 1
            }
        }
    )
)