import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Blog = () => {
    return (
        <div className='space-y-10'>
            <Header></Header>
            <div className='space-y-10'>
                <div className='text-left space-y-5'>
                    <h1>Question: What is an access token and refresh token</h1>
                    <p>Answer: An access token is a short-lived, temporary, and typically time-limited token used for authentication and authorization. A refresh token is a long-lived, persistent token used to obtain new access tokens without requiring the user to reauthenticate. Access tokens are short-lived tokens used for API requests and can be stored in memory on the client-side. Refresh tokens are long-lived tokens used to obtain new access tokens and should be stored securely, typically in HTTP-only cookies on the client-side for added security.</p>
                </div>
                <div className='text-left space-y-5'>
                    <h1>Question: What is express js? What is Nest JS?</h1>
                    <p>Answer: Express.js is a minimal and flexible Node.js web application framework that simplifies building web applications and APIs by providing a set of powerful features and tools for routing, middleware, and handling HTTP requests and responses. Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It's built on top of Express.js and provides a structured, modular, and opinionated approach to building web applications and APIs.</p>
                </div>
                <div className='text-left space-y-5'>
                <h1>Question: Explain your code.</h1>
                <p>Answer: This is job portal website. Here there are some job offers are included. If any one signed up then he/she can see myjobs, addjob, appliedjob and profile picture in the navbar. There is a button on the navbar. If one user is logged in, then the button will be logout button by clicking the button it will logged you out and if user is not log in then it will show login button which will take you to the login page. There is a banner with search and footer with website name and some links. In the home page there is 5 tabs, which will show you the job of their category. By clicking job details button it will take to the details page. By clicking apply button you can apply and the job will stored in applied job page. You can also see details from applied page by clicking details button. In add job page, you can add jobs with some information and you can see it on the myjobs page and there you can update or delete it also. One can not see another's added jobs. In this website there jwt and axios is applied. And There is some other features are also in home page.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;