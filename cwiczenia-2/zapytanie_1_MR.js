printjson(
    db.people.mapReduce(
        function() {
            emit(this.sex, { weight: this.weight, height: this.height })
        },
        function(sex, data) {
            const result = {
                weight: 0,
                height: 0
            }

            data.forEach(({ weight, height }) => {
                result.weight += weight;
                result.height += height;
            })

            result.weight = result.weight / data.length;
            result.height = result.height / data.length;

            return result;
        },
        {
            out: {
                inline: 1
            }
        }
    )
)