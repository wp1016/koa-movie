const rp = require('request-promise-native')

async function fetchMovie(item) {
    const url = `https://api.douban.com/v2/movie/subject/${item.doubanId}`
    const res = await rp(url)
    return res
}

;
(async () => {
    let movies = [{
            doubanId: 1292213,
            title: '大话西游之大圣娶亲',
            rate: 9,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2455050536.jpg'
        },
        {
            doubanId: 1292370,
            title: '剪刀手爱德华',
            rate: 8,
            poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p480956937.jpg'
        },
        {
            doubanId: 1292215,
            title: '天使爱美丽',
            rate: 8,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p803896904.jpg'
        },
        {
            doubanId: 2129039,
            title: '飞屋环游记',
            rate: 8,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2364094053.jpg'
        }
    ]

    movies.map(async movie => {
        let movieData = await fetchMovie(movie)
        try {
            movieData = JSON.parse(movieData)
            console.log(movieData.title);
            console.log(movieData.summary);
        } catch (err) {
            console.log(err);
        }
    })
})()