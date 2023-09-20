import { useState } from 'react'
import '../styles/Blog.css'
import posts from './Posts.jsx'
import left_arrow from '../assets/left_arrow.png'
import right_arrow from '../assets/right_arrow.png'

function Blog() {
    const [article, setArticle] = useState(0)

    function handleNext() {
        if (article < posts.length - 1) {
            setArticle(prevArticle => prevArticle + 1)
        } else {
            return
        }
    }

    function handlePrev() {
        if (article > 0) {
            setArticle(prevArticle => prevArticle - 1)
        } else {
            return
        }
    }

    return (
        <>
        <header className='blog-header'>
            <div className="title-controls">
                <h2>{posts[article].title}</h2>
                <div className="controls">
                    <img onClick={handlePrev} className='blog-nav-button' src={left_arrow} alt="Previous article button" />
                    <img onClick={handleNext} className='blog-nav-button' src={right_arrow} alt="Next article button" />
                </div>
            </div>
            <p>{posts[article].date}</p>
        </header>
        <article className='blog-body'>{posts[article].post}</article>

        </>
    )
}

export default Blog