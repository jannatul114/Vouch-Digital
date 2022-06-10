import React from 'react';
import { toast } from 'react-toastify';

const Homepage = () => {
    const handleUser = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        fetch('https://reqres.in/api/login', {
            type: "POST",
            data: {
                "email": JSON.stringify(name),
                "password": JSON.stringify(email)
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.error(data?.error)
                event.target.reset()
            })
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12'>
                    <div className='d-flex align-items-center h-100'>
                        <div className='w-75 mx-auto mt-5 '>
                            <h1 className='text-center welcome my-4'>Welcome Back</h1>
                            <div>
                                <form onSubmit={handleUser}>
                                    <div class="mb-3">
                                        <input name='email' type="email" class="form-control" placeholder="Eamil*" required />
                                    </div>
                                    <div class="mb-3">
                                        <input name='password' type="password" class="form-control" placeholder="password*" required />
                                    </div>
                                    <div class="mb-3">
                                        <input type="submit" class="form-control submit-btn text-white" placeholder="name@example.com" value={'Submit'} />
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Remember Password
                                            </label>
                                        </div>

                                        <a href='#' className='welcome'>Forget Password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-12 col-12 none'>
                    <div className='d-flex justify-content-center'>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" className='w-100 h-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;