export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_REQUEST';

export const fetchNewsRequest=()=>{
    return {
        type : FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess=(news)=>{
    // console.log(news);
    return {
        type : FETCH_NEWS_SUCCESS,
        payload : news
    }
}

export const fetchNewsFailure=(error)=>{
return {
    type : FETCH_NEWS_FAILURE,
    payload : error
   }
}

export const fetchNews =()=>{
    return (dispatch) => {
        dispatch(fetchNewsRequest());
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=e58115446a8f44e782bae4eb44f448f6')
        .then((response)=>response.json())
        .then((data) => {
            const news = data.articles.map((article)=>{
                return {
                    title : article.title,
                    url : article.url,
                    description : article.description
                }
            });
            // console.log("news",news)
            dispatch(fetchNewsSuccess(news));

        })
        .catch((error)=>{
            dispatch(fetchNewsFailure(error.message));
        })
    }
}



