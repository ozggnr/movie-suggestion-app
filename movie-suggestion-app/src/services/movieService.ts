type MovieType = {
    user_input: string;
    top_k: number;
};

type Fetcher = {
    url: string;
    method: string;
    body?: MovieType;
    json?: boolean;
};
const fetcher = async ({ url, method, body, json = true }: Fetcher) => {
    const response = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('data', data);
    return data;
};

export async function getMovies() {
    // return fetcher({ url: movieURL, method: 'GET' });
}

export async function getTargetMovies(movieText: string) {
    const moviePrompt: MovieType = {
        user_input: movieText,
        top_k: 5,
    };
    return fetcher({ url: 'http://127.0.0.1:8001/movie/ai/suggestion/', method: 'POST', body: moviePrompt });
}
