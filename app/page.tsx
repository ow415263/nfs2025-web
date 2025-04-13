"use client";

import React, { useState } from 'react';
import { stringify } from 'yaml';

export default function Page() {


    const specs = [
        {
            name: "Name",
            type: "text"
        },
        {
            name: "Email",
            type: "email"
        },
        {
            name: "Phone",
            type: "phone",
            optional: true
        },
        {
            name: "Message",
            type: "textarea"
        },
    ]

    const [form, setForm] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "message": "",
    })


    return <>
        <div className='text-center1'>



            <div className='container-fluid'>

                <div className='row align-items-center'>

                    <div className='col-lg-6 p-5'>

                        <div className='bg-white' style={{
                            top: 0,
                            left: 0,
                            zIndex: 1,
                        }}>
                            <h1 className='display-1 m-0 fw-bold lh-1 text-nowrap' style={{
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

                        <h1 className='display-3 fw-bold m-0 mb-1 lh-1 mt-5'>
                            Connect with the creative talent of <span className='text-primary'>tomorrow</span>
                            {/* <sup>
                                <img src="/logo.svg" alt="Logo" className='ms-1' style={{
                                    width: '0.5em',
                                    height: 'auto',
                                }} />
                            </sup> */}
                        </h1>


                        <h4 className='lh-sm mt-3 fw-light'>
                            NextFirstSteps builds bridges between rising creatives and the companies shaping the future of digital design and development.
                            Partner with the next wave of talent shaping <span className='text-primary d-inline-block1'>user experience, web, and creative technologies</span>.
                        </h4>


                        <div className='mt-5 mb-5'>

                            <ul className='list-unstyled fw-medium m-0 fs-5'>
                                <li>
                                    <i className='bi bi-geo-alt'></i> Toronto, Ontario
                                </li>
                                <li>
                                    <i className='bi bi-gear'></i> Talent discovery and recruitment, skills training, and staffing and direct project support
                                </li>
                                <li>
                                    <i className='bi bi-envelope'></i> hello@nextfirststeps.com
                                </li>
                                <li>
                                    <i className='bi bi-question-circle'></i> Need fast, reliable support for your project?
                                    Try <a target="_blank" href="https://goodcodeclub.com" className='text-dark'>GoodCodeClub</a>.
                                </li>
                            </ul>

                        </div>

                        <h3 className='m-0 fw-bold mb-3'>
                            Contact Us
                            <sup>
                                <img src="/logo.svg" alt="Logo" className='ms-1' style={{
                                    width: '0.5em',
                                    height: 'auto',
                                }} />
                            </sup>
                        </h3>

                        <form onSubmit={async (e) => {

                            e.preventDefault();

                            const url = 'https://api.letterform.app/public/pages/create';
                            const options = {
                                method: 'POST',
                                headers: { 'content-type': 'application/json' },
                                body: JSON.stringify({
                                    "title": "Contact form submission: " + new Date().toISOString(),
                                    "content": JSON.stringify(form),
                                    "project_uuid": "58f7f50b-eac1-4c9f-b7fa-d44b8c37c173",
                                    "metadata": stringify(form),
                                })
                            };

                            try {
                                const response = await fetch(url, options);
                                const data = await response.json();
                                alert("Thank you for your submission!");
                                window.location.reload();
                            } catch (error) {
                                console.error(error);
                            }

                        }}>

                            {/* <pre>
    {JSON.stringify(form)}
</pre> */}

                            <div className='row'>

                                {specs.map((spec, index) => {

                                    return <div className='col-6' key={index}>

                                        <h6 className="m-0 mb-1">
                                            {spec.name}
                                            {spec.optional &&
                                                <small className="opacity-50"> (Optional)</small>
                                            }
                                        </h6>
                                        {spec.type == "textarea" &&
                                            <textarea name={spec.name.toLowerCase()} required={spec.optional ? false : true} className="form-control bg-border border-1 border-black mb-3 text-dark fw-normal" rows={4} onChange={(e) => setForm({
                                                ...form,
                                                [spec.name.toLowerCase()]: e.target.value
                                            })} ></textarea>
                                        }
                                        {spec.type != "textarea" &&
                                            <input name={spec.name.toLowerCase()} type={spec.type} required={spec.optional ? false : true} className="form-control bg-border border-1 border-black mb-3 text-dark fw-normal" onChange={(e) => setForm({
                                                ...form,
                                                [spec.name.toLowerCase()]: e.target.value
                                            })} />
                                        }

                                    </div>

                                })}
                            </div>


                            <div className="d-flex mt-3">
                                <button className="btn btn-primary fw-medium border-white ms-auto">
                                    Submit Form
                                </button>
                            </div>

                        </form>

                    </div>



                </div>




            </div>


            <div className='w-50 position-fixed h-100 d-lg-block d-none overflow-hidden' style={{
                right: 0,
                top: 0
            }}>
                <div className='position-relative w-100 h-100 bg-dark d-flex flex-column justify-content-center align-items-center' style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1716910729414-302a85b5c3ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    backgroundSize: 'cover',
                }}>
                    <img src="/logo.svg" alt="Logo" className='position-absolute' style={{
                        width: '60vw',
                        height: 'auto',
                        mixBlendMode: "darken",
                        zIndex:10,
                        top:0,
                        right:0
                    }} />
                        

                </div>
            </div>


        </div>
    </>
}