"use client";

import React, { useEffect, useState } from 'react';
import { stringify } from 'yaml';

export default function Page() {


    const specs = [
        [

            {
                name: "Name",
                label: "Your name",
                type: "text"
            },
            {
                name: "Email",
                label: "Your email",
                type: "email"
            },
            {
                name: "Company",
                label: "Company name",
                type: "text",
                optional: true
            },
            {
                name: "Phone",
                label: "Your phone number",
                type: "phone",
                optional: true
            },
        ],
        [

            {
                name: "Role",
                label: "What role are you looking to fill?",
                type: "text",
            },

            {
                name: "type",
                label: "Type of hire",
                type: "select",
                options: [
                    "Full-time",
                    "Freelance or contract",
                    "Co-op or internship",
                ],
            },
            {
                name: "Message",
                type: "textarea",
                optional: true
            },
        ]
    ]

    const [form, setForm] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "message": "",
    })

    useEffect(() => {

        async function animate() {

            const sr = (await import("scrollreveal")).default


            sr().reveal('#sideimage', {
                distance: "50px",
                origin: "top",
                delay: 200,
            });

            sr().reveal('#largelogo', {
                distance: "50px",
                origin: "right",
                delay: 0,
            });

            sr().reveal('#logo', {
                distance: "50px",
                origin: "left",
                delay: 0,
            });


            sr().reveal('#description', {
                distance: "50px",
                delay: 0,
            });


            sr().reveal('#summary', {
                distance: "50px",
                delay: 0,
            });


            sr().reveal('#form', {
                distance: "50px",
                delay: 0,
            });

        }

        animate();

        const randomNumber = Math.floor(Math.random() * imageList.length);

        setImageURL(imageList[randomNumber].url);
        setImageSource(imageList[randomNumber].source);

    }, []);

    const [imageURL, setImageURL] = useState("");
    const [imageSource, setImageSource] = useState("");

    const imageList = [
        {
            url: "https://images.unsplash.com/photo-1716910729414-302a85b5c3ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            source: "https://unsplash.com/photos/a-computer-monitor-sitting-on-top-of-a-wooden-desk-aLq9KNZ4rjo",
        },
        {
            url: "https://images.unsplash.com/photo-1497048679117-1a29644559e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            source: "https://unsplash.com/photos/white-ceramic-bowl-on-table-eHdRLiazcww",
        },
        {
            url: "https://images.unsplash.com/photo-1587355760421-b9de3226a046?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            source: "https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-holding-white-paper-pqzRfBhd9r0",
        }
    ]

    return <>


        <div className='w-50 position-fixed h-100 d-block overflow-hidden load-hidden' id="sideimage" style={{
            right: 0,
            top: 0,
        }}>
            <div className='position-relative w-100 h-100 bg-dark d-flex flex-column justify-content-center align-items-center' style={{
                backgroundImage: "url(" + imageURL + ")",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

                <img src="/logo.svg" id="largelogo" alt="Logo" className='position-absolute load-hidden' style={{
                    height: '50vh',
                    width: 'auto',
                    mixBlendMode: "darken",
                    zIndex: 10,
                    top: 0,
                    right: 0
                }} />

                <a href={imageSource} target="_blank">

                    <i className="bi bi-info-circle position-absolute text-white m-3 " style={{
                        top: 0,
                        right: 0,
                        zIndex: 100
                    }}></i>
                </a>


            </div>
        </div>


        <div className='text-center1'>



            <div className='container-fluid'>

                <div className='row align-items-center'>

                    <div className='col-lg-6 p-xl-5 p-4'>

                        <div className='bg-white load-hidden' id="logo" style={{
                            top: 0,
                            left: 0,
                            zIndex: 1,
                        }}>
                            <h1 className='display-2 m-0 fw-bold lh-1 text-nowrap' style={{
                                // fontSize:"1vw",
                            }}>
                                NextFirstSteps
                                <sup>
                                    <img src="/logo.svg" alt="Logo" className='' style={{
                                        width: '0.5em',
                                        height: 'auto',
                                    }} />
                                </sup>

                            </h1>

                            <h4 className='m-0 mt-1 lh-1 fw-light'>
                                emerging talents +
                                <br className='' />
                                early career opportunities
                                <br className='' />
                                in creative industries
                            </h4>

                        </div>

                        <div className=' mt-lg-5 mt-4 load-hidden' id="description">

                            <h1 className='display-3 fw-bold m-0 lh-1'>
                                Connect with the creative talent of <span className='text-primary'>tomorrow</span>
                                {/* <sup>
                                <img src="/logo.svg" alt="Logo" className='ms-1' style={{
                                    width: '0.5em',
                                    height: 'auto',
                                }} />
                            </sup> */}
                            </h1>
                            <h4 className='lh-sm mt-3 fw-light m-0'>
                                NextFirstSteps connects emerging creative talent with the companies driving the future of digital design and development.
                            </h4>
                            <h4 className='lh-sm mt-2 fw-light m-0'>
                                Partner with the next generation of innovators in <span className='text-primary d-inline-block1 fw-medium'>user experience, web, and creative tech</span> — while elevating your current teams through <span className='text-primary d-inline-block1 fw-medium'>mentorship, collaborative learning, and real-world innovation</span>.
                            </h4>

                        </div>

                        <div className='my-lg-5 my-4 load-hidden' id="summary">

                            <div className='list-unstyled fw-medium m-0 fs-5 lh-sm'>
                                <div className='d-flex align-items-start mb-1'>
                                    <i className='me-2 bi bi-geo-alt'></i> <span>Toronto, Ontario, Canada</span>
                                </div>
                                <div className='d-flex align-items-start mb-1'>
                                    <i className='me-2 bi bi-gear'></i> <span>Recruitment and upskilling support</span>
                                </div>
                                <div className='d-flex align-items-start mb-1'>
                                    <i className='me-2 bi bi-info-circle'></i> <span>Operated by <a target="_blank" href="https://chriskkim.com" className='text-dark'>Chris Kim</a> of <a target="_blank" href="https://goodcodeclub.com" className='text-dark'>GoodCodeClub</a></span>
                                </div>
                                <div className='d-flex align-items-start mb-1'>
                                    <i className='me-2 bi bi-envelope'></i> <span>hello@nextfirststeps.com</span>
                                </div>
                                <div className='d-flex align-items-start mb-0'>
                                    {/* <i className='me-2 bi bi-link'></i>  <a target="_blank" href="https://goodcodeclub.com" className='text-dark'>GoodCodeClub</a> */}
                                </div>
                            </div>

                        </div>

                        <div className='load-hidden' id="form" >


                            <h3 className='m-0 fw-bold mb-2'>
                                Contact Us
                                <sup>
                                    <img src="/logo.svg" alt="Logo" className='ms-1' style={{
                                        width: '0.5em',
                                        height: 'auto',
                                    }} />
                                </sup>
                            </h3>


                            <div className='mb-2'>
                                Need fast, reliable support for your digital project?
                                Try <a target="_blank" href="https://goodcodeclub.com" className='text-dark'>GoodCodeClub</a> instead.
                            </div>

                            <form onSubmit={async (e) => {

                                e.preventDefault();

                                const url = 'https://api.letterform.app/public/pages/create';
                                const options = {
                                    method: 'POST',
                                    headers: { 'content-type': 'application/json' },
                                    body: JSON.stringify({
                                        "title": "Contact form submission: " + new Date().toISOString(),
                                        "content": JSON.stringify(form),
                                        "project_uuid": "9ca3466f-2365-49b9-942f-6e394da3ee0b",
                                        "metadata": stringify(form),
                                    })
                                };

                                try {
                                    const response = await fetch(url, options);
                                    const data = await response.json();
                                    alert("Thank you for your submission. We will review your submission and get back to you as soon as possible.");
                                    window.location.reload();
                                } catch (error) {
                                    console.error(error);
                                }

                            }}>

                                <div className='row'>

                                    {specs.map((list, index) => {

                                        return <div className='col-xl-6' key={index} style={{
                                        }}>

                                            {list.map((spec, index) => {


                                                return <div key={"spec_" + index} className=''>
                                                    <h6 className="m-0 mb-1">
                                                        {spec.label ? spec.label : spec.name}
                                                        {spec.optional &&
                                                            <small className="opacity-50"> (Optional)</small>
                                                        }
                                                    </h6>
                                                    {spec.type == "textarea" &&
                                                        <textarea name={spec.name.toLowerCase()} required={spec.optional ? false : true} className="form-control bg-border border-1 border-black mb-3 text-dark fw-normal" rows={5} onChange={(e) => setForm({
                                                            ...form,
                                                            [spec.name.toLowerCase()]: e.target.value
                                                        })} ></textarea>
                                                    }
                                                    {spec.type == "select" &&
                                                        <>
                                                            <select name={spec.name.toLowerCase()} required={spec.optional ? false : true} className="form-control bg-border border-1 border-black mb-3 text-dark fw-normal" onChange={(e) => setForm({
                                                                ...form,
                                                                [spec.name.toLowerCase()]: e.target.value
                                                            })}>
                                                                <option value="">(Select one)</option>
                                                                {spec.options.map((option, index) => {
                                                                    return <option key={index} value={option}>{option}</option>
                                                                })}
                                                            </select>
                                                        </>
                                                    }
                                                    {spec.type != "textarea" && spec.type != "select" &&
                                                        <input name={spec.name.toLowerCase()} type={spec.type} required={spec.optional ? false : true} className="form-control bg-border border-1 border-black mb-3 text-dark fw-normal" onChange={(e) => setForm({
                                                            ...form,
                                                            [spec.name.toLowerCase()]: e.target.value
                                                        })} />
                                                    }
                                                </div>

                                            })}

                                        </div>

                                    })}
                                </div>


                                <div className="d-flex mt-3">
                                    <button className="btn btn-primary fw-bold text-uppercase border-white ms-auto">
                                        Submit Form
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>



                </div>




            </div>



        </div>
    </>
}