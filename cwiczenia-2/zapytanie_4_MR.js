printjson(
    db.people.mapReduce(
        function() {
            emit(this.nationality, { weight: this.weight, height: this.height })
        },
        function(sex, data) {
            let bmisSum = 0;
            let maxBmi = -Infinity;
            let minBmi = Infinity;

            data.forEach(({ weight, height }) => {
                height /= 100; // cm to m

                // calculate bmi
                const bmi = weight / ( height * height );

                if(bmi > maxBmi) // find max bmi
                    maxBmi = bmi;

                if(bmi < minBmi) // find min bmi
                    minBmi = bmi;
            
                bmisSum += bmi; // sum for avg
            })

            const result = {
                minBmi,
                maxBmi,
                avgBmi: bmisSum / data.length
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