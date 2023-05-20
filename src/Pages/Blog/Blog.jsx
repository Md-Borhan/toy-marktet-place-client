import { Helmet } from "react-helmet";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";

const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kidol | Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <div
        className={`w-full md:w-4/5 lg:w-2/3 xl:1/2 px-3 md:px-0 mx-auto my-7 py-7 Blog `}
      >
        <h2
          className={`text-center text-4xl mb-8 sm:text-5xl lg:text-7xl text-gray-700 tracking-tighter font-bold `}
        >
          Our Blogs
        </h2>
        <div className={``}>
          <div
            className={`mb-5 p-5 shadow-md border rounded-md shadow-blue-200 `}
          >
            <h3
              className={`text-2xl md:text-3xl text-gray-700 font-medium mb-2 `}
            >
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
            <p>
              an access token is used to access protected resources, while a
              refresh token is used to obtain a new access token when the
              current one expires, without requiring the user to reauthenticate.
              Both tokens play a crucial role in maintaining secure and seamless
              authentication and authorization in applications.
              <br />
              You can store tokens in browser storage mechanisms such as
              localStorage or sessionStorage. Another option is to store tokens
              as HTTP-only cookies.
            </p>
          </div>
          <div
            className={`mb-5 p-5 shadow-md border rounded-md shadow-blue-200 `}
          >
            <h3
              className={`text-2xl md:text-3xl text-gray-700 font-medium mb-2 `}
            >
              Compare SQL and NoSQL databases?
            </h3>
            <p>
              <strong>SQL Database:</strong> SQL databases follow a structured,
              tabular data model, where data is organized into tables with
              predefined schemas. SQL databases are vertically scalable, meaning
              they can handle increasing workloads by adding more resources to a
              single server.This databases use the SQL query language for data
              manipulation and retrieval.SQL databases are well-suited for
              applications that require complex querying, strict data
              consistency, and well-defined schemas, such as transactional
              systems, financial applications, and reporting.
              <br />
              <strong>NoSQL Database:</strong> NoSQL databases use various data
              models, such as key-value pairs, document, columnar, or graph.
              They offer flexible schemas that allow for dynamic and
              unstructured data.NoSQL databases are designed to be horizontally
              scalable, allowing them to distribute data across multiple
              servers. This databases use various query languages specific to
              their data models.NoSQL databases are suitable for scenarios with
              large-scale data, high traffic loads, and where flexibility and
              scalability are essential.
            </p>
          </div>
          <div
            className={`mb-5 p-5 shadow-md border rounded-md shadow-blue-200 `}
          >
            <h3
              className={`text-2xl md:text-3xl text-gray-700 font-medium mb-2 `}
            >
              What is express js? What is Nest JS?
            </h3>
            <p>
              <strong>Express JS:</strong> Express is a node js web application
              framework that provides broad features for building web and mobile
              applications.It used build a single page, multi page and hybrid
              web application.It is a layer build on the top of the Node JS that
              helps manage servers and routes.
              <br />
              <strong>Nest JS: </strong>
              NestJS is a powerful, progressive, and TypeScript-based framework
              for building efficient and scalable server-side applications. It
              is built on top of Node.js and utilizes modern JavaScript features
              and design patterns. NestJS combines elements from both
              object-oriented programming (OOP), functional programming (FP),
              and modular architecture to provide a robust and flexible platform
              for developing server-side applications.
            </p>
          </div>
          <div
            className={`mb-5 p-5 shadow-md border rounded-md shadow-blue-200 `}
          >
            <h3
              className={`text-2xl md:text-3xl text-gray-700 font-medium mb-2 `}
            >
              What is MongoDB aggregate and how does it work?
            </h3>
            <p>
              Aggregation is a way of processing a large number of documents in
              a collection by means of passing them through different stages.
              The stages make up what is known as a pipeline. The stages in a
              pipeline can filter, sort, group, reshape and modify documents
              that pass through the pipeline.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
