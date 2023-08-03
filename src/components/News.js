import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News=(props)=> {
  const[articles,setArticles] = useState([]);
  // const[loading,setLoading] = useState(true);
  const[page,setPage] = useState(1);
  const[totalResults,setTotalResults] = useState(0);
  
      const updateNews= async ()=>{
      props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        // setLoading(false)
        props.setProgress(100);
    }
       useEffect(() =>{
      // props.setProgress(10);
      //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`
      //   let data = await fetch(url);
      //   props.setProgress(30);
      //   let parsedData = await data.json();
      //   props.setProgress(70);
      //   setArticles(parsedData.articles)
      //   setTotalResults(parsedData.totalResults)
      //   setLoading(true)
      //   props.setProgress(100);
           updateNews();
           // eslint-disable-next-line
            },[])
    // previous= async ()=>{
    //   this.setState({
    //     page: this.state.page-1
    //   })
    //   this.updateNews();
    // }
    // next= async ()=>{
    // this.setState({
    //   page: this.state.page+1
    // })
    // this.updateNews();
    // }
      const fetchMoreData= async ()=>{
       setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
    return (
      <div>
      <h1 className='text-center ' style={{margin:'35px 0px',marginTop:'90px'}}> NewsMonkey - Top {props.category}  Headlines </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h1>Loading...</h1>}
        >
      < div className ='container my-3'>
        <div className="row">
            {articles.map((element)=>{ 
              return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })}
        </div>
        </div>
        
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.previous}> &larr; Previous</button>
        <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pagesize)} className='btn btn-primary' onClick={this.next}>Next &rarr; </button>
      </div> */}
      </InfiniteScroll>
      </div>
    )
  }

News.propTypes ={
  pagesize: PropTypes.number,
  category: PropTypes.string
 }

export default News;
