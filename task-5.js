async function findMostFrequentCharacters (N) {
    const resultArr = [];
    let url = 'https://swapi.dev/api/people';

    const getData = async (url) => {
        const response = await fetch(url);
        return response.json();
    }
    

    while(url) {
        if (url) {
            try {
                const data = await getData(url); 
                results = data.results;
                results.forEach(item => {
                if (item.films.length >= N) {
                    resultArr.push(item.name)
                }
                })
                url = data.next;
            } catch(err) {
                return Promise.resolve([]);
            }
        } else {
            url = false;
        }
    }

    return resultArr;
}