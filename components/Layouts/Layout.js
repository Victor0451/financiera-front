import React from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";

const Layout = (props) => {
    return (
        <div className="">
            <Head>


                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous" />


                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css"
                />

                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                    crossOrigin="anonymous"
                ></link>

                <title>Financiera</title>
            </Head>

            <Navbar />


            <main>{props.children}</main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />

        </div>
    );
};
export default Layout;